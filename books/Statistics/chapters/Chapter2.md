# Chapter 2 — Models  
*How do we connect theory to observations?*

In science we rarely observe the universe directly in the form we wish. Instead, we measure signals: light from distant stars, chemical concentrations in the atmosphere, or patterns in a dataset. From these signals we attempt to infer the underlying system that produced them.

To make this connection between **observations** and **underlying reality**, scientists use **models**.

A model is a mathematical or computational representation of how a system behaves. Models allow us to ask questions such as:

- If the atmosphere contained methane and oxygen, what would the spectrum look like?
- If a star had large starspots, how would its brightness change?
- If a planet existed around a star, how would its transit appear in the light curve?

In this chapter we introduce three key ideas:

- **Forward Modeling**
- **Inverse Modeling**
- **Degeneracy**

These concepts form the foundation of how modern data-driven science works.

---

# 2.1 Forward Modeling

Forward modeling starts with **assumptions about a system** and predicts what we should observe.

In other words:

> **Given a model of the world, what signal should it produce?**

For example:

Suppose we assume a planet’s atmosphere contains:

- Water vapor  
- Carbon dioxide  
- Methane  

A **forward model** uses physics and chemistry to compute the expected spectrum that such an atmosphere would produce.

The process looks like this:
Model parameters → Physical model → Predicted observation


Example parameters might include:

- Temperature
- Chemical composition
- Cloud properties
- Surface pressure

From these inputs the model generates an observable signal such as:

- a spectrum  
- a light curve  
- an image  

Forward models are powerful because they encode **our understanding of physical laws**.

However, forward modeling alone does not solve the central scientific problem: we still need to determine which model best explains the data.

---

# 2.2 Inverse Modeling

Inverse modeling attempts to solve the opposite problem:

> **Given an observation, what model produced it?**

Instead of predicting the signal from a model, we try to **infer the model from the signal**.

The process looks like this:
Observation → Model inference → Estimated parameters


For example:

From a measured transmission spectrum of an exoplanet, we might try to infer:

- Atmospheric composition
- Temperature structure
- Cloud coverage

This process is called **retrieval** in many fields.

Inverse modeling is fundamentally more difficult than forward modeling because the relationship between parameters and observations is often complex and nonlinear.

Many different models may produce very similar observations.

---

# 2.3 The Problem of Degeneracy

One of the central challenges in inverse modeling is **degeneracy**.

Degeneracy occurs when **multiple different models produce nearly identical observations**.

For example:

- A spectrum with muted absorption features might indicate **clouds** in the atmosphere.
- But it might also indicate **lower molecular abundance**.
- Or it might result from **stellar contamination**.

All three models could reproduce the same observed spectrum.

This means the data alone may not uniquely determine the correct explanation.

Degeneracy is common in many areas of science:

- Climate modeling
- Cosmology
- Medical imaging
- Exoplanet atmospheric retrievals

When degeneracy occurs, scientists must rely on additional information:

- independent observations  
- physical constraints  
- prior knowledge  
- new measurement techniques  

Breaking degeneracies is one of the main motivations behind designing better instruments and collecting more precise data.

---

# 2.4 Why Models Matter

Models allow us to translate observations into understanding.

Without models, data remain just numbers. With models, they become interpretations of the physical world.

But models also introduce challenges:

- Forward models depend on assumptions.
- Inverse modeling may not produce unique answers.
- Degeneracy can hide the true explanation behind many plausible alternatives.

Learning how to build, test, and interpret models is therefore one of the most important skills in modern science.

In the next chapters, we will explore how models interact with data, and how scientists use statistical tools to decide which explanations are most plausible.