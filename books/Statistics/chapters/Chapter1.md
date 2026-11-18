# Chapter 1 — Statistical Concepts for Finding Planets

## 1.1 A detection pipeline proposes candidates

A transit search flags periodic dips in stellar brightness. Some are planetary transits. Others come from eclipsing binaries blended into the target aperture, stellar variability, or detector artifacts. A planet can also go undetected if its transits are shallow, fall in data gaps, or fail a vetting cut. Which kind of mistake matters depends on the question. A follow-up team wants a clean list of candidates. A team estimating how common planets are also needs to know which planets the survey missed. [Morton et al. (2016)](https://arxiv.org/abs/1605.02825) · [Christiansen et al. (2015)](https://doi.org/10.1088/0004-637X/810/2/95)

## 1.2 Read a confusion matrix

Imagine a labeled, synthetic test set of 10,000 stars. Exactly 100 host a transiting planet in the period and radius range being searched. The pipeline accepts 80 of those planets and incorrectly flags 99 other stars.

| True class | Flagged as a candidate | Not flagged | Total |
| --- | ---: | ---: | ---: |
| Transiting planet in scope | 80 true positives | 20 false negatives | 100 |
| No transiting planet in scope | 99 false positives | 9,801 true negatives | 9,900 |

- **Recall or sensitivity** is the fraction of actual positives recovered, $80/100=80\%$.
- **Precision or positive predictive value** is the fraction of flagged cases that are genuine, $80/179\approx45\%$. Here “precision” describes candidate classification. Elsewhere it often describes the size of a measurement uncertainty.
- **False-positive rate** is the fraction of actual negatives mistakenly flagged, $99/9900=1\%$. The fraction of candidates that are false is much larger, $99/179\approx55\%$.
- **Accuracy** is the fraction of all classifications that are right, $(80+9801)/10000\approx98.8\%$. A rule that flags nothing reaches 99% in this test and recovers zero planets.

### Why prevalence changes the answer

In a sample where planets are rare, a small false-positive rate still acts on a large number of stars. Write $p$ for the fraction of tested stars that have a signal of the kind sought, $s$ for the sensitivity, and $q$ for the false-positive rate. Then

$$
P(\mathrm{planet}\mid\mathrm{flagged})=
\frac{sp}{sp+q(1-p)}.
$$

The numerator is the expected fraction of the whole sample that contains a real flagged planet. The denominator adds false alarms. If a preselected sample increases $p$ from 1% to 10% and the same $s$ and $q$ apply, precision rises from about 45% to about 90%. A change in target selection can also change the sensitivity and false-positive rate, so test that assumption before transferring those numbers to another survey.

## 1.3 Completeness, reliability, and follow-up

In a real survey we rarely know the correct label for every star. **Injection–recovery** puts simulated transit signals into the data and runs the full search and vetting pipeline. The recovered fraction estimates completeness for the types of signals injected. It is generally a function of period, radius, stellar properties, and data quality. The Kepler team injected signals into calibrated pixel data to measure this sensitivity empirically. Run the same preprocessing and cuts used for the catalog. Injecting signals after detrending can miss transits that detrending would suppress. [Christiansen et al. (2015)](https://doi.org/10.1088/0004-637X/810/2/95)

**Reliability** concerns contamination among the candidates that survive. Test for instrumental false alarms and compare astrophysical alternatives, such as a faint eclipsing binary near the target. Centroid motion, secondary eclipses, and high-resolution imaging constrain different alternatives. A false-positive probability for an individual candidate is conditional on the scenarios considered and the prior odds assigned to them. [Morton et al. (2016)](https://arxiv.org/abs/1605.02825)

<div data-level="201">

### Worked occurrence-rate correction

Suppose a synthetic survey of 2,000 comparable stars finds 20 candidates in a narrow bin. Follow-up and vetting imply an expected 18 genuine detections. Given a planet in this bin, let the geometric transit probability be 5% and the conditional pipeline recovery probability, given a transit, be 60%. The expected number of detections per planet in the surveyed population is then $0.05\times0.60=0.03$. A rough occurrence estimate is

$$
\frac{18}{2000\times0.05\times0.60}=0.30\ \text{planets per star}.
$$

This calculation assumes the same detection probability across the bin and across targets. It also treats the reliability and completeness estimates as fixed. A population analysis should propagate their uncertainty and account for imperfect radius and period measurements near the bin boundaries. This estimate is the average number of planets per target star in that bin. To infer the fraction of stars that host at least one, you also need information about multiplicity. [Foreman-Mackey, Hogg & Morton (2014)](https://arxiv.org/abs/1406.3020)

</div>

## 1.4 Selection also biases measured properties

Planet samples can be biased after detection. When observers publish only high-significance radial-velocity masses, weak signals whose estimates fluctuate upward are more likely to pass the cut. Across a sample, this can inflate inferred masses at a given radius. Burt and colleagues demonstrated the effect in simulated TESS follow-up and found that including weak constraints helped reduce it. A survey with nondetections can therefore teach us about the population, provided the analysis models how targets were chosen and which measurements were reported. [Burt et al. (2018)](https://doi.org/10.3847/1538-3881/aae697)

**Check your reasoning.** If two transit searches have the same 80% recall but one has fewer false positives in the same test sample, which has the higher precision? The search with fewer false positives. Would this imply better occurrence-rate estimates on its own? Only if detection efficiency and the remaining contamination are also understood. [Next: Forward and Inverse Models](#Chapter2)
