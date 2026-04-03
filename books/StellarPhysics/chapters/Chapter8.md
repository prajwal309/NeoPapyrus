# Chapter 8 — Stellar Radii, Temperatures, and Luminosities

---

## 8.1 Turning Light into Physics

<div data-level="101">

When we observe a star, we see only light.

But hidden within that light are its true properties:

- How big it is  
- How hot it is  
- How much energy it produces  

The challenge of stellar astrophysics is to turn **light into physical quantities**.

</div>

---

<div data-level="201">

The three fundamental stellar properties are:

- **Luminosity** \(L\) — total energy output  
- **Effective temperature** \(T_{\mathrm{eff}}\) — surface temperature  
- **Radius** \(R\) — physical size  

These quantities are connected through basic physics and can be inferred from observations such as:

- Flux  
- Spectra  
- Distance  

</div>

---

<div data-level="301">

In practice, these parameters are inferred through a combination of:

- Photometry (broadband fluxes)  
- Spectroscopy (temperature, composition)  
- Parallax (distance)  

However, degeneracies arise:

- Temperature vs radius  
- Stellar heterogeneity (spots/faculae)  
- Model-dependent assumptions  

These propagate into uncertainties in derived stellar properties.

</div>

---

## 8.2 The Stefan–Boltzmann Law

<div data-level="101">

A hotter object shines more brightly.

A larger object emits more total light.

The Stefan–Boltzmann law connects these ideas.

</div>

---

<div data-level="201">

The relation is:

\[
L = 4 \pi R^2 \sigma T_{\mathrm{eff}}^4
\]

where:

- \(L\) = luminosity  
- \(R\) = radius  
- \(T_{\mathrm{eff}}\) = effective temperature  
- \(\sigma\) = Stefan–Boltzmann constant  

This is one of the most important equations in stellar physics.

</div>

---

<div data-level="301">

This relation allows us to infer:

- Radius if \(L\) and \(T_{\mathrm{eff}}\) are known  
- Luminosity if \(R\) and \(T_{\mathrm{eff}}\) are known  

In practice:

\[
R = \sqrt{\frac{L}{4\pi \sigma T_{\mathrm{eff}}^4}}
\]

Uncertainties in temperature propagate strongly due to the \(T^4\) dependence.

Deviations from a perfect blackbody (e.g., line blanketing, spots) introduce systematic errors.

</div>

---

## 8.3 Measuring Stellar Radii

<div data-level="101">

Stars are far away, so we cannot usually see their size directly.

But we can measure their radius using indirect methods.

</div>

---

<div data-level="201">

Methods to measure stellar radii:

- **Stefan–Boltzmann relation** (using \(L\) and \(T_{\mathrm{eff}}\))  
- **Interferometry** (direct angular size for nearby stars)  
- **Transit observations** (planet radius relative to star)  

For transiting exoplanets:

\[
\delta \approx \left(\frac{R_p}{R_*}\right)^2
\]

so stellar radius directly affects inferred planet size.

</div>

---

<div data-level="301">

Radius estimation depends on:

- Distance accuracy  
- Stellar atmosphere models  
- Assumptions about surface homogeneity  

Systematics include:

- Starspots → bias inferred radius  
- Multi-component photospheres → incorrect \(T_{\mathrm{eff}}\)  

Interferometry provides model-independent radii but is limited to nearby bright stars.

</div>

---

## 8.4 Gaia Distances and Luminosities

<div data-level="101">

To know how bright a star truly is, we need to know how far away it is.

This is where **Gaia** comes in.

</div>

---

<div data-level="201">

Gaia measures **parallax**, which gives distance:

\[
d = \frac{1}{\pi}
\]

where \(\pi\) is the parallax angle.

Once distance is known:

\[
L = 4\pi d^2 F
\]

where \(F\) is observed flux.

</div>

---

<div data-level="301">

Gaia has revolutionized stellar astrophysics by providing:

- Precise distances for millions of stars  
- Accurate luminosities  
- High-resolution HR diagrams  

Uncertainties include:

- Parallax systematics  
- Extinction corrections  
- Photometric calibration  

These propagate into stellar parameter estimates.

</div>

---

## 8.5 Empirical Scaling Relations

<div data-level="101">

Stars are not random.

They follow patterns.

These patterns allow us to estimate properties even when data is incomplete.

</div>

---

<div data-level="201">

Important empirical relations include:

- **Mass–luminosity relation**:
  \[
  L \propto M^\alpha
  \]
  where \(\alpha \sim 3-4\) for main sequence stars  

- **Mass–radius relation**  
- **Color–temperature relations**  

These allow quick estimates of stellar properties.

</div>

---

<div data-level="301">

Scaling relations are derived from:

- Observations of stellar populations  
- Binary systems (mass measurements)  
- Stellar models  

Limitations:

- Depend on metallicity  
- Depend on evolutionary state  
- Can be biased by stellar activity  

In precision exoplanet science, these relations must be used carefully, especially in the presence of stellar heterogeneity.

</div>

---

## 8.6 A Physical Perspective

<div data-level="101">

A star’s brightness is not just how it looks.

It tells us what the star *is*.

</div>

---

<div data-level="201">

By combining:

- Light  
- Distance  
- Spectra  

we can reconstruct the star’s physical properties.

</div>

---

<div data-level="301">

This process connects:

- Observations → physical parameters  
- Data → models  

It is foundational for:

- Stellar evolution  
- Exoplanet characterization  
- Population studies  

</div>

---

## Summary

- Luminosity, temperature, and radius define a star’s physical state  
- The Stefan–Boltzmann law connects these quantities  
- Stellar radii are inferred through multiple methods  
- Gaia enables precise luminosity measurements  
- Empirical relations provide useful approximations  

---

## Looking Ahead

In the next chapter, we will explore:

> **Stellar variability and magnetic activity**

— and how stars change over time.
