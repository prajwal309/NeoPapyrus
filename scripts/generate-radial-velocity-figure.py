"""Generate Chapter 5's synthetic RV diagnostic figure with NumPy and Matplotlib."""

from pathlib import Path

import matplotlib
import numpy as np

matplotlib.use("Agg")

import matplotlib.pyplot as plt


PERIOD = 8.0
BACKEND_NAMES = ("Instrument A", "Instrument B")
COLORS = ("#176a60", "#7b43a2")
MARKERS = ("o", "s")


def design_matrix(times, instrument):
    phase = 2 * np.pi * times / PERIOD
    return np.column_stack([
        np.sin(phase), np.cos(phase), instrument == 0, instrument == 1,
    ])


rng = np.random.default_rng(51)
times_by_instrument = (
    [0.6, 1.8, 3.0, 4.0, 7.2, 9.7, 10.9, 14.3, 16.8, 19.1, 20.7, 25.8, 28.1],
    [1.0, 2.6, 5.4, 6.4, 8.8, 12.5, 14.8, 17.3, 22.0, 24.7, 27.0],
)
times = np.concatenate(times_by_instrument)
instrument = np.repeat(np.arange(len(times_by_instrument)), [len(t) for t in times_by_instrument])
uncertainty = np.where(instrument == 0, 0.85, 1.35)
design = design_matrix(times, instrument)
velocity = design @ [4.6, -1.9, 2.6, -3.2] + rng.normal(0, uncertainty)

# Fit a circular orbit at a fixed period, with one zero point per instrument.
parameters, *_ = np.linalg.lstsq(
    design / uncertainty[:, None], velocity / uncertainty, rcond=None
)
offset = parameters[2:][instrument]
residual = velocity - design @ parameters
dense_times = np.linspace(0, 29, 700)
phase_grid = np.linspace(0, 1, 200)

plt.rcParams.update({
    "font.size": 11,
    "svg.fonttype": "none",
    "svg.hashsalt": "neopapyrus-radial-velocity",
    "text.color": "#172b38",
    "axes.labelcolor": "#172b38",
    "axes.edgecolor": "#84939d",
    "xtick.color": "#324956",
    "ytick.color": "#324956",
})
figure, (time_plot, phase_plot, residual_plot) = plt.subplots(
    3, 1, figsize=(6.2, 7.2), layout="constrained"
)

for instrument_id, (name, color, marker) in enumerate(zip(BACKEND_NAMES, COLORS, MARKERS)):
    selected = instrument == instrument_id
    for axis, x, y in (
        (time_plot, times, velocity),
        (phase_plot, (times % PERIOD) / PERIOD, velocity - offset),
        (residual_plot, times, residual),
    ):
        axis.errorbar(
            x[selected], y[selected], yerr=uncertainty[selected],
            fmt=marker, markersize=4, capsize=2, elinewidth=1,
            color=color, label=name, zorder=3,
        )
    curve = design_matrix(dense_times, np.full(dense_times.size, instrument_id)) @ parameters
    time_plot.plot(dense_times, curve, color=color, alpha=0.72, linewidth=1.25)

phase_curve = design_matrix(phase_grid * PERIOD, np.zeros(phase_grid.size)) @ parameters
phase_plot.plot(phase_grid, phase_curve - parameters[2], color="#20334b", linewidth=1.5)
residual_plot.axhline(0, color="#536a79", linewidth=1.25, linestyle="--")
time_plot.legend(loc="upper right", ncols=2, frameon=True, fontsize=9)

for axis, title, xlabel, ylabel in (
    (time_plot, "A. Measurements in time", "Time (days)", "Relative RV (m/s)"),
    (phase_plot, "B. One orbit after zero-point correction", "Orbital phase", "Corrected RV (m/s)"),
    (residual_plot, "C. Residuals after subtracting the model", "Time (days)", "Residual (m/s)"),
):
    axis.set_title(title, loc="left", fontsize=12, fontweight="bold")
    axis.set_xlabel(xlabel)
    axis.set_ylabel(ylabel)
    axis.grid(axis="y", color="#e1e8ee")
    axis.spines[["top", "right"]].set_visible(False)

time_plot.set_ylim(-10, 12)
output = (
    Path(__file__).resolve().parents[1]
    / "books/Exoplanets/chapters/figures/radial-velocity-fit.svg"
)
figure.savefig(output, metadata={"Date": None})
