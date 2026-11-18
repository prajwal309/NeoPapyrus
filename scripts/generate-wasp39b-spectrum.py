"""Plot the published WASP-39 b transit depths with NumPy and Matplotlib."""

from pathlib import Path

import matplotlib

matplotlib.use("Agg")

import matplotlib.pyplot as plt
import numpy as np
from matplotlib.ticker import StrMethodFormatter


figures = Path(__file__).resolve().parents[1] / "books/Exoplanets/chapters/figures"
wavelength, depth, uncertainty = np.loadtxt(
    figures / "wasp39b-nirspec-prism.csv", delimiter=",", skiprows=4, unpack=True
)
figure, axis = plt.subplots(figsize=(7.2, 4.1), layout="constrained")
axis.set_title("WASP-39 b · JWST/NIRSpec PRISM", loc="left", fontsize=14, fontweight="bold")
axis.axvspan(4.2, 4.5, color="#e9e0f4", zorder=0)
axis.errorbar(
    wavelength, depth, yerr=uncertainty, fmt="o", color="#176a60",
    ecolor="#4c7d78", markersize=4, elinewidth=1, capsize=2, zorder=3,
)
axis.annotate(
    "CO₂ band", xy=(4.325978, 22824.49), xytext=(3.53, 23000),
    color="#603896", fontsize=11,
    arrowprops={"arrowstyle": "->", "color": "#603896"},
)
axis.set(xlim=(0.42, 5.38), ylim=(20400, 23200),
         xlabel="Wavelength (µm)", ylabel="Transit depth (ppm)")
axis.yaxis.set_major_formatter(StrMethodFormatter("{x:,.0f}"))
axis.grid(axis="y", color="#dee7ec")
axis.spines[["top", "right"]].set_visible(False)
figure.savefig(figures / "wasp39b-nirspec-prism.png", dpi=180)
