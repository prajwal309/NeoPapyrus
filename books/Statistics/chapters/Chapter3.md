# Chapter 3 — Likelihood and Uncertainty

## 3.1 Which proposed signal explains the measurements?

Suppose two transit visits give different estimates of the same transit depth. One visit has lower noise. If both instruments share a reliable calibration and the depth is stable, the more precise visit should carry more weight. A **likelihood** is the probability density or probability mass of the observed data under a proposed model, viewed as a function of the model parameters. It ranks how well different parameter values predict the measurements under a stated noise model.

For independent Gaussian measurements $y_i$ with standard deviations $\sigma_i$ and model predictions $m_i(\boldsymbol\theta)$,

$$
\ln \mathcal L(\boldsymbol\theta)
=-\frac12\sum_i
\left[
\frac{[y_i-m_i(\boldsymbol\theta)]^2}{\sigma_i^2}
+\ln(2\pi\sigma_i^2)
\right].
$$

When the uncertainties are fixed, maximizing this likelihood is equivalent to minimizing the weighted sum of squared residuals. If the noise parameters are fitted too, keep the logarithmic normalization. Otherwise increasing the assumed noise would always reduce the weighted residual term. [Numerical Methods: Least Squares](#NumericalMethods/Chapter3)

## 3.2 Worked likelihood: combine two visits

Take two synthetic measurements of the same depth: $400\pm100$ ppm and $600\pm200$ ppm. Under the independent Gaussian model, the maximum-likelihood depth is the inverse-variance weighted mean:

$$
\widehat{\delta}
=\frac{\sum_i y_i/\sigma_i^2}{\sum_i 1/\sigma_i^2},
\qquad
\sigma_{\widehat{\delta}}
=\left(\sum_i 1/\sigma_i^2\right)^{-1/2}.
$$

The first visit has four times the weight of the second. The result is **440 ± 89 ppm**, compared with the unweighted mean of 500 ppm. This calculation assumes both visits measure the same depth and all relevant noise is captured by the quoted uncertainties. A shared stellar or calibration error does not average away like independent noise.

**Check your reasoning.** If both visits also share a 60 ppm Gaussian zero-point uncertainty, independent of the individual errors, add that common variance after taking the weighted mean. The central estimate remains 440 ppm and the uncertainty becomes $\sqrt{89.4^2+60^2}\approx108$ ppm. Collecting more visits with the same offset cannot shrink that contribution.

## 3.3 Add a prior to obtain a posterior

A **prior** describes which parameter values are plausible before including these particular data. A **posterior** combines it with the likelihood:

$$
p(\boldsymbol\theta\mid y)
=\frac{p(y\mid\boldsymbol\theta)\,p(\boldsymbol\theta)}{p(y)}.
$$

For instance, a transit ephemeris measured from an independent photometric dataset can inform the period and phase of an RV fit. For a low-amplitude candidate, the eccentricity prior can substantially change the mass uncertainty. Uniformity is parameterization-dependent: a prior that is uniform in period gives different weight across orbits than a prior that is uniform in log period. Specify the parameter and range. If the data used to construct the prior are also part of the fit, include those observations only once.

A **credible interval** summarizes posterior probability within a stated range for the parameter, conditional on the data and model assumptions. A wide or asymmetric posterior is often more informative than a symmetric error bar around one maximum. For a weak signal, provide an upper limit or describe the full uncertainty rather than retaining only apparently precise estimates. Cuts on mass significance can bias population analyses. [Fulton et al. (2018)](https://doi.org/10.1088/1538-3873/aaaaa8) · [Burt et al. (2018)](https://doi.org/10.3847/1538-3881/aae697)

<div data-level="301">

### When the measurements have correlated noise

Let $\mathbf r$ be the residual vector and $C$ the covariance matrix. The log likelihood is

$$
\ln\mathcal L=-\frac12
\left[\mathbf r^\mathsf{T}C^{-1}\mathbf r+\ln\det C+N\ln(2\pi)\right],
$$

where $N$ is the number of measurements. An off-diagonal term represents two residuals that tend to move together. Stellar activity can correlate RVs taken near each other in time, and shared instrumental calibration can correlate spectral bins. Evaluate the quadratic form and determinant using a matrix factorization rather than explicitly forming the inverse. Test plausible covariance models and compare how inference changes. Gaussian processes encode possible covariance structures, but an overly flexible activity model can absorb a real planet signal. Withheld observations and injected-signal tests help diagnose that failure. [Rajpaul et al. (2015)](https://doi.org/10.1093/mnras/stv1428) · [Blunt et al. (2023)](https://doi.org/10.3847/1538-3881/acde78) · [Radial Velocity: Stellar Activity](#Exoplanets/Chapter5)

</div>

## 3.4 Compare explanations and check predictions

Finding the best fit within a planet model answers a different question from deciding whether the data favor a planet over stellar activity. Compare credible alternatives using the same measurements and units. In a Bayesian comparison, **evidence** is the likelihood integrated over the parameter prior. Its value therefore depends on the prior range as well as the quality of the fit. A **posterior predictive check** simulates data from plausible fitted parameters at the observed cadence and asks whether those simulations resemble the measured residual structure, scatter, or transit shape. Observations held out of the fit offer a separate test of predictive performance. [Espinoza, Kossakowski & Brahm (2019)](https://doi.org/10.1093/mnras/stz2688) · [Blunt et al. (2023)](https://doi.org/10.3847/1538-3881/acde78)

When reporting a result, state which observations set the constraint, which assumptions control the uncertainty, and which plausible alternatives remain. This is especially important when evidence for a molecule in a spectrum is used to make a stronger claim about its source. [Exoplanets: Biosignatures](#Exoplanets/Chapter6)

Continue with [Gaussian Processes](#Chapter4) to model correlated residuals, then see [Time Series and Aliases](#Chapter5), [Posterior Sampling and Model Checks](#Chapter6), and [Hierarchical Models and Planet Occurrence](#Chapter7).
