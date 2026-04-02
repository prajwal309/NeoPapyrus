# Chapter 3 - Transits and Occultations

## 3.1 Shadows and Light

<figure style="float: right; width: 35%; margin: 0 0 1rem 1.5rem;">
  <img src="/books/Exoplanets/chapters/figures/Transit_method.gif"
     alt="Directly Imaged Planets Around HR 8799"
     style="width: 100%; border-radius: 6px;" />
  <figcaption style="font-size: 0.85rem; color: #555; margin-top: 0.4rem;">
    Schematic top and side views of a transiting multiplanet system, illustrating planets of different sizes as they pass in front of their host star. [Image credit: Wikipedia; Aspolanski.]
  </figcaption>
</figure>

If Chapter 1 introduced the existence of other worlds, this chapter explains how we learned to weigh and measure them without ever seeing them directly.

A transit occurs when a planet passes in front of its host star, temporarily blocking a small fraction of starlight. An occultation (also called a secondary eclipse) occurs when the planet passes behind the star, briefly removing the planet’s own emitted and reflected light from view.

These events are subtle. A Jupiter-sized planet transiting a Sun-like star blocks about 1% of the starlight. An Earth-sized planet blocks only 0.01%. Yet from these tiny changes in brightness, we can measure planetary radii, orbital geometries, atmospheric compositions, temperatures, albedos, and even maps of distant worlds.

Add more text carefully

The method is conceptually simple: measure brightness versus time. The interpretation, however, is rich with physics.

---

## 3.2 The Geometry of a Transit

Transits require a special alignment. The orbital plane of the planet must be nearly edge-on to our line of sight. The probability of this alignment is approximately

\[
P_{\rm transit} \approx \frac{R_\star + R_p}{a},
\]

where \( R_\star \) is the stellar radius, \( R_p \) the planetary radius, and \( a \) the orbital distance.

Close-in planets are therefore much more likely to transit than distant ones. This geometric bias explains why many of the first detected transiting planets were hot Jupiters.

When a transit occurs, the fractional loss of light—known as the **transit depth**—is approximately

\[
\delta \approx \left( \frac{R_p}{R_\star} \right)^2.
\]

From this single number, we obtain the planet’s radius relative to its star.

But the light curve contains much more information than just its depth.

---

## 3.3 Anatomy of a Transit Light Curve

A transit light curve has a characteristic shape:

- **Ingress** — the planet begins to cross the stellar disk  
- **Full transit** — the planet is fully superimposed on the star  
- **Egress** — the planet exits the stellar disk  

The duration of the transit depends on the orbital speed and geometry. The shape encodes:

- The planet’s radius \( R_p \)
- The orbital inclination \( i \)
- The scaled semi-major axis \( a/R_\star \)
- The impact parameter \( b \)

Remarkably, from the transit duration and orbital period alone, one can derive the stellar density. This fact has made transits a powerful tool not only for studying planets but also for characterizing stars.

---

## 3.4 Limb Darkening: The Star Is Not Uniform

Stars are not uniform disks. Their edges appear dimmer than their centers—a phenomenon known as **limb darkening**. This effect arises because we see deeper, hotter layers at the center of the stellar disk and shallower, cooler layers near the edge.

<iframe 
  src="/books/Exoplanets/chapters/assets/limbdarkening.html" 
  width="100%" 
  height="520" 
  style="border:none; border-radius:12px; margin: 2rem 0;">
</iframe>

Accurate modeling of limb darkening is essential for precise transit parameter estimation. The light curve is subtly distorted by the stellar intensity profile. For high signal-to-noise observations, even small mismatches between assumed and actual limb darkening can bias inferred planetary radii.


<div data-level="301">
The modern measurement of limb darkening comes from the stellar models themselves.

</div>


---

## 3.5 Occultations: Measuring Planetary Light

During occultation, the planet disappears behind the star. The observed decrease in total flux is typically much smaller than during transit because we are removing only the planet’s light, not the star’s.

The depth of the occultation tells us:

- The planet’s thermal emission (at infrared wavelengths)
- The planet’s reflected light (at optical wavelengths)
- The planet’s day-side temperature
- The geometric albedo

By measuring occultations at multiple wavelengths, we can estimate atmospheric composition and energy redistribution efficiency between the day and night sides.

Occultations transformed hot Jupiters from abstract masses into physical worlds with temperatures, winds, and chemistry.

