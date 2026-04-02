# Chapter 7 - Stars

## 7.1 Why are stars important

<div data-level="101">

When we observe a transiting exoplanet, we measure how much light from the star is blocked by the planet at different wavelengths. This measurement allows astronomers to infer the composition of the planet’s atmosphere through **transmission spectroscopy**.

However, stars are not perfectly uniform. Their surfaces often contain **starspots**, **faculae**, and other magnetic structures. These features have temperatures that differ from the surrounding stellar photosphere. Because of this, the spectrum of the star that we observe is actually a mixture of different surface components.

If the planet transits a region of the star that is different from the average stellar surface, the measured transit depth can be biased. This effect is known as **stellar contamination**.

Add transit light source effect here...

</div>

---

## 7.2 The Hertzsprung–Russell Diagram


<figure style="float: right; width: 35%; margin: 0 0 1rem 1.5rem;">
  <img src="/books/Exoplanets/chapters/figures/Gaia_HR_Diagram.jpg"
     alt="Directly Imaged Planets Around HR 8799"
     style="width: 100%; border-radius: 6px;" />
  <figcaption style="font-size: 0.85rem; color: #555; margin-top: 0.4rem;">
    Hertzsprung–Russell diagram of stars observed by Gaia, showing stellar luminosity as a function of color (temperature proxy). The prominent main sequence, giant branch, and white dwarf sequence trace the fundamental stages of stellar structure and evolution. [Credit: ESA/Gaia/DPAC]
  </figcaption>
</figure>


The **Hertzsprung–Russell (HR) diagram** is the single most powerful tool in stellar astronomy. It plots stellar **luminosity** (intrinsic brightness, in solar units L☉) on the vertical axis against **surface temperature** on the horizontal axis — with temperature running *rightward-to-cooler*, following the historical convention from spectral classification.

### Reading the diagram

Two physical properties determine where a star sits:

- **Luminosity** scales as the fourth power of radius and the fourth power of temperature: $L \propto R^2 T^4$ (from the Stefan–Boltzmann law). A star can be luminous because it is hot, large, or both.
- **Surface temperature** sets the star's color and determines which absorption lines dominate its spectrum — the basis for the **OBAFGKM** spectral sequence (O hottest, M coolest).

### The main sequence

Roughly 90% of all stars, including the Sun, fall along a diagonal band called the **main sequence** (also the *zero-age main sequence*, ZAMS). This is not a coincidence of arrangement — it reflects a fundamental physics: main-sequence stars are in **hydrostatic equilibrium**, balancing gravitational collapse with the outward pressure of hydrogen fusion in their cores.

Position along the main sequence is set almost entirely by **mass**:

| Region | Spectral type | Mass (M☉) | Luminosity (L☉) | Lifetime |
|--------|---------------|-----------|-----------------|----------|
| Upper left | O, B | 10–100 | 10³–10⁶ | ~10 Myr |
| Middle | A, F | 1.5–3 | 5–60 | ~1 Gyr |
| Middle | G (Sun) | 1 | 1 | ~10 Gyr |
| Lower right | K, M | 0.1–0.8 | 10⁻³–0.4 | ~100 Gyr |

The steep **mass–luminosity relation** ($L \propto M^{3.5}$ approximately) means that a star ten times the Sun's mass burns roughly 3,000 times brighter — and exhausts its fuel in a fraction of the time.

### Evolved populations

Once a star's core hydrogen is exhausted, it leaves the main sequence. The HR diagram preserves the fossil record of this evolution:

**Red giants and supergiants** (upper right). As the hydrogen shell ignites and the outer layers expand, the star becomes cooler at the surface but enormously larger — luminosity rises while temperature drops, shifting the star rightward and upward. Betelgeuse (~100,000 L☉, ~700 R☉) is the archetype.

**White dwarfs** (lower left). The endpoint of low- and intermediate-mass stellar evolution: a degenerate carbon–oxygen core no longer generating energy, slowly cooling over billions of years. Despite temperatures sometimes exceeding 25,000 K, their tiny radii (roughly Earth-sized) make them intrinsically faint.

### The HR diagram as a stellar clock

A star cluster's **main-sequence turnoff point** — the luminosity at which stars begin peeling off the main sequence toward the giant branch — directly encodes the cluster's age. More luminous (massive) stars evolve faster; measuring where the turnoff occurs yields the age without needing to know the cluster's distance. This technique underpins much of what we know about stellar populations and galactic history.

> **Connection to stellar contamination.** Stars at different points on the HR diagram have radically different surface structures. Hot O/B stars have few starspots but strong magnetic fields and rapid rotation. Sun-like G stars show well-defined spot cycles. Cool M dwarfs are heavily spotted and magnetically active. Understanding *where* a host star sits on the HR diagram — its temperature, luminosity, and spectral class — is therefore the first step in modeling the **transit light source effect** discussed in §7.3.

### The Transit Light Source Effect


---

### Why It Matters for Exoplanet Atmospheres

<div data-level="301">

Stellar contamination can produce spectral signatures that resemble atmospheric features such as water vapor absorption or Rayleigh scattering slopes. As a result, interpreting transmission spectra without accounting for stellar heterogeneity can lead to incorrect conclusions about planetary atmospheres.

A notable example is the warm super-Earth **GJ 486b**, where JWST observations could be interpreted either as evidence for a water-rich atmosphere or as contamination from unocculted starspots \citep{moran2023}. This degeneracy highlights the importance of independently constraining stellar surface properties.

Several strategies are used to mitigate stellar contamination:

- Multi-wavelength photometric monitoring of stellar variability  
- Spectroscopic diagnostics of spot temperatures  
- Forward modeling of heterogeneous stellar photospheres  
- Simultaneous stellar and planetary retrieval frameworks

Future observatories such as the **Nancy Grace Roman Space Telescope** will provide high-precision multi-band photometry that can empirically constrain spot temperature contrasts and filling factors across large stellar populations. These measurements will significantly improve our ability to disentangle stellar effects from planetary atmospheric signals.

</div>