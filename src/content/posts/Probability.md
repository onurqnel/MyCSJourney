---
title: Probability Theory
author: onur
tags: [" Sets", " Random Variables", " Distributions", " Probability Calculus",]
createdAt: "2025-01-31"
updatedAt: "2025-02-06"
description: "Exploring Probability with Dr. Aras Erzurumluoglu" 
---

A **deterministic model** predicts the outcome of an experiment with certainty. 

- Velocity of a falling object **v = gt**.  

A **probabilistic** or **stochastic model**  assigns a probability to each possible outcome.  

- Rolling a die results in probability of **1/6**.  

When there are **N** possible equally likely outcomes, and **k** succeses, then the probability is:

$$
P(\text{success}) = \frac{k}{N}
$$

These values describe the **frequency** of the successful outcome and the proportion of times the event occurs in the **LONG RUN**.

---

### Sample Spaces  

The **sample space** is the set of all possible outcomes of an experiment. 

- A **discrete** sample space has a finite or countably infinite number of elements.  

- A **continuous** sample space is an interval in **ℝ**.


Individual elements of a sample space are called **outcomes** while subsets of a sample space are called **events**.  

**Spinning Spinner**  

$$ \text{Sample space: } {θ \text{ degrees} \mid θ \in [0, 360)}$$

**Events**
- **A:** Landing between **90 and 180 degrees**<br>
- **B:** Landing either between **45 and 90 degrees** or between **270 and 315 degrees**  <br>
- **C:** Landing precisely on **180 degrees**.    

---

### Union, Intersection and Complement  

Let **A** and **B** be events in sample space **S**

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

A **Venn diagram** visually represents subsets of a **Universal Set S**  

<p align="center">
  <img src="/AppendixPROB/1.png" alt="Venn Diagrams" />
</p>

A set with no elements is called the **Empty Set**, denoted **∅**.  


---
### Mutually Exclusive Events  

Two events are mutually exclusive or disjoint if they cannot occur at the same time.

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

### Algebra of the Sets  
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

We can easily visualize with **Venn Diagrams** for example:

$$
A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
$$

<p align="center">
  <img src="/AppendixPROB/2.png" alt="Set Operations" />
</p>

---

### The Probability 
A **Probability**, is a function **P** that maps events in the sample space  to real numbers. **P** must satisfy the following **postulates - axioms**.  

- **Probability Interval:** The probability of any event **A** in sample space is a non-negative ℝ number:  
  $$
  P(A) \geq 0
  $$  
  Since events can't happen less than 0% or more than 100% 
  $$
  0 \leq P(A) \leq 1, \quad \text{for any event } A
  $$  
- **Sample Space:** Since **universal set S** includes all possible outcomes, the probability of any outcome occurring must:  
  $$
  P(S) = 1
  $$  

- **Additivity:** If events **A1, A2, ...** are **mutually exclusive**, their total probability is the sum of their individual probabilities: 
  $$
  P(A_1 ∪ A_2 \dots) = P(A_1) + P(A_2)\dots
  $$  

---

### Rules of Probability  

Let **S** be a sample space with probability measure **P**, and let **A** and **B** be events.  
1. **Complement Rule**  
   $$
   P(A) + P(A^c) = 1, \quad P(A^c) = 1 - P(A)
   $$  
2. **Probability of the Empty Set**  
   $$
   P(∅) = 0
   $$  
3. **Subset Rule** If **A ⊂ B**, then:  
   $$
   P(A) \leq P(B)
   $$

4. **Inclusion-Exclusion for Two Sets**  
   $$
   P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
   $$ 

The Inclusion-Exclusion Principle can be generalized to more than two sets.


---
### Conditional Probability

The **P( A | B )** is called the **conditional probability of A given B**.

If A and B are events in a sample space, and P(B) ≠ 0, then the conditional probability of A given B is defined as:

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

The outcome must lie in both A and B. Therfore, A ∩ B becomes the event of interest, and B is considered the new sample space.

**Example:**  
Consider deck of 52 playing cards. Let A be drawing a **King**, and  B be drawing a **Spade**.

- **P(A) = 4/52 = 1/13** 
- **P(B) = 13/52 = 1/4** 
- **P(A ∩ B) = 1/52**

The conditional probability of drawing a King given that the card is a Spade is:

$$
P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{1/52}{1/4} = \frac{1}{13}
$$

---

### Finding Intersections

We can find **P(A ∩ B)** using the **Multiplication Rule** of the probability.

$$
P(A \cap B) = P(A) \cdot P(B|A)
$$

