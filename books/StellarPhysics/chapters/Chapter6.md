# Chapter 6 — Building a Star: Stellar Structure Equations

---

## 6.1 From Physics to a Star

<div data-level="101">

So far, we have explored the pieces of a star:

- Gravity pulling inward  
- Pressure pushing outward  
- Energy generated in the core  
- Energy transported to the surface  

Now we bring everything together.

A star is not described by a single equation,  
but by a **set of equations working together**.

These equations allow us to *build a star from first principles*.

</div>

---

<div data-level="201">

A star is described by four coupled differential equations:

1. **Hydrostatic equilibrium**  
2. **Mass conservation**  
3. **Energy transport**  
4. **Energy generation**  

These equations determine how:

- Pressure  
- Temperature  
- Density  
- Luminosity  

change with radius inside the star.

</div>

---

<div data-level="301">

The stellar structure equations form a system:

\[
\frac{dP}{dr}, \quad \frac{dM}{dr}, \quad \frac{dL}{dr}, \quad \frac{dT}{dr}
\]

They must be solved simultaneously with:

- An equation of state  
- Opacity tables  
- Nuclear reaction rates  

This transforms stellar physics into a **boundary value problem**.

</div>

---

## 6.2 The Four Fundamental Equations

---

### 6.2.1 Hydrostatic Equilibrium

<div data-level="101">

Gravity tries to collapse the star.

Pressure resists.

Balance between them keeps the star stable.

</div>

---

<div data-level="201">

\[
\frac{dP}{dr} = - \frac{G M(r)\rho(r)}{r^2}
\]

This ensures that each layer of the star is supported against gravity.

</div>

---

<div data-level="301">

This equation couples pressure to mass distribution.

It determines:

- How pressure builds toward the center  
- How structure depends on stellar mass  

It is the backbone of stellar stability.

</div>

---

### 6.2.2 Mass Conservation

<div data-level="101">

As we move outward in a star, more mass is enclosed.

</div>

---

<div data-level="201">

\[
\frac{dM}{dr} = 4\pi r^2 \rho
\]

This tells us how mass accumulates with radius.

</div>

---

<div data-level="301">

Mass conservation links density to the structure.

It defines how matter is distributed throughout the star.

Combined with hydrostatic equilibrium, it sets the density profile.

</div>

---

### 6.2.3 Energy Generation

<div data-level="101">

Energy is created in the core and flows outward.

</div>

---

<div data-level="201">

\[
\frac{dL}{dr} = 4\pi r^2 \rho \, \epsilon
\]

where:

- \(L\) = luminosity  
- \(\epsilon\) = energy generation rate  

</div>

---

<div data-level="301">

This equation depends on:

- Temperature  
- Density  
- Composition  

It determines where energy is produced and how it builds up inside the star.

In massive stars, energy generation is highly concentrated in the core.

</div>

---

### 6.2.4 Energy Transport

<div data-level="101">

Energy must travel from the core to the surface.

</div>

---

<div data-level="201">

For radiative transport:

\[
\frac{dT}{dr} = - \frac{3\kappa \rho L}{16\pi a c T^3 r^2}
\]

For convection:

- Temperature gradient follows adiabatic conditions  

</div>

---

<div data-level="301">

The dominant transport mechanism is determined by:

- Opacity  
- Temperature gradient  
- Stability criteria (Schwarzschild condition)

This equation closes the system by linking temperature to luminosity.

</div>

---

## 6.3 Boundary Conditions

<div data-level="101">

To solve these equations, we need starting points.

We must know what happens at the center and the surface.

</div>

---

<div data-level="201">

### Center (\(r = 0\)):

- \(M(0) = 0\)  
- \(L(0) = 0\)  

### Surface (\(r = R\)):

- \(P(R) \approx 0\)  
- \(T(R) \approx T_{\mathrm{eff}}\)  

</div>

---

<div data-level="301">

Boundary conditions turn the system into a **well-posed problem**.

In practice:

- Surface boundary often matched to atmosphere models  
- Core conditions determined iteratively  

This creates a **two-point boundary value problem**, which is numerically challenging.

</div>

---

## 6.4 Numerical Stellar Models

<div data-level="101">

These equations are too complex to solve by hand.

So we use computers.

</div>

---

<div data-level="201">

Numerical stellar models:

- Divide the star into layers  
- Solve equations step by step  
- Adjust parameters until consistency is reached  

Inputs include:

- Mass  
- Composition  
- Opacity tables  
- Nuclear reaction rates  

</div>

---

<div data-level="301">

Modern stellar modeling involves:

- Iterative solvers  
- Adaptive grids  
- Coupling to atmosphere models  

Examples of stellar evolution codes:

- MESA (Modules for Experiments in Stellar Astrophysics)  
- GARSTEC  
- CESAM  

Challenges include:

- Convection modeling  
- Opacity uncertainties  
- Rotation and magnetic fields  

These models produce:

- Evolutionary tracks  
- Luminosity and temperature predictions  
- Internal structure profiles  

</div>

---

## 6.5 A Unified Picture

<div data-level="101">

A star is not just a ball of gas.

It is a system governed by a set of rules.

</div>

---

<div data-level="201">

These rules connect:

- Gravity  
- Energy  
- Matter  
- Radiation  

</div>

---

<div data-level="301">

The stellar structure equations unify physics across scales:

- Nuclear reactions (microscopic)  
- Fluid dynamics (macroscopic)  
- Radiative processes  

They allow us to predict:

- Stellar lifetimes  
- Evolution  
- Observable properties  

</div>

---

## Summary

- Stars are described by four coupled differential equations  
- These equations govern pressure, mass, luminosity, and temperature  
- Boundary conditions define the structure of the solution  
- Numerical models are required to solve realistic stars  
- Stellar structure connects fundamental physics to observable properties  

---

## Looking Ahead

In the next chapter, we will explore:

> **Stellar atmospheres and spectra**

— how stars produce the light that we observe.
