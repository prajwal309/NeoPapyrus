"""Draw Chapter 4's transmission geometry illustration."""

from pathlib import Path

import matplotlib

matplotlib.use("Agg")

import matplotlib.pyplot as plt
from matplotlib.patches import Circle


ink = "#172b38"
teal = "#176a60"
violet = "#653faa"
gold = "#a75814"

figure, geometry = plt.subplots(figsize=(7.2, 2.8), layout="constrained")
geometry.set_title("Starlight skims the planet’s atmosphere", loc="left",
                   fontsize=14, fontweight="bold", color=ink)
geometry.set(xlim=(-2.9, 3.25), ylim=(-1.05, 1.25), aspect="equal")
geometry.axis("off")
geometry.add_patch(Circle((0, 0), 0.82, facecolor="#e2f4f1", edgecolor=teal, lw=1.5))
geometry.add_patch(Circle((0, 0), 0.46, facecolor="#263944", edgecolor="none", zorder=4))
geometry.text(0, 0, "Opaque\ndisk", ha="center", va="center", color="white", fontsize=10, zorder=5)
geometry.text(0, 0.94, "Atmosphere", color=teal, ha="center", fontsize=10)
geometry.text(-2.72, 0.97, "From star", ha="left", color=ink, fontweight="bold")
geometry.text(2.16, 0.97, "To observer", ha="left", color=ink, fontweight="bold")


def ray(start, end, height, color, alpha=1):
    geometry.annotate(
        "", xy=(end, height), xytext=(start, height),
        arrowprops={"arrowstyle": "->", "color": color, "lw": 2.2, "alpha": alpha,
                    "shrinkA": 0, "shrinkB": 0},
    )


ray(-2.7, 2.87, 0.62, teal)
ray(-2.7, -0.46, 0, gold)
ray(-2.7, 0, -0.62, violet)
ray(0, 2.87, -0.62, violet, alpha=0.35)
geometry.text(1.0, 0.34, "Nearby wavelength\nMore light gets through", color=teal, fontsize=10)
geometry.text(1.0, -0.46, "Absorption band\nLess light gets through", color=violet, fontsize=10)
geometry.text(-2.7, -0.21, "Disk blocks this ray", color=gold, fontsize=10)

figures = Path(__file__).resolve().parents[1] / "books/Exoplanets/chapters/figures"
figure.savefig(figures / "transmission-geometry.png", dpi=180)
