---
title: Linear Algebra
author: onur
tags: [" Matrices", " Determinants", "Vector Spcaes", " Linear Transformation"]
createdAt: "2025-01-29"
updatedAt: "2025-01-29"
description: "Exploring Linear Algebra with Dr. John Talboom"
---
### Introduction
Linear algebra plays a crucial role in computer science, particularly in Artificial Intelligence, Machine Learning, and Parallel Programming. In AI/ML, matrices form the foundation of operations such as linear transformations, feature representation, and optimization in deep learning models. Neural networks rely heavily on matrix multiplications for forward and backward propagation, enabling efficient computation of weights and biases. Similarly, in CUDA, GPUs leverage matrix operations to accelerate parallel computations, dramatically improving performance in tasks like image processing, simulations, and AI inference.
### Prerequisites
The basics of systems of equations and matrix row operations. Understanding matrices, determinants, vector spaces, and linear transformations requires algebra and pre-calculus knowledge. Some calculus, particularly differentiation and integration, helps with advanced topics like eigenvalues and eigenvectors.

### Matrix Addition
Addition and subtraction can only be performed between **matrices of the same size** which means, the matrices must have the **same number of rows and columns**.
The sum of two matrices is calculated by **adding the elements at the same position**.
1. **Addition is commutative:** $$ A + B = B + A $$
2. **Addition is associative:** $$ (A + B) + C = A + (B + C) $$

Example:
$$
A =
\begin{bmatrix} 1 & 2 \\\ 3 & 4 \end{bmatrix},
\quad
B =
\begin{bmatrix} 5 & 6 \\\ 7 & 8 \end{bmatrix}
$$
Adding these two matrices:
$$
A + B =
\begin{bmatrix} 1+5 & 2+6 \\\ 3+7 & 4+8 \end{bmatrix} =
\begin{bmatrix} 6 & 8 \\\ 10 & 12 \end{bmatrix}
$$

---

### Matrix Subtraction
The difference of two matrices is calculated by **subtracting the elements at the same position** and **Dimensions must be the same.**

1. **Subtraction is not commutative:** $$ A - B \neq B - A$$
2. **Subtraction is not associative:** $$ (A - B) - C \neq A - (B - C) $$

Example:
$$
A =
\begin{bmatrix} 7 & 8 \\\ 9 & 10 \end{bmatrix},
\quad
B =
\begin{bmatrix} 2 & 3 \\\ 4 & 5 \end{bmatrix}
$$
Subtracting these two matrices:
$$
A - B =
\begin{bmatrix} 7-2 & 8-3 \\\ 9-4 & 10-5 \end{bmatrix} =
\begin{bmatrix} 5 & 5 \\\ 5 & 5 \end{bmatrix}
$$

---

### Matrix Multiplication
The following conditions must be met:
1. **The number of columns in the first matrix must be equal to the number of rows in the second matrix.**  
2. **Multiplication is not commutative:**
$$
A \times B \neq B \times A
$$
3. **Multiplication is associative:**
$$
(A \times B) \times C = A \times (B \times C)
$$
4. **Distributive Property:**
$$
A \times (B + C) = A \times B + A \times C
$$


Example:
$$
A =
\begin{bmatrix} 1 & 2 \\\ 3 & 4 \end{bmatrix},
\quad
B =
\begin{bmatrix} 5 & 6 \\\ 7 & 8 \end{bmatrix}
$$
Multiplying these matrices:
$$
C = A \times B =
\begin{bmatrix} 
(1 \times 5 + 2 \times 7) & (1 \times 6 + 2 \times 8) \\\ 
(3 \times 5 + 4 \times 7) & (3 \times 6 + 4 \times 8) 
\end{bmatrix}
$$
Result:
$$
C =
\begin{bmatrix} 19 & 22 \\\ 43 & 50 \end{bmatrix}
$$

**Let's Visualize it:**![Matrix Multiplication](/AppendixLA/1.png)

---

### Identity Matrix
The **identity matrix** **`I`** is a **square matrix** with **1's on the main diagonal** and **0's at rest**.
1. **Multiplying any matrix by the identity matrix leaves it unchanged**
   $$ A \times I = I \times A = A $$
2. **Its inverse is itself**
   $$ I^{-1} = I $$


