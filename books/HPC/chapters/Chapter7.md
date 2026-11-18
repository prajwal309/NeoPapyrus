# Chapter 7 — Practical Lab: A Parallel Exoplanet Period Search

## 7.1 Define the workload and a known answer

Can a grid search recover a planet’s period from synthetic radial velocities? This lab injects a 5 m/s sine wave with a 3.2-day period, using a fixed phase and no noise. We evaluate 41 periods between 2 and 6 days. For each one, the worker solves for the amplitude that minimizes the sum of squared residuals. Fixing the phase and zero point makes the recovery test easy to verify. Real observations need a more general fit and checks for aliases, instrumental offsets, and stellar activity. [Statistics — Time Series, Period Searches, and Aliases](#Statistics/Chapter5)

Save this as `period_grid.py`. It takes a zero-based task index, the total number of tasks, and an output directory. Each task gets every nth element of the grid, starting at its own index.

~~~python
import argparse
import csv
import math
from pathlib import Path


def score(period, times, velocities):
    model = [math.sin(math.tau * time / period) for time in times]
    amplitude = sum(y * x for y, x in zip(velocities, model)) / sum(x*x for x in model)
    rss = sum((y - amplitude * x)**2 for y, x in zip(velocities, model))
    return amplitude, rss


def main():
    parser = argparse.ArgumentParser(description="Fit one chunk of a synthetic RV grid")
    parser.add_argument("index", type=int)
    parser.add_argument("count", type=int)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    if not 0 <= args.index < args.count <= 41:
        parser.error("Require 0 <= index < count <= 41")

    times = [0.6 * i + 0.2 * (i % 3) for i in range(24)]
    velocities = [5 * math.sin(math.tau * time / 3.2) for time in times]
    periods = [tick / 10 for tick in range(20, 61)]
    args.output.mkdir(parents=True, exist_ok=True)
    destination = args.output / f"part-{args.index}.csv"
    temporary = destination.with_suffix(".tmp")
    with temporary.open("w", newline="") as file:
        writer = csv.writer(file)
        writer.writerow(["period_days", "amplitude_m_s", "rss_m2_s2"])
        for period in periods[args.index::args.count]:
            writer.writerow([period, *score(period, times, velocities)])
    temporary.replace(destination)


if __name__ == "__main__":
    main()
~~~

## 7.2 Run locally, then submit to SuperCloud

You can test the full grid on a laptop with `python3 period_grid.py 0 1 results/local`. For the cluster run, upload the script to your project, then submit the [four-task job array](#Chapter4) from that directory. Check the logs and wait for the array to finish before reading its shards.

Save this reducer as `best_period.py`. It checks that every period was evaluated exactly once before reporting a result.

~~~python
import csv
import sys
from pathlib import Path


rows = []
for path in Path(sys.argv[1]).glob("part-*.csv"):
    with path.open(newline="") as file:
        rows.extend(csv.DictReader(file))
periods = sorted(float(row["period_days"]) for row in rows)
if periods != [tick / 10 for tick in range(20, 61)]:
    raise SystemExit("Expected one result for each of the 41 grid periods")
best = min(rows, key=lambda row: float(row["rss_m2_s2"]))
period = float(best["period_days"])
amplitude = float(best["amplitude_m_s"])
print(f"Best period: {period:.1f} days, amplitude: {amplitude:.1f} m/s")
~~~

Run `python3 best_period.py results/local` or run it on the array’s `results/JOBID` directory. Both should report **3.2 days and 5.0 m/s**.

## 7.3 Grow the exercise into a research batch

Try adding seeded measurement noise, allowing orbital phase to vary, or changing the cadence to create a period alias. For a larger injection–recovery run, assign stable case IDs and derive the random seeds from those IDs so that changing the number of tasks gives the same synthetic data. Test a small grid before increasing the workload, record the environment and inputs, and preserve the per-task logs. For a more realistic activity model, continue with [Gaussian Processes](#Statistics/Chapter4).
