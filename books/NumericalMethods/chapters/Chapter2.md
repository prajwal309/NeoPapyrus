# Chapter 2 — Numerical Integration and Transit Light Curves

## 2.1 A detector measures an average

When an exposure straddles the beginning of a transit, the detector collects light both before and after the planet starts blocking the star. A model evaluated at the midpoint can disagree with the recorded flux. This matters most when the exposure duration is comparable to ingress or egress. [Kipping (2010)](https://arxiv.org/abs/1004.3741)

For uniform sensitivity during an exposure of duration $\Delta t_i$ centered at $t_i$, the model prediction is

$$
\bar F_i=\frac{1}{\Delta t_i}
\int_{t_i-\Delta t_i/2}^{t_i+\Delta t_i/2}F(t)\,dt.
$$

The model $F(t)$ gives the instantaneous normalized flux. Use the same time units in the limits and normalization. If a reported point combines several integrations with gaps, evaluate the correct intervals and combine them with the appropriate weights.

## 2.2 Two quadrature rules

**Quadrature** approximates an integral with a weighted sum. Divide the exposure into $n$ equal pieces. The composite midpoint rule evaluates the model in the middle of each piece and averages the values. The composite trapezoidal rule evaluates the boundaries, weights the first and last values by one-half and each interior value by one, then divides the weighted sum by $n$. For smooth functions, both errors typically scale as the square of the step size. Transit contact can introduce a kink in a simplified model, so the error also depends on how the sampling grid lines up with contact.

**Worked exposure.** Let a synthetic transit first make contact at time zero. Over the next 20 minutes, its depth grows linearly from zero to 10,000 ppm. One exposure runs from −8 to +12 minutes. The midpoint is +2 minutes, where the instantaneous depth is 1,000 ppm. The integrated deficit is a triangle with base 12 minutes and height 6,000 ppm. Dividing the area by 20 minutes gives **1,800 ppm**. Midpoint-only evaluation misses 800 ppm of the measured deficit. An exposure wholly inside the linear part of ingress would give identical answers by both methods.

<div data-level="201">

### Programming exercise: refine the integration

Run with Python 3. Time is in minutes relative to first contact and depth is in ppm.

~~~python
def depth_ppm(time):
    return 10_000 * min(1.0, max(0.0, time / 20))

def mean_depth(start, end, subdivisions):
    step = (end - start) / subdivisions
    return sum(
        depth_ppm(start + (index + 0.5) * step)
        for index in range(subdivisions)
    ) / subdivisions

for n in (1, 2, 4, 8, 16, 32):
    print(n, round(mean_depth(-8, 12, n), 2))

assert mean_depth(-8, 12, 1) == 1000
assert abs(mean_depth(-8, 12, 32) - 1800) < 1
assert mean_depth(-20, -1, 32) == 0
~~~

Try shifting the exposure by one minute. Its average changes because the physical overlap changes. The quadrature error also changes because contact falls at a different point in the grid. Splitting the original exposure at time zero and using the trapezoidal rule on each side gives the exact answer for this piecewise-linear example.

</div>

## 2.3 Convergence in a real transit fit

A realistic transit forward model depends on the overlap of the stellar and planetary disks and the change in stellar intensity from center to limb. Mandel and Agol developed analytic models for commonly used limb-darkening laws. Kreidberg’s batman implementation provides transit calculations and exposure supersampling. The geometry is explained in [Transits and Occultations](#Exoplanets/Chapter3). [Mandel & Agol (2002)](https://doi.org/10.1086/345520) · [Kreidberg (2015)](https://doi.org/10.1086/683602) · [batman implementation](https://github.com/lkreidberg/batman/blob/master/batman/transitmodel.py)

Choose a quadrature resolution by comparing predicted fluxes at successive refinements. Check the steepest parts of the transit first. Then ask whether a finer rule changes inferred quantities such as the impact parameter or radius ratio by a meaningful fraction of their uncertainty. Exposure integration addresses a numerical error in the forward model. Limb darkening, contaminating light, and a poorly characterized instrumental baseline remain separate sources of uncertainty. [Statistics: Forward and Inverse Models](#Statistics/Chapter2)
