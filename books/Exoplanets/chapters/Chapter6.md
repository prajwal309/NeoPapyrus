# Chapter 6 - Biosignatures: Searching for Life Beyond Earth

## 6.1 What would a spectrum have to tell us?

Imagine that a telescope finds an absorption band consistent with oxygen on a rocky planet. The observation raises three questions. Is the band real? Is oxygen the best explanation for it? If oxygen is present, what keeps it there? Different evidence answers each question. Repeat observations can confirm the band. Other wavelengths can identify the molecule. Explaining its origin requires a model of the planet and its star.

A **biosignature** is a measurable feature whose presence, in a particular environment, is more likely if life is present. It might be a gas sustained by a biological source, a combination of gases that react with each other, or a reflectance pattern from surface pigments. The same gas can mean different things on different worlds. In this chapter, the goal is to identify the next measurement that would most clearly separate the competing explanations. [Catling et al. (2018)](https://doi.org/10.1089/ast.2017.1737)

## 6.2 Habitability sets the context

The **habitable zone** is the range of stellar irradiation over which a rocky planet with a suitable atmosphere could sustain liquid water at its surface. Climate-model estimates depend on the star's spectrum and assumptions about the atmosphere. A planet in that zone may be airless, have a deep hydrogen envelope, or have a surface too hot or too cold for liquid water. Water vapor in a spectrum does not by itself establish a surface ocean. [Kopparapu et al. (2013)](https://doi.org/10.1088/0004-637X/765/2/131)

Start with the host star's spectrum, activity, and age, then constrain the planet's mass, radius, irradiation, and atmospheric composition. These observations help answer whether there is a rocky surface, what gases dominate the atmosphere, and which chemical pathways are plausible. The host star also enters the measurement. Spots and bright regions can imprint their own spectral structure on a transit, especially when the planet crosses a region that differs from the visible stellar disk. [Chapter 4: Transmission Spectroscopy](#Chapter4) · [Rackham, Apai & Giampapa (2018)](https://arxiv.org/abs/1711.05691)

Small stars give a larger transit signal for the same planet and atmosphere. Around an M dwarf, the habitable zone is also closer to the star, so transits can recur more frequently. The trade-off is that the star's ultraviolet spectrum, early luminosity, and activity can affect atmospheric chemistry and escape. The best target for measuring a spectrum may require the most care in interpreting it. [Luger & Barnes (2015)](https://doi.org/10.1089/ast.2014.1231)

## 6.3 Disequilibrium is a question about sources and sinks

On modern Earth, oxygen and methane coexist even though methane is destroyed by atmospheric chemistry. Continual replenishment maintains it. A biological methane source matters because the observed abundance and chemical lifetime together imply a required supply. To evaluate a world with no known biology, compare that supply with what geology and atmospheric chemistry could plausibly deliver.

Abiotic planets also remain far from equilibrium. Sunlight drives photochemistry, gases escape to space, and the interior supplies new material. A large departure from equilibrium tells us that a process is sustaining it. To infer what that process is, ask which gases are involved, how quickly they are removed, and whether a plausible nonbiological source can maintain them. Earth's own history illustrates a **false negative**. Life was present long before atmospheric oxygen reached modern levels, so a distant observer examining early Earth might have missed an oxygen-based signature. [Krissansen-Totton, Olson & Catling (2018)](https://doi.org/10.1126/sciadv.eaao5747)

### Earth viewed from afar through time

An inhabited planet's spectrum can change substantially as its atmosphere evolves. Synthetic spectra by Rugheimer and Kaltenegger (2018) compare four reconstructed states: prebiotic Earth 3.9 billion years ago, two stages associated with the rise of oxygen 2.0 and 0.8 billion years ago, and the modern atmosphere. These are model predictions, not observations of Earth at those dates. The models cover visible-to-infrared features for host stars spanning spectral types F0V to M8V. [Rugheimer & Kaltenegger (2018)](https://doi.org/10.3847/1538-4357/aaa47a)

| Modeled Earth state | What changes for a distant observer | What the comparison teaches |
| --- | --- | --- |
| 3.9 billion years ago, prebiotic | The modern oxygen features are absent or much weaker. Other atmospheric gases may still leave detectable features. | A missing oxygen band would not establish that the planet is lifeless; early Earth itself is a counterexample to that inference. |
| 2.0 billion years ago, oxygen rising | Oxygen and its photochemical product ozone begin to affect the spectrum, but their visibility depends on abundance, wavelength, clouds, and the star. | A biosphere can alter a spectrum before it resembles modern Earth, and the change need not be a single sharp transition. |
| 0.8 billion years ago, later oxygen state | Oxygen-related features become more observable in the modeled atmosphere, while cloud cover and stellar spectrum still shape their contrast. | Detectability changes with atmospheric evolution, not only with whether life is present. |
| Modern Earth | Oxygen has a visible absorption feature near 0.76 µm; ozone also absorbs in the ultraviolet and infrared. | A present-day Earth spectrum is one endpoint in a long sequence, not a template for every inhabited planet. |

Clouds make the comparison less simple than "more gas means a stronger feature." In these models, additional cloud cover can mute some spectral features while raising the planet's overall reflected brightness. The balance depends on the wavelength and the observing geometry. The host star matters too: its ultraviolet output changes ozone chemistry, so the same atmospheric mixture can produce a different spectrum around different stars. In the modeled high-UV environments around F stars, infrared ozone can remain informative at lower oxygen levels. [Rugheimer & Kaltenegger (2018)](https://doi.org/10.3847/1538-4357/aaa47a)

**Interpretation check.** If a distant telescope does not detect oxygen around an Earth-sized planet, can it rule out life? No. The planet could resemble an earlier Earth, have oxygen below the instrument's sensitivity, or have an atmosphere and surface that consume oxygen faster than life supplies it. The next step is to compare several wavelengths and plausible atmospheric histories, not to label the planet sterile.

### Estimating the biological source required

An atmospheric abundance can be used to estimate the source needed to replace chemical losses. Photochemical models relate a gas's abundance and chemical lifetime to the source flux required to maintain it. If the biological production rate per unit biomass is also estimated, that flux can be translated into the biomass needed to sustain a detectable signal. Seager, Bains, and Hu (2013) developed this approach as an order-of-magnitude plausibility test.

The result depends on assumptions about atmospheric composition, the host star's ultraviolet spectrum, chemical lifetime, the detection threshold, and biological production rates. In their Earth-like scenarios, detectable methyl chloride required a very large biomass. This does not rule out biological production, but it illustrates how detectability can demand a substantial source. Methane provides a complementary caution: biology can produce it, but geological processes can also supply it. A detected gas is therefore a starting point for comparing sources, not evidence of life by itself. [Seager, Bains & Hu (2013), *A Biomass-Based Model to Estimate the Plausibility of Exoplanet Biosignature Gases*](https://doi.org/10.1088/0004-637X/775/2/104)

<div data-level="201">

### Worked example: turn an abundance into a supply rate

Assume a well-mixed trace gas with mole fraction $x$ in a hydrostatic atmosphere of surface pressure $P_s$, gravity $g$, and mean molar mass $\bar M$. The atmospheric mass per unit area is $P_s/g$, so the trace-gas column is approximately

$$
N \simeq \frac{x P_s}{g\bar M}.
$$

Here $N$ is in moles per square metre when $P_s$ is in pascals and $\bar M$ is in kilograms per mole. With a constant effective chemical lifetime $\tau$ and a steady abundance, the required mean source flux is $F\simeq N/\tau$.

Take a hypothetical planet with $P_s=1$ bar, $g=10$ m s$^{-2}$, $\bar M=0.029$ kg mol$^{-1}$, and a trace gas at 100 parts per million by mole. Its column is about **34 mol m$^{-2}$**. With an assumed lifetime of 100 years, the inferred source is about **0.34 mol m$^{-2}$ yr$^{-1}$**. If a different ultraviolet spectrum shortens the lifetime to 10 years, the same measured abundance requires **3.4 mol m$^{-2}$ yr$^{-1}$**. These are illustrative lifetimes. Real lifetimes and source fluxes require a photochemical model, and the gas may be poorly mixed.

**Check your reasoning.** If a plausible abiotic process can supply 1 mol m$^{-2}$ yr$^{-1}$, which of the two lifetime assumptions makes that source insufficient? The 10-year case. That is a reason to measure or constrain the stellar UV spectrum before attributing the gas.

</div>

## 6.4 Oxygen and ozone: two routes to a false positive

On Earth, oxygenic photosynthesis supplies oxygen. Long-term atmospheric accumulation also depends on the balance between burial of reduced material and oxygen consumption by the surface and interior. On an exoplanet, oxygen's visible A-band at about **0.76 µm** and ozone absorption in the ultraviolet and near **9.6 µm** are useful targets. Ozone is produced photochemically from oxygen, so measuring both informs the same oxygen chemistry. [Meadows et al. (2018)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6014580/)

| Nonbiological route | What happens | What could test it |
| --- | --- | --- |
| Water loss and hydrogen escape | UV light splits water. If hydrogen escapes preferentially and the surface and interior cannot take up all the oxygen, oxygen can accumulate. | Look for strong O₂–O₂ collision-induced absorption, which can flag a large oxygen column, and assess the planet's water inventory and the star's early irradiation. |
| Carbon dioxide photolysis | UV light splits CO₂ into CO and oxygen atoms. Oxygen can accumulate as O₂ when recycling reactions and surface sinks are inefficient. | Measure CO alongside CO₂ and oxygen-bearing features, and constrain the stellar UV spectrum. Detectable CO can support this pathway under the right conditions. |

These tests depend on the atmospheric pressure, water inventory, and uncertain surface sinks. Even a CO nondetection helps only if its upper limit excludes the concentrations a competing model predicts. [Luger & Barnes (2015)](https://doi.org/10.1089/ast.2014.1231) · [Harman et al. (2015)](https://doi.org/10.1088/0004-637X/812/2/137) · [Schwieterman et al. (2016)](https://doi.org/10.3847/2041-8205/819/1/L13)

### Distinguishing biological and abiotic oxygen

Oxygen is not unique to biology. A dry planet that lost an ocean, a planet with active CO₂ photolysis, and an inhabited planet can each accumulate oxygen under different conditions. Other spectral features and knowledge of the planet's environmental history can help distinguish these possibilities. An oxygen nondetection is also ambiguous: production may be weak, or the atmosphere and surface may consume oxygen faster than it accumulates. [Meadows et al. (2018), *Understanding Oxygen as a Biosignature in the Context of Its Environment*](https://doi.org/10.1089/ast.2017.1727)

Synthetic spectra of **Proxima Centauri b** illustrate how follow-up observations could test competing histories. A strong O₂–O₂ absorption feature may indicate a dense oxygen atmosphere left after water loss, while CO observed alongside CO₂ and oxygen may favor a photochemical explanation. These are predictions for candidate atmospheres, not detections. Their diagnostic value depends on the host star and the planet's history. [Meadows et al. (2018), *The Habitability of Proxima Centauri b*](https://doi.org/10.1089/ast.2016.1589)

## 6.5 Methane on an oxygen-poor world

A rocky planet with substantial **CH₄ and CO₂** and little CO can be an interesting target even without detectable oxygen. CO₂ and CH₄ place carbon at opposite ends of the oxidation scale. On an oxygen-poor Earth-like planet, maintaining abundant methane can require a source larger than some modeled geological scenarios can provide. The usefulness of low CO depends on how efficiently the atmosphere, ocean, and surface remove it. CO limits are evidence to include in a model comparison, rather than a universal test. [Krissansen-Totton et al. (2018)](https://doi.org/10.1126/sciadv.eaao5747) · [Thompson et al. (2022)](https://pubmed.ncbi.nlm.nih.gov/35353627/)

Methane can also be produced through water–rock reactions and other nonbiological pathways, and it can be favored by the reducing chemistry of a hydrogen-rich envelope. Before applying the early-Earth interpretation, establish which type of atmosphere the planet is likely to have. The mass and radius can help distinguish plausible planet models, while the spectrum and its uncertainties constrain possible atmospheric compositions. [Chapter 5: The Radial Velocity Method](#Chapter5)

## 6.6 Two JWST case studies

### K2-18 b: a candidate molecule is only the first step

K2-18 b is a temperate sub-Neptune. A JWST mid-infrared spectrum was reported to show evidence consistent with dimethyl sulfide or dimethyl disulfide, sulfur-bearing molecules of astrobiological interest. Independent analyses indicate that the strength of this evidence is sensitive to data reduction, binning, and modeling choices. Reanalyzing the existing transit can expose that sensitivity, while observing another transit can test whether the features repeat. Even a secure molecular identification would leave the questions of atmospheric structure and production pathway open. [Madhusudhan et al. (2025)](https://doi.org/10.3847/2041-8213/adc1c8) · [Independent reanalysis](https://doi.org/10.3847/1538-3881/ae0338) · [Pica-Ciamarra et al. (2026)](https://doi.org/10.3847/2041-8213/ae5dcc)

### TRAPPIST-1 b and c: first ask whether an atmosphere is present

A **thermal phase curve** measures how the planet's infrared brightness changes over its orbit. Efficient transport of heat to the nightside can change that pattern relative to a bare surface. JWST measurements of TRAPPIST-1 b and c disfavored thick atmospheres that redistribute heat efficiently. The constraints come from the wavelengths observed and the models compared. Thin atmospheres remain a separate question, and measurements of these inner planets do not establish what surrounds the other TRAPPIST-1 planets. [JWST thermal phase curves (2026)](https://doi.org/10.1038/s41550-026-02806-9) · [Tenuous-atmosphere models (2026)](https://doi.org/10.3847/PSJ/ae6cef)

## 6.7 Other observations that can help

- **Reflected light.** A spectrum of the planet's reflected starlight can search for gas absorption and possible pigment signatures. Earth's vegetation shows a steep reflectance rise around 0.7 µm. At the scale of a whole planet, clouds and ocean can dilute that edge, and some minerals can create their own edges. Test the shape across several bands and check whether it varies with rotation. [Seager et al. (2005)](https://arxiv.org/abs/astro-ph/0503302)
- **Thermal emission.** Eclipse and phase-curve measurements probe how a planet emits heat and how that heat is redistributed. They can test whether a climate assumed in interpreting a spectrum is consistent with the planet's brightness and day–night contrast. [JWST thermal phase curves (2026)](https://doi.org/10.1038/s41550-026-02806-9)
- **Stellar monitoring.** Repeated optical and ultraviolet observations can distinguish changes on the star from repeatable planetary absorption and inform estimates of gas photochemical lifetimes. [Harman et al. (2015)](https://doi.org/10.1088/0004-637X/812/2/137) · [Rackham et al. (2018)](https://arxiv.org/abs/1711.05691)

Seasonal changes could offer another test if they repeat over several orbits and can be distinguished from weather, circulation, or stellar variability. Searches for technological activity, such as artificial radio signals, ask a related question with different observables and false positives.

<div data-level="301">

## 6.8 Advanced: compare inhabited and abiotic explanations

Let $D$ be the measured spectrum and $C$ the context, including stellar and planetary constraints. Let $L$ denote the hypothesis that the planet is inhabited. Bayes' rule gives

$$
\frac{P(L\mid D,C)}{P(\neg L\mid D,C)}
=
\frac{P(D\mid L,C)}{P(D\mid \neg L,C)}
\frac{P(L\mid C)}{P(\neg L\mid C)} .
$$

The first ratio on the right measures how much the data favor the inhabited hypothesis over the abiotic hypothesis under the models considered. It should include uncertainty in atmospheric chemistry, instrument noise, stellar contamination, and the range of plausible biological and abiotic processes. The second ratio is the prior odds. We have no well-calibrated population estimate for how often life arises on such worlds, so a precise numerical probability of life would depend strongly on assumptions. Report how the evidence changes when those assumptions change. A comparison between spectral fits with and without a particular molecule addresses identification of that molecule. Evaluating life requires models for why it would be present. [Catling et al. (2018)](https://doi.org/10.1089/ast.2017.1737)

</div>

## 6.9 Choose the observation that would change your mind

For a proposed detection, write down the measured bands, the plausible absorbers, and the sources that could sustain them. Then decide what would most improve the inference. A second visit tests reproducibility. Another band can separate overlapping absorbers. A tighter CO limit can test a proposed oxygen source. A UV measurement can narrow the range of methane lifetimes. A repeatable band is a valuable result even when the origin of the gas remains open.
