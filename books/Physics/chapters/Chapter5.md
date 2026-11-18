# Chapter 5 — Orbital Energy, Tides, and Spin

## 5.1 Read an orbit from its energy

[Gravity](#Chapter1) gives the shape of a two-body orbit. Energy tells us what happens when we change it. Let \(\mu=G(M_\star+M_p)\), \(r\) be the separation, and \(v\) the relative speed. For a bound orbit with semimajor axis \(a\), the mechanical energy per unit reduced mass is

\[
\varepsilon=\frac{v^2}{2}-\frac{\mu}{r}=-\frac{\mu}{2a},
\qquad v^2=\mu\left(\frac{2}{r}-\frac{1}{a}\right).
\]

A brief forward impulse from a circular orbit raises the orbital energy. If the new orbit is bound, the impulse occurs at the new orbit’s periapsis and the opposite side rises. Setting \(\varepsilon=0\) gives the local escape speed \(v_{\rm esc}=\sqrt{2\mu/r}\).

**Worked example.** An orbit with \(e=0.5\) has periapsis \(a/2\) and apoapsis \(3a/2\). Vis-viva gives \(v_{\rm peri}=\sqrt{3\mu/a}\) and \(v_{\rm apo}=\sqrt{\mu/(3a)}\). The speed ratio is three, also the ratio of the two distances since the velocity is purely tangential at both points and angular momentum is conserved. [Exoplanets — Orbital Dynamics](#Exoplanets/Chapter2)

## 5.2 Derive the tidal acceleration

A planet’s center and its surface fall toward the star with slightly different accelerations. For a planet of radius \(R_p\) at separation \(a\gg R_p\), expand the star’s field on the near side:

\[
\frac{GM_\star}{(a-R_p)^2}-\frac{GM_\star}{a^2}
\simeq \frac{2GM_\star R_p}{a^3}.
\]

The far side accelerates less toward the star than the center. In the freely falling frame, these differences stretch the planet along the line to the star. Halving the orbital distance increases the leading tidal acceleration eightfold. This calculation describes the forcing. The actual deformation depends on self-gravity and internal structure. [OpenStax — Ocean Tides and the Moon](https://openstax.org/books/astronomy/pages/4-6-ocean-tides-and-the-moon) · [Ogilvie (2014)](https://doi.org/10.1146/annurev-astro-081913-035941)

## 5.3 Follow angular momentum and heat

A delayed tidal response can exert a torque that exchanges spin and orbital angular momentum. In an isolated system the total angular momentum is conserved while dissipation converts some mechanical energy into heat. Synchronous rotation is a possible endpoint for a spin aligned with a circular orbit. An eccentric orbit can still produce time-varying tidal forcing in a synchronously rotating body because the separation and orbital angular speed change during each orbit. The decay or circularization timescale depends on the body's response and on which body dissipates the energy. [Ogilvie (2014)](https://doi.org/10.1146/annurev-astro-081913-035941)
