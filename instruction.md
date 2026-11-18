# Exoplanets book editorial and visualization guide

Build a comprehensive, observation-led textbook about planets beyond the Solar System. Take readers from the signals that reveal planets to the physics and statistics that explain entire populations. The main text assumes high-school algebra and physics. Intermediate sections introduce quantitative models. Advanced sections cover derivations, inference, systematics, and open research questions.

Keep the existing book URL, `/book.html?book=Exoplanets#Chapter1`, and preserve published chapter IDs. Use the roadmap below to revise Chapters 1–7 and append new chapters.

## Book roadmap

| Chapter | Coverage | Figure or exercise |
| --- | --- | --- |
| 1. A Universe of Worlds | Discovery history, confirmed planets versus candidates, diversity, and an overview of detection methods | Discovery timeline and the HR 8799 time-lapse |
| 2. Orbital Dynamics | Two-body motion, orbital elements, Kepler's laws, projection, and perturbations | Keep the equal-area animation and add an inclination comparison |
| 3. Transits and Occultations | Transit depth, impact parameter, limb darkening, cadence, dilution, eclipses, and phase curves | Pair a real Kepler light curve with a controllable transit model |
| 4. Transmission Spectroscopy | Scale height, opacity, clouds, stellar contamination, and retrieval degeneracies | Compare model spectra and binned observations with uncertainties |
| 5. Radial Velocity | Doppler shifts, Keplerian fits, minimum mass, sampling aliases, and stellar activity | Show time-series velocities, phased model, and residuals |
| 6. Biosignatures | Habitability versus inhabitedness, atmospheric context, abiotic pathways, and evidential standards | Compare competing explanations for the same schematic spectrum |
| 7. Stars | Stellar parameters, ages, activity, multiplicity, and how host-star uncertainty propagates into planet properties | Annotated HR diagram and a stellar-radius uncertainty exercise |
| 8. Direct Imaging and Astrometry | Coronagraphs, adaptive optics, contrast limits, sky-plane motion, astrometric reflex motion, and follow-up | Compare a direct-imaging contrast curve with posterior orbit tracks |
| 9. Gravitational Microlensing | Lens geometry, Einstein radius, planetary deviations, degeneracies, and sensitivity to cold and free-floating planets | Overlay a point-lens baseline and a planetary perturbation |
| 10. Timing and Multiplanet Systems | Pulsar timing, transit and eclipse timing, resonances, and dynamical mass estimates | Plot observed-minus-calculated transit times |
| 11. From Candidate to Confirmed Planet | Survey pipelines, vetting, false positives, validation, and independent confirmation | Walk through a planet transit and a blended eclipsing binary |
| 12. Statistical Inference | Likelihoods, priors, posterior prediction, correlated noise, model comparison, and identifiability | Compare a well-constrained and a degenerate joint transit–RV fit |
| 13. Demographics and Selection Effects | Completeness, reliability, injection–recovery, occurrence rates, and catalog biases | Compare an observed period–radius diagram with a detection-efficiency map |
| 14. Mass, Radius, and Interiors | Bulk density, composition degeneracies, equations of state, and radius evolution | Compare catalog measurements with mass–radius model families |
| 15. Planet Formation | Protoplanetary disks, dust growth, planetesimals, core and gas accretion, and competing formation pathways | Compare accretion and disk timescales |
| 16. Migration and System Architecture | Disk migration, resonant chains, scattering, secular interactions, tides, and stability | Show how two pathways produce different period ratios and eccentricities |
| 17. Atmospheric Structure and Chemistry | Pressure–temperature profiles, radiative transfer, equilibrium and disequilibrium chemistry, and aerosols | Link a pressure–temperature profile to the layers contributing to a spectrum |
| 18. Emission, Reflection, and Phase Curves | Energy budgets, albedo, heat redistribution, thermal inversions, and high-resolution spectroscopy | Compare eclipse depth and phase under different heat-transport assumptions |
| 19. Atmospheric Escape and Evolution | Irradiation, escape regimes, core-powered mass loss, and the radius valley | Contrast model populations with different atmospheric histories |
| 20. Rocky Planets and Climate | Habitable-zone assumptions, stellar evolution, water and carbon cycles, climate feedbacks, and tidal locking | Compare incident flux with modeled surface conditions |
| 21. Comparative Planetology | Hot Jupiters, sub-Neptunes, rocky worlds, and benchmark systems across measurement methods | Compare HD 209458 b, TRAPPIST-1, and HR 8799 using a common evidence table |
| 22. Surveys, Instruments, and Open Questions | Kepler, TESS, Gaia, JWST, ground-based observatories, and upcoming facilities | Map each mission to its observable and selection function |
| 23. Reproducible Projects | Transit radius, RV minimum mass, and a population comparison with explicit selection cuts | Three guided notebooks or worked examples with pinned inputs and expected outputs |

