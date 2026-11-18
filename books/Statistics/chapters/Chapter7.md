# Chapter 7 — Hierarchical Models and Planet Occurrence

## 7.1 Combine uncertain planets without treating estimates as exact

A hierarchical model lets each planet have its own properties while linking those properties to a population. For example, each planet has an eccentricity, and the population has a distribution of eccentricities. A weakly measured orbit borrows information from the ensemble, while a precisely measured orbit remains largely constrained by its own data. The width of the population distribution determines how strongly this partial pooling operates. To infer the properties of all planets from a detected sample, the model must also account for why some systems entered the catalog and others did not. [Foreman-Mackey, Hogg & Morton (2014)](https://arxiv.org/abs/1406.3020)

## 7.2 Connect occurrence to completeness

Suppose we search 1,000 stars for planets in a defined radius and period bin. Assume a Poisson occurrence rate of \(\eta\) planets per star in that bin. A planet has a 5% chance of geometrically transiting and a 40% chance of being detected conditional on transiting. The expected number of detections is \(1000\times0.05\times0.40\times\eta=20\eta\). With six secure detections, the simple maximum-likelihood estimate is 0.30 planets per star, with appreciable counting uncertainty. This estimate assumes common probabilities within the bin and negligible measurement error and false positives. [Statistics — Selection and Completeness](#Chapter1)

In practice the probabilities depend on the target, period, radius, and other properties. Injection and recovery experiments estimate detection probability conditional on the geometry and signal included in the injection. Check how the completeness was defined before applying an additional correction for transit geometry. When a planet’s radius is uncertain, integrate over the plausible radii instead of assigning it entirely to the bin containing its best estimate. [Foreman-Mackey, Hogg & Morton (2014)](https://arxiv.org/abs/1406.3020)

<div data-level="301">

### Write the likelihood for a detected population

Let \(z\) encode true planet properties, \(f(z\mid\phi)\) be the rate density per target, and \(q_j(z)\) be the probability that target \(j\)'s planet would appear in the catalog. For independent Poisson populations, the expected count is

\[
\Lambda(\phi)=\sum_j\int f(z\mid\phi)q_j(z)\,dz.
\]

If true properties were known, the likelihood would be proportional to \(e^{-\Lambda(\phi)}\) times the product of \(f(z_i\mid\phi)q_{j_i}(z_i)\) across detections. The count term ties the fit to the stars surveyed, including stars with zero detections. With uncertain properties, integrate the detection term over true properties using the measurement and selection model. If selection is a threshold on the same data used for inference, use a consistent joint model so that the threshold is applied once. [Foreman-Mackey, Hogg & Morton (2014)](https://arxiv.org/abs/1406.3020)

</div>

## 7.3 Separate a sparse bin from a sparse population

**Worked comparison.** Two period bins each contain six detected planets. Their effective search exposures, summed over the monitored stars, are 20 and 60. The corresponding point estimates are 0.30 and 0.10 planets per star. The counts alone hide that difference. Before interpreting the estimated ratio as a feature of planet formation, propagate count and completeness uncertainty and check whether the result persists across plausible population models.