**Example:**
$$ I_2 = \begin{bmatrix} 1 & 0 \\\ 0 & 1 \end{bmatrix} $$
$$ I_3 = \begin{bmatrix} 1 & 0 & 0 \\\ 0 & 1 & 0 \\\ 0 & 0 & 1 \end{bmatrix} $$
$$ I_4 = \begin{bmatrix} 1 & 0 & 0 & 0 \\\ 0 & 1 & 0 & 0 \\\ 0 & 0 & 1 & 0 \\\ 0 & 0 & 0 & 1 \end{bmatrix} $$

---

### Matrix Transpose
The **transpose** of a matrix is obtained by **swapping its rows and columns**.
A matrix of size `m x n` will have a transpose of size `n x m`.

**Example:**
$$
A = \begin{bmatrix} 1 & 2 & 3\\\4 & 5 & 6\end{bmatrix}
$$
Transpose:
$$
A^T = \begin{bmatrix} 1 & 4 \\\ 2 & 5 \\\ 3 & 6\end{bmatrix}
$$

Properties:

1. **Double transpose returns the original matrix**  
   $$
   (A^T)^T = A
   $$
2. **Transpose of a sum**  
   $$
   (A + B)^T = A^T + B^T
   $$
3. **Transpose of a product**  
   $$
   (A \times B)^T = B^T \times A^T
   $$
4. **Transpose of a scalar multiplication**  
   $$
   (cA)^T = c A^T
   $$
5. **The transpose of the identity matrix is itself**  
   $$
   I^T = I
   $$
6. **A symmetric matrix is equal to its transpose**  
   $$
   A^T = A \quad \Rightarrow \quad A \text{ is a symmetric matrix}
   $$
   Example:
   $$ A = \begin{bmatrix} 1 & 2 & 3 \\\ 2 & 4 & 5 \\\ 3 & 5 & 6 \end{bmatrix} $$
   Resulting in symmetry:
   $$ A^T = \begin{bmatrix} 1 & 2 & 3 \\\ 2 & 4 & 5 \\\ 3 & 5 & 6 \end{bmatrix} $$

---

### Diagonal Matrix
A **diagonal matrix** is a **square matrix** in which only the **main diagonal** elements are **nonzero**, while all other elements are **zero**.

1. **Closed under addition and multiplication**
   $$ D_1 + D_2 = D_3 \quad \text{(equals another diagonal matrix)} $$
   $$ D_1 \times D_2 = D_4 \quad \text{(equals another diagonal matrix)} $$
2. **The determinant is the product of the diagonal elements**
   $$ \det(D) = d_1 \times d_2 \times \dots \times d_n $$
3. **If invertible, its inverse is also a diagonal matrix**
   $$ D^{-1} = \begin{bmatrix} \frac{1}{d_1} & 0 & \dots & 0 \\\ 0 & \frac{1}{d_2} & \dots & 0 \\\ \vdots & \vdots & \ddots & \vdots \\\ 0 & 0 & \dots & \frac{1}{d_n} \end{bmatrix}, \quad \text{if } d_i \neq 0 $$
4. **Its transpose is itself**
   $$ D^T = D $$

---

### Inverse Matrix
A matrix has an inverse only if it is square matrix and its determinant is nonzero.
Some square matrices may not have  inverse, in order to find out we can use the **Gauss-Jordan Method**.
1. **Append the identity matrix `I` to matrix `A`:**
   $$
   [A \ | \ I]
   $$
2. **Use row operations** to transform `A` into the identity matrix.
3. **Once the transformation is complete, the matrix on the right becomes the inverse matrix**.

**Example:**
$$
A =
\begin{bmatrix} 2 & 1 \\\ 5 & 3 \end{bmatrix}
$$
Appending the identity matrix:
$$
[A \ | \ I] =
\begin{bmatrix} 2 & 1 & | & 1 & 0 \\\ 5 & 3 & | & 0 & 1 \end{bmatrix}
$$

Performing row operations to convert `A` into the identity matrix:
$$
\begin{bmatrix} 1 & 0 & | & 3 & -1 \\\ 0 & 1 & | & -5 & 2 \end{bmatrix}
$$
Result:
$$
A^{-1} =
\begin{bmatrix} 3 & -1 \\\ -5 & 2 \end{bmatrix}
$$

---

### Determinants
The determinant of a square matrix determines whether it has an inverse.
For an **`n x n`** matrix **`A`**, the determinant is represented as:
$$
\det(A) \quad \text{or} \quad |A|
$$

For a **2×2** matrix:
$$
A = \begin{bmatrix} a & b \\\ c & d \end{bmatrix}
$$
The determinant is given by:
$$
\det(A) = ad - bc
$$

