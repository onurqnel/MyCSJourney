---
title: Probability Theory
author: onur
tags: [" Sets", " Random Variables", " Distributions", " Probability Calculus",]
createdAt: "2025-01-31"
updatedAt: "2025-02-05"
description: "Exploring Probability with Dr. Aras Erzurumluoglu" 
---

### Introduction

A **deterministic model** predicts the outcome of an experiment with certainty based on given initial conditions.  

- The velocity of a falling object **`v = gt`**.  

A **probabilistic** or **stochastic model** accounts for situations where the same initial conditions can lead to a variety of outcomes. These models assign a probability to each possible outcome.  

- Rolling a die results in one of six numbers facing up, each assigned a probability of **`1/6`**.  

When there are **`N`** possible (equally likely) outcomes, and **`k`** of them are considered successful, then the probability of success is given by:

$$
P(\text{success}) = \frac{k}{N}
$$

These values describe the **frequency** of the successful outcome and the proportion of times the event occurs in the **LONG RUN**.

---

### Sample Spaces  

The **sample space** is the set of all possible outcomes of an experiment. 

- A **discrete sample space** has a finite or countably infinite number of elements.  

- A **continuous sample space** is an interval in **ℝ**.


Individual elements of a sample space are called **outcomes** while subsets of a sample space are called **events**.  

**Spinning a Probability Spinner**  

$$ \text{Sample space: } {θ \text{ degrees} \mid θ \in [0, 360)}$$

**Event A:** Landing between **90 and 180 degrees**<br>
**Event B:** Landing either between **45 and 90 degrees** or between **270 and 315 degrees**  <br>
**Event C:** Landing precisely on **180 degrees**.    

---

### Union, Intersection and Complement  

Let **A** and **B** be events in sample space **S**; that is, **A** and **B** are subsets of **S**.  

- The **Union** of **A** and **B** is the set of outcomes that are in either **A** or **B**, or both:  

  $$
  A ∪ B = \{ x ∈ S \mid x ∈ A \text{ or } x ∈ B \}
  $$  

- The **intersection** of **A** and **B** is the set of outcomes that are in both **A** and **B**:  

  $$
  A ∩ B = \{ x ∈ S \mid x ∈ A \text{ and } x ∈ B \}
  $$  

- The **Complement** of **A** in **S** is the set of outcomes in **S** that are **not** in **A**:  

  $$
  A^c = \{ x ∈ S \mid x \notin A \} = S \setminus A
  $$  

A **Venn diagram** visually represents subsets of a **Universal Set `S`**  

<p align="center">
  <img src="/AppendixPROB/1.png" alt="Venn Diagrams" />
</p>

A set with no elements is called the **Empty Set**, denoted **∅**.  


---
### Mutually Exclusive Events  

Two events are mutually exclusive or disjoint if they cannot occur at the same time. That is, if one event happens, the other must not happen.

**Rolling two dice**   

- **Event A:** Rolling at least one six 

  $$
  A = \{ (d_1, 6), (6, d_2) \mid d_1, d_2 ∈ \{1, 2, 3, 4, 5, 6\} \}
  $$  
  
- **Event B:** Sum of the dice equals 4  

  $$
  B = \{ (d, 4-d) \mid d ∈ \{1, 2, 3\} \}
  $$  

Sets with an **empty intersection** are called **disjoint**, and the events in this case are called **mutually exclusive**.  

### Algebra of Sets  
Let **A**, **B**, and **C** be subsets of a universal set **S**.  

- **Idempotent Laws:**  
  $$
  A ∪ A = A, \quad A ∩ A = A
  $$  

- **Associative Laws:**  
  $$
  (A ∪ B) ∪ C = A ∪ (B ∪ C)
  $$  
  $$
  (A ∩ B) ∩ C = A ∩ (B ∩ C)
  $$  

- **Commutative Laws:**  
  $$
  A ∪ B = B ∪ A
  $$  
  $$
  A ∩ B = B ∩ A
  $$  

- **Distributive Laws:**  
  $$
  A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
  $$  
  $$
  A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
  $$  

- **Identity Laws:**  
  $$
  A ∪ ∅ = A, \quad A ∪ S = S
  $$  
  $$
  A ∩ S = A, \quad A ∩ ∅ = ∅
  $$  

- **Complement Laws:**  
  $$
  (A^c)^c = A, \quad A ∪ A^c = S, \quad A ∩ A^c = ∅
  $$  
  $$
  S^c = ∅, \quad ∅^c = S
  $$  

- **De Morgan’s Laws:**  
  $$
  (A ∪ B)^c = A^c ∩ B^c
  $$  
  $$
  (A ∩ B)^c = A^c ∪ B^c
  $$  

Let's use **Venn Diagrams** to verify:  

$$
A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
$$

<p align="center">
  <img src="/AppendixPROB/2.png" alt="Set Operations" />
</p>

---

### The Probability of an Event  

A **Probability**, is a function **P** that maps events in the sample space  to real numbers. To assign probabilities in a meaningful way, **P** must satisfy the following **postulates - axioms**.  

- **Probability Interval**  
  The probability of any event **A** in sample space is a non-negative ℝ number:  
  $$
  P(A) \geq 0
  $$  
  Since events can't happen less than 0% or more than 100% of the time, we always have: 
  $$
  0 \leq P(A) \leq 1, \quad \text{for any event } A
  $$  
