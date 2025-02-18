---
title: Linear Algebra
author: onur
tags: [" Matrices", " Determinants", " Vector Spcaes", " Linear Transformation"]
createdAt: "2025-01-29"
updatedAt: "2025-01-29"
description: "Exploring Linear Algebra with Dr. John Talboom"
---

### Matrix Addition
Addition and subtraction can only be performed between **matrices of the same size** which means, the matrices must have the **same number of rows and columns**.
The sum of two matrices is calculated by **adding the elements at the same position**.
1. **Addition is commutative:** $$ A + B = B + A $$
2. **Addition is associative:** $$ (A + B) + C = A + (B + C) $$
3. **Scalars Over Matrix Addition**
$$
r(A + B) = rA + rB
$$
4. **Inverse Addition:**  
$$
A + (-A) = 0
$$

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
3. **Scalars Over Matrix Subtraction:** 
$$
r(A - B) = rA - rB
$$

4. **Subtracting a Matrix from Itself:**  
$$
A - A = 0
$$

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
The number of columns in the first matrix must be equal to the number of rows in the second matrix.

1. **Multiplication is Not Commutative:**
$$
A \times B \neq B \times A
$$
2. **Multiplication Associativity:**
$$
(A \times B) \times C = A \times (B \times C)
$$
3. **Distributive Property:**
$$
A \times (B + C) = A \times B + A \times C
$$
4. **Scalar Associativity**
$$
r(sA) = (rs)A
$$
5. **Scalar Distributive Property**
$$
(r + s)A = rA + sA
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

$$ I_2 = \begin{bmatrix} 1 & 0 \\\ 0 & 1 \end{bmatrix} $$
$$ I_3 = \begin{bmatrix} 1 & 0 & 0 \\\ 0 & 1 & 0 \\\ 0 & 0 & 1 \end{bmatrix} $$
$$ I_4 = \begin{bmatrix} 1 & 0 & 0 & 0 \\\ 0 & 1 & 0 & 0 \\\ 0 & 0 & 1 & 0 \\\ 0 & 0 & 0 & 1 \end{bmatrix} $$

1. **Multiplying any matrix by the identity matrix leaves it unchanged**
   $$ A \times I = I \times A = A $$
2. **Its inverse is itself**
   $$ I^{-1} = I $$


If **A** is an **M × N matrix**, you can still multiply it by identity matrices:
   
- Multiply by an **M × M** identity matrix **I_m** on the **left**
- Multiply by an **N × N** identity matrix **I_n** on the **right**

In both cases, **A** stays the same:

Let:
$$
A = \begin{bmatrix} 1 & 2 & 3 \\\ 4 & 5 & 6 \end{bmatrix} \quad (2 \times 3 \)
$$
Identity matrices:
$$
I_2 = \begin{bmatrix} 1 & 0 \\\ 0 & 1 \end{bmatrix}, \quad I_3 = \begin{bmatrix} 1 & 0 & 0 \\\ 0 & 1 & 0 \\\ 0 & 0 & 1 \end{bmatrix}
$$

$$
I_2 \times A = \begin{bmatrix} 1 & 0 \\\ 0 & 1 \end{bmatrix} \times \begin{bmatrix} 1 & 2 & 3 \\\ 4 & 5 & 6 \end{bmatrix} = \begin{bmatrix} 1 & 2 & 3 \\\ 4 & 5 & 6 \end{bmatrix}
$$

$$
A \times I_3 = \begin{bmatrix} 1 & 2 & 3 \\\ 4 & 5 & 6 \end{bmatrix} \times \begin{bmatrix} 1 & 0 & 0 \\\ 0 & 1 & 0 \\\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 & 3 \\\ 4 & 5 & 6 \end{bmatrix}
$$

Therefore:
$$
I_m \times A = A \quad \text{and} \quad A \times I_n = A
$$



---

### Matrix Transpose
The **transpose** of a matrix is obtained by **swapping its rows and columns**.
A matrix of size **M x N** will have a transpose of size **N x M**.

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

### Inverse Matrix
Matrix has an inverse only if it is square matrix and its determinant is nonzero. The inverse of a matrix is unique. 

Suppose 
$$
Ax = b,
$$
we can multiply by **A⁻¹** if it exists:

$$
A^{-1}Ax = A^{-1}b.
$$

