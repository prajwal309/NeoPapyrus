# Chapter 2 — How Machines Learn: Models, Loss, and Optimization

---

## 2.1 From Patterns to Models

<div data-level="101">

In Chapter 1, we learned that machine learning is about finding patterns.

But how does a machine actually *store* what it has learned?

It does so using a **model**.

A model is simply a mathematical structure that tries to mimic reality.  
It takes an input and produces an output.

Think of it like fitting a curve to data.

If you observe a transit in a light curve, the model tries to reproduce that dip.  
If you observe a spectrum, the model tries to explain its shape.

Learning, then, is about adjusting the model so that it matches the data.

</div>

---

<div data-level="201">

A model is typically written as:

\[
f_\theta(x)
\]

where:

- \(x\) = input data  
- \(\theta\) = parameters of the model  

The parameters control how the model behaves.

For example:

- A straight line: \(f(x) = mx + b\) → parameters are \(m, b\)  
- A neural network: thousands to millions of parameters  

The goal of learning is to find the **best parameters** \(\theta\).

</div>

---

<div data-level="301">

From a statistical perspective, the model defines a family of functions:

\[
\{ f_\theta \mid \theta \in \Theta \}
\]

Learning is the process of selecting the optimal \(\theta\) given data.

This can be interpreted as:

- **Frequentist:** minimize error  
- **Bayesian:** infer posterior \(p(\theta | \mathcal{D})\)

In exoplanet science, this mirrors forward modeling:

- Choose a model (e.g., transit model, spectral model)  
- Fit parameters to match observations  

Machine learning generalizes this to highly flexible function spaces.

</div>

---

## 2.2 Measuring Error: The Loss Function

<div data-level="101">

How do we know if a model is good or bad?

We need a way to measure its mistakes.

This is called the **loss function**.

It tells us:

> “How wrong is the model?”

If the prediction is very close to the data → small loss  
If it is far away → large loss  

Learning is simply about making this loss as small as possible.

</div>

---

<div data-level="201">

A common loss function is the **mean squared error (MSE)**:

\[
\mathcal{L}(\theta) = \frac{1}{N} \sum_{i=1}^{N} (y_i - f_\theta(x_i))^2
\]

Other examples include:

- **Absolute error**  
- **Cross-entropy loss** (for classification)  

The choice of loss function depends on the problem.

</div>

---

<div data-level="301">

The loss function often corresponds to a statistical assumption.

For example:

- MSE ↔ Gaussian noise  
- Absolute error ↔ Laplace noise  

More generally, minimizing loss is equivalent to maximizing likelihood:

\[
\mathcal{L}(\theta) = - \log p(\mathcal{D} | \theta)
\]

Thus, machine learning is deeply connected to **statistical inference**.

In exoplanet retrievals, this is exactly what we do:

- Define likelihood  
- Fit model  
- Infer parameters  

Machine learning simply scales this idea.

</div>

---

## 2.3 Learning as Optimization

<div data-level="101">

Once we define a model and a loss, the problem becomes:

> How do we find the best parameters?

We solve this using **optimization**.

Think of it like searching for the lowest point in a landscape.

The height of the landscape is the loss.  
We want to go downhill until we reach the bottom.

</div>

---

<div data-level="201">

The most common method is **gradient descent**.

We update parameters as:

\[
\theta \leftarrow \theta - \eta \nabla_\theta \mathcal{L}
\]

where:

- \(\eta\) = learning rate  
- \(\nabla_\theta \mathcal{L}\) = gradient (direction of steepest increase)

We move in the opposite direction — toward lower loss.

</div>

---

<div data-level="301">

In practice, optimization is more complex:

- Loss surfaces are high-dimensional  
- Many local minima exist  
- Noise from data affects gradients  

Variants include:

- Stochastic Gradient Descent (SGD)  
- Adam optimizer  
- Momentum-based methods  

In astrophysics, this is analogous to:

- MCMC → exploring posterior  
- Nested sampling → mapping likelihood  

Machine learning emphasizes **fast optimization**, while traditional methods emphasize **uncertainty estimation**.

</div>

---

## 2.4 Overfitting and Generalization

<div data-level="101">

A model can learn too well.

It might memorize the data instead of understanding it.

This is called **overfitting**.

Such a model performs well on known data,  
but fails on new data.

</div>

---

<div data-level="201">

We distinguish between:

- **Training error** — error on known data  
- **Test error** — error on unseen data  

Good models **generalize** — they perform well on new data.

Techniques to prevent overfitting:

- Simpler models  
- Regularization  
- More data  

</div>

---

<div data-level="301">

Overfitting reflects the **bias–variance tradeoff**:

- High bias → model too simple  
- High variance → model too complex  

Optimal performance lies in balancing both.

In exoplanet science, this appears as:

- Overfitting noise in light curves  
- Degenerate atmospheric retrievals  
- Misinterpreting stellar contamination  

Regularization techniques include:

\[
\mathcal{L}_{\text{total}} = \mathcal{L} + \lambda \|\theta\|^2
\]

which penalize overly complex models.

</div>

---

## 2.5 A Physical Perspective on Learning

<div data-level="101">

Learning is like tuning a telescope.

You adjust it until the image becomes clear.

</div>

---

<div data-level="201">

A model is like a physical theory:

- It tries to explain observations  
- It has parameters  
- It can succeed or fail  

</div>

---

<div data-level="301">

At a deeper level, machine learning is a form of **approximate physics**.

Instead of deriving equations from first principles,  
we infer them from data.

This is particularly powerful when:

- The system is too complex  
- The physics is incomplete  
- The data is abundant  

This is why machine learning is becoming central to:

- Stellar variability modeling  
- Transmission spectroscopy  
- Time-domain astronomy  

</div>

---

## Summary

- Models represent patterns using parameters  
- Loss functions measure how wrong a model is  
- Optimization finds the best parameters  
- Generalization ensures the model works on new data  
- Machine learning is deeply connected to statistical inference  

---

## Looking Ahead

In the next chapter, we will explore:

> **Different types of models — from linear regression to neural networks**

— and how they shape what machines can learn.