---

## 3.6 Phase Curves: Watching a Planet Orbit

If one measures the stellar brightness continuously throughout an orbit, one can detect subtle variations known as **phase curves**.

These arise from:

- Changing visibility of the planet’s illuminated hemisphere  
- Thermal emission from the planet  
- Ellipsoidal variations of the star  
- Doppler beaming  

Phase curves allow us to infer longitudinal temperature gradients and atmospheric circulation patterns. In some cases, the hottest point on a planet is offset from the substellar point, revealing strong equatorial winds.

From a time series of brightness measurements, we reconstruct weather patterns on planets dozens or hundreds of light-years away.

---

## 3.7 Transmission Spectroscopy

When a planet transits, a small fraction of starlight filters through its atmosphere. At wavelengths where atmospheric gases absorb strongly, the planet appears slightly larger.

The variation of transit depth with wavelength yields a **transmission spectrum**.

From this we can detect:

- Water vapor  
- Sodium and potassium  
- Methane  
- Carbon dioxide  
- Clouds and hazes  

The amplitude of spectral features depends on the atmospheric scale height:

\[
H = \frac{kT}{\mu g},
\]

where \( T \) is temperature, \( \mu \) the mean molecular weight, and \( g \) surface gravity.

Thus, the detectability of atmospheric features connects directly to planetary temperature, gravity, and composition.

The technique is exquisitely sensitive to stellar heterogeneities—spots and faculae can imprint spectral signatures that mimic or obscure planetary features. Careful modeling of the host star is therefore inseparable from atmospheric inference.

---

## 3.8 Emission Spectroscopy

During occultation, the disappearance of the planet’s thermal emission can be measured spectroscopically. This yields an emission spectrum of the day side.

Emission spectroscopy reveals:

- Atmospheric temperature structure  
- Thermal inversions  
- Molecular abundances  
- Energy redistribution efficiency  

Where transmission probes the terminator, emission probes the dayside.

Together, they provide complementary slices of atmospheric physics.

---

## 3.9 Transit Timing Variations

Not all transits occur exactly on schedule.

Gravitational interactions between planets can cause deviations from strict periodicity. These **transit timing variations (TTVs)** allow the detection of additional planets—even those that do not transit.

TTVs provide planetary masses independent of radial velocity measurements and have revealed dynamically interacting multi-planet systems.

---

## 3.10 Limitations and Biases

Transit surveys are biased toward:

- Short orbital periods  
- Large planets  
- Bright stars  
- Favorable inclinations  

Only a small fraction of planetary systems are aligned to produce transits from our vantage point. Correcting for these biases is essential when estimating planet occurrence rates.

The transit method does not reveal everything. It gives us planetary radii but not masses (unless combined with radial velocities or TTVs). It probes atmospheres but is sensitive to stellar contamination. It favors close-in planets.

And yet, it remains the most productive exoplanet detection method to date.

---

## 3.11 From Light Curves to Worlds

It is difficult to overstate the conceptual leap that transits represent.

We begin with a time series of brightness measurements. From that we infer:

- Planetary radius  
- Orbital geometry  
- Stellar density  
- Atmospheric composition  
- Temperature maps  
- Planetary albedo  
- System architecture  

The method is geometrical, radiative, and dynamical all at once.

A transit is a shadow.  
An occultation is a disappearance.  

From these small changes in light, we reconstruct distant worlds in remarkable detail.

The physics is elegant.  
The measurements are subtle.  
The implications are profound.

---

## TRAPPIST-1 System

### Overview

The **TRAPPIST-1 system** is one of the most remarkable planetary systems discovered to date. Located about **40 light-years away** in the constellation Aquarius, it hosts **seven Earth-sized planets** orbiting an ultra-cool dwarf star.

All seven planets are comparable in size to Earth, and at least three orbit within the **habitable zone**, where liquid water could exist under suitable conditions. The system is extremely compact, with all planets orbiting closer to their star than Mercury does to the Sun.

---

### The Host Star

![TRAPPIST-1 Star](figures/trappist1_star.png)

- **Spectral Type:** Ultra-cool M dwarf  
- **Mass:** $\sim 0.09\,M_\odot$  
- **Radius:** $\sim 0.12\,R_\odot$  
- **Effective Temperature:** $\sim 2550\,\mathrm{K}$  

