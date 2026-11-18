"""Regenerate the Chapter 4 schematic with NumPy and Matplotlib."""

from pathlib import Path

import matplotlib
import numpy as np

matplotlib.use("Agg")

import matplotlib.pyplot as plt


wavelength = np.linspace(1, 3, 600)
# Arbitrary band shapes. These are not molecular cross sections.
gas_opacity = (
    1
    + 24 * np.exp(-0.5 * ((wavelength - 1.4) / 0.095) ** 2)
    + 12 * np.exp(-0.5 * ((wavelength - 2.45) / 0.16) ** 2)
)


def height(pressure, mixing_ratio, continuum):
    """Effective height in scale heights for an optically thick reference."""
    tau_reference = 100_000 * pressure * (mixing_ratio * gas_opacity + continuum)
    return 0.5772156649 + np.log(tau_reference)


plt.rcParams.update({
    "font.size": 12,
    "svg.fonttype": "none",
    "text.color": "#172b38",
    "axes.labelcolor": "#172b38",
    "axes.edgecolor": "#84939d",
    "xtick.color": "#324956",
    "ytick.color": "#324956",
})
figure, axes = plt.subplots(2, 1, sharex=True, sharey=True, figsize=(6, 5.1))
for axis, continuum, title in zip(
    axes,
    (0, 0.001),
    ("A. One absorber", "B. Same absorber plus a known continuum"),
):
    axis.plot(wavelength, height(1, 0.001, continuum), color="#107363",
              linewidth=3, label="Model A")
    axis.plot(wavelength, height(10, 0.0001, continuum), color="#7c3ab2",
              linewidth=1.8, linestyle="--", label="Model B")
    axis.set_title(title, loc="left", fontsize=12, fontweight="bold")
    axis.set_ylim(4.5, 9.1)
    axis.set_yticks([5, 6, 7, 8, 9])
    axis.grid(axis="y", color="#e1e8ee")
    axis.spines[["top", "right"]].set_visible(False)
    axis.legend(loc="upper right", frameon=False, fontsize=10, ncols=2)

figure.supylabel("Effective altitude (scale heights)", x=0.025)
axes[-1].set_xlabel("Wavelength (µm, schematic bands)")
figure.tight_layout(pad=1.1)
output = (
    Path(__file__).resolve().parents[1]
    / "books/Exoplanets/chapters/figures/transmission-normalization.svg"
)
figure.savefig(output, metadata={"Date": None})