Imagine selecting two cards from a deck without replacement:

- Let A be the event **"the first card is an Ace"**.
- Let B be the event **"the second card is an Ace"**.

1. **P(A)**
   - There are 4 Aces out of 52 cards, so **P(A) = 4/52 = 1/13**.

2. **P(B|A)**:
   - If the first card was an Ace, there are now 3 Aces left out of 51 cards, so **P(B|A) = 3/51 = 1/17**.

3. Multiply them together:
   $$
   P(A \cap B) = P(A) \cdot P(B|A) = \frac{1}{13} \cdot \frac{1}{17} = \frac{1}{221}
   $$

---
### Dependent and Independent Events

Events can either be **dependent** or **independent**, which affects how we calculate probabilities involving them.

#### **Independent Events**

Two events **A** and **B** are said to be **independent** if the occurrence of one event **does not affect** the probability of the other event occurring.

$$
P(A|B) = P(A) \quad \text{or} \quad P(B|A) = P(B)
$$

This leads to the **Multiplication Rule** for Independent Events:

$$
P(A \cap B) = P(A) \cdot P(B)
$$

**Example:**  
Consider flipping a fair coin and rolling a fair six-sided die.

- Let event **A** be **getting Heads** on the coin flip.
- Let event **B** be **rolling a 4** on the die.

Since flipping the coin has no impact on the die roll and vice versa, A and B are independent.

- **P(A) = 1/2** 
- **P(B) = 1/6** 

The probability of both A and B occurring is:

$$
P(A \cap B) = P(A) \cdot P(B) = \frac{1}{2} \cdot \frac{1}{6} = \frac{1}{12}
$$

We can simply multiply the probabilities when events are independent.

---

#### Dependent Events

Two events **A** and **B** are **dependent** if the occurrence of one event **affects** the probability of the other event occurring. 

The **Multiplication Rule** for Dependent Events is:

$$
P(A \cap B) = P(A) \cdot P(B|A)
$$


**Example:**  
Consider drawing two cards **without replacement** from a standard deck of 52 cards.

- Let event **A** be **the first card is a Queen**.
- Let event **B** be **the second card is a Queen**.

Since the first card is not replaced, the events are dependent because the outcome of the first draw affects the probability of the second draw.

1. **P(A)**: There are 4 Queens in the deck

   $$
   P(A) = \frac{4}{52} = \frac{1}{13}
   $$

2. **P(B|A)**: If the first card was a Queen, there are now 3 Queens left in a deck of 51 cards

   $$
   P(B|A) = \frac{3}{51} = \frac{1}{17}
   $$

3. **Joint Probability**:

   $$
   P(A \cap B) = P(A) \cdot P(B|A) = \frac{1}{13} \cdot \frac{1}{17} = \frac{1}{221}
   $$

This calculation reflects the dependency between events A and B.

---

#### Differences Between Independent and Dependent Events

- **Independent Events:** The outcome of one event **does not influence** the outcome of the other.
- **Dependent Events:** The outcome of one event **does influence** the outcome of the other.

A quick way to test for independence is to check if:

$$
P(A \cap B) = P(A) \cdot P(B)
$$

If this equality holds, the events are independent. If not, the events are dependent.

---

### Bayes' Theorem

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

Where:
- **P(A|B)** is the **posterior probability**
- **P(B|A)** is the **likelihood**
- **P(A)** is the **prior probability**
- **P(B)** is the **marginal probability**

#### **Derivation of Bayes' Theorem**

Derived from the definition of conditional probability:

$$
P(A|B) = \frac{P(A \cap B)}{P(B)} \quad
$$

Rearranging the second equation:

$$
P(A \cap B) = P(B|A) \cdot P(A)
$$

Substitute this into the first equation:

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

This is Bayes' Theorem.

#### **Example:**

Consider a medical test for a disease:

- **P(Disease)** = 0.01 
- **P(Positive | Disease)** = 0.99
- **P(Positive | No Disease)** = 0.05

You receive a **positive test result**. What is the probability you actually have the disease when the result positive?

1. **Calculate P(Positive):**

$$
= (0.99 \cdot 0.01) + (0.05 \cdot 0.99)
$$

$$
= 0.0099 + 0.0495 = 0.0594
$$

2. **Apply Bayes' Theorem:**

$$
\frac{P(Positive|Disease) \cdot P(Disease)}{P(Positive)}
$$

$$
= \frac{0.99 \cdot 0.01}{0.0594}\approx \frac{0.0099}{0.0594} \approx 0.1667
$$