For a **3×3** matrix:
$$
A = \begin{bmatrix} a & b & c \\\ d & e & f \\\ g & h & i \end{bmatrix}
$$

The determinant is computed using cofactor expansion:

$$
\det(A) = a \begin{vmatrix} e & f \\\ h & i \end{vmatrix}  -b \begin{vmatrix} d & f \\\ g & i \end{vmatrix} +  c \begin{vmatrix} d & e \\\ g & h \end{vmatrix}
$$

Determinant equals:
$$
\det(A) = a(ei - fh) - b(di - fg) + c(de - gh)
$$



---


### Singular Matrix
If the determinant is **zero**, the matrix is **singular**.
Additionaly, matrix will be singular if there are free variables in the solution set. This can be revealed by putting the matrix in RREF
- **It does not have an inverse.**
- **A system of linear equations may either have no solution or infinitely many**

$$ A = \begin{bmatrix} a & b \\\ c & d \end{bmatrix} $$
Determinant formula:
$$ \det(A) = (a \times d) - (b \times c) $$

**Example:**
$$
A =
\begin{bmatrix} 2 & 4 \\\ 1 & 2 \end{bmatrix}
$$
Determinant:
$$
\det(A) = (2 \times 2) - (4 \times 1) = 4 - 4 = 0
$$
Since the determinant is **0**, the matrix is **singular**.

---


### Non-Singular Matrix
A matrix is **non-singular** if its determinant is **non-zero**.
- **It has an inverse.**
- **A system of linear equations has a unique solution.**

Its inverse can be easily calculated by the formula:
$$ A^{-1} = \frac{1}{\det(A)} \times \begin{bmatrix} d & -b \\\ -c & a \end{bmatrix} $$

Given matrix:
$$ B = \begin{bmatrix} 1 & 2 \\\ 3 & 4 \end{bmatrix} $$
**Finding the determinant:**
$$ \det(B) = (1 \times 4) - (2 \times 3) = 4 - 6 = -2 $$
Since the determinant is **not zero**, matrix **B** is **non-singular**, and its inverse can be calculated.

**Computing the inverse:**
Substituting **(a = 1), (b = 2), (c = 3), (d = 4)**:
$$ B^{-1} = \frac{1}{-2} \times \begin{bmatrix} 4 & -2 \\\ -3 & 1 \end{bmatrix} $$
Multiplying each element by **(-1/2)**:
$$ B^{-1} = \begin{bmatrix} -2 & 1 \\\ \frac{3}{2} & -\frac{1}{2} \end{bmatrix} $$
Verifying:
$$ B \times B^{-1} = I $$
Since the result is the **identity matrix**, the inverse calculation is correct.

---

### Elementary Matrix

An **elementary matrix** is a matrix obtained by applying a **single row operation** to the **identity matrix**.

- These matrices are **always invertible** and **their determinants are never zero**.  
- The **inverse of an elementary matrix** is also an elementary matrix.

An **elementary matrix** is formed by applying **one of the three fundamental row operations** to the identity matrix:

1. **Multiplying a row by a scalar**  
   For example, **multiplying the 2nd row by 3**:
   $$
   E_1 = \begin{bmatrix} 1 & 0 & 0 & 0 \\\ 0 & 3 & 0 & 0 \\\ 0 & 0 & 1 & 0 \\\ 0 & 0 & 0 & 1 \end{bmatrix}
   $$
   - **To Find Inverse:** Divide the same row by 3 in Identity Matrix 

2. **Swapping two rows**  
   For example, **swapping the 1st and 3rd rows**:
   $$
   E_2 = \begin{bmatrix} 0 & 0 & 1 & 0 \\\ 0 & 1 & 0 & 0 \\\ 1 & 0 & 0 & 0 \\\ 0 & 0 & 0 & 1 \end{bmatrix}
   $$
   - **To Find Inverse:** Swap the same two rows again.


3. **Adding a multiple of one row to another row**  
   For example, **adding 2 times the 1st row to the 2nd row**:
   $$
   E_3 = \begin{bmatrix} 1 & 0 & 0 & 0 \\\ 2 & 1 & 0 & 0 \\\ 0 & 0 & 1 & 0 \\\ 0 & 0 & 0 & 1 \end{bmatrix}
   $$
   - **Inverse:** Subtract 2 times the 1st row from the 2nd row in Identity Matrix.

This simple trick **applying the inverse of the original row operation to the identity matrix** quickly gives the inverse of an elementary matrix.

---
