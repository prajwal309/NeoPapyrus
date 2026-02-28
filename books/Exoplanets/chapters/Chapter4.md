# Chapter 4 - Transmission Spectroscopy

## 4.1 A Thin Ring of Light

When a planet transits its host star, most of the starlight is blocked by the opaque planetary disk. But not all of it. A small fraction passes through the planet’s atmosphere—through a thin annulus at the planet’s limb—before reaching our telescopes.

That thin ring of light carries extraordinary information.

Transmission spectroscopy is the technique of measuring how the apparent radius of a planet changes with wavelength. At wavelengths where atmospheric gases absorb strongly, the atmosphere becomes opaque higher up. The planet appears slightly larger. At wavelengths where the atmosphere is transparent, we see deeper layers, and the planet appears smaller.

From variations of only tens to hundreds of parts per million in stellar flux, we infer the composition, structure, and physical state of alien atmospheres.

---

## 4.2 The Basic Idea

The transit depth at wavelength \( \lambda \) is approximately

\[
\delta(\lambda) \approx \left( \frac{R_p(\lambda)}{R_\star} \right)^2,
\]

where \( R_p(\lambda) \) is the wavelength-dependent planetary radius.

If the atmosphere were completely transparent, the planet would have a single sharp radius. But real atmospheres are partially opaque and wavelength-dependent. The effective planetary radius shifts with wavelength because the atmosphere absorbs light differently across the spectrum.

The difference in transit depth between two wavelengths reveals the presence of atmospheric absorption features.

This method does not require spatially resolving the planet. It relies only on precise measurements of stellar brightness as a function of wavelength and time.

---

## 4.3 The Scale Height: A Natural Ruler

The strength of transmission spectral features depends on the atmospheric **scale height**, given by

\[
H = \frac{kT}{\mu g},
\]

where:

- \( k \) is Boltzmann’s constant  
- \( T \) is atmospheric temperature  
- \( \mu \) is mean molecular weight  
- \( g \) is surface gravity  

The scale height determines how extended the atmosphere is.

Hot, low-gravity, hydrogen-rich atmospheres have large scale heights and strong spectral features. Cooler, high-gravity, high–molecular weight atmospheres have smaller scale heights and weaker signals.

A rough estimate of the amplitude of transmission features is

\[
\Delta \delta \sim \frac{2 R_p H}{R_\star^2}.
\]

For hot Jupiters, this may correspond to hundreds of parts per million. For temperate terrestrial planets, the signal can be less than ten parts per million.

Transmission spectroscopy rewards favorable physics: large planets, small stars, high temperatures, and light atmospheres.

---

## 4.4 What We Can Detect

Transmission spectroscopy has revealed a rich inventory of atmospheric constituents:

- **Water vapor (H₂O)**
- **Sodium (Na)**
- **Potassium (K)**
- **Methane (CH₄)**
- **Carbon monoxide (CO)**
- **Carbon dioxide (CO₂)**
- **Clouds and hazes**

Each molecule has a characteristic absorption spectrum determined by quantum mechanics. The pattern of absorption lines serves as a fingerprint.

Low-resolution spectra reveal broad molecular bands. High-resolution spectra can resolve individual lines and measure atmospheric winds via Doppler shifts.

Clouds and hazes often mute spectral features, producing flatter spectra. In some cases, a seemingly featureless spectrum is itself a powerful diagnostic of atmospheric aerosols.

---

## 4.5 Radiative Transfer at the Limb

The physics of transmission spectroscopy differs from emission spectroscopy.

In transmission, light travels along a slant path through the atmosphere. The path length is much longer than the vertical scale height. As a result, even tenuous absorbers can produce significant opacity.

The optical depth along a chord at impact parameter \( b \) is

\[
\tau_\lambda = \int \kappa_\lambda \rho \, ds,
\]

where \( \kappa_\lambda \) is the wavelength-dependent opacity, \( \rho \) the density, and \( ds \) the path element.

The effective planetary radius at wavelength \( \lambda \) corresponds roughly to the altitude where the slant optical depth reaches unity.

This geometry explains why transmission spectroscopy is particularly sensitive to trace species.