- **Sample Space**  
  Since **S** includes all possible outcomes, the probability of any outcome occurring must be **1**:  
  $$
  P(S) = 1
  $$  

- **Additivity** 

  If events **A1, A2 ...** are **mutually exclusive**, their total probability is the sum of their individual probabilities: 
  $$
  P(A_1 ∪ A_2 \dots) = P(A_1) + P(A_2)\dots
  $$  

---

### Rules of Probability  

Let **S** be a sample space with probability measure **P**, and let **A** and **B** be events.  
1. **Complement Rule**  
   $$
   P(A) + P(A^c) = 1, \quad \text{or} P(A^c) = 1 - P(A)
   $$  
2. **Probability of the Empty Set**  
   $$
   P(∅) = 0
   $$  
3. **Subset Rule**  
   If **A ⊂ B**, then:  
   $$
   P(A) \leq P(B)
   $$

4. **Inclusion-Exclusion for Two Sets**  
   $$
   P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
   $$ 

The **Inclusion-Exclusion Principle** can be **generalized** to more than two sets.


---

### Random Variables

**Random Variable** is a function that assigns a real number to each outcome of a probability experiment. Random variables are defined when we want to focus on a particular outcomes of an experiment. More than one random variable can be defined for a given sample space. Usually, capital letters like **X** are used to denote random variables, while their lowercase counterparts, like **x**, represent particular values that **X** can take.

A **Discrete Random Variable** has a countable set of possible values, while a **Continuous Random Variable** has an uncountable range, covering an interval of real numbers **ℝ**.

**Range** is the set of all values a random variable can produce. It’s the list of results when random variable applied to the different outcomes.

---



### Probability Mass Function (PMF)
A Probability Mass Function gives the probability of each possible value of a **discrete random variable**. It tells us how likely each outcome is.

Defined as:
$$
P(X = x) = f(x), \quad \text{where } 0 \leq P(X = x) \leq 1
$$

The total probability of all possible values must sum to 1:

$$
\sum P(X = x) = 1
$$

**Rolling a fair 6-sided die:**

Let **X** be the random variable of a fair 6-sided die. The outcomes **x** are:

$$
X \in \{1, 2, 3, 4, 5, 6\}
$$

Since each outcome is equally likely, the PMF is:

$$
P(X = x) = \frac{1}{6}, \quad x \in \{1,2,3,4,5,6\}
$$

A Probability Mass Function  is only used for discrete random variables. For continuous random variables, we use the Probability Density Function instead.


### Probability Density Function (PDF)

A **Probability Density Function** describes the probability distribution of a **continuous random variable**. Unlike a PMF, which gives the probability of specific discrete values, the PDF represents probability **density** over an interval.

For a continuous random variable **X**, the **PDF** satisfies:

1. **Non-negativity**:
   $$
   f(x) \geq 0, \quad \forall x \in \mathbb{R}
   $$

2. **Total Probability is 1**:
   $$
   \int_{-\infty}^{\infty} f(x) \,dx = 1
   $$
   The total area under the curve must be **1**.

3. **Probability Over an Interval**:
   Since a continuous random variable can take infinitely many values, the probability of a single point (PMF of continous RV) is always **zero**:
   $$
   P(X = x) = 0
   $$  
   Instead, we find probabilities over intervals:
   $$
   P(a \leq X \leq b) = \int_{a}^{b} f(x) \,dx
   $$  

 <br>


<div style="overflow-x: auto; text-align: center;">
  <table style="font-size: 0.9em; width:100%; max-width: 600px; text-align: center; border-collapse: collapse; margin: auto;">
    <tr>
      <th style="padding: 8px; border: 0.5px solid lightgray; text-align: center;">PMF </th>
      <th style="padding: 8px; border: 0.5px solid lightgray; text-align: center;">PDF </th>
    </tr>
    <tr>
      <td style="padding: 8px; border: 0.5px solid lightgray; text-align: center;">Used for discrete random variables</td>
      <td style="padding: 8px; border: 0.5px solid lightgray; text-align: center;">Used for continuous random variables</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 0.5px solid lightgray;">$$ P(X = x) > 0 $$ </td>
      <td style="padding: 8px; border: 0.5px solid lightgray;">$$ P(X = x) = 0 $$ </td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 0.5px solid lightgray;">$$ P(a \leq X \leq b) = \sum P(X = x) $$</td>
      <td style="padding: 8px; border: 0.5px solid lightgray;">$$ P(a \leq X \leq b) = \int_a^b f(x) dx $$</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 0.5px solid lightgray; text-align: center;">Takes countable values</td>
      <td style="padding: 8px; border: 0.5px solid lightgray; text-align: center;">Takes uncountable values</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 0.5px solid lightgray;">Sum of probabilities: <br> $$ \sum P(X = x) = 1 $$</td>
      <td style="padding: 8px; border: 0.5px solid lightgray;">Area under the curve: <br> $$ \int_{-\infty}^{\infty} f(x) dx = 1 $$</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 0.5px solid lightgray; text-align: center;">Rolling a die, heads in coin flips</td>
      <td style="padding: 8px; border: 0.5px solid lightgray; text-align: center;">Height, weight, time, temperature</td>
    </tr>
  </table>
</div>

<style>
  @media screen and (max-width: 600px) {
    table {
      font-size: 0.8em; 
    }
    th, td {
      padding: 6px; 
    }
  }
</style>

---