Add reference material after the projects as needed, including a glossary, constants and units, and a guide to archives. Cross-link overlapping subjects. Introduce the intuition in the first chapter that needs it and put the full treatment in the specialist chapter.

## Revise the existing chapters first

1. In Chapter 1, reconcile the discovery narrative with the 1992 pulsar and 1995 Sun-like-star milestones. Replace drafting fragments with a clear transition into population statistics. Identify the exact HR 8799 movie already in use before assigning credits to it.
2. In Chapter 2, fix duplicated section numbering and consolidate repeated explanations of Kepler's laws. Preserve the equal-area demo and verify its geometry and caption when editing.
3. In Chapters 3–5, clarify which quantities are measured and which depend on assumptions. Separate introductory transit geometry from spectrum retrieval, and explain where stellar activity or contamination changes an inference.
4. In Chapter 6, distinguish a candidate signature from a robust attribution. Cite alternative interpretations when the literature is unsettled. In Chapter 7, expand the HR diagram introduction into a practical host-star chapter with a worked uncertainty example.

## Chapter format

- Open with an observation or a question. Lead the reader from observable to model, inference, uncertainty, and a check they can perform.
- Include a worked example with units and at least one interpretation question with an answer or explanation. Define symbols on first use and state assumptions near each equation.
- Put the main narrative in ordinary Markdown. Use `<div data-level="201">` for intermediate calculations and `<div data-level="301">` for advanced derivations or caveats. Leave a blank line after the opening tag and before `</div>`. The main explanation should stand on its own at the introductory level.
- Distinguish synthetic examples, calibrated observations, fitted models, and posterior predictions in the text and legend. Report uncertainty and relevant selection or instrument effects alongside results.
- Cite primary papers for discoveries and measurements and official archives for data. Give the retrieval date and exact query for changing catalog counts. Check current mission status against mission sources when revising Chapter 22.

## Researcher visualizations and source code

These are recommended starting points based on what each figure can teach and how readily it can be reproduced. GitHub implementations and published license information were inspected on November 17, 2026. Use the exact license and citation files from the release or commit actually used.

