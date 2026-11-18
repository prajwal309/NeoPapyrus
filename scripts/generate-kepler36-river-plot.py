"""Plot Kepler-36 river diagrams from MAST photometry and Carter et al. timings.

Requires NumPy, Matplotlib, Astropy and Beautiful Soup. Pass a directory with
the Kepler-36 Q0–Q11 long-cadence FITS files (KIC 11401755) and save
https://arxiv.org/html/1206.4718v1 as carter.html in that directory.
The input files and exact archive URLs can be listed with --sources.
"""

import argparse
from pathlib import Path
import re

from astropy.io import fits
from bs4 import BeautifulSoup
import matplotlib
import numpy as np

matplotlib.use("Agg")

from matplotlib import pyplot as plt
from matplotlib.colors import LinearSegmentedColormap


MAST = (
    "https://mast.stsci.edu/api/v0.1/Download/file?"
    "uri=mast:Kepler/url/missions/kepler/lightcurves/0114/011401755/"
)
STAMPS = (
    "2009131105131", "2009166043257", "2009259160929", "2009350155506",
    "2010078095331", "2010174085026", "2010265121752", "2010355172524",
    "2011073133259", "2011177032512", "2011271113734", "2012004120508",
)
FILENAMES = [f"kplr011401755-{stamp}_llc.fits" for stamp in STAMPS]
HOUR_EDGES = np.linspace(-12, 12, 49)


def read_photometry(directory):
    times, fluxes = [], []
    for quarter, filename in enumerate(FILENAMES):
        with fits.open(directory / filename) as f:
            header, light_curve = f[0].header, f[1]
            if header["KEPLERID"] != 11401755 or header["QUARTER"] != quarter:
                raise ValueError(f"Unexpected target or quarter in {filename}")
            data = light_curve.data
            time = data["TIME"]
            flux = data["PDCSAP_FLUX"]
            good = np.isfinite(time) & np.isfinite(flux) & (data["SAP_QUALITY"] == 0)
            # Carter et al. supply BJD - 2454900. Convert from the FITS reference.
            ref = light_curve.header["BJDREFI"] + light_curve.header["BJDREFF"]
            times.append(time[good] + (ref - 2454900))
            fluxes.append(flux[good].astype(float) / np.median(flux[good]))
    return np.concatenate(times), np.concatenate(fluxes)


def read_model_times(directory, table_id):
    article = BeautifulSoup((directory / "carter.html").read_text(encoding="utf-8"), "html.parser")
    table = article.find(id=table_id)
    rows = []
    for row in table.find_all("tr"):
        cells = row.find_all("td")
        if len(cells) == 2 and cells[0].get_text(strip=True).isdigit():
            time = re.match(r"\d+\.\d+", cells[1].get_text(strip=True))
            rows.append((int(cells[0].get_text(strip=True)), float(time[0])))
    epoch, time = np.asarray(rows).T
    return epoch.astype(int), time


def river(time, flux, epochs, centers, other_centers):
    other_planet = np.zeros(time.size, dtype=bool)
    for center in other_centers:
        other_planet |= np.abs(time - center) < 0.22
    usable_time, usable_flux = time[~other_planet], flux[~other_planet]
    period, reference = np.polyfit(epochs, centers, 1)
    predicted = reference + period * epochs
    grid = np.full((len(epochs), len(HOUR_EDGES) - 1), np.nan)
    for row, expected in enumerate(predicted):
        hours = (usable_time - expected) * 24
        baseline = (np.abs(hours) > 15) & (np.abs(hours) < 36)
        if np.count_nonzero(baseline) < 10:
            continue
        normalize = np.median(usable_flux[baseline])
        for index, (start, stop) in enumerate(zip(HOUR_EDGES, HOUR_EDGES[1:])):
            selected = (hours >= start) & (hours < stop)
            if np.any(selected):
                grid[row, index] = 1e6 * (np.mean(usable_flux[selected]) / normalize - 1)
    return grid, 24 * (centers - predicted)


def plot(directory, output):
    time, flux = read_photometry(directory)
    b = read_model_times(directory, "S2.T4")
    c = read_model_times(directory, "S2.T5")
    colors = LinearSegmentedColormap.from_list(
        "river", ["#174a70", "#71b8c0", "#fff7df"],
    )
    colors.set_bad("#e7e9ec")
    figure, axes = plt.subplots(1, 2, figsize=(8, 5.7), layout="constrained")
    for axis, name, target, other in zip(axes, ["b", "c"], [b, c], [c, b]):
        epochs, centers = target
        rows, offsets = river(time, flux, epochs, centers, other[1])
        vmin, vmax = np.nanpercentile(rows, [4, 92])
        all_epochs = np.arange(epochs[0], epochs[-1] + 1)
        grid = np.full((len(all_epochs), rows.shape[1]), np.nan)
        grid[epochs - epochs[0]] = rows
        chart = axis.pcolormesh(
            HOUR_EDGES, np.r_[all_epochs, all_epochs[-1] + 1] - 0.5,
            grid, cmap=colors, vmin=vmin, vmax=vmax,
        )
        axis.axvline(0, color="#55616b", linewidth=0.9, linestyle="--", alpha=0.75)
        axis.scatter(offsets, epochs, s=10, marker="+", color="#9c4221",
                     linewidths=0.7, label="Model mid-transit")
        axis.set_title(f"Kepler-36 {name}", loc="left", fontweight="bold")
        axis.set(xlabel="Hours from constant-period prediction", ylabel="Transit number")
        axis.set_xticks([-12, -6, 0, 6, 12])
        axis.legend(loc="upper left", fontsize=8, framealpha=0.9)
        figure.colorbar(chart, ax=axis, label="Relative flux (ppm)", shrink=0.65)
        print(f"{name}: {len(epochs)} transit rows, {np.isfinite(rows).sum()} observed bins")
    figure.savefig(output, dpi=180)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory", nargs="?", type=Path)
    parser.add_argument("--sources", action="store_true")
    args = parser.parse_args()
    if args.sources:
        print("https://arxiv.org/html/1206.4718v1")
        print(*(MAST + filename for filename in FILENAMES), sep="\n")
    elif args.directory is None:
        parser.error("Supply a directory containing the photometry and timing table.")
    else:
        root = Path(__file__).resolve().parents[1]
        plot(args.directory, root / "books/Exoplanets/chapters/figures/kepler36-river-plot.png")
