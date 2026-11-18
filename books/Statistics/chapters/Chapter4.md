# Chapter 4 — Gaussian Processes

## 4.1 Put the planet in the mean and correlations in the noise

A starspot can distort stellar absorption lines on several consecutive nights. If we treat each radial-velocity (RV) measurement as independent, those nights can look like repeated evidence for a planet even though they share the same disturbance. A **Gaussian process** (GP) models this dependence. It describes a distribution over functions such that their values at any finite set of inputs have a joint normal distribution. A mean function specifies the typical curve, and a covariance function, or **kernel**, says which deviations tend to move together. [Rasmussen & Williams (2006), Chapter 2](https://gaussianprocess.org/gpml/chapters/RW2.pdf)

Write an RV measurement as \(y_i=m(t_i;\theta)+g(t_i)+\epsilon_i\). The mean \(m\) can contain a Keplerian orbit and instrument offsets. The zero-mean GP \(g\) describes correlated residuals, and \(\epsilon_i\) describes independent measurement error. Fit the orbit and the GP jointly so that uncertainty in stellar activity can propagate into the planet mass. [Rajpaul et al. (2015)](https://arxiv.org/abs/1506.07304) · [Exoplanets — Radial Velocity](#Exoplanets/Chapter5)

## 4.2 Choose a kernel that describes the data you expect

For a disturbance that loses its resemblance over time, a simple kernel is

\[
k(t,t')=A^2\exp(-|t-t'|/\ell).
\]

The scale \(A\) has the units of the measurements (m/s for RV), and \(\ell\) has the units of time. Two activity deviations separated by \(\ell\) have correlation \(e^{-1}\). Independent measurement errors add \(\sigma_i^2\) to the diagonal of the covariance matrix and leave the off-diagonal entries unchanged.

| Pattern in the measurements | Kernel or inputs to consider | Evidence to check |
| --- | --- | --- |
| Instrument drift or short-lived fluctuations | A time kernel with a finite correlation scale | Does the timescale match calibration data or residuals outside transit? |
| Rotating active regions that evolve | A quasi-periodic time kernel with separate recurrence and decay times | Does the recurrence agree with independent photometry or line diagnostics? |
| Flux varies with pointing or detector state | A kernel on measured instrument variables | Does it predict flux in held-out observations at similar instrument states? |

A quasi-periodic kernel can favor recurrences near a stellar rotation period while allowing their amplitudes and shapes to evolve. In transmission spectroscopy, instrument-state measurements can help constrain correlated systematics in the light curves. [Rajpaul et al. (2015)](https://arxiv.org/abs/1506.07304) · [Gibson et al. (2012)](https://arxiv.org/abs/1109.3251)

## 4.3 Work through one prediction

Suppose the GP has amplitude \(A=1\) m/s and one observed RV residual is \(+2\) m/s with independent uncertainty \(0.5\) m/s. At a time \(\ell\ln 2\) later, the model gives a cross-covariance of \(0.5\,(\mathrm{m/s})^2\). The observed residual has variance \(1+0.5^2=1.25\,(\mathrm{m/s})^2\), so the conditional mean of the activity at the later time is \((0.5/1.25)\times 2=0.8\) m/s. Its conditional variance is \(1-0.5^2/1.25=0.8\,(\mathrm{m/s})^2\). Add the future measurement variance if predicting an observed RV.

**Check your reasoning.** At a separation much longer than \(\ell\), the cross-covariance tends to zero. The predicted activity returns to a mean of zero with its original variance of \(1\,(\mathrm{m/s})^2\).

<div data-level="301">

### Compute the likelihood and predictions

For observed residuals \(\mathbf r=\mathbf y-\mathbf m\), form \(C_{ij}=k(t_i,t_j)+\delta_{ij}\sigma_i^2\) and factor \(C=LL^\mathsf{T}\) with a Cholesky decomposition. Solve \(L\mathbf u=\mathbf r\). The quadratic term in the [Gaussian log likelihood](#Chapter3) is \(\mathbf u^\mathsf{T}\mathbf u\), and the log determinant is \(2\sum_i\log L_{ii}\). For test times, let \(K_\ast\) be the covariance between training and test inputs and \(K_{\ast\ast}\) the covariance among test inputs. Solve \(LV=K_\ast\). The conditional latent mean is \(V^\mathsf{T}\mathbf u\), and the conditional covariance is \(K_{\ast\ast}-V^\mathsf{T}V\). These expressions avoid forming a matrix inverse.

Dense factorization costs \(O(N^3)\) time and \(O(N^2)\) memory. For ordered one-dimensional inputs, celerite exploits structure in a restricted family of kernels to make the cost linear in \(N\) for fixed kernel rank. [Rasmussen & Williams (2006)](https://gaussianprocess.org/gpml/chapters/RW2.pdf) · [Foreman-Mackey et al. (2017)](https://arxiv.org/abs/1703.09710)

</div>

## 4.4 Check whether the model preserves a planet

A flexible stellar model can absorb a planet signal, particularly when its orbital period is close to the star’s rotation period or a harmonic. Compare fits with and without the planet under the same activity model. Test plausible kernels and priors, and report how much the planet amplitude changes. Withhold a whole observing block to test forecasts across a gap. Randomly withholding individual points can leave close neighbors on both sides and mainly test interpolation.

As a separate check, inject synthetic planets with known periods, phases, and amplitudes into realistic activity and noise, then run the full analysis. Measure how often the model recovers the period and how often its amplitude interval covers the injected value. Include cases with weak signals and with orbital periods near stellar rotation. [Blunt et al. (2023)](https://doi.org/10.3847/1538-3881/acde78)
