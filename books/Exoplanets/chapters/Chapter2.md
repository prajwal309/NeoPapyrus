# Chapter 2  - Orbital Dynamics of Exoplanets

Orbital dynamics forms the backbone of exoplanet science. Every observable we measure — transit timing, radial velocity, phase curves, eclipse timing, even atmospheric escape — is ultimately encoded in orbital motion.  

This chapter introduces the classical framework of orbital dynamics, following the spirit of Murray & Dermott’s *Solar System Dynamics*, but oriented toward exoplanet applications.

---


## 2.1 Kepler’s Laws — The Geometry of Motion

### First Law — Elliptical Orbits

Planets move in **ellipses**, with the star located at one focus.

![Elliptical Orbit](https://upload.wikimedia.org/wikipedia/commons/9/96/Kepler_laws_diagram.svg)

Unlike perfect circles, ellipses introduce **distance variation**, which directly impacts irradiation, equilibrium temperature, and atmospheric structure in exoplanets.

---

### Second Law — Equal Areas in Equal Times

A planet sweeps out **equal areas in equal intervals of time**.

<figure style="float: right; width: 35%; margin: 0 0 1rem 1.5rem;">
  <img src="/books/Exoplanets/chapters/figures/EllipticalOrbit.gif"
     alt="Directly Imaged Planets Around HR 8799"
     style="width: 100%; border-radius: 6px;" />
  <figcaption style="font-size: 0.85rem; color: #555; margin-top: 0.4rem;">
    A planet orbiting its host star sweeps out equal areas in equal intervals of time. As a result, the planet moves faster when it is near periapsis (closest to the star) and slower near apoapsis (farthest from the star), reflecting the conservation of angular momentum in orbital motion.
  </figcaption>
</figure>

This law encodes a profound truth:

- Planets move **faster near periastron**
- Planets move **slower near apastron**
- The motion is not uniform — but it is **predictably non-uniform**

Mathematically, this is a statement of **angular momentum conservation**:

\[
\frac{dA}{dt} = \frac{L}{2\mu}
\]

---

### Third Law — The Period–Distance Relation

The square of the orbital period is proportional to the cube of the semi-major axis:

\[
P^2 = \frac{4\pi^2}{G (m_1 + m_2)} a^3
\]

For exoplanets where \( m_p \ll M_\star \):

\[
P^2 \approx \frac{4\pi^2}{G M_\star} a^3
\]

This law forms the foundation of:
- Radial velocity mass measurements  
- Transit timing  
- Stellar density constraints from light curves  

---

## 2.1 The Two–Body Problem


To understand the motion of planets, we begin with the simplest gravitational system: two masses interacting only with each other. This problem lies at the foundation of celestial mechanics and describes the motion of planets around stars, moons around planets, and binary stars orbiting one another.

According to Newton’s law of gravitation, two point masses \(m_1\) and \(m_2\) separated by a distance \(r\) attract each other with a force

\[
\mathbf{F} = - \frac{G m_1 m_2}{r^3} \mathbf{r},
\]

where \(G\) is the gravitational constant and the vector

\[
\mathbf{r} = \mathbf{r}_1 - \mathbf{r}_2
\]

represents the separation between the two bodies. The negative sign indicates that the force is attractive and acts along the line connecting the masses.

---



### Reduction to an Equivalent One–Body Problem

Although two bodies are involved, the dynamics of the system can be simplified by transforming the coordinates. Instead of following each mass individually, we describe the motion in terms of their **relative separation**.

Define the relative position vector

\[
\mathbf{r} = \mathbf{r}_1 - \mathbf{r}_2 .
\]

It is convenient to introduce the **reduced mass**

\[
\mu = \frac{m_1 m_2}{m_1 + m_2},
\]

which allows the two-body system to be rewritten as the motion of a single particle moving in a central gravitational potential.

The equation of motion becomes

\[
\mu \ddot{\mathbf{r}} = -\frac{G m_1 m_2}{r^3}\mathbf{r}.
\]

Dividing both sides by the reduced mass yields

\[
\ddot{\mathbf{r}} =
-\frac{G (m_1 + m_2)}{r^3}\mathbf{r}.
\]

It is customary to define the **gravitational parameter**

\[
\mathcal{G} = G(m_1 + m_2),
\]

so that the equation of motion can be written in the compact form

\[
\ddot{\mathbf{r}} = -\frac{\mathcal{G}}{r^3}\mathbf{r}.
\]

This differential equation describes the motion of a particle in a central inverse–square force field. Its solutions are the **Keplerian orbits**—ellipses, parabolas, and hyperbolas—that govern the motion of planets, moons, and many other astrophysical systems.

---

## 2.2 Conservation Laws

### Angular Momentum

For a central force, angular momentum is conserved:

\[
\mathbf{L} = \mu \mathbf{r} \times \dot{\mathbf{r}}
\]

Since torque is zero,

\[
\frac{d\mathbf{L}}{dt} = 0
\]

Thus, motion occurs in a plane.

---

### Energy

The total specific orbital energy is

\[
\epsilon = \frac{v^2}{2} - \frac{\mathcal{G}}{r}
\]

For bound systems:

\[
\epsilon = -\frac{\mathcal{G}}{2a}
\]

where \( a \) is the semi-major axis.

---

## 2.3 Conic Sections

The general orbital solution is

\[
r(\theta) = \frac{a (1 - e^2)}{1 + e \cos\theta}
\]

where:

- \( a \) = semi-major axis  
- \( e \) = eccentricity  

Orbit types:

| Eccentricity | Orbit Type |
|--------------|-----------|
| \( e = 0 \) | Circle |
| \( 0 < e < 1 \) | Ellipse |
| \( e = 1 \) | Parabola |
| \( e > 1 \) | Hyperbola |

Most exoplanets have elliptical orbits.

---

## 2.4 Kepler’s Laws

### First Law
Planets move in ellipses with the star at one focus.

### Second Law
Equal areas are swept in equal times.

Mathematically:

\[
\frac{dA}{dt} = \frac{L}{2\mu}
\]

### Third Law

\[
P^2 = \frac{4\pi^2}{G (m_1 + m_2)} a^3
\]

For exoplanets where \( m_p \ll M_\star \):

\[
P^2 \approx \frac{4\pi^2}{G M_\star} a^3
\]

---

## 2.5 Orbital Elements

An orbit is fully described by six elements:

1. \( a \) — semi-major axis  
2. \( e \) — eccentricity  
3. \( i \) — inclination  
4. \( \Omega \) — longitude of ascending node  
5. \( \omega \) — argument of periastron  
6. \( M \) — mean anomaly  

These define the 3D orientation and phase of the orbit.

---

## 2.6 Kepler’s Equation

The mean anomaly is

\[
M = n (t - \tau)
\]

where

\[
n = \sqrt{\frac{G(M_\star + m_p)}{a^3}}
\]

The eccentric anomaly \( E \) satisfies:

\[
M = E - e \sin E
\]

This equation must be solved numerically.

The true anomaly is obtained from:

\[
\tan\left(\frac{f}{2}\right) =
\sqrt{\frac{1+e}{1-e}} \tan\left(\frac{E}{2}\right)
\]

---

## 2.7 Radial Velocity Signal

The observable stellar radial velocity is

\[
v_r(t) =
K [\cos(\omega + f(t)) + e \cos\omega] + \gamma
\]

where

\[
K =
\left( \frac{2\pi G}{P} \right)^{1/3}
\frac{m_p \sin i}{(M_\star + m_p)^{2/3}}
\frac{1}{\sqrt{1 - e^2}}
\]

This is the foundation of Doppler exoplanet detection.

---

## 2.8 Transit Geometry

A transit occurs when the impact parameter

\[
b = \frac{a \cos i}{R_\star}
\frac{1 - e^2}{1 + e \sin\omega}
\]

satisfies

\[
b < 1 + \frac{R_p}{R_\star}
\]

The transit probability is approximately

\[
P_{\text{transit}} \approx
\frac{R_\star + R_p}{a}
\frac{1 + e \sin\omega}{1 - e^2}
\]

---

## 2.9 Beyond Two Bodies

Real systems are not isolated.

### Perturbations
- Planet–planet interactions
- Tidal forces
- General relativity

Perturbation theory introduces disturbing functions and secular evolution.

### Three-Body Problem

The full three-body equations:

\[
m_i \ddot{\mathbf{r}}_i =
\sum_{j \neq i}
\frac{G m_i m_j}{|\mathbf{r}_i - \mathbf{r}_j|^3}
(\mathbf{r}_j - \mathbf{r}_i)
\]

No general closed-form solution exists.

Consequences include:
- Mean-motion resonances
- Transit Timing Variations (TTVs)
- Kozai–Lidov oscillations

---

## 2.10 Summary

Orbital dynamics provides:

- The link between observables and planetary masses
- The geometry underlying transits
- The architecture of multi-planet systems
- The dynamical history encoded in eccentricities and inclinations

All exoplanet inference begins with Keplerian motion — and grows from there.