Since **A⁻¹  x  A = I** we get:

$$
x = A^{-1}b.
$$


#### **Properties**

1. **Inverse of the Inverse:**  
   $$
   (A^{-1})^{-1} = A
   $$

2. **Inverse of a Scalar Multiple:**  
   $$
   (kA)^{-1} = \frac{1}{k} A^{-1}
   $$

3. **Inverse of a Product:**  
   $$
   (AB)^{-1} = B^{-1} A^{-1} \quad
   $$

4. **Inverse of a Transpose:**  
   $$
   (A^T)^{-1} = (A^{-1})^T
   $$

5. **Inverse of a Power:**  
   $$
   (A^r)^{-1} = (A^{-1})^r \quad \text{where } A^{-r} = (A^{-1})^r
   $$
---

### Inverse using Gauss Jordan Elimination 

1. Append the identity **matrix I** to **matrix A**:
   $$
   [A \ | \ I]
   $$
2. **Use row operations** to transform **A** into the identity matrix.

**Once the transformation is complete, the matrix on the right becomes the inverse matrix**.

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

Performing row operations to convert **A** into the identity matrix:
$$
\begin{bmatrix} 1 & 0 & | & 3 & -1 \\\ 0 & 1 & | & -5 & 2 \end{bmatrix}
$$
Result:
$$
A^{-1} =
\begin{bmatrix} 3 & -1 \\\ -5 & 2 \end{bmatrix}
$$

Multiplying **A** and **A⁻¹** to verify:

$$
A \times A^{-1} =
\begin{bmatrix} 2 & 1 \\\ 5 & 3 \end{bmatrix}
\begin{bmatrix} 3 & -1 \\\ -5 & 2 \end{bmatrix}
$$

$$
\begin{bmatrix} 2\times3 + 1\times(-5) & 2\times(-1) + 1\times2 \\\ 5\times3 + 3\times(-5) & 5\times(-1) + 3\times2 \end{bmatrix} =
\begin{bmatrix} 1 & 0 \\\ 0 & 1 \end{bmatrix}
$$

**A x A⁻¹ = I**, confirming the inverse is correct.


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

### Upper and Lower Triangular Matrices

An **upper triangular matrix** is a square matrix where **all the elements below the main diagonal are zero**. 

- **Determinant** of a triangular matrix is the **product of the diagonal elements**.
- They are **easy to solve** in linear systems due to their structure.

#### Upper Triangular Matrix

$$
U = \begin{bmatrix} 2 & 4 & -1 \\\0 & 3 & 5 \\\0 & 0 & 6 \end{bmatrix}
$$

- All elements **below the main diagonal** are zero.

#### Lower Triangular Matrix

$$
L = \begin{bmatrix} 3 & 0 & 0 \\\ 1 & 5 & 0 \\\ -2 & 4 & 7 \end{bmatrix}
$$

- All elements **above the main tdiagonal** are zero.

#### Properties 
- If a triangular matrix is invertible, its **inverse is also triangular** of the same type.
- The **transpose** of an **upper triangular matrix** is a **lower triangular matrix**, and vice versa.
- The **product** of two upper (or lower) triangular matrices is also **upper (or lower) triangular**.

---

### Diagonal Matrix
A **diagonal matrix** is a **square matrix** in which only the **main diagonal** elements are **nonzero**, while all other elements are **zero**.

- **The determinant is the product of the diagonal elements**
   $$ \det(D) = d_1 \times d_2 \times \dots \times d_n $$

- **Closed under addition and multiplication**
   $$ D_1 + D_2 = D_3 \quad \text{(another diagonal matrix)} $$
   $$ D_1 \times D_2 = D_4 \quad \text{(another diagonal matrix)} $$

- **If invertible, its inverse is also a diagonal matrix**

- **Its transpose is itself**
   $$ D^T = D $$

---

### Determinants
The determinant of a square matrix determines whether it has an inverse and its scaling factor on space.
For an **N x N** matrix **A**, the determinant is represented as:
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

### Properties

- If a matrix has a row or column consisting entirely of **zeros**, then its determinant is **zero**.

- If a matrix has **two identical rows or columns**, then its determinant is **zero**.

- **Swapping** two rows or two columns of a matrix **changes the sign** of its determinant.

- **Adding** a multiple of one row to another row does **not** change the determinant.

