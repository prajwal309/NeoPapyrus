# Chapter 6 — Posterior Sampling and Model Checks

## 6.1 Read a posterior as a set of plausible systems

A transit fit can trade a larger planet crossing a dimmer part of the star against a smaller planet crossing a brighter part. Marginal intervals summarize each parameter separately. A joint plot of radius ratio and impact parameter reveals which combinations the data allow. To propagate uncertainty, compute the planet radius for each joint posterior draw using \(R_p=(R_p/R_\star)R_\star\). Draw the stellar radius from its external distribution if the analysis treats it as independent. Preserve correlations if stellar properties enter the transit fit. [Espinoza, Kossakowski & Brahm (2019)](https://doi.org/10.1093/mnras/stz2688)

## 6.2 Diagnose the computation

Markov chain Monte Carlo produces draws that can be correlated from one iteration to the next. Start multiple chains from dispersed plausible values. Inspect whether they explore the same ranges. Rank-normalized split \(\widehat R\) near 1 checks agreement across and within chains. Bulk effective sample size helps assess central summaries, and tail effective sample size helps assess interval endpoints. Inspect difficult quantities such as eccentricity and planet mass as well as nuisance parameters. If Hamiltonian Monte Carlo shows divergences, diagnose the posterior geometry and check the results after reparameterization. [Vehtari et al. (2021)](https://arxiv.org/abs/1903.08008)

## 6.3 Ask whether the model could reproduce the observations

For each of several posterior draws, simulate a new light curve at the actual observation times, including measurement noise. Compare a statistic that matters physically, such as the depth difference between repeat transits or the size of the longest run of same-sign residuals. If the model systematically generates shorter residual runs than observed, its covariance model may be too simple. To check predictions on new data, hold out an entire visit, fit the remaining visits, and compare the predicted transit with that withheld visit.

**Worked example.** Two visits give transit depths that disagree. Simulate repeat visits under a common-depth model with each visit’s real cadence and reported noise. If the observed difference is unusually large, investigate visit-dependent systematics or stellar variability before combining visits into one very precise depth.

<div data-level="301">

### Validate an inference implementation with simulated systems

Draw parameters from the prior, simulate data from the likelihood, then refit each dataset. Rank each simulated true parameter among its posterior draws. With calibrated inference under the simulation model, exact independent posterior draws give uniformly distributed ranks. A pattern across repetitions can reveal an implementation or sampling problem. Since the test generates data from the assumed model, apply separate predictive checks to assess whether the model describes real observations. [Talts et al. (2018)](https://arxiv.org/abs/1804.06788)

</div>
