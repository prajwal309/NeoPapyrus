# Chapter 9 — Stellar Variability and Activity

---

## 9.1 Stars Are Not Quiet

<div data-level="101">

Stars are not perfectly smooth or constant.

Their surfaces are alive with activity:

- Dark spots  
- Bright regions  
- Sudden bursts of energy  

As a result, stars **change in brightness over time**.

This is called **stellar variability**.

</div>

---

<div data-level="201">

Stellar variability arises from:

- Magnetic activity  
- Surface inhomogeneities  
- Rotation  
- Flares  

These effects introduce time-dependent signals in:

- Light curves  
- Spectra  

Understanding variability is essential for interpreting stellar and exoplanet observations.

</div>

---

<div data-level="301">

Variability spans a wide range of timescales:

- Minutes → flares  
- Days → rotation  
- Years → magnetic cycles  

It introduces correlated noise (“red noise”) and systematic biases in data analysis.

Modern time-domain surveys (Kepler, TESS) have revealed variability as a **universal property of stars**.

</div>

---

## 9.2 Starspots and Faculae

<div data-level="101">

The surface of a star is not uniform.

Some regions are cooler and darker — **starspots**.  
Others are hotter and brighter — **faculae**.

These features are caused by magnetic fields.

</div>

---

<div data-level="201">

- **Starspots**:
  - Cooler than the surrounding photosphere  
  - Reduce brightness  

- **Faculae**:
  - Hotter regions  
  - Increase brightness  

The observed stellar flux becomes a mixture of different surface components.

</div>

---

<div data-level="301">

The stellar surface can be modeled as:

\[
F_\lambda = \sum_i f_i \, F_{\lambda, i}
\]

where:

- \(f_i\) = filling fraction of each component  
- \(F_{\lambda, i}\) = spectrum of each component  

Key parameters:

- Temperature contrast (\(\Delta T\))  
- Filling factor  
- Spatial distribution  

These directly impact observed spectra and inferred stellar properties.

</div>

---

## 9.3 Rotational Modulation

<div data-level="101">

As a star rotates, spots move in and out of view.

This causes the brightness of the star to change over time.

</div>

---

<div data-level="201">

This effect produces periodic signals in light curves:

- Period → rotation period  
- Amplitude → spot coverage and contrast  

Typical amplitudes:

- ~0.1% to a few percent  

</div>

---

<div data-level="301">

Rotational modulation encodes:

- Surface inhomogeneity  
- Spot evolution  
- Differential rotation  

Analysis techniques include:

- Lomb–Scargle periodograms  
- Autocorrelation functions  
- Harmonic modeling  

Chromatic variability (different amplitudes at different wavelengths) provides constraints on spot temperatures — a key method in modern stellar studies.

</div>

---

## 9.4 Flares and Magnetic Activity

<div data-level="101">

Sometimes stars release sudden bursts of energy.

These are called **flares**.

They can make the star briefly much brighter.

</div>

---

<div data-level="201">

Flares are caused by magnetic reconnection events.

They produce:

- Rapid increases in brightness  
- Emission across a wide range of wavelengths  

Magnetic activity also includes:

- Stellar cycles (like the Sun’s 11-year cycle)  
- Coronal emission  

</div>

---

<div data-level="301">

Flares impact observations by:

- Introducing outliers in light curves  
- Affecting spectral measurements  

Magnetic activity correlates with:

- Rotation rate  
- Stellar age  

Young, fast-rotating stars tend to be more active.

Activity indicators include:

- Ca II H&K emission  
- X-ray luminosity  
- Photometric variability  

</div>

---

## 9.5 Connection to Exoplanet Contamination (TLSE)

<div data-level="101">

When a planet passes in front of a star, we measure how much light is blocked.

But if the star’s surface is uneven, this measurement can be misleading.

</div>

---

<div data-level="201">

This effect is known as the **Transit Light Source Effect (TLSE)**.

Unocculted spots or faculae change the apparent stellar spectrum:

- The star we observe is not the same as the region being transited  

This leads to biases in:

- Transit depth  
- Transmission spectra  

</div>

---

<div data-level="301">

TLSE can be expressed as a modification to the observed transit depth:

\[
\delta_{\mathrm{obs}}(\lambda) = \delta_{\mathrm{true}}(\lambda) \times \frac{F_{\lambda,\mathrm{occulted}}}{F_{\lambda,\mathrm{total}}}
\]

where stellar heterogeneity alters the denominator.

Consequences:

- Degeneracy between stellar contamination and planetary atmosphere  
- Misinterpretation of spectral features (e.g., false water signals)

Breaking this degeneracy requires:

- Multi-wavelength variability constraints  
- Empirical spot temperature distributions  
- Joint stellar–planet modeling  

This is a central challenge in modern exoplanet spectroscopy.

</div>

---

## 9.6 A Physical Perspective

<div data-level="101">

A star is not a static object.

It is dynamic, evolving, and active.

</div>

---

<div data-level="201">

Variability is not noise — it is information.

It tells us about:

- Magnetic fields  
- Surface structure  
- Internal processes  

</div>

---

<div data-level="301">

Stellar activity connects:

- Magnetohydrodynamics  
- Radiative transfer  
- Observational astrophysics  

It is both:

- A probe of stellar physics  
- A source of systematic uncertainty in exoplanet studies  

Understanding variability is essential for extracting precise physical information from modern datasets.

</div>

---

## Summary

- Stars exhibit variability due to magnetic activity  
- Starspots and faculae create surface inhomogeneities  
- Rotation produces periodic brightness changes  
- Flares introduce rapid variability  
- Stellar heterogeneity impacts exoplanet observations through TLSE  

---

## Looking Ahead

In the next chapter, we will explore:

> **How stars form from collapsing clouds of gas**

— the birth of stars in the universe.
