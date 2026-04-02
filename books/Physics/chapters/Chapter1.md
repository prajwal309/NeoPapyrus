# Chapter 1 — Gravity: The Architecture of the Universe

## 1.1 Why Begin with Gravity?

If we are to understand planets, stars, galaxies—or even apples falling from trees—we must begin with gravity.

Gravity is the force that binds matter across cosmic scales. It governs the fall of a stone, the motion of the Moon, the orbit of Earth, and the architecture of planetary systems. It is at once familiar and profound: the weakest of the fundamental forces, yet the dominant one on astronomical scales.

In this first chapter, we build gravity from the ground up. We begin with Newton’s law, derive the full solution to the two-body problem, and then glimpse the complexity that emerges in the three-body problem.

---

## 1.2 Newton’s Law of Universal Gravitation

Newton proposed that any two masses attract each other with a force

\[
F = G \frac{m_1 m_2}{r^2},
\]

where:

- \(m_1\), \(m_2\) are the masses  
- \(r\) is their separation  
- \(G\) is the gravitational constant  

In vector form, the force on mass \(m_1\) due to \(m_2\) is

\[
\mathbf{F}_{12} = -G \frac{m_1 m_2}{r^3} \mathbf{r},
\]

where \(\mathbf{r} = \mathbf{r}_1 - \mathbf{r}_2\).

The force is:
- Attractive
- Central (along the line joining the masses)
- Inversely proportional to \(r^2\)

---

## 1.3 The Two-Body Problem

The two-body problem asks:

> Given two masses interacting gravitationally, how do they move?

We begin with Newton’s second law:

\[
m_1 \ddot{\mathbf{r}}_1 = \mathbf{F}_{12},
\quad
m_2 \ddot{\mathbf{r}}_2 = -\mathbf{F}_{12}.
\]

Substituting the gravitational force:

\[
m_1 \ddot{\mathbf{r}}_1 = -G \frac{m_1 m_2}{r^3} \mathbf{r}.
\]

---

## 1.4 Reduction to a One-Body Problem

Instead of solving for two coupled vectors, we introduce:

### Center of Mass

\[
\mathbf{R} = \frac{m_1 \mathbf{r}_1 + m_2 \mathbf{r}_2}{m_1 + m_2}.
\]

Differentiating twice:

\[
\ddot{\mathbf{R}} = 0.
\]

Thus, the center of mass moves uniformly.

### Relative Coordinate

Define:

\[
\mathbf{r} = \mathbf{r}_1 - \mathbf{r}_2.
\]

Subtracting the two equations of motion gives:

\[
\ddot{\mathbf{r}} = -G (m_1 + m_2)\frac{\mathbf{r}}{r^3}.
\]

Now define the **reduced mass**

\[
\mu = \frac{m_1 m_2}{m_1 + m_2}.
\]

The equation becomes equivalent to a single particle of mass \(\mu\) moving in a central potential:

\[
\mu \ddot{\mathbf{r}} = -G m_1 m_2 \frac{\mathbf{r}}{r^3}.
\]

We have reduced the two-body problem to a one-body problem.

---

## 1.5 Conservation Laws

Because gravity is a central force:

### Angular Momentum is Conserved

\[
\mathbf{L} = \mu \mathbf{r} \times \dot{\mathbf{r}}.
\]

This implies motion is confined to a plane.

### Energy is Conserved

Total energy:

\[
E = \frac{1}{2}\mu \dot{r}^2 + \frac{L^2}{2\mu r^2} - \frac{G m_1 m_2}{r}.
\]

This separates into:
- Radial kinetic energy
- Effective centrifugal barrier
- Gravitational potential energy

---

## 1.6 Deriving the Orbital Equation

We move to polar coordinates \((r, \theta)\).

Angular momentum conservation gives:

\[
L = \mu r^2 \dot{\theta}.
\]

Using this, we rewrite radial motion in terms of \(u = 1/r\).

After substitution and simplification, we obtain:

\[
\frac{d^2 u}{d\theta^2} + u =
\frac{G (m_1 + m_2)}{L^2/\mu}.
\]

This linear differential equation has solution:

\[
u(\theta) =
\frac{G (m_1 + m_2)\mu}{L^2}
\left(1 + e \cos \theta\right).
\]

Returning to \(r\):

\[
r(\theta) =
\frac{a(1 - e^2)}{1 + e \cos \theta}.
\]

This is the equation of a conic section.

---

## 1.7 Types of Orbits

The parameter \(e\) is the eccentricity.

- \(e = 0\) → Circle  
- \(0 < e < 1\) → Ellipse  
- \(e = 1\) → Parabola  
- \(e > 1\) → Hyperbola  

Bound systems have:

\[
E < 0.
\]

Unbound systems have:

\[
E \ge 0.
\]

Thus, all gravitational two-body orbits are conic sections.

---

## 1.8 Kepler’s Laws from Newton

From our derivation we recover:

### 1. Elliptical Orbits
Planets move in ellipses with the center of mass at one focus.

### 2. Equal Areas in Equal Times
Angular momentum conservation implies constant areal velocity.

### 3. Period–Semi-Major Axis Relation

From orbital mechanics:

\[
T^2 =
\frac{4\pi^2 a^3}{G(m_1 + m_2)}.
\]

This is Kepler’s Third Law in its general form.

---

## 1.9 Physical Example: Earth–Sun System

For Earth orbiting the Sun:

- \(m_1 \gg m_2\)
- \(m_1 + m_2 \approx M_\odot\)

Then:

\[
T^2 = \frac{4\pi^2 a^3}{G M_\odot}.
\]

With \(a = 1\) AU, we recover:

\[
T = 1 \text{ year}.
\]

Gravity predicts the calendar.

---

## 1.10 The Three-Body Problem

Add one more mass.

That is all it takes to destroy exact solvability.

The three-body problem asks:

> How do three masses move under mutual gravity?

The equations become:

\[
m_i \ddot{\mathbf{r}}_i =
\sum_{j \ne i}
G m_i m_j
\frac{\mathbf{r}_j - \mathbf{r}_i}
{|\mathbf{r}_j - \mathbf{r}_i|^3}.
\]

There is no general closed-form solution.

---

## 1.11 Why Three Bodies Are Hard

In the two-body case:

- Motion is integrable.
- Conserved quantities fully constrain trajectories.

In the three-body case:

- The system becomes nonlinear and chaotic.
- Small changes in initial conditions can produce radically different outcomes.
- Resonances emerge.
- Energy can transfer between bodies.

This complexity governs:

- Planetary migration
- Orbital resonances
- Stability of multiplanet systems
- Trojan asteroids
- Lagrange points

---

## 1.12 Special Solutions

Although no general solution exists, special cases are solvable:

- Lagrange equilateral solutions  
- Restricted three-body problem  
- Circular restricted problem  

In the restricted problem (e.g., Sun–Earth–asteroid), the third mass is negligible and does not influence the other two. This leads to the famous Lagrange points \(L_1\) through \(L_5\).

---

## 1.13 From Order to Complexity

The two-body problem is elegant and exact.

The three-body problem is unstable and rich.

Together, they form the backbone of celestial mechanics.

Gravity is simple in law:

\[
F \propto \frac{1}{r^2}.
\]

Yet from this simple inverse-square dependence emerges:

- Elliptical orbits  
- Resonances  
- Chaos  
- Planetary systems  
- The architecture of galaxies  

Gravity is the quiet sculptor of the universe.

And with it, we begin physics.