- If one row of a matrix is **multiplied by a scalar k**, then the determinant is also multiplied by **k**. For example, if **A'** is the matrix obtained by multiplying one row of **A** by **k**, then:
  $$
  \det(A') = k \cdot \det(A)
  $$

- The determinant of the **product** of two matrices is the product of their determinants:
  $$
  \det(AB) = \det(A) \cdot \det(B)
  $$

- The determinant of the **inverse** of a matrix is the reciprocal of the determinant of the original matrix:
  $$
  \det(A^{-1}) = \frac{1}{\det(A)}
  $$

- The determinant remains **unchanged** when taking the **transpose**:
  $$
  \det(A^T) = \det(A)
  $$

- **Raising a matrix to a power** raises its determinant to the same power:
  $$
  \det(A^n) = (\det A)^n
  $$


- If an **n x n** matrix **A** is multiplied by a scalar **k**, then:
  $$
  \det(kA) = k^n \cdot \det(A)
  $$
  where **n** is the number of rows (or columns) of **A**.

- **Example:**

  $$
  A = \begin{bmatrix} 2 & 1 \\\ 3 & 4 \end{bmatrix}
  $$
  
  First, compute **det(A)**:
  $$
  \det(A) = (2)(4) - (1)(3) = 5
  $$
  
  Now, if we multiply **A** by a scalar **k = 3**, then:
  $$
  \det(3A) = 3^2 \cdot \det(A) = 9 \cdot 5 = 45
  $$


---

### 2 x 2 Inverse with Determinants

$$
A = \begin{bmatrix} a & b \\\ c & d \end{bmatrix}
$$

1. **Compute the Determinant:**  
$$
\det(A) = ad - bc.
$$

2. **Apply the Inverse Formula:**  
$$
A^{-1} = \frac{1}{ad-bc} \begin{bmatrix} d & -b \\\ -c & a \end{bmatrix}.
$$

**Example:**
$$
A = \begin{bmatrix} 2 & 1 \\\ 5 & 3 \end{bmatrix}
$$

- Compute the determinant:
  $$
  \det(A) = 2 \times 3 - 1 \times 5  = 1.
  $$

- Since the determinant is non-zero, compute the inverse:
  $$
  A^{-1} = \frac{1}{1}  \text{   x}\begin{bmatrix} 3 & -1 \\\ -5 & 2 \end{bmatrix}
  $$

Therfore
$$
A^{-1} = \begin{bmatrix} 3 & -1 \\\ -5 & 2 \end{bmatrix}
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

Given matrix:
$$ B = \begin{bmatrix} 1 & 2 \\\ 3 & 4 \end{bmatrix} $$
**Finding the determinant:**
$$ \det(B) = (1 \times 4) - (2 \times 3) = 4 - 6 = -2 $$
Since the determinant is **not zero**, matrix **B** is **non-singular**, and its inverse can be calculated.

**Computing the inverse:**

$$ B^{-1} = \frac{1}{-2} \times \begin{bmatrix} 4 & -2 \\\ -3 & 1 \end{bmatrix} $$
Multiplying each element by **(-1/2)**:
$$ B^{-1} = \begin{bmatrix} -2 & 1 \\\ \frac{3}{2} & -\frac{1}{2} \end{bmatrix} $$
Verifying:
$$ B \times B^{-1} = I $$
Since the result is the **identity matrix**, the inverse calculation is correct.

---

### Minor of an Element
The **minor** **M₍ ᵢ ⱼ ₎** of an element **a₍ ᵢ ⱼ ₎** is defined as the determinant of the submatrix obtained by deleting the **i-th** row and **j-th** column from **A**.

### Cofactor of an Element
The **cofactor** **C₍ ᵢ ⱼ ₎** of an element **a₍ ᵢ ⱼ ₎** is the minor **M₍ ᵢ ⱼ ₎** multiplied by a sign factor:

  $$
  C_{ij} = (-1)^{i+j} M_{ij}
  $$

- **Sign Pattern:**  
For example, in a **3 x 3** matrix, the pattern of signs is:
  
$$
\begin{bmatrix} + & - & + \\\ - & + & - \\\ + & - & + \end{bmatrix}
$$


#### Example

Consider the matrix:
$$
A = \begin{bmatrix} 1 & 2 & 3 \\\ 4 & 5 & 6 \\\ 7 & 8 & 9 \end{bmatrix}
$$

1. **Finding a Minor:**
For the element **a₁₁ = 1**, the minor **M₁₁** is computed by removing the first row and first column:

$$
M_{11} = \det\begin{bmatrix} 5 & 6 \\\ 8 & 9 \end{bmatrix} 
$$

$$
= \text{(} 5 \times 9\text{)} - \text{(} 6 \times 8 \text{)} = -3.
$$

2. **Finding a Cofactor:**
The cofactor **C₁₁** is then:

$$
C_{11} = (-1)^{1+1} M_{11} = 1 \times (-3) = -3.
$$

3. **Another Element**
For the element **a₁₂ = 2**, the minor **M₁₂** is found by removing the first row and second column:

$$ 
M_{12} = \det\begin{bmatrix} 4 & 6 \\\ 7 & 9 \end{bmatrix} 
$$

$$
= \text{(}4 \times 9 \text{)} - \text{(} 6 \times 7 \text{)} = -6.
$$

The cofactor **C₁₂** is:
$$
C_{12} = (-1)^{1+2} M_{12} = (-1) \times (-6) = 6.
$$

---

### Laplace Expansion

Laplace (Cofactor) expansion is a method for computing the determinant of an **n x n** matrix. It allows you to expand the determinant along any row or column.

1. **Select a Row or Column:**  
   Choose any row or column to expand along. Often, it's convenient to choose one with the most zeros to simplify calculations.

2. **Compute Cofactors:**  
   For each element **A₍ ᵢ ⱼ ₎** in the chosen row or column, calculate its cofactor **C₍ ᵢ ⱼ ₎**:

   $$
   C(i,j) = (-1)^(i+j) * det(A(i,j))
   $$

   where **A₍ ᵢ ⱼ ₎** is the submatrix obtained after removing the **i-th** row and **j-th** column.

3. **Sum the Products:**  
   Multiply each element by its corresponding cofactor and sum these products to obtain the determinant of **A**.

This method is recursive and can be applied to matrices of any size.


#### Example with a 3x3 Matrix 

Consider:

$$
A = \begin{bmatrix} a & b & c \\\ d & e & f \\\ g & h & i \end{bmatrix}
$$

The determinant is computed using laplace expansion:

$$
\det(A) = a \begin{vmatrix} e & f \\\ h & i \end{vmatrix}  -b \begin{vmatrix} d & f \\\ g & i \end{vmatrix} +  c \begin{vmatrix} d & e \\\ g & h \end{vmatrix}
$$

Determinant equals:
$$
\det(A) = a(ei - fh) - b(di - fg) + c(de - gh)
$$

While the example shows a 3x3 matrix, the same process applies to larger matrices.

---

### Adjugate of a Matrix

The **adjugate** or **adjoint** of a square matrix **A** is defined as the transpose of the cofactor matrix of **A**. It is denoted as **adj(A)**.  For an **n x n** matrix **A**, each cofactor **C₍ ᵢ ⱼ ₎** is computed as:

$$
C(i,j) = (-1)^{i+j} \det(A(i,j))
$$

where **A₍ ᵢ ⱼ ₎** is the **n-1 x n-1** submatrix formed by deleting the **i-th** row and **j-th** column. The **adjugate** of **A** is the transpose of the cofactor matrix:

$$
adj(A) = (C(j,i))
$$
That is, the **(i, j)** entry of **adj(A)** is the cofactor **C₍ ᵢ ⱼ ₎** of **A**.

1. **Multiplying A by Its Adjugate:**

   When you multiply a square matrix **A** by its adjugate (the transpose of its cofactor matrix), you get:
   $$
   A \cdot adj(A) = adj(A) \cdot A = \det(A) \cdot I
   $$


2. **Determinant of the Adjugate:**

   For an **n x n** matrix, the determinant of its adjugate is:
   $$
   \det(adj(A)) = (\det(A))^{n-1}
   $$

3. **Adjugate of the Adjugate:**

   If you take the adjugate of **adj(A)**, you get:
   $$
   adj(adj(A)) = (\det(A))^{n-2}\, A
   $$


4. **Adjugate of a Product:**

   For any two **n x n** matrices **A** and **B**, the adjugate of their product is:
   $$
   adj(AB) = adj(B) \cdot adj(A)
   $$