---

## 4.6 Retrieval: From Spectrum to Atmosphere

Interpreting a transmission spectrum requires solving an inverse problem.

We measure transit depth as a function of wavelength. We wish to infer:

- Temperature structure  
- Molecular abundances  
- Cloud properties  
- Mean molecular weight  
- Atmospheric pressure at the reference radius  

This process is known as **atmospheric retrieval**.

Forward models compute synthetic spectra for assumed atmospheric compositions and temperature profiles. Statistical techniques—often Bayesian—compare models to data and infer posterior probability distributions.

The inference is rarely unique. Degeneracies arise between:

- Clouds and molecular abundances  
- Temperature and composition  
- Reference pressure and radius  

Transmission spectroscopy teaches us humility: the data constrain models, but interpretation requires careful attention to assumptions.

---

## 4.7 Clouds and Hazes

Clouds complicate transmission spectroscopy.

High-altitude clouds truncate the atmospheric column, limiting how deeply starlight can penetrate. This suppresses molecular absorption features.

Hazes—produced by photochemistry—can introduce wavelength-dependent scattering, often manifesting as a Rayleigh slope in the optical.

In some planets, clouds dominate the transmission spectrum. Rather than revealing molecular fingerprints, the spectrum becomes flat or gently sloped.

Clouds are not merely nuisances. They are physical clues to atmospheric chemistry and circulation.

---

## 4.8 Stellar Contamination

Transmission spectroscopy measures relative changes in stellar flux. Therefore, it is sensitive not only to the planet but also to the star.

Stellar heterogeneities—spots and faculae—modify the apparent transit depth as a function of wavelength. If the stellar photosphere is not uniform, the measured spectrum may include a stellar imprint.

Unocculted starspots can mimic molecular absorption features. Faculae can produce slopes resembling scattering signatures.

Careful modeling of stellar activity is therefore essential, especially for active K and M dwarfs.

The star is part of the signal.

---

## 4.9 From Hot Jupiters to Small Planets

The first successful transmission detections were made for hot Jupiters—large, inflated planets with extended hydrogen atmospheres.

As observational precision improved, smaller and cooler planets became accessible.

For super-Earths and mini-Neptunes, the question often becomes: hydrogen-rich envelope or high–molecular weight atmosphere? The difference dramatically alters the scale height and spectral amplitude.

For terrestrial planets, transmission spectroscopy is far more challenging. The signals are small, and clouds may obscure molecular features.

Yet even nondetections constrain atmospheric properties.

---

## 4.10 The Role of Space Telescopes

Transmission spectroscopy has progressed alongside advances in instrumentation.

- The Hubble Space Telescope enabled early water detections.
- Ground-based high-resolution spectrographs resolved individual molecular lines.
- The James Webb Space Telescope has expanded wavelength coverage and sensitivity.

Broad wavelength coverage is critical. Molecular identification relies on detecting multiple absorption bands to avoid false positives.

Future observatories aim to probe smaller planets orbiting nearby M dwarfs, where favorable star-to-planet size ratios enhance signals.

---

## 4.11 Beyond Detection: Toward Characterization

Transmission spectroscopy has evolved from simple detection of water to quantitative atmospheric characterization.

We now seek to measure:

- Carbon-to-oxygen ratios  
- Metallicity trends with planet mass  
- Atmospheric escape  
- Photochemical products  
- Disequilibrium chemistry  

The ultimate goal is to characterize terrestrial exoplanet atmospheres in the habitable zones of nearby stars.

Whether such planets possess water vapor, oxygen, methane, or other biosignature gases remains one of the defining questions of modern astronomy.

---

## 4.12 A Subtle Signal

Transmission spectroscopy depends on a subtle measurement: a small change in apparent planetary size with wavelength.

The effect is delicate, the modeling complex, the interpretation cautious.

And yet, from that thin atmospheric annulus—no more than a few scale heights thick—we can infer the presence of water, clouds, winds, and chemistry on planets light-years away.

It is a remarkable triumph of physics.

We cannot see these atmospheres directly.

But by watching how a planet dims its star, we learn what its air is made of.