So, even with a positive test result, the probability of actually having the disease is approximately **16.67%**.

---

### Random Variables

**Random Variable** is a function that assigns a real number to each outcome of a probability experiment. Usually, capital **X** used to denote random variables, while their lowercase counterparts **x**, represent value that **X** can take. **Range** is the set of all values a random variable can produce. 


A **Discrete Random Variable** has a countable set of possible values, while a **Continuous Random Variable** has an uncountable range, covering an interval of real numbers **ℝ**.


### Probability Mass Function

A Probability Mass Function gives the probability of each possible value of a **discrete random variable**. It tells us how likely each outcome is.

$$
f(x) = P(X = x), \quad \text{where } 0 \leq P(X = x) \leq 1
$$

The total probability of all possible values must sum to 1:

$$
\sum P(X = x) = 1
$$


### Probability Density Function

A **Probability Density Function** describes the probability distribution of a **continuous random variable**. Unlike a PMF, which gives the probability of specific discrete values, the PDF represents probability **density** over an interval.

For a continuous random variable **X**, the **PDF** satisfies:

1. **Non-negativity**:
   $$
   f(x) \geq 0, \quad \forall x \in \mathbb{R}
   $$

2. **Total Probability**:
   $$
   \int_{-\infty}^{\infty} f(x) \,dx = 1
   $$

3. **Probability of a single point always zero:**
   $$
   P(X = x) = 0
   $$  

  For a piecewise function **f(x)** that is zero outside a given interval, we find probabilities over intervals by integrating within those intervals. 

   $$
   P(a \leq X \leq b) = \int_{a}^{b} f(x) \,dx
   $$  

Whether we use ≤ or < in the bounds does not affect the result, because the probability of a single point is zero.

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
      <td style="padding: 8px; border: 0.5px solid lightgray;">$$ P(a \leq X \leq b) = \sum P(X = x) $$</td>
      <td style="padding: 8px; border: 0.5px solid lightgray;">$$ P(a \leq X \leq b) = \int_a^b f(x) dx $$</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 0.5px solid lightgray; text-align: center;">Takes countable values</td>
      <td style="padding: 8px; border: 0.5px solid lightgray; text-align: center;">Takes uncountable values</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 0.5px solid lightgray;">$$ \sum P(X = x) = 1 $$</td>
      <td style="padding: 8px; border: 0.5px solid lightgray;">$$ \int_{-\infty}^{\infty} f(x) dx = 1 $$</td>
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

### Cumulative Distribution Function

A **Cumulative Distribution Function** gives the probability that a random variable **X** takes on a value **less than or equal to** a specific value **x**.

$$
F(x) = P(X \leq x)
$$

For a **discrete random variable**, the CDF is the sum of the probabilities of all outcomes **less than or equal to** **x**:

$$
F(x) = P(X \leq x) = \sum_{t \leq x} P(X = t)
$$

- **Probability at a constant**

$$
P(X = x) = F(x) - F(x - 1)
$$

- **Probability over an interval** 

$$
P(a \leq X \leq b) = F(b) - F(a-1)
$$

For a **continuous random variable**, the CDF is the **integral** of the probability density function from **-∞** to **x**:

$$
F(x) = P(X \leq x) = \int_{-\infty}^{x} f(t) \, dt
$$

The derivative of the CDF gives the PDF:
  $$
  f(x) = \frac{d}{dx}F(x)
  $$

- **Probability at a constant value**  
  $$
  P(X = x) = 0
  $$

- **Probability of an Interval**
  $$
  P(a \leq X \leq b) = F(b) - F(a)
  $$

--- 

### PMF to CDF Conversion

Consider a discrete random variable **X** with the following **PMF** defined over four points:

$$
p(x) = \begin{cases} 
\frac{1}{8}, & x = 0, \\\\[6pt]
\frac{3}{8}, & x = 1, \\\\[6pt]
\frac{3}{8}, & x = 2, \\\\[6pt]
\frac{1}{8}, & x = 3, \\\\[6pt]
0, & \text{otherwise}.
\end{cases}
$$

- For **0 ≤ x < 1**:  
  $$
  F(x) = p(0) = \frac{1}{8}
  $$

- For **1 ≤ x < 2**:  
  $$
  F(x) = p(0) + p(1) = \frac{1}{8} + \frac{3}{8} = \frac{4}{8} = \frac{1}{2}
  $$

