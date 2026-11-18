# Chapter 1 — Root Finding and Kepler’s Equation

## 1.1 Predict an orbit at an observing time

A proposed orbit must predict where the planet and star were when each spectrum was taken. On a circular orbit the angle advances uniformly. On an eccentric orbit the planet moves faster near periastron, as the [equal-area animation](#Exoplanets/Chapter2) shows. For an elliptic two-body orbit, the **mean anomaly** $M=2\pi(t-t_{\rm peri})/P$ advances uniformly in time. The period is $P$ and the time of periastron is $t_{\rm peri}$. The **eccentric anomaly** $E$ locates the planet on the ellipse via

$$
E-e\sin E=M.
$$

Given $M$ and eccentricity $0\le e<1$, solve for the zero of $f(E)=E-e\sin E-M$. In the circular limit, $E=M$. In an eccentric orbit, this solve is part of each model evaluation at the actual observation times. [Fulton et al. (2018), RadVel](https://doi.org/10.1088/1538-3873/aaaaa8) · [RadVel Keplerian implementation](https://github.com/California-Planet-Search/radvel/blob/master/radvel/kepler.py)

## 1.2 Bracket the answer before accelerating

The derivative $f'(E)=1-e\cos E$ is positive for $e<1$. The root lies between $M-e$ and $M+e$ because $E-M=e\sin E$. In **bisection**, test the midpoint and keep the half containing the sign change. Each step halves the bracket, providing a direct bound on angular error. Bisection is dependable but can require many steps at tight tolerances.

Newton’s method uses the tangent line to propose

$$
E_{\rm new}=E-\frac{E-e\sin E-M}{1-e\cos E}.
$$

Near a well-behaved root, Newton’s method converges rapidly. Near periastron for a highly eccentric orbit, its denominator can be small. A poor initial guess can produce a large step. A safeguarded solver combines the two methods: keep the bracket, try Newton, and bisect if the proposal fails to make sufficient progress.

**Worked example.** For a 20-day orbit at two days past periastron and $e=0.6$, $M=0.6283$ radians. The bracket is about $[0.0283,1.2283]$. The first Newton step from $M$ lands at about $1.314$ radians, outside the bracket. A safeguarded solve gives $E\approx1.184$ radians. Convert that auxiliary angle to the **true anomaly** $\nu$, the angle measured from periastron:

$$
\nu=2\operatorname{atan2}\left(\sqrt{1+e}\sin(E/2),\sqrt{1-e}\cos(E/2)\right).
$$

The planet is already about $107^\circ$ from periastron after just 10% of the orbital period. This distinction matters for [radial-velocity predictions](#Exoplanets/Chapter5).

<div data-level="201">

### Programming exercise: solve the eccentric orbit

Run with Python 3. The tolerance is a bracket width in radians.

~~~python
from math import atan2, cos, degrees, pi, sin, sqrt

def solve_kepler(mean_anomaly, eccentricity, tolerance=1e-12):
    if not 0 <= eccentricity < 1:
        raise ValueError("Expected an elliptic orbit.")
    if tolerance < 1e-14:
        raise ValueError("Tolerance is too small for this exercise.")
    mean_anomaly = (mean_anomaly + pi) % (2 * pi) - pi
    lower = mean_anomaly - eccentricity
    upper = mean_anomaly + eccentricity
    estimate = mean_anomaly
    while upper - lower > tolerance:
        residual = estimate - eccentricity * sin(estimate) - mean_anomaly
        if residual == 0:
            return estimate
        if residual > 0:
            upper = estimate
        else:
            lower = estimate
        width = upper - lower
        candidate = estimate - residual / (1 - eccentricity * cos(estimate))
        if lower + 0.1 * width < candidate < upper - 0.1 * width:
            estimate = candidate
        else:
            estimate = (lower + upper) / 2
    return (lower + upper) / 2

M, e = 2 * pi * 2 / 20, 0.6
E = solve_kepler(M, e)
nu = 2 * atan2(sqrt(1 + e) * sin(E / 2), sqrt(1 - e) * cos(E / 2))
assert abs(E - e * sin(E) - M) < 1e-12
assert abs(solve_kepler(M, 0) - M) < 1e-12
print(f"E = {E:.3f} rad; true anomaly = {degrees(nu):.1f} deg")
~~~

The solver wraps $M$ to a single revolution. Equivalent angles give the same orbital position. Track completed revolutions separately if you need an unwrapped phase. Try $e=0.99$ with $M=0.001$. When $f'$ is small, an apparently tiny residual may still correspond to an angular error. The bracket supplies an independent check.

</div>

## 1.3 Choose a tolerance for the observable

Tighten the stopping tolerance and compare predicted positions or velocities. The numerical change should be small relative to the precision you need in that observable. The solver does not reduce uncertainty in the fitted orbit. It ensures the proposed orbit has been evaluated accurately. The [next chapter](#Chapter2) asks how to average a model prediction over an exposure.
