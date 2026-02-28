# Chapter 3 — Blackbody Radiation: Light as a Thermometer

## 3.1 Why Blackbody Radiation Matters

Astronomy is an observational science. We cannot touch stars, collect their material (with rare exceptions), or place thermometers on their surfaces. Instead, we measure light.

Blackbody radiation provides the bridge between light and physical properties such as:

- Temperature  
- Luminosity  
- Radius  
- Energy output  
- Stellar classification  

The concept of a blackbody marks one of the great turning points in physics. It led directly to quantum theory and remains foundational in astrophysics.

---

## 3.2 What Is a Blackbody?

A blackbody is an idealized object that:

- Absorbs all incident radiation (no reflection)
- Emits radiation solely determined by its temperature

The radiation emitted depends only on temperature—not composition.

Real stars are not perfect blackbodies, but to first order, they behave remarkably close to one.

---

## 3.3 The Blackbody Spectrum

The energy emitted per unit area, per unit wavelength, per unit time is given by Planck’s Law:

\[
B_\lambda(T) =
\frac{2hc^2}{\lambda^5}
\frac{1}{e^{hc/\lambda kT} - 1}.
\]

Where:

- \(h\) is Planck’s constant  
- \(c\) is the speed of light  
- \(k\) is Boltzmann’s constant  
- \(T\) is temperature  
- \(\lambda\) is wavelength  

The resulting spectrum:

- Has a single peak
- Falls steeply at short wavelengths
- Falls gradually at long wavelengths

Hotter objects:
- Emit more total energy
- Peak at shorter wavelengths

---

## 3.4 Wien’s Displacement Law

The wavelength of maximum emission satisfies:

\[
\lambda_{\text{max}} T = b,
\]

where

\[
b = 2.898 \times 10^{-3} \, \text{m·K}.
\]

Thus,

\[
\lambda_{\text{max}} = \frac{b}{T}.
\]

### Example: The Sun

The Sun’s surface temperature is approximately:

\[
T_\odot \approx 5800\,\text{K}.
\]

Then:

\[
\lambda_{\text{max}} \approx
\frac{2.9 \times 10^{-3}}{5800}
\approx 500\,\text{nm}.
\]

This lies in the visible spectrum.

Thus the Sun appears white-yellow.

---

## 3.5 The Stefan–Boltzmann Law

The total energy emitted per unit area is:

\[
F = \sigma T^4,
\]

where:

\[
\sigma = 5.67 \times 10^{-8} \,\text{W m}^{-2}\text{K}^{-4}.
\]

This is obtained by integrating Planck’s law over all wavelengths.

The total luminosity of a spherical star is:

\[
L = 4\pi R^2 \sigma T^4.
\]

This relation is central in astronomy.

---

## 3.6 Determining Stellar Radius

Suppose we measure:

- The star’s apparent flux \(F_{\text{obs}}\)
- Its distance \(d\)
- Its effective temperature \(T\)

First compute luminosity:

\[
L = 4\pi d^2 F_{\text{obs}}.
\]

Then use:

\[
L = 4\pi R^2 \sigma T^4.
\]

Solve for radius:

\[
R =
\sqrt{
\frac{L}{4\pi \sigma T^4}
}.
\]

Thus:

1. Temperature comes from spectrum (Wien’s law or spectral fitting)
2. Luminosity comes from flux + distance
3. Radius follows directly

This is one of the most powerful tools in stellar astrophysics.

---

## 3.7 Color and Temperature

Stars are classified by spectral type:

| Type | Temperature (K) | Color |
|------|-----------------|-------|
| O    | > 30,000       | Blue  |
| B    | 10,000–30,000  | Blue-white |
| A    | 7,500–10,000   | White |
| F    | 6,000–7,500    | Yellow-white |
| G    | 5,200–6,000    | Yellow |
| K    | 3,700–5,200    | Orange |
| M    | < 3,700        | Red |

This classification reflects blackbody-like behavior.

Hotter stars peak in ultraviolet.  
Cooler stars peak in infrared.

---

## 3.8 Blackbody Approximation in Practice

Real stellar spectra deviate from perfect blackbodies due to:

- Atomic absorption lines  
- Molecular bands  
- Stellar atmospheres  
- Metallicity  

However, the overall continuum closely follows blackbody radiation.

Astronomers often define an **effective temperature** \(T_{\rm eff}\):

The temperature a perfect blackbody would need to match the star’s total flux.

---

## 3.9 Radius–Temperature–Luminosity Connection

Combining relationships gives insight into stellar evolution.

Suppose two stars have the same temperature but different luminosities.

From:

\[
L \propto R^2 T^4,
\]

if \(T\) is constant:

\[
L \propto R^2.
\]

Thus:

A star 100 times more luminous must have 10 times larger radius.

This distinguishes:

- Main sequence stars  
- Giants  
- Supergiants  

All from radiation physics.

---

## 3.10 Example: Determining a Star’s Radius

Suppose:

Measured flux:
\[
F_{\text{obs}} = 1 \times 10^{-8} \, \text{W m}^{-2}.
\]

Distance:
\[
d = 10\,\text{pc}
= 3.09 \times 10^{17}\,\text{m}.
\]

Compute luminosity:

\[
L = 4\pi d^2 F_{\text{obs}}.
\]

Substitute:

\[
L \approx
4\pi (3.09 \times 10^{17})^2
\times 10^{-8}.
\]

After calculation:

\[
L \approx 1.2 \times 10^{26}\,\text{W}.
\]

If \(T = 5800\,\text{K}\),

\[
R =
\sqrt{
\frac{L}{4\pi \sigma T^4}
}.
\]

This yields a radius comparable to the Sun.

Thus light alone gives stellar size.

---

## 3.11 Blackbody Radiation Beyond Stars

Blackbody radiation applies to:

- Planets (thermal emission)
- Cosmic Microwave Background (2.7 K)
- Dust in galaxies
- Accretion disks

The CMB is one of the most perfect blackbodies ever measured.

Its spectrum confirmed the Big Bang model.

---

## 3.12 Quantum Origins

Classical physics predicted the ultraviolet catastrophe:

\[
B_\lambda \to \infty \quad \text{as } \lambda \to 0.
\]

Planck resolved this by proposing energy quantization:

\[
E = h\nu.
\]

This marked the birth of quantum mechanics.

Thus blackbody radiation is not merely useful—it reshaped physics itself.

---

## 3.13 Light as a Diagnostic Tool

From blackbody theory we extract:

- Temperature from peak wavelength  
- Luminosity from integrated flux  
- Radius from Stefan–Boltzmann law  
- Evolutionary state from position on H–R diagram  

Radiation is the language of the stars.

Through it, we measure properties across unimaginable distances.

---

## 3.14 Summary

Blackbody radiation teaches us:

- Hotter objects radiate more intensely  
- Hotter objects peak at shorter wavelengths  
- Luminosity depends strongly on temperature  
- Radius can be inferred from light  

A simple thermal spectrum unlocks:

- Stellar classification  
- Stellar structure  
- Cosmology  

Light is not merely illumination.

It is measurement.