TRAPPIST-1 is significantly smaller and cooler than the Sun. It emits most of its radiation in the infrared and is known to be **magnetically active**, exhibiting flares and starspots.

Because of its low luminosity, planets must orbit very close to the star to receive significant irradiation.

---

### Planetary System

![TRAPPIST-1 System](figures/trappist1_system.png)

The system contains seven planets labeled **b through h**, ordered by increasing distance from the star.

| Planet | Period (days) | Notes |
|--------|--------------|------|
| b | 1.51 | Hot, rocky |
| c | 2.42 | Hot terrestrial |
| d | 4.05 | Inner habitable zone edge |
| e | 6.10 | Best Earth-like candidate |
| f | 9.21 | Temperate |
| g | 12.35 | Outer habitable zone |
| h | 18.77 | Cold, outermost |

The entire system fits well within Mercury’s orbit in our Solar System.

---

### Orbital Resonance

The TRAPPIST-1 planets form a **near-resonant chain**, where orbital periods follow simple integer ratios:

$$
\frac{P_{i+1}}{P_i} \approx \frac{n+1}{n}
$$

This configuration leads to:

- Strong gravitational interactions  
- Measurable **transit timing variations (TTVs)**  
- Precise constraints on planetary masses and densities  

The resonance likely arose through **disk-driven migration**, where planets formed farther out and migrated inward while maintaining orbital spacing.

---

### Composition and Structure

Mass and radius measurements suggest:

- Most planets are **rocky**
- Some planets (especially f and g) may contain **significant water fractions**
- TRAPPIST-1 e is consistent with an **Earth-like composition**

However, uncertainties remain due to stellar variability and model degeneracies.

---

### Atmospheres and JWST Observations

![Transmission Spectroscopy](figures/trappist1_spectra.png)

Recent observations with the **James Webb Space Telescope (JWST)** have begun probing the atmospheres of TRAPPIST-1 planets.

Key findings:

- **TRAPPIST-1 b:** No evidence for a thick hydrogen atmosphere  
- **TRAPPIST-1 c:** No strong CO$_2$ atmosphere detected  
- Several planets may be **airless or possess thin atmospheres**

Observations of planets d, e, f, and g are ongoing.

---

### Stellar Contamination

A major challenge in interpreting TRAPPIST-1 data is **stellar heterogeneity**.

The observed transit depth is not purely planetary:

$$
\delta_\lambda^{\mathrm{obs}} = \delta_\lambda^{\mathrm{planet}} \times \frac{F_{\mathrm{het}}}{F_{\mathrm{phot}}}
$$

where:

- $F_{\mathrm{het}}$ is the flux from a heterogeneous stellar surface (spots, faculae)  
- $F_{\mathrm{phot}}$ is the pristine photosphere  

This effect, known as the **Transit Light Source Effect (TLSE)**, introduces wavelength-dependent biases that can mimic or obscure atmospheric features.

---

### Habitability

The TRAPPIST-1 system offers exciting possibilities for habitability, but also significant challenges.

 **Advantages**
- Multiple planets in the habitable zone  
- Long stellar lifetime (trillions of years)

 **Challenges**
- Strong stellar activity and flares  
- Tidal locking of planets  
- Possible early atmospheric loss  

---

## Why TRAPPIST-1 Matters

TRAPPIST-1 is a cornerstone system for:

- Understanding **terrestrial planet formation**  
- Studying **planetary atmospheres with JWST**  
- Quantifying **stellar contamination effects**  
- Preparing for future missions like **Roman** and **ELTs**

It represents one of the best opportunities to study Earth-sized exoplanets in detail.

---

## References

- Gillon et al. (2017), *Nature*  
- Grimm et al. (2018), *A&A*  
- Luger et al. (2017), *Nature Astronomy*  
- Rackham et al. (2018, 2019)  
- Moran et al. (2023), *ApJL*  


<figure style="float: right; width: 35%; margin: 0 0 1rem 1.5rem;">
  <img src="/books/Exoplanets/chapters/figures/TRAPPIST1.jpg"
     alt="Directly Imaged Planets Around HR 8799"
     style="width: 100%; border-radius: 6px;" />
  <figcaption style="font-size: 0.85rem; color: #555; margin-top: 0.4rem;">
    NASA Visualization of TRAPPIST-1. Compared to Solar System...
  </figcaption>
</figure>


