# Chapter 1 - Functions, Limits, and Continuity

When a car's speedometer reads 60 km/h, it reports speed at an instant. But distance is measured over an interval of time. Calculus builds a precise bridge from average change over an interval to change at a single instant. That bridge begins with functions and limits.

## 1.1 Functions describe dependence

A **function** assigns exactly one output to each permitted input. If $f$ describes the distance traveled after time $t$, then $f(t)$ is the distance at that time. The set of permitted inputs is the **domain**; the resulting outputs form the **range**.

For example, the function

$$
f(x)=x^2-1
$$

maps $x=3$ to $f(3)=8$. Its graph is the set of points $(x,f(x))$. A graph makes qualitative behavior visible: where a function increases, decreases, crosses an axis, or is undefined.

The formula alone does not always determine the physical domain. If $x$ represents the length of a rod, negative inputs have no physical meaning even if the algebraic formula accepts them. Always state the domain implied by the problem.

## 1.2 Average rate of change

For a function $f$, the average rate of change from $x=a$ to $x=b$ is

$$
\frac{f(b)-f(a)}{b-a}, \qquad b\ne a.
$$

It is the slope of the secant line through $(a,f(a))$ and $(b,f(b))$. If $f(t)$ is position measured in metres and $t$ is measured in seconds, this quotient has units of metres per second and represents average velocity.

**Example.** A particle's position is $s(t)=t^2+2t$ metres. Between $t=1$ s and $t=3$ s, its average velocity is

$$
\frac{s(3)-s(1)}{3-1}
=\frac{15-3}{2}=6\ {\rm m\,s^{-1}}.
$$

Changing the interval changes the average. To describe the velocity at exactly $t=1$ s, we will shrink the interval toward that time.

## 1.3 Limits describe nearby behavior

The notation

$$
\lim_{x\to a} f(x)=L
$$

means that the values of $f(x)$ can be made as close as desired to $L$ by taking $x$ sufficiently close to $a$ (but not necessarily equal to $a$). A limit describes behavior near the input, not necessarily the function's value at the input.

For example, let

$$
f(x)=\frac{x^2-4}{x-2}, \qquad x\ne2.
$$

The formula is undefined at $x=2$, but for $x\ne2$ it simplifies to $f(x)=x+2$. Therefore,

$$
\lim_{x\to2}\frac{x^2-4}{x-2}
=\lim_{x\to2}(x+2)=4.
$$

The function need not be defined at $x=2$ for the limit to exist. If we separately define $f(2)=7$, the limit remains 4 while the function value is 7.

### One-sided limits

The left-hand limit $\lim_{x\to a^-}f(x)$ considers inputs below $a$; the right-hand limit $\lim_{x\to a^+}f(x)$ considers inputs above it. A two-sided limit exists only when both one-sided limits exist and agree.

For the step function $g(x)=0$ when $x<0$ and $g(x)=1$ when $x\ge0$, the left-hand limit at zero is 0 and the right-hand limit is 1. Since they disagree, $\lim_{x\to0}g(x)$ does not exist.

## 1.4 Limit laws and continuity

When the relevant limits exist, limits obey familiar algebraic rules. For example,

$$
\lim_{x\to a}[f(x)+g(x)]
=\lim_{x\to a}f(x)+\lim_{x\to a}g(x),
$$

and the limit of a product is the product of the limits. A quotient rule applies when the denominator's limit is not zero. These rules allow direct substitution into polynomials and rational functions wherever their denominators remain nonzero.

A function $f$ is **continuous at** $x=a$ when:

1. $f(a)$ is defined.
2. $\lim_{x\to a}f(x)$ exists.
3. $\lim_{x\to a}f(x)=f(a)$.

Intuitively, the graph has no break at that point. Polynomials are continuous for every real input; rational functions are continuous wherever their denominators are nonzero. A removable hole, a jump, and a vertical asymptote are different ways continuity can fail.

<div data-level="201">

### A precise definition of a limit

The statement $\lim_{x\to a}f(x)=L$ can be written precisely as follows: for every $\epsilon>0$, there is a $\delta>0$ such that

$$
0<|x-a|<\delta \quad\Longrightarrow\quad |f(x)-L|<\epsilon.
$$

Here $\epsilon$ is the allowed error in the output, and $\delta$ is a sufficient bound on the input's distance from $a$. The definition formalizes the idea that an arbitrarily accurate output can be guaranteed by choosing inputs sufficiently close to $a$.

</div>

## 1.5 The Intermediate Value Theorem

If $f$ is continuous on the closed interval $[a,b]$, it takes every value between $f(a)$ and $f(b)$. In particular, if $f(a)<0$ and $f(b)>0$, then $f(c)=0$ for at least one $c$ between $a$ and $b$.

**Example.** Consider $f(x)=x^3+x-1$ on $[0,1]$. It is continuous, $f(0)=-1$, and $f(1)=1$. The theorem guarantees at least one root in $(0,1)$. It does not give the root's exact value or prove that there is only one; numerical methods can approximate it.

**Check your understanding.** The function has a hole at $x=2$, but nearby values approach 4. What is the limit there, and is the function continuous there as originally defined? The limit is 4. The function is not continuous at 2 because its value is undefined.

## 1.6 Summary

Functions model how one quantity depends on another. Average rates describe change over finite intervals; limits describe behavior as those intervals shrink. Continuity connects a function's value to its nearby behavior and makes the Intermediate Value Theorem possible. These ideas prepare us to define an instantaneous rate of change in Chapter 2.