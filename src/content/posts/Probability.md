---
title: Probability Theory
author: onur
tags: [" Probability", " Sets", "Random Variables", " Distributions"]
createdAt: "2025-01-31"
updatedAt: "2025-01-31"
description: "Exploring Probability Theory with Dr. Aras Erzurumluoglu" 
---

### Introduction

Mathematics provides a structured way to analyze, interpret, and predict real-world phenomena. It allows us to create models that describe patterns, relationships, and behaviors in various fields, from physics and engineering to economics and biology. By using mathematical principles, we can make sense of complex systems, solve practical problems, and make informed decisions based on logical reasoning and quantitative analysis.

A **deterministic model** (ideal situation) predicts the outcome of an experiment with certainty based on given initial conditions.  

- The velocity of a falling object **`v = gt`**.  

A **probabilistic** or **stochastic model** (randomness) accounts for situations where the same initial conditions can lead to a variety of outcomes. These models assign a probability to each possible outcome.  

- Rolling a die results in one of six numbers facing up, each assigned a probability of **`1/6`**.  

When there are **`N`** possible (equally likely) outcomes, and **`k`** of them are considered successful, then the probability of success is given by:

$$
P(\text{success}) = \frac{k}{N}
$$

**Examples:**  

- Tossing tails with a balanced coin: **`1/2`**  
- Drawing an ace from a deck of cards: **`1/13`**  
- Rolling either a 3 or a 5 with a fair six-sided die: **`2/6`**  

These values describe the **frequency** of the successful outcome and the proportion of times the event occurs in the **LONG RUN**.

---

### Sample Spaces  

The **sample space** is the set of all possible outcomes of an experiment. However, there is an important distinction in **how probabilities are assigned**.  

- A **discrete sample space** has a finite or countably infinite number of elements.  

- A **continuous sample space** is an interval in **`ℝ`**, or a product of intervals in **`ℝ^n`**.  

Individual elements of a sample space are called **outcomes** while subsets of a sample space are called **events**.  

**Spinning a Probability Spinner**  

$$ \text{Sample space: } {θ \text{ degrees} \mid θ \in [0, 360)}$$

**Event A:** Landing between **90 and 180 degrees**, **`[90, 180]`** <br>
**Event B:** Landing either between **45 and 90 degrees** or between **270 and 315 degrees**  <br>
**Event C:** Landing precisely on **180 degrees**.    

---

### Union, Intersection and Complement  

Let **`A`** and **`B`** be events in sample space **`S`**; that is, **`A`** and **`B`** are subsets of **`S`**.  

- The **union** of **`A`** and **`B`** is the set of outcomes that are in either **`A`** or **`B`**, or both:  

  $$
  A ∪ B = \{ x ∈ S \mid x ∈ A \text{ or } x ∈ B \}
  $$  

- The **intersection** of **`A`** and **`B`** is the set of outcomes that are in both **`A`** and **`B`**:  

  $$
  A ∩ B = \{ x ∈ S \mid x ∈ A \text{ and } x ∈ B \}
  $$  

- The **complement** of **`A`** in **`S`** is the set of outcomes in **`S`** that are **not** in **`A`**:  

  $$
  A^c = \{ x ∈ S \mid x \notin A \} = S \setminus A
  $$  

A **Venn diagram** visually represents subsets of a **universal set**.  

<p align="center">
  <img src="../../../public/AppendixPROB/1.png" alt="Venn Diagrams" />
</p>


---

### Mutually Exclusive Events


---

### Random Variables

Let **`S`** be a sample space with a probability measure. A **random variable** is a function **`X: S → ℝ`**, which maps the outcomes in the sample space to real numbers. The output of a random variable is something we can measure.

Random variables are defined when we want to focus on a particular property of the outcomes of an experiment. More than one random variable can be defined for a given sample space.

Usually, capital letters like **`X`** are used to denote random variables, while their lowercase counterparts, like **`x`**, represent particular values that **`X`** can take.

Consider the experiment of spinning a probability spinner, with the sample space:

$$
S = \{ \theta \text{ degrees} \mid \theta \in [0, 360) \}
$$

However, the actual sample space could include additional information, such as:

- Multiple rotations
- Angular velocity at time **`t`**
- Elapsed time
- The color it landed on

A random variable focuses on one measurable property of the outcome.

Examples of random variables:

