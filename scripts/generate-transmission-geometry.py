"""Draw an illustrative transmission spectrum for Chapter 4."""

from pathlib import Path

import matplotlib

matplotlib.use("Agg")

import matplotlib.pyplot as plt
import numpy as np


ink = "#172b38"
teal = "#176a60"
violet = "#653faa"
figure, axis = plt.subplots(figsize=(8.4, 4.7), layout="constrained")
wavelength = np.linspace(0.4, 1.8, 500)
band_center = 1.08
band_width = 0.13
band_height = 260
spectrum = band_height * np.exp(-0.5 * ((wavelength - band_center) / band_width) ** 2)

bin_wavelength = np.linspace(0.45, 1.75, 15)
bin_model = band_height * np.exp(-0.5 * ((bin_wavelength - band_center) / band_width) ** 2)
illustrative_offsets = np.array([8, -12, 14, -5, 11, -15, 17, -8, 6, -11, 12, -6, 9, -10, 4])
bin_depth = bin_model + illustrative_offsets
bin_uncertainty = np.full_like(bin_wavelength, 32.0)

axis.axvspan(0.88, 1.28, color=violet, alpha=0.08, label="Absorption band")
axis.axhline(0, color=teal, linewidth=1.8, label="Nearby-wavelength reference")
axis.plot(wavelength, spectrum, color=violet, linewidth=2.8, label="Illustrative spectrum")
axis.errorbar(bin_wavelength, bin_depth, yerr=bin_uncertainty, fmt="o", markersize=4.5,
              color=ink, ecolor=ink, elinewidth=1.1, capsize=2.5,
              label="Synthetic spectral bins", zorder=3)
axis.annotate("Greater opacity raises the\neffective transit radius",
              xy=(band_center, band_height), xytext=(1.34, 190),
              color=violet, fontsize=10, ha="left",
              arrowprops={"arrowstyle": "->", "color": violet, "lw": 1.2})
axis.text(0.99, -72, "Synthetic example, not observed data", color=ink, fontsize=9)
axis.set(
    xlabel="Wavelength (µm)",
    ylabel="Transit-depth change from reference (ppm)",
    xlim=(0.4, 1.8),
    ylim=(-90, 370),
    title="An absorption band makes the planet appear larger",
)
axis.grid(axis="y", color="#d7e3e1", linewidth=0.8)
axis.spines[["top", "right"]].set_visible(False)
axis.spines[["left", "bottom"]].set_color("#9aabaa")
axis.tick_params(colors=ink)
axis.xaxis.label.set_color(ink)
axis.yaxis.label.set_color(ink)
axis.title.set_color(ink)
axis.legend(frameon=False, loc="upper left", fontsize=9)

figures = Path(__file__).resolve().parents[1] / "books/Exoplanets/chapters/figures"
figure.savefig(figures / "transmission-spectrum-schematic.png", dpi=180)
