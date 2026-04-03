# Chapter 1 — Learning from Data: The Birth of Machine Learning

---

## 1.1 What Does It Mean to Learn?

<div data-level="101">

When astronomers first looked at the night sky, they did not begin with equations.  
They began with **patterns**.

The periodic motion of planets.  
The dimming of stars during transits.  
The subtle variations in stellar brightness.

Machine learning begins in the same way.

It is the art of teaching a system to **recognize patterns in data** — without explicitly programming the rules.

Instead of saying:

> “If the brightness drops by X, then it is a planet,”  

we allow the system to **discover this relationship from data itself**.

In this sense, machine learning is not about writing instructions.  
It is about **learning the hidden structure of nature**.

</div>

---

<div data-level="201">

Formally, machine learning seeks to learn a function

\[
f: X \rightarrow Y
\]

that maps inputs \(X\) (data) to outputs \(Y\) (predictions or labels).

The crucial idea is that this function is **not explicitly defined**, but **inferred from examples**.

In exoplanet science, this mapping appears naturally:

- Light curves → Transit detection  
- Spectra → Atmospheric composition  
- Stellar variability → Spot properties  

Rather than constructing fully analytic models, we allow the data to guide the relationship.

</div>

---

<div data-level="301">

At a deeper level, machine learning is a problem of **statistical inference in high-dimensional spaces**.

Given a dataset  
\[
\mathcal{D} = \{(x_i, y_i)\}_{i=1}^{N},
\]

we seek a function \(f_\theta\) parameterized by \(\theta\) that minimizes a loss function:

\[
\mathcal{L}(\theta) = \sum_{i=1}^{N} \ell\left(y_i, f_\theta(x_i)\right).
\]

This formulation connects directly to maximum likelihood estimation and Bayesian inference:

\[
p(\theta | \mathcal{D}) \propto p(\mathcal{D} | \theta)\, p(\theta).
\]

Machine learning models can therefore be interpreted as **approximate inference engines**, capable of modeling complex, nonlinear relationships that are analytically intractable.

</div>

---

## 1.2 A Motivating Example: Finding Planets in Light Curves

<div data-level="101">

Imagine observing a star over time.

Most of the time, its brightness stays constant.  
But occasionally, it dips — just slightly.

That dip could mean a planet is passing in front of the star.

Now imagine thousands of stars, each with years of data.

How do we find all the planets?

We could look at each light curve manually — but that would take lifetimes.

Instead, we teach a machine:

> “Here are examples of stars with planets.  
> Here are examples without.  
> Learn the difference.”

This is machine learning in action.

</div>

---

<div data-level="201">

This problem is an example of **supervised learning**.

We are given:

- Inputs: Light curves \(x_i(t)\)  
- Labels: Planet present (1) or not (0)

The goal is to learn a classifier:

\[
f(x) = \hat{y}
\]

that predicts whether a transit signal exists.

In practice, this involves extracting features such as:

- Transit depth  
- Duration  
- Periodicity  

or allowing models (e.g., neural networks) to learn features automatically.

</div>

---

<div data-level="301">

From a statistical perspective, this becomes a problem of learning the conditional distribution:

\[
p(y \mid x).
\]

The optimal classifier (in the Bayesian sense) is:

\[
\hat{y} = \arg\max_y p(y \mid x).
\]

In exoplanet detection pipelines (e.g., Kepler, TESS), machine learning models are often used alongside traditional methods (e.g., Box Least Squares) to improve detection efficiency and reduce false positives.

The challenge lies in:

- Noise (stellar variability, instrumental systematics)  
- Class imbalance (few planets, many non-planets)  
- Domain shifts (different instruments, cadences)

These challenges motivate robust, probabilistic, and interpretable learning methods.

</div>

---

## 1.3 Types of Machine Learning

<div data-level="101">

There are three main ways a machine can learn:

1. **Supervised Learning** — learning from labeled examples  
2. **Unsupervised Learning** — finding patterns without labels  
3. **Reinforcement Learning** — learning by trial and error  

Each corresponds to a different way of interacting with data.

</div>

---

<div data-level="201">

### Supervised Learning
Learn a mapping from inputs to outputs.

Examples:
- Classifying light curves (planet vs no planet)  
- Predicting stellar temperature  

---

### Unsupervised Learning
Discover structure in data without labels.

Examples:
- Clustering stars by variability behavior  
- Dimensionality reduction of spectra  

---

### Reinforcement Learning
Learn actions through rewards.

Examples (emerging in astrophysics):
- Optimizing observation strategies  
- Adaptive survey planning  

</div>

---

<div data-level="301">

These paradigms correspond to different probabilistic objectives:

- **Supervised:** Learn \(p(y \mid x)\)  
- **Unsupervised:** Learn \(p(x)\) or latent structure  
- **Reinforcement:** Maximize expected reward  
  \[
  \mathbb{E}\left[\sum_t R_t\right]
  \]

In practice, modern approaches often combine these frameworks:

- Semi-supervised learning  
- Self-supervised learning  
- Bayesian reinforcement learning  

</div>

---

## 1.4 Why Machine Learning Matters in Exoplanet Science

<div data-level="101">

The universe is vast.

There are too many stars, too much data, and too many signals for humans to analyze alone.

Machine learning allows us to:

- Search faster  
- Detect subtle signals  
- Understand complex systems  

It is like building a telescope — but for patterns.

</div>

---

<div data-level="201">

Modern missions such as:

- **Kepler**  
- **TESS**  
- **JWST**  

produce enormous datasets.

Machine learning enables:

- Automated transit detection  
- Stellar variability modeling  
- Atmospheric retrieval acceleration  

</div>

---

<div data-level="301">

Machine learning is not just a tool — it is becoming a **core methodology**.

In many cases, the forward models are:

- Computationally expensive  
- Degenerate (e.g., stellar contamination vs atmosphere)  
- High-dimensional  

Machine learning provides:

- Surrogate models  
- Fast emulators  
- Data-driven priors  

This is especially critical in problems like:

- Transmission spectroscopy under stellar heterogeneity  
- Population-level inference of stellar properties  
- Time-domain variability analysis  

</div>

---

## 1.5 The Philosophy of Learning

<div data-level="101">

To learn is to **see patterns where none are obvious**.

</div>

---

<div data-level="201">

Machine learning teaches us that:

> Data contains structure — but only if we learn how to look.

</div>

---

<div data-level="301">

At its deepest level, machine learning is about building models that approximate reality.

But every model is incomplete.

The goal is not perfection —  
but **useful understanding**.

</div>

---

## Summary

- Machine learning is the process of learning patterns from data  
- It replaces explicit rules with learned relationships  
- It plays a central role in modern exoplanet science  
- It connects deeply with statistical inference and physics  

---

## Looking Ahead

In the next chapter, we will explore:

> **How machines actually learn — optimization, loss functions, and models**

— the mathematical engine behind learning itself.
