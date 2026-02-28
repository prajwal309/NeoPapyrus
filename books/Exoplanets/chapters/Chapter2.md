# Chapter 2  - Orbital Dynamics of Exoplanets

Orbital dynamics forms the backbone of exoplanet science. Every observable we measure — transit timing, radial velocity, phase curves, eclipse timing, even atmospheric escape — is ultimately encoded in orbital motion.  

This chapter introduces the classical framework of orbital dynamics, following the spirit of Murray & Dermott’s *Solar System Dynamics*, but oriented toward exoplanet applications.

---

## 2.1 The Two–Body Problem

We begin with Newton’s law of gravitation.

For two point masses \( m_1 \) and \( m_2 \), separated by distance \( r \), the gravitational force is

\[
\mathbf{F} = - \frac{G m_1 m_2}{r^3} \mathbf{r}
\]

where:
- \( G \) is the gravitational constant,
- \( \mathbf{r} = \mathbf{r}_1 - \mathbf{r}_2 \)

---

### Reduction to One-Body Form

Define the relative coordinate:

\[
\mathbf{r} = \mathbf{r}_1 - \mathbf{r}_2
\]

and the reduced mass

\[
\mu = \frac{m_1 m_2}{m_1 + m_2}
\]

The equation of motion becomes

\[
\mu \ddot{\mathbf{r}} = -\frac{G m_1 m_2}{r^3} \mathbf{r}
\]

Dividing through by \( \mu \):

\[
\ddot{\mathbf{r}} = - \frac{G (m_1 + m_2)}{r^3} \mathbf{r}
\]

We define the gravitational parameter:

\[
\mathcal{G} = G (m_1 + m_2)
\]

so that

\[
\ddot{\mathbf{r}} = - \frac{\mathcal{G}}{r^3} \mathbf{r}
\]

This is the central force equation governing all Keplerian motion.

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