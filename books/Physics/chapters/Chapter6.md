# Chapter 6 — Fluids, Hydrostatic Balance, and Atmospheres

## 6.1 Balance a column of gas

A fluid at rest supports its weight through a pressure gradient. For a thin layer of thickness \(dz\) and unit area, the upward pressure force is \(P(z)-P(z+dz)\) and the downward weight is \(\rho g\,dz\). Taking the limit gives

\[
\frac{dP}{dz}=-\rho g.
\]

With an ideal gas \(P=\rho k_{\rm B}T/\bar m\), constant \(g\), and constant temperature, integrate to find \(P(z)=P_0 e^{-z/H}\) and \(H=k_{\rm B}T/(\bar m g)\). The scale height \(H\) is the altitude increase that reduces pressure by a factor \(e\). The constant-gravity approximation works when the modeled region is thin compared with the planetary radius.

**Worked example.** At \(T=1000\) K and \(g=10\ \mathrm{m\,s^{-2}}\), a hydrogen–helium atmosphere with mean particle mass \(2.3\) atomic mass units has \(H\approx361\) km. For a hypothetical CO₂ atmosphere at the same temperature and gravity, \(H\approx19\) km. In the thin-atmosphere limit, one scale height adds projected area \(2\pi R_p H\), so a low mean particle mass can make spectral features easier to measure. Opacity and clouds also affect how many scale heights a spectral band samples. [Heng & Kitzmann (2017)](https://arxiv.org/abs/1702.02051) · [Exoplanets — Transmission Spectroscopy](#Exoplanets/Chapter4)

## 6.2 Extend hydrostatic balance to a star

Inside a spherical star, the gravitational acceleration at radius \(r\) depends on enclosed mass \(m(r)\). Couple force balance to mass conservation:

\[
\frac{dP}{dr}=-\frac{Gm(r)\rho(r)}{r^2},
\qquad
\frac{dm}{dr}=4\pi r^2\rho(r).
\]

A stellar model also needs an equation of state and equations for energy generation and transport. Hydrostatic balance is an approximation when accelerations are small. It breaks down in a shock or where a wind accelerates substantially. [OpenStax — The Solar Interior](https://openstax.org/books/astronomy-2e/pages/16-3-the-solar-interior-theory) · [Exoplanets — Stars](#Exoplanets/Chapter7)
