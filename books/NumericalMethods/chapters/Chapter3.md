# Chapter 3 — Models of Learning: From Lines to Neural Networks

---

## 3.1 What is a Model, Really?

<div data-level="101">

In the previous chapter, we learned that machines learn by adjusting models.

But what *kind* of models can we use?

Some are simple — like straight lines.  
Others are complex — like deep neural networks.

Each model is like a different lens on reality.  
Some capture simple patterns. Others reveal hidden structure.

Choosing a model is like choosing a telescope:

- A small one shows bright stars  
- A powerful one reveals distant galaxies  

</div>

---

<div data-level="201">

A model defines a functional form:

\[
f_\theta(x)
\]

Different models correspond to different assumptions about the data.

Examples:

- Linear models → assume straight-line relationships  
- Polynomial models → allow curvature  
- Neural networks → highly flexible, nonlinear mappings  

The choice of model determines:

- What patterns can be learned  
- How well the model generalizes  
- How interpretable the results are  

</div>

---

<div data-level="301">

Model selection can be viewed as choosing a hypothesis space:

\[
\mathcal{H} = \{ f_\theta \}
\]

The complexity of this space determines:

- Expressivity (ability to fit complex data)  
- Risk of overfitting  

In astrophysics, this is analogous to choosing:

- A 1-component stellar model vs multi-component model  
- A simple transit model vs full dynamical model  

Machine learning generalizes this idea to flexible function approximators.

</div>

---

## 3.2 Linear Models: The Simplest Learners

<div data-level="101">

The simplest model is a straight line:

\[
y = mx + b
\]

It tries to explain data using a simple relationship.

Even though it is simple, it can be surprisingly powerful.

</div>

---

<div data-level="201">

In higher dimensions, linear models take the form:

\[
f(x) = w^T x + b
\]

where:

- \(x\) = input vector  
- \(w\) = weights  
- \(b\) = bias  

These models are fast, interpretable, and often serve as baselines.

</div>

---

<div data-level="301">

Linear models assume that the data lies in a linear subspace.

Extensions include:

- Ridge regression (L2 regularization)  
- Lasso regression (L1 regularization)  
- Logistic regression (classification)

Despite their simplicity, linear models are often effective in:

- High signal-to-noise regimes  
- Low-complexity systems  

In exoplanet science, linear models appear in:

- Trend removal in light curves  
- Linear basis models for systematics correction  

</div>

---

## 3.3 Beyond Lines: Nonlinear Models

<div data-level="101">

Not all patterns are straight.

Planets orbit in curves.  
Light curves have dips and shapes.  
Spectra have complex features.

To capture this, we need **nonlinear models**.

</div>

---

<div data-level="201">

Examples include:

- Polynomial regression  
- Decision trees  
- Kernel methods  

These allow the model to bend and adapt to the data.

</div>

---

<div data-level="301">

Nonlinear models expand the hypothesis space:

\[
f(x) = \sum_i \alpha_i K(x, x_i)
\]

in kernel methods, where \(K\) defines similarity.

Decision trees partition feature space into regions, enabling:

- Nonlinear decision boundaries  
- Interaction between variables  

These models are useful when:

- Relationships are complex  
- Interpretability is still desired  

</div>

---

## 3.4 Neural Networks: Learning Complex Representations

<div data-level="101">

Neural networks are inspired by the brain.

They take inputs, pass them through layers, and produce outputs.

Each layer transforms the data slightly — until patterns emerge.

</div>

---

<div data-level="201">

A neural network consists of layers:

\[
h = \sigma(Wx + b)
\]

where:

- \(W\) = weights  
- \(b\) = bias  
- \(\sigma\) = activation function  

Stacking layers creates deep models:

\[
f(x) = f_L(f_{L-1}(...f_1(x)))
\]

</div>

---

<div data-level="301">

Neural networks are **universal function approximators**.

They can model highly complex, nonlinear relationships.

Key concepts:

- Depth → number of layers  
- Width → number of neurons  
- Activation functions → introduce nonlinearity  

In astrophysics, neural networks are used for:

- Transit detection  
- Spectral retrieval emulation  
- Stellar variability modeling  

However, they require:

- Large datasets  
- Careful regularization  
- Computational resources  

</div>

---

## 3.5 Choosing the Right Model

<div data-level="101">

There is no single best model.

The right model depends on the problem.

</div>

---

<div data-level="201">

Tradeoffs include:

- Simplicity vs flexibility  
- Interpretability vs performance  
- Speed vs accuracy  

A good approach:

1. Start simple  
2. Increase complexity if needed  
3. Validate on new data  

</div>

---

<div data-level="301">

Model selection can be formalized using:

- Cross-validation  
- Information criteria (AIC, BIC)  
- Bayesian model comparison  

In scientific contexts, interpretability is often critical.

For example:

- A simple model may reveal physical insight  
- A complex model may provide better predictions but less understanding  

Balancing these is a central challenge in machine learning for science.

</div>

---

## 3.6 A Physical Analogy

<div data-level="101">

A model is like a map.

Some maps show only roads.  
Others show terrain, weather, and depth.

</div>

---

<div data-level="201">

Simple models are like sketches.  
Complex models are like detailed simulations.

</div>

---

<div data-level="301">

Ultimately, all models are approximations.

The goal is not to perfectly represent reality,  
but to capture the aspects that matter for the problem at hand.

In exoplanet science, this means:

- Capturing transit signals  
- Modeling stellar contamination  
- Interpreting atmospheric spectra  

Machine learning provides a flexible framework to do all three.

</div>

---

## Summary

- Models define how machines represent patterns  
- Linear models are simple and interpretable  
- Nonlinear models capture complex relationships  
- Neural networks enable highly flexible learning  
- Choosing the right model is a balance of tradeoffs  

---

## Looking Ahead

In the next chapter, we will explore:

> **How data shapes learning — features, representations, and preprocessing**

— the bridge between raw observations and meaningful patterns.
