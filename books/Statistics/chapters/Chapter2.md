# Chapter 2 — Forward and Inverse Models

## 2.1 Predict what the instrument would record

A **forward model** starts with a proposed physical system and predicts the observations. For an exoplanet transit, the physical parameters describe the orbit, planet size, and stellar surface brightness. The observing model evaluates that transit at the measured timestamps, averages it over exposures, and includes relevant effects such as light from nearby stars or a changing instrumental baseline. A fit should compare observations with predictions in the same units and at the same cadence. [Mandel & Agol (2002)](https://doi.org/10.1086/345520) · [Numerical Methods: Exposure Integration](#NumericalMethods/Chapter2)

An **inverse problem** starts from the measurements and asks which physical parameters could have produced them. The answer is usually a range, because noise and systematic effects leave several plausible parameter combinations. Write the data as $y_i=m_i(\boldsymbol\theta)+\epsilon_i$. The model prediction $m_i$ depends on parameters $\boldsymbol\theta$. The term $\epsilon_i$ represents deviations such as detector noise or unmodeled variability. The structure of those deviations determines how much the measurements can tell you. [Statistics: Likelihood and Uncertainty](#Chapter3)

## 2.2 Worked example: two models with the same transit depth

Imagine a uniform-brightness star and a planet that fully crosses its disk. Let $k=R_p/R_\star$ be the radius ratio. If the target supplies a fraction $D$ of the total aperture flux and nearby light supplies the rest, the observed depth is approximately

$$
\delta_{\rm obs}=Dk^2.
$$

A measured depth of 8,000 ppm can arise from an undiluted transit with $k=\sqrt{0.008}\approx0.0894$. It can also arise from a larger planet with $k=0.10$ when the target contributes 80% of the recorded light. In both cases the forward model gives the same depth. Measuring that depth more precisely still leaves the two explanations tied in this simplified model. A separate measurement of nearby light can constrain $D$. The detailed light-curve shape can also provide information if the geometry and stellar brightness profile are modeled. [Transits and Occultations](#Exoplanets/Chapter3) · [Morton & Johnson (2011)](https://doi.org/10.1088/0004-637X/738/2/170)

This is an example of **non-identifiability**. The data constrain the combination $Dk^2$ while leaving $D$ and $k$ individually unresolved. Plotting their joint uncertainty would show a ridge of solutions. An independent observation that constrains one parameter can narrow the range of the other. If the independent observation is itself uncertain, include it as a measurement or an informed prior rather than fixing the parameter at its nominal value.

## 2.3 Change the model when the scientific question changes

| Dataset | Physical parameters of interest | Effects to include or test |
| --- | --- | --- |
| Transit light curve | Period, radius ratio, impact parameter | Stellar limb darkening, dilution, exposure averaging, baseline drift |
| Radial velocities | Semi-amplitude, period, eccentricity | Instrument offsets, stellar activity, uneven sampling |
| Transmission spectrum | Atmospheric temperature, composition, clouds | Stellar contamination, wavelength binning, reference pressure, opacity |

These effects often depend on **nuisance parameters**. An instrument zero point is not the planet mass, but it still matters for the mass estimate. Fit and propagate uncertainties in nuisance parameters when they can affect the scientific inference. Transit and radial-velocity data constrain different aspects of the same orbit. A joint fit can share relevant orbital parameters while retaining a separate observing model for each dataset. [Espinoza, Kossakowski & Brahm (2019), juliet](https://doi.org/10.1093/mnras/stz2688)

<div data-level="201">

### From two measured bins to a scientific claim

Published JWST measurements of WASP-39 b give a transit depth of about $22{,}705\pm119$ ppm at $4.326\,\mu\mathrm{m}$ and $20{,}965\pm101$ ppm at $3.891\,\mu\mathrm{m}$. The difference is about **1,740 ppm**. If the quoted errors were independent, its standard deviation would be about **156 ppm**. Shared calibration or modeling can correlate the errors, so use the covariance when available. These two points illustrate the measured contrast. Identifying CO₂ uses the shape and wavelength of the band across multiple bins and compares alternative opacities. Inferring an absolute abundance requires additional atmospheric assumptions. [Espinoza et al. (2024)](https://doi.org/10.1038/s41586-024-07768-4) · [Published data table](https://github.com/nespinoza/wasp39-terminators/blob/57587796023fee9051121ea17d435f0ad6852589/figure2/catwoman_tspec_res100_priorlds.txt) · [Transmission Spectroscopy](#Exoplanets/Chapter4)

</div>

## 2.4 Test the predictions the model leaves behind

Compare the model and data in time or wavelength order. Residuals that grow during ingress could point to cadence or limb darkening. Residuals that repeat with stellar rotation could point to activity. A model may fit the data and still assign the wrong explanation if it omits a plausible alternative. Test it on simulated data with known parameters and, when possible, a different observing epoch. A useful model says both what it explains and what evidence could change the result. [Blunt et al. (2023)](https://doi.org/10.3847/1538-3881/acde78)