- For **2 ≤ x < 3**:  
  $$
  F(x) = p(0) + p(1) + p(2) = \frac{1}{8} + \frac{3}{8} + \frac{3}{8} = \frac{7}{8}
  $$

- For **x ≥ 3**:  
  $$
  F(x) = p(0) + p(1) + p(2) + p(3) = \frac{1}{8} + \frac{3}{8} + \frac{3}{8} + \frac{1}{8} = 1.
  $$

**Therefore the CDF is:**

$$
F(x) = \begin{cases} 
0, & x < 0, \\\\[6pt]
\frac{1}{8}, & 0 \le x < 1, \\\\[6pt]
\frac{1}{2}, & 1 \le x < 2, \\\\[6pt]
\frac{7}{8}, & 2 \le x < 3, \\\\[6pt]
1, & x \ge 3.
\end{cases}
$$

---

### CDF to PMF Conversion

Using the discrete **CDF** from the previous example:

$$
F(x) = \begin{cases} 
0, & x < 0, \\\\[6pt]
\frac{1}{8}, & 0 \le x < 1, \\\\[6pt]
\frac{1}{2}, & 1 \le x < 2, \\\\[6pt]
\frac{7}{8}, & 2 \le x < 3, \\\\[6pt]
1, & x \ge 3.
\end{cases}
$$

- For **x = 0**:  
  $$
  p(0) = F(0) - \lim_{x \to 0^-} F(x) = \frac{1}{8} - 0 = \frac{1}{8}.
  $$

- For **x = 1**:  
  $$
  p(1) = F(1) - F(0) = \frac{1}{2} - \frac{1}{8} = \frac{3}{8}.
  $$

- For **x = 2**:  
  $$
  p(2) = F(2) - F(1) = \frac{7}{8} - \frac{1}{2} = \frac{3}{8}.
  $$

- For **x = 3**:  
  $$
  p(3) = F(3) - F(2) = 1 - \frac{7}{8} = \frac{1}{8}.
  $$

**Therefore the PMF is:**

$$
f(x) = \begin{cases} 
\frac{1}{8}, & x = 0, \\\\[6pt]
\frac{3}{8}, & x = 1, \\\\[6pt]
\frac{3}{8}, & x = 2, \\\\[6pt]
\frac{1}{8}, & x = 3, \\\\[6pt]
0, & \text{otherwise}.
\end{cases}
$$


---

### PDF to CDF Conversion

Consider a continuous random variable **X** with the following piecewise **PDF** defined over two intervals:

$$
f(x) = \begin{cases} x, & 0 \leq x < 1, \\\ 2 - x, & 1 \leq x \leq 2, \\\ 0, & \text{otherwise}.
\end{cases}
$$

- For **x < 0**:  
$$
F(x) = 0
$$

- For **0 ≤  x < 1**:  
$$
F(x) = \int_{0}^{x} t \ dt = \frac{x^2}{2}
$$

- For **1 ≤  x ≤  2**:  

$$
\int_{0}^{1} t \ dt + \int_{1}^{x} (2-t) \ dt 
$$

$$
 \frac{1}{2} + \left[2x - \frac{x^2}{2} - \left(2 - \frac{1}{2}\right)\right]
$$

$$
F(x) = 2x - \frac{x^2}{2} - 1.
$$

- For **x > 2**:  
$$
F(x) = 1.
$$

**Therefore the CDF is:**

$$
F(x) = \begin{cases} 0, & x < 0, \\\ \frac{x^2}{2}, & 0 \le x < 1, \\\ 2x - \frac{x^2}{2} - 1, & 1 \le x \le 2, \\\ 1, & x > 2. \end{cases}
$$

---

### CDF to PDF Conversion


Using the continuous **CDF** from the previous example:

$$
F(x) = \begin{cases} 0, & x < 0, \\\ \frac{x^2}{2}, & 0 \le x < 1, \\\ 2x - \frac{x^2}{2} - 1, & 1 \le x \le 2, \\\ 1, & x > 2. \end{cases}
$$

- For **0 ≤ x < 1**:  
$$
f(x) = \frac{d}{dx}\left(\frac{x^2}{2}\right) = x.
$$

- For **1 ≤ x ≤ 2**:  
$$
f(x) = \frac{d}{dx}\left(2x - \frac{x^2}{2} - 1\right) = 2 - x.
$$

**Therfore the PDF is:**

$$
f(x) = \begin{cases} x, & 0 \leq x < 1, \\\ 2 - x, & 1 \leq x \leq 2, \\\ 0, & \text{otherwise}.
\end{cases}
$$

