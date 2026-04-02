# Chapter 1 — Statistical Concepts
*How do we know when we are right?*

Before we explore complex ideas, models, or discoveries, we need to understand **how to evaluate whether a method works**. Science, machine learning, medicine, and even everyday decision-making rely on a few simple statistical ideas that help us judge the quality of predictions.

Imagine a test designed to detect something — a disease, a fraudulent transaction, or even life on another planet. The test makes predictions, but predictions can be **right or wrong in different ways**. Understanding these possibilities is the foundation of statistical thinking.

In this chapter we introduce six key concepts:

- False Positive  
- False Negative  
- Recall  
- Precision  
- Bias  
- Accuracy  

These ideas may seem abstract at first, but they appear everywhere: from medical diagnostics to spam filters, from climate models to exoplanet detection.

---

# 1.1 Predictions Can Be Wrong in Different Ways

Suppose we build a system that tries to determine whether something is **present** or **absent**. For example:

- Does a patient have a disease?  
- Is this email spam?  
- Is there a planet around this star?  

The system gives an answer: **Yes** or **No**. But the *true state* of the world might be different.

This leads to four possible outcomes.

| Prediction | Reality | Outcome |
|---|---|---|
| Positive | Positive | True Positive |
| Positive | Negative | False Positive |
| Negative | Positive | False Negative |
| Negative | Negative | True Negative |

The two errors we care most about are **False Positives** and **False Negatives**.

---

# 1.2 False Positives

A **false positive** occurs when a test says something **is present**, but in reality it **is not**.

Example:

- A medical test says a patient has a disease, but they are actually healthy.
- A spam filter marks a legitimate email as spam.
- A telescope detection claims a planet exists, but the signal was actually stellar noise.

False positives are often called **Type I errors**.

These errors can be dangerous because they may lead us to **believe something exists when it does not**.

---

# 1.3 False Negatives

A **false negative** occurs when a test says something **is absent**, but it actually **is present**.

Example:

- A patient actually has a disease, but the test fails to detect it.
- A spam email reaches your inbox because the filter missed it.
- A planet exists in the data, but the detection algorithm fails to identify it.

False negatives are sometimes called **Type II errors**.

These errors are dangerous because they cause us to **miss real signals**.

---

# 1.4 Precision

**Precision** measures how many of the predicted positives are actually correct.

\[
\text{Precision} = \frac{\text{True Positives}}{\text{True Positives + False Positives}}
\]

High precision means:

> When the model says something is positive, it is **usually correct**.

Example:

If an exoplanet detection pipeline reports 10 planets and 9 of them are real, the precision is very high.

Precision answers the question:

**“When we claim a detection, how often are we right?”**

---

# 1.5 Recall

**Recall** measures how many of the real positives we successfully detect.

\[
\text{Recall} = \frac{\text{True Positives}}{\text{True Positives + False Negatives}}
\]

High recall means:

> The system finds **most of the real signals**.

Example:

If there are 100 planets in the dataset and our algorithm detects 90 of them, recall is very high.

Recall answers the question:

**“How many of the real signals did we manage to find?”**

---

# 1.6 Accuracy

**Accuracy** measures how often the predictions are correct overall.

\[
\text{Accuracy} =
\frac{\text{True Positives + True Negatives}}
{\text{Total Predictions}}
\]

Accuracy can be useful, but it can also be misleading.

For example:

If only 1% of emails are spam, a model that labels **everything as "not spam"** would still be **99% accurate**, but completely useless.

Because of this, scientists often rely more on **precision and recall** than on accuracy alone.

---

# 1.7 Bias

**Bias** refers to a systematic tendency of a model or measurement to deviate from the truth.

Bias can arise from many sources:

- Incomplete data
- Instrument limitations
- Incorrect assumptions in models
- Human decision-making

Example:

If a telescope systematically measures planet radii slightly too large due to calibration errors, the results contain **bias**.

Bias is different from random noise:

- **Noise** fluctuates randomly.
- **Bias** pushes results consistently in one direction.

Understanding and correcting bias is essential for reliable science.

---

# 1.8 Why These Concepts Matter

These statistical ideas are not just mathematical definitions. They shape how we interpret evidence.

Every detection method must balance trade-offs:

- Reducing false positives may increase false negatives.
- Increasing recall may reduce precision.
- Maximizing accuracy may hide deeper problems.

Whether we are diagnosing diseases, filtering spam, or searching for planets around distant stars, the same statistical framework helps us answer a fundamental question:

> **How much should we trust our conclusions?**

In the chapters ahead, we will use these concepts repeatedly as we analyze data, evaluate models, and explore how knowledge is extracted from observations.