| Priority and chapter | Suggested figure and inspected implementation | License and citation |
| --- | --- | --- |
| Start here · 1 and 8 | **HR 8799 (Jason Wang and collaborators).** Use the author's 12-year Keck movie with playback controls and a still fallback. Explain the coronagraph mask and residual glare. For an independent figure, the `orbitize!` results code exposes `plot_orbits` for showing the family of sky-plane orbits consistent with astrometry. | The author's movie page states **CC BY 4.0** and provides version-specific credits. Cite Wang, William Thompson, Christian Marois, and Quinn Konopacky for the 12-year release using the credit on that page. Cite Blunt et al. (2020) and the astrometry source for a plot generated with **BSD-3-Clause** orbitize!. [Author's movie and credits](https://jasonwang.space/orbits.html) · [orbitize! plotting interface](https://github.com/sblunt/orbitize/blob/main/orbitize/results.py) · [License](https://github.com/sblunt/orbitize/blob/main/LICENSE) |
| Start here · 3 | **Lightkurve and Laura Kreidberg's batman.** Use Lightkurve's `LightCurve` implementation to fold and plot a Kepler or TESS light curve. Use batman's `TransitModel` offline to generate comparison curves that vary radius ratio, impact parameter, or limb darkening. Show individual observations and a binned overlay if helpful. | Lightkurve is **MIT**. Cite the Lightkurve Collaboration (2018) and the mission and exact archive product. batman is **GPL-3.0** and its model source allows GPL v3 or later. Cite Kreidberg (2015) and publish generated arrays or a rendered plot for the reader. Review GPL terms before distributing any copied or adapted library code. [Lightkurve source](https://github.com/lightkurve/lightkurve/blob/main/src/lightkurve/lightcurve.py) · [Citation guide](https://lightkurve.github.io/lightkurve/about/citing.html) · [batman source and license header](https://github.com/lkreidberg/batman/blob/master/batman/transitmodel.py) · [Kreidberg paper](https://doi.org/10.1086/683602) |
| Start here · 5 | **RadVel (California Planet Search).** Use the multipanel plotting implementation as a reference for time-series points with instrument labels, a phased fit, and residuals on a common velocity scale. Begin with synthetic inputs or a dataset with clear provenance. | **MIT** software. Cite Fulton et al. (2018), the version DOI if available, and the dataset's original observers. [Plotting source](https://github.com/California-Planet-Search/radvel/blob/master/radvel/plot/orbit_plots.py) · [Attribution and license](https://github.com/California-Planet-Search/radvel#attribution) |
| Next · 4, 17, and 18 | **POSEIDON (Ryan MacDonald and contributors).** Follow `plot_spectra` in `visuals.py` to compare clear and cloudy models at the same binning. Show data error bars and model curves separately. Use an envelope only when its derivation is documented. | **BSD-3-Clause** software. Cite MacDonald & Madhusudhan (2017), MacDonald (2023), and the relevant model, opacity, and observation references. [Plotting source](https://github.com/MartianColonist/POSEIDON/blob/main/POSEIDON/visuals.py) · [Attribution and license](https://github.com/MartianColonist/POSEIDON#attribution) · [Software paper](https://doi.org/10.21105/joss.04873) |
| Next · 9 | **MulensModel (Radosław Poleski and Jennifer Yee).** Use the published `Model.plot_lc()` workflow to generate a smooth point-lens event and a binary-lens example with a localized planetary deviation. Add a zoomed panel around the perturbation. | The core code is **MIT**. The repository license also lists terms for bundled components. Cite Poleski & Yee and the relevant lensing algorithm papers listed in the README. [GitHub examples and citations](https://github.com/rpoleski/MulensModel/blob/master/README.md) · [License notices](https://github.com/rpoleski/MulensModel/blob/master/LICENSE) · [Model plotting documentation](https://rpoleski.github.io/MulensModel/MulensModel.model.html) |
| Next · 13 and 14 | **NASA Exoplanet Archive.** Make original period–radius and mass–radius plots from a dated Planetary Systems or Composite Data extract. Encode detection method, report rows excluded by missing measurements, and distinguish mass from minimum mass. A catalog scatter plot illustrates the detected sample. Use completeness and reliability estimates to discuss occurrence. | Credit the archive and cite the original measurement papers when using individual systems. Record the TAP query and access date. [Table definitions](https://exoplanetarchive.ipac.caltech.edu/docs/API_PSCompPars_columns.html) · [Archive acknowledgments](https://exoplanetarchive.ipac.caltech.edu/docs/acknowledge.html) |

### Figure production and attribution

1. Decide whether to reuse the actual media, generate a new plot with upstream software, or implement an original educational diagram from a published model. Favor a reproducible plot when there is no clear permission to redistribute the original artwork.
2. Check permissions for every asset that will ship, including the image or movie, data, code, and embedded dependencies. A code license covers the code it licenses. Verify separately who owns the image and what its reuse terms say. Retain required notices when redistributing code.
3. For reused media, record the title, creators, exact source, license link, and changes such as cropping or re-encoding. For generated plots, record data IDs and dates, the query or download manifest, units and cleaning, the model parameters, and the package version or commit. Preserve the script or notebook and use a stable source link.
4. Use labeled axes, uncertainty bars or intervals where applicable, and colors that also differ by marker or line style. Make interactive controls keyboard accessible. Give readers a caption or still that conveys the result when animation is paused or unavailable.
5. Keep research Python environments offline from the reader build. Export compact SVG, PNG, MP4, or bounded JSON for the site. Keep large or restricted source data in its original archive and record how to retrieve it.

A source credit for a planned Chapter 1 replacement could read as follows, after confirming the exact file.

> HR 8799, 12-year Keck time-lapse. Movie by Jason Wang; data reduction by William Thompson and Christian Marois; observations organized by Quinn Konopacky. [Source](https://jasonwang.space/orbits.html) · [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Add the modification note if the asset is changed. Recheck the current `HR8799.gif` against the author's versions before attaching the 12-year credit to it.

## Repository conventions and preview

- Save chapters as `books/Exoplanets/chapters/ChapterN.md` with one H1 such as `# Chapter 8 - Direct Imaging and Astrometry`. The reader takes the chapter title from the first H1 and sorts filenames numerically. Use H2 and H3 headings for sections and `[Orbital Dynamics](#Chapter2)` to link by chapter ID.
- Use inline KaTeX math such as `$R_p$` and display math delimited by `$$`.
- Store images and local video in `chapters/figures/` and self-contained demos in `chapters/assets/`. Use a case-correct path such as `/books/Exoplanets/chapters/figures/orbit.png`. Give an embedded iframe a descriptive title. Chapter 2's equal-area demo and Chapter 3's limb-darkening demo show how to embed an interactive figure.
- Run `npm ci` once and `npm start` to preview at `http://localhost:8000/book.html?book=Exoplanets#Chapter1`. Check each reading level, equation visibility, references, keyboard controls, and desktop and mobile rendering.
- Run `npm run build` and confirm that the chapter and local figure assets appear under `dist/books/Exoplanets/`.

## Reusable update prompt

> Revise or add Chapter [number], “[title],” following this editorial guide. Read the existing chapter and adjacent chapters first. Keep published chapter IDs and preserve useful figures and explanations. Start from a real observation, state what is measured and inferred, and introduce the physics before the mathematics. Include a worked example, a question with an answer, and intermediate and advanced sections where they help. Choose a figure from the shortlist or research a stronger candidate. Inspect the original figure source, upstream code, license, data provenance, and requested citations. Implement the figure or cite a suitable existing one, label modeled and observed data, and record how to reproduce or legally reuse it. Check the chapter in the local reader and report any unresolved source or permissions questions.
