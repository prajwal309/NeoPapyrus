"""Regenerate the figures in the Exoplanets orbital dynamics chapter."""

from pathlib import Path

import matplotlib

matplotlib.use("Agg")

import matplotlib.pyplot as plt
import numpy as np


figures = Path(__file__).resolve().parents[1] / "books/Exoplanets/chapters/figures"
teal, violet = "#176a60", "#653faa"
plt.rcParams.update({
    "font.size": 11,
    "text.color": "#172b38",
    "axes.labelcolor": "#172b38",
    "axes.edgecolor": "#84939d",
    "xtick.color": "#324956",
    "ytick.color": "#324956",
})


def pendulum(initial_angle, initial_rate, step=0.01, count=1900):
    """Integrate phi'' = -sin(phi) with a kick-drift-kick update."""
    angle = np.empty(count + 1)
    angle[0] = initial_angle
    rate = initial_rate
    for i in range(count):
        rate -= 0.5 * step * np.sin(angle[i])
        angle[i + 1] = angle[i] + step * rate
        rate -= 0.5 * step * np.sin(angle[i + 1])
    return np.arange(count + 1) * step, angle


figure, axes = plt.subplots(2, 1, sharex=True, figsize=(7.2, 5.0), layout="constrained")
for axis, title, initial_rate, color, ticks in zip(
    axes,
    ("A. Libration: the angle oscillates around zero", "B. Circulation: the angle advances through full turns"),
    (0.0, 2.2),
    (teal, violet),
    ([-0.25, 0, 0.25], [0, 2, 4, 6]),
):
    time, angle = pendulum(1.35, initial_rate)
    axis.plot(time, angle / (2 * np.pi), color=color, linewidth=2.3)
    axis.set_title(title, loc="left", fontsize=12, fontweight="bold")
    axis.set_ylabel("Angle (turns)")
    axis.set_yticks(ticks)
    axis.grid(axis="y", color="#dbe5e9")
    axis.spines[["top", "right"]].set_visible(False)
axes[-1].set_xlabel("Dimensionless time")
figure.savefig(figures / "resonant-angle-motion.png", dpi=180)
plt.close(figure)

# Rivera et al. (2010), Table 3, osculating orbital periods in days.
periods = np.array([30.0881, 61.1166, 124.26])
multiples = periods[0] * np.array([1, 2, 4])
rows = np.arange(3)
relative_offsets = 100 * (periods / multiples - 1)

figure, axis = plt.subplots(figsize=(7.2, 3.05), layout="constrained")
axis.hlines(rows, 0, periods, color="#dbe5e9", linewidth=2)
axis.scatter(periods, rows, s=60, color=teal, label="Published fit", zorder=3)
axis.scatter(multiples, rows + 0.17, s=54, facecolor="white", edgecolor="#526579",
             linewidth=1.3, label="Exact 1:2:4 sequence", zorder=3)
for index, (row, period, offset) in enumerate(zip(rows, periods, relative_offsets)):
    label = f"{period:.2f} d" if index == 0 else f"{period:.2f} d (+{offset:.1f}%)"
    axis.annotate(label, (period, row), xytext=(8, 0), textcoords="offset points",
                  va="center", color=teal, fontweight="bold")
axis.set_title("GJ 876’s outer three planets", loc="left", fontsize=13, fontweight="bold")
axis.set_yticks(rows, ["Planet c", "Planet b", "Planet e"])
axis.set(xlim=(0, 170), ylim=(2.55, -0.55), xlabel="Orbital period (days)")
axis.legend(loc="upper right", frameon=False, fontsize=9)
axis.spines[["top", "right", "left"]].set_visible(False)
axis.tick_params(axis="y", length=0)
figure.savefig(figures / "gj876-periods.png", dpi=180)
plt.close(figure)

eccentricity = 0.6
phase = np.linspace(0, 2 * np.pi, 400)
figure, axis = plt.subplots(figsize=(7.2, 3.7), layout="constrained")
axis.plot(np.cos(phase), np.sqrt(1 - eccentricity**2) * np.sin(phase),
          color=teal, linewidth=2.3)
axis.axhline(0, xmin=0.12, xmax=0.88, color="#9baeb8", lw=1, linestyle="--")
axis.scatter([-1, 1], [0, 0], color=teal, s=25, zorder=3)
axis.scatter([-eccentricity, eccentricity], [0, 0], s=[95, 20],
             color=["#d47b22", "#718593"], zorder=4)
for x, label, y in (
    (-1, "Periastron", -0.2),
    (-eccentricity, "Star at one focus", 0.23),
    (eccentricity, "Other focus", 0.23),
    (1, "Apastron", -0.2),
):
    label_x = x * 1.3 if abs(x) == 1 else x
    axis.annotate(label, (x, 0), xytext=(label_x, y), ha="center",
                  va="bottom" if y > 0 else "top",
                  arrowprops={"arrowstyle": "-", "color": "#718593"})
axis.set(xlim=(-1.60, 1.60), ylim=(-0.94, 0.94), aspect="equal")
axis.axis("off")
figure.savefig(figures / "elliptical-orbit.png", dpi=180)
