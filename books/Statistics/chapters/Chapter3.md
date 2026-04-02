# Chapter 3 — Likelihood Function  
*How do we quantify belief from data?*

In the previous chapter, we saw that models allow us to connect physical systems to observations. But when multiple models can explain the same data, we need a systematic way to decide:

> **Which model is more plausible given the data?**

This is where probability enters.

Rather than asking *“Which model is correct?”*, we instead ask:

> **“How likely is this model, given what we observed?”**

This shift in thinking forms the foundation of **statistical inference**.

In this chapter, we introduce two essential ideas:

- **Prior**
- **Likelihood**

Together, these form the building blocks of modern inference frameworks used across science, including exoplanet atmospheric retrievals, where you often combine **physical models (forward models)** with **data (spectra, light curves)**.

---

# 3.1 The Prior  
*What do we believe before seeing the data?*

A **prior** represents our knowledge (or assumptions) about a system **before** we look at the data.

It answers the question:

> **What do we think is possible, or likely, before observing anything?**

Priors can come from:

- Previous studies  
- Physical constraints  
- Theoretical expectations  
- Population-level trends  

### Examples

- The radius of a planet must be **positive** → a basic physical prior  
- Spot temperatures on K dwarfs are typically within a certain range → an empirical prior  
- Metallicity distributions of stars follow observed Galactic trends → a population prior  

In your own work (e.g., Roman or HST stellar contamination studies), priors might include:

- Expected spot temperature contrasts  
- Reasonable filling factor ranges  
- Constraints from photometric variability  

Priors are not arbitrary—they encode **existing knowledge**.

---

# 3.2 The Likelihood  
*How well does the model explain the data?*

The **likelihood** measures how well a given model reproduces the observed data.

It answers the question:

> **If this model were true, how probable is the data we observed?**

Mathematically, we write:

\[
\mathcal{L}(\theta) = P(\text{data} \mid \theta)
\]

where:

- \( \theta \) represents model parameters  
- \( \mathcal{L} \) is the likelihood  

### Intuition

- A model that closely matches the data → **high likelihood**  
- A model that poorly matches the data → **low likelihood**

### Example (Exoplanet Context)

Suppose we model a transmission spectrum.

- If the model spectrum matches observed features (e.g., water absorption) → high likelihood  
- If the model fails to reproduce key features → low likelihood  

In practice, likelihoods often depend on assumptions about noise, such as Gaussian uncertainties.

---

# 3.3 Prior vs Likelihood

These two components play very different roles:

| Concept | Role |
|---|---|
| **Prior** | Encodes what we believed before seeing the data |
| **Likelihood** | Measures how well the model explains the data |

A useful way to think about it:

- The **prior** shapes *where we are willing to look*  
- The **likelihood** tells us *what the data prefer*  

---

# 3.4 Why This Matters

In many real problems, especially in astrophysics, data alone are not enough to uniquely determine the answer.

Recall from Chapter 2:

> **Degeneracy means multiple models can explain the same data.**

This is where priors become essential.

For example:

- A cloudy atmosphere and a low-abundance atmosphere may produce similar spectra  
- But prior knowledge about cloud physics or chemistry may favor one interpretation  

Similarly, likelihood ensures we remain grounded in the data:

- Even a physically plausible model must still **fit the observations**

---

# 3.5 Toward a Unified Framework

Priors and likelihoods come together in a powerful framework (which we will explore in the next chapter):

> **Bayesian inference**

In that framework, we combine:

- What we believed (**prior**)  
- What the data say (**likelihood**)  

to obtain:

- What we should believe now (**posterior**)  

This approach underlies modern retrieval techniques used in:

- Exoplanet atmospheres  
- Cosmology  
- Machine learning  
- Medical diagnostics  

---

# 3.6 A Final Perspective

At its core, statistical inference is about updating belief.

- We start with assumptions (priors)  
- We confront them with reality (data)  
- We evaluate how well they explain observations (likelihood)  

And from this process, we move closer to understanding the true nature of the system.

In the next chapter, we will bring these ideas together formally and see how they lead to one of the most powerful tools in modern science.