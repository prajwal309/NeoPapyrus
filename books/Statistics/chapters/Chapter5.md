# Chapter 5 — Time Series, Period Searches, and Aliases

## 5.1 The observing calendar can create candidate periods

Radial velocities arrive at irregular times. Daylight, weather, and seasons leave gaps. To see how that matters, compare two sinusoids sampled once per day at times \(t=n\) days, with \(n\) an integer. Frequencies of \(0.1\) and \(1.1\) cycles per day produce identical sampled curves at the same phase because their phases differ by \(2\pi n\). A ten-day signal can therefore have a daily **alias** near 0.91 days. Observations at different times of night can help discriminate between the two hypotheses. [VanderPlas (2018)](https://doi.org/10.3847/1538-4365/aab766)

## 5.2 Turn a periodogram peak into a testable hypothesis

A generalized Lomb–Scargle periodogram fits a sine and cosine at each trial frequency, along with a floating offset, and measures the improvement relative to an offset-only model. With unequal uncertainties, the fit weights each measurement by its inverse variance when the errors are independent. A peak gives a candidate period. Compare candidates with astrophysical models that include instrument offsets, [correlated stellar activity](#Chapter4), and a Keplerian orbit when the signal warrants one. For transit searches, a periodic box-shaped dip provides a better starting template than a sinusoid. [VanderPlas (2018)](https://doi.org/10.3847/1538-4365/aab766) · [Exoplanets — Transits and Occultations](#Exoplanets/Chapter3)

### Worked example — Schedule a follow-up

In the daily example, both trial sinusoids predict the same RV at integer-day times. Halfway between those times, the extra cycle per day contributes half a cycle, so the two predicted sinusoids have opposite signs. Schedule a feasible observation where the fitted curves are far apart compared with the measurement uncertainty. If half-day spacing puts the target in daylight, compare predictions for an observation from a different longitude or for times nearer the edges of the observing night.

## 5.3 Estimate the false-alarm rate for the search you ran

A false-alarm probability asks how often a specified noise-only model yields a statistic at least as extreme as the one observed. It depends on the frequencies searched and the noise model. To estimate it by simulation, keep the actual observation times, generate data under a credible null, and repeat the entire period search on each realization. Compare the observed maximum with the simulated maxima. Shuffling individual measurements destroys time correlations, so simulate from a correlated null when activity is plausible. Separately, inject planets to estimate the chance of detecting a real signal at a given period and amplitude. [VanderPlas (2018)](https://doi.org/10.3847/1538-4365/aab766)