- **`X_1`**: **Resting position (degrees)**, outputs values in **`[0, 360)`**.
- **`X_2`**: **Resting position (radians)**, outputs values in **`[0, 2π)`**.
- **`X_3`**: **Number of full rotations**, takes values **`0, 1, 2, 3, ...`**.

---
**Example**

Three balls are randomly chosen (without replacement) from a bag of 20 balls numbered **1-20**. We bet that at least one of the numbers drawn is equal to or greater than **17**. What is the probability of winning the bet? 

Outcomes in the sample space are subsets of three numbered balls, and they are all equally likely to occur.Let the random variable **`X`** denote the largest number of the three selected. Thus, **`X`** takes values **`3, 4, ..., 20`**, and we want **`P(X ≥ 17)`**. 

Since total probability equals **1**, we use the complement: $$ P(X \geq 17) = 1 - P(X \leq 16) $$where **`P(X ≤ 16)`** is the probability that the largest selected number is **16 or less**. 

The number of ways to choose 3 balls where all are ≤ 16: $$ \text{Total favorable outcomes} = {16 \choose 3} = \frac{16 \times 15 \times 14}{3 \times 2 \times 1} = 560 $$The total number of ways to choose any 3 balls from 20: $$ \text{Total possible outcomes} = {20 \choose 3} = \frac{20 \times 19 \times 18}{3 \times 2 \times 1} = 1140 $$ Therefore, $$ P(X \leq 16) = \frac{560}{1140} = \frac{28}{57} $$ Now, using the complement: $$ P(X \geq 17) = 1 - \frac{28}{57} = \frac{29}{57} $$ Thus, the probability of winning the bet is **`29/57`**.

### Probability Distributions

**Experiment:** Rolling two dice. Let random variable **`X`** denote the sum of a roll. The range of **`X`** is **`{2, 3, ..., 12}`**.  

Knowing that each outcome in the sample space has probability **`1/36`**, we can easily find the probability that **`X`** takes on any value in its range:  

- **`P(X = 7) = 6/36 {1,6 2,5 3,4 4,3 5,2 6,1} `** 
- **`P(X = 11) = 2/36 {6,5 5,6}`**  

We would like a rule **`f(x)`** that gives **`P(X = x)`** for each value **`x`** in the range of **`X`**. In this case, the probabilities are given by the function:  

$$
f(x) = \frac{6 - |x - 7|}{36}, \quad x = 2, ..., 12
$$  

Such a function is called the **probability distribution** of **`X`**.  

If **`X`** is a **discrete random variable**, the function **`f`** given by:  

$$
f(x) = P(X = x) \quad \text{for each } x \text{ in the range of } X
$$  

is called the **probability distribution** of **`X`** (also called the **probability mass function** of **`X`**).  

---

**Example**  

Let **`X`** be the random variable that counts the number of heads obtained in tossing a balanced coin **4 times**.  

- **Range of `X`**: **`{0, 1, 2, 3, 4}`**  

- **Probability values**:  

  - **`P(X = 0) = 1/16`**  
  - **`P(X = 1) = 4/16`**  
  - **`P(X = 2) = 6/16`**  
  - **`P(X = 3) = 4/16`**  
  - **`P(X = 4) = 1/16`**  

- **Formula for the probability distribution**:  

  $$  
  P(X = x) = \frac{4 \choose x}{2^4}
  $$  

---

**Example**  

Let **`Y`** be the maximum number that either die shows in a single roll.  

- **Range of `Y`**: **`{1, 2, 3, 4, 5, 6}`**  

- **Finding `P(Y = y)`**:  

  - **`P(Y = 1)`** → { (1,1) }  
  - **`P(Y = 2)`** → { (2,1), (1,2), (2,2) }  
  - **`P(Y = 3)`** → { (3,1), (3,2), (3,3), (2,3), (1,3) }  
  - **`P(Y = 4)`** → { (4,1), (4,2), (4,3), (4,4), (3,4), (2,4), (1,4) }  
  - **`P(Y = 5)`** → { (5,1), (5,2), (5,3), (5,4), (5,5), (4,5), (3,5), (2,5), (1,5) }  
  - **`P(Y = 6) = 11/36`** → { (6,1), (6,2), (6,3), (6,4), (6,5), (6,6), (5,6), (4,6), (3,6), (2,6), (1,6) }  

- **Formula for the probability distribution**:  

  $$  
  P(Y = y) = \frac{2y - 1}{36}  
  $$  
