# Chapter 8 — Radiative Transfer and Planetary Spectra

## 8.1 Follow intensity through matter

Specific intensity \(I_\lambda\) measures radiation per unit projected area, solid angle, and wavelength. For a ray moving along distance \(s\), absorption and emission obey

\[
\frac{d I_\lambda}{ds}=-\alpha_\lambda I_\lambda+j_\lambda,
\qquad \tau_\lambda=\int \alpha_\lambda\,ds.
\]

Here \(\alpha_\lambda\) is the absorption coefficient per unit length, \(j_\lambda\) is the emissivity per unit path length in intensity units, and optical depth \(\tau_\lambda\) is dimensionless. For pure absorption the transmitted fraction is \(e^{-\tau_\lambda}\). At optical depth one, about 37% of the incoming intensity survives. [Heng & Kitzmann (2017)](https://arxiv.org/abs/1702.02051)

## 8.2 See the same gas in transmission and emission

For a uniform slab with a constant source function \(S_\lambda=j_\lambda/\alpha_\lambda\), solve the transfer equation to get

\[
I_{\lambda,\rm out}=I_{\lambda,\rm in}e^{-\tau_\lambda}
  +S_\lambda(1-e^{-\tau_\lambda}).
\]

The emergent intensity approaches the source function at large optical depth. In local thermodynamic equilibrium with true absorption and negligible scattering, the source function is the Planck intensity at the gas temperature.

**Worked example.** At \(\tau=2\), a slab in front of a bright background with \(S=0.3I_{\rm in}\) gives \(I_{\rm out}\approx0.395I_{\rm in}\). The same slab seen against darkness gives \(I_{\rm out}\approx0.259I_{\rm in}\), using the same background intensity as a reference unit. The sign of a spectral feature depends on what supplies the background and how warm the emitting layer is. [Guillot (2010)](https://arxiv.org/abs/1006.4702)

## 8.3 Ask which atmospheric layers the observation samples

In transmission, a grazing ray traverses a long slant path through the atmosphere. A strong molecular band becomes opaque higher up than a nearby spectral window, increasing the apparent transit radius. In thermal emission, high opacity usually lets us see only higher layers. If those layers are colder, the corresponding band appears darker than the nearby continuum. A temperature inversion can reverse the contrast. In real spectra, multiple pressures contribute to each wavelength bin, and scattering, overlapping opacities, clouds, and stellar contamination can complicate the interpretation. [Heng & Kitzmann (2017)](https://arxiv.org/abs/1702.02051) · [Exoplanets — Transmission Spectroscopy](#Exoplanets/Chapter4)

<div data-level="301">

### Derive the slant-path enhancement

Let \(b\) be the closest distance of a ray from the planet’s center and \(x\) the distance along the ray from that point. Near closest approach, \(r=\sqrt{b^2+x^2}\simeq b+x^2/(2b)\). For the isothermal atmosphere of [Chapter 6](#Chapter6), with constant mass absorption coefficient \(\kappa_\lambda\), the density along the ray is approximately \(\rho(b)e^{-x^2/(2bH)}\). Integrating gives

\[
\tau_{\lambda,\rm slant}(b)\simeq
\kappa_\lambda\rho(b)\sqrt{2\pi bH},
\qquad
\frac{\tau_{\lambda,\rm slant}}{\tau_{\lambda,\rm vertical}}
\simeq\sqrt{\frac{2\pi b}{H}}.
\]

The vertical optical depth above the same altitude is \(\kappa_\lambda\rho(b)H\). For \(b=70{,}000\) km and \(H=400\) km, the slant path increases optical depth by about 33. The thin-atmosphere approximation works because most of the contribution comes from close to the tangent point, where the quadratic expansion is accurate. [Heng & Kitzmann (2017)](https://arxiv.org/abs/1702.02051)

</div>
