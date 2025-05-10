---
title: C++
author: Onur Onel
description: "Introduction to C++" 
---


### Compiler Basics
A **compiler** translates high-level language code into machine language. **Source code** is the original program written in a high-level language. **Object code** is the translated version in machine language. On most systems:
- The **compiler** converts source code into object code.
- The **linker** combines object code into a single executable program.

---

### Types of Errors
**Syntax error**: A compile-time error due to incorrect structure or grammar.
**Logic error**: Occurs when a program runs without crashing but produces incorrect or unexpected results due to a flaw in the programmer’s logic.
**Runtime error**: Occurs during the execution of a program. Examples include:
  - Division by zero  
  - Null pointer dereference (accessing an uninitialized variable)  
  - Array index out of bounds  
  - File not found

---

### Variables and Identifiers
- Variables are names for memory locations.
- Variable names are called **identifiers**.
- The first character of an identifier must be a **letter** or **underscore** (`_`); it cannot be a digit or special character.
```cpp
int x = 1, y;     // x is initialized; y is declared but uninitialized
double z(2.0);    // z is initialized using constructor syntax
```

---

### Escape Sequences
```cpp
\n    // newline
\t    // tab
\\    // backslash
\'    // single quote
```

---

### Formatting Output 
```cpp
cout.setf(ios::fixed);       // Use fixed-point notation
cout.setf(ios::showpoint);   // Always show the decimal point
cout.precision(2);           // Set precision to 2 decimal places

cout << "The price is " << price << endl;
```

---

### Type Conversion
```cpp
int a = 5;
double b = a;      // Implicit conversion: a becomes 5.0

double x = 3.14;
int y = x;         // Truncated: y becomes 3

double pi = 3.1415;
int truncated = int(pi);  // Explicit cast, result is 3
```

---

### Enumerations
`enum` defines named constant values.
```cpp
// Implicitly initialized to sequential integer values starting from `0`
enum Color { Red, Green, Blue };         // Red = 0, Green = 1, Blue = 2
enum Color { Red = 5, Green, Blue };     // Green = 6, Blue = 7
enum Status { OK = 200, NotFound = 404 };
```
`enum class` provides scoped and type-safe enumerations:
```cpp
// Helps avoid name conflicts by requiring scoped access
enum class Color { Red };
enum class Fruit { Red };

// We can explicitly define underlying type like this:
enum class MyEnum : unsigned char { A, B, C };

// Usage:
Color c = Color::Red;
Fruit f = Fruit::Red;
```

---

### Pseudo-Random Numbers
C++ uses **pseudo-random number generation**, which means the numbers appear random but are generated using a deterministic algorithm. To make the randomness better, seed the random number generator  using the current time.
```cpp
#include <cstdlib>
#include <ctime>

srand(time(0));  // Seed the random number generator
```
The rand() function returns a random integer: 
```cpp
int r = rand();`
int die = (rand() % 6) + 1; //Simulate a six-sided die (1 to 6)
```
---

### Type Casting
`static_cast` is used for **explicit type conversions** between compatible types. It is **safer and more readable** than C-style casting. Performs **compile-time** checks to ensure conversions are valid 
```cpp
int total = 9
static_cast<double>(total); // 9.0
```

---

### Procedural Abstraction 
Procedural abstraction allows you to **hide implementation details** by encapsulating actions within **functions**. Makes programs **easier to read, maintain, debug, and reuse**.
```cpp
// Function that abstracts the averaging process
double computeAverage(double x, double y, double z) {
    return (x + y + z) / 3.0;
}

int main() {
    double a = 4.5, b = 3.0, c = 5.5;
    double average = computeAverage(a, b, c); // Function Call
    cout << "Average: " << average << endl;
    return 0;
}
```

---

### Global Variables and Const
A **global variable** is declared **outside of all functions**, usually at the top of the file. It is **accessible from any function** in the same file (or other files using `extern`).
```cpp
const double PI = 3.14159;  // Global constant

double areaOfCircle(double radius) {
    return PI * radius * radius;
}

int counter = 0;  // Global variable

void increment() {
    counter++;
}
```

---

### Function Overloading
**Function overloading** allows you to define **multiple functions with the same name**, as long as their **parameter lists differ**. A set of overloaded functions must differ by:
- The **number of parameters**, *or*
- The **type of at least one parameter**
```cpp
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

void print(int x) {            
    std::cout << "Value: " << x;
}

void print(int& x) {        
    std::cout << "Reference: " << x;
}
// However, this can cause ambiguity:
print(10);  // ❌ Compiler Error: which version to call?
```

---

### Call by Value
- A **copy** of the argument is passed to the function.
- Changes made to the parameter **do not affect** the original variable.
- Safer because the function **cannot modify** the caller’s data.
```cpp
void modify(int x) {
    x = x + 10;
}

int main() {
    int a = 5;
    modify(a);
    cout << a << endl;  // Output: 5 (unchanged)
}
```
### Call by Reference
- A **reference** to the original variable is passed.
- Changes made to the parameter **affect the original variable**.
- Useful when the function needs to modify the caller’s data or avoid copying large objects.
```cpp
void modify(int& x) {
    x = x + 10;
}

int main() {
    int a = 5;
    modify(a);
    cout << a << endl;  // Output: 15 (modified)
}
```

```cpp
void swap(int& variable1, int& variable2) 
{ 
	int temp = variable1; 
	variable1 = variable2; 
	variable2 = temp; 
}
```

---

### Const Reference
- A **const reference** allows read-only access to the original variable.
- Used to **avoid unnecessary copying** of large data types like `string`, `vector`, or `class` objects. 
- Use **const reference** when you need access without modification, especially for large objects.
```cpp
void print(const string& name) {
    cout << "Hello, " << name << endl;
}
```

---

### Input File Stream (`ifstream`)
  ```cpp
 ifstream inStream;
 inStream.open("infile.txt");
 if (!inStream) {
	cout << "Input file opening failed"; 
	exit(1) ;
}

// Use the extraction operator `>>` to read data separated by whitespaces.
string word;
vector<string> words;
while (inStream >> word) {
    words.push_back(word);  
}

// Use `getline()` to read full lines, including spaces, until a newline.
string line;
while (getline(inStream, line)) {
    cout << "Read line: " << line << endl;
}

// Use the extraction operator `>>` for numeric input.
int number;
while (inStream >> number) {
    cout << "Read number: " << number << endl;
}

inStream.close();
```

---

### End of File (EOF) Detection 
To check for EOF is by using the stream directly in a `while`loop condition:
```cpp
ifstream inStream("data.txt");
int next;
while (inStream >> next) {
    // Process the value
}
```
- The expression `(inStream >> next)` attempts to read the next value.
- It returns `true` if the read was successful, and `false` when it fails (including at EOF).
- This loop automatically stops when the end of the file is reached or if invalid input is encountered.
```cpp
ifstream inStream("data.txt");
while (!inStream.eof( )) 
{ 
	 inStream.get(ch); 
    // Process the value
}
```
- Becomes false when the program reads past the last character in the file

**Use `eof` when input is treated as text and using function get to read input**
**Use the extraction operator method when processing numeric data**

---

### Output File Stream (`ofstream`)
```cpp
ofstream outStream;
outStream.open("outfile.txt");

// Instead cout use ofstream variable
outStream << "Hello, file!" << endl;
outStream.close();

```

```cpp
// Add text without erasing existing content.
ofstream outStream("log.txt", ios::app);  // open in append mode
outStream << "New log entry" << endl;
outStream.close();
```

---

## Formatting Output to Files in C++
```cpp
#include <iostream>
ofstream outStream("output.txt");

outStream.setf(ios::fixed);        // Use fixed-point notation 
outStream.setf(ios::showpoint);    // Always show the decimal point
outStream.precision(2);            // Show exactly 2 digits 

outStream.width(10);
outStream << 42;    // `    42.00`

outStream.close();
```
More commonly, we use `setw(n)` from `<iomanip>`
```cpp
#include <iostream>
#include <iomanip> 

ofstream outStream("output.txt");
outStream << fixed << showpoint << setprecision(2);
outStream << "Start" 
        << setw(6) << 10 
        << setw(6) << 20 
        << setw(6) << 30 << endl;
    outStream.close();
//Start    10    20    30
```
By default, output is **right-aligned**. You can change alignment using:
- `outStream.setf(ios::left);` → Left-align
- `outStream.setf(ios::right);` → Right-align

---

###  `get()` – Read a Single Character
- Reads **one character** including whitespace like spaces and newlines.
- Can be used with variables or directly on the stream.
```cpp
ifstream inStream("input.txt");
char ch;

while (inStream.get(ch)) {
    // Process the value
}
```

### `put()` – Write a Single Character
```cpp
ofstream outStream("output.txt");
outStream.put('H');
outStream.put('i');
outStream.put('\n');
outStream.close();
```

---

### `'\n'` – Character Literal
- **Type:** `char` and represents the newline character.
```cpp
void newLine(istream& inStream) // Streams cannot be copied use reference
{
    char symbol;
    do {
        inStream.get(symbol);
    } while (symbol != '\n');
}
```
- This function **skips** all remaining characters in the current input line until it reaches the **newline character (`'\n'`)**.
### `"\n"` – String Literal
- **Type:** `const char*` (C-style string)
- Represents a **null-terminated string** that contains **one character** (`'\n'`) plus the null terminator (`'\0'`).
- **Cannot** be stored in a `char` variable.
```cpp
cout << '\n';   // Prints a newline
cout << "\n";   // Also prints a newline
```
Behind the scenes:
- `'\n'` sends **1 character**
- `"\n"` sends a **pointer to a 2-character array**: `['\n', '\0']`
### What is `'\0'`?
- `'\0'` is the **null character**.
- In C and C++, it is used to **mark the end of a C-style string** 
When you write: `const char* str = "Hello";`
The compiler stores it as: `char str[] = {'H', 'e', 'l', 'l', 'o', '\0'};

Without `'\0'`, the program **would not know** where the string ends and could read garbage memory beyond it.

---

### Arrays
An **array** is a **fixed-size, ordered collection** of elements of the **same data type**
- The size is defined at compile time and cannot be changed dynamically.
- Accessing elements out of bounds leads to **undefined behavior**.
```cpp
int numbers[5];                // Declares an array of 5 integers
double values[10] = {1.1, 2.2};// First two elements initialized remaining 0.0
int nums[5] = {1, 2, 3, 4, 5}; // Fully initialized
int empty[5] = {};             // All elements initialized to 0

int matrix[2][3] = {           // 2D array (2 rows, 3 columns)
    {1, 2, 3},
    {4, 5, 6}
};

```

---

### C-Strings in C++
- A **C-string** is an array of characters used to represent a string.
- It is stored as an array of type `char` and **terminated with the null character** `'\0'`.
- To declare a C-string, define a `char` array with enough space for the characters **plus one** for the null terminator:
```cpp
char s[11];  // Can hold up to 10 characters + '\0'
```

```cpp
char s[10] = "Hi Mom!"; 
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| 'H' | 'i' | ' ' | 'M' | 'o' | 'm' | '!' | '\0'|  ?  |  ?  |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
  s[0] s[1] s[2] s[3] s[4] s[5] s[6] s[7] s[8] s[9]
```
Unused elements (`s[8]`, `s[9]`) may hold garbage value
```cpp
// Compiler allocates 20 bytes'\0' is automatically appended 10 bytes used
char myMessage[20] = "Hi there.";  

// Compiler allocates 4 bytes: 'a', 'b', 'c', '\0'
char shortString[] = "abc";  

// Compiler allocates 3 bytes: No '\0' added ❌ not a valid C-string
char shortString[] = {'a', 'b', 'c'}; 

```
#### `char[]` (Character Array)
- Allocates **fixed-size memory** at compile time (on the stack).
- Safer to use for string literals or modifications within a known size.
- Allows direct modification of characters (if not initialized with a string literal).
- Memory managed automatically.
- Safer for operations that require modifying the string contents.
```cpp
char str1[] = "hello";     // Size = 6 (5 characters + '\0')
str1[0] = 'H';             // OK - modifiable
```

#### `char*` (Pointer to char)
- Points to a memory location (can be a string literal or dynamically allocated).
- String literals are read-only in modern C++, so modifying them via `char*` is undefined behavior.
```cpp
char* str2 = "hello";     
str2[0] = 'H';            // ❌ Undefined behavior

const char* str2 = "hello"; // ✅
```
- Can also be dynamically allocated:
```cpp
char* str3 = new char[10];  // Heap allocation
strcpy(str3, "test");
str3[0] = 'T'; // ✅  
// Test
```

|Declaration Style|Is `'\0'` Automatically Appended?|Explanation|
|---|---|---|
|`char* str = "Hello";`|✅ Yes|The compiler creates the string as `"Hello\0"`.|
|`char str[] = "Hello";`|✅ Yes|The compiler automatically appends `'\0'` at the end.|
|`char str[] = {'H', 'e', 'l'};`|❌ No|You must manually add `'\0'` to make it a proper C-string.|


---

### `strcpy` — Copying C-Strings
- The `strcpy` function is used to **copy the contents of one C-string into another**. It is part of the C standard library `<cstring>` 
- The destination **must have enough space** to store all characters from the source **plus the null terminator**.
```cpp
#include <cstring>
    char source[] = "Hello";
    char destination[10];
    strcpy(destination, source); // Copies "Hello" and appends '\0'
    cout << "Copied string: " << destination << endl;
//Copied string: Hello
```


###  `strcmp` – Compare Strings
`strcmp(s1, s2);`Returns:
    `0` → if strings are the same
    `< 0` → if `s1` comes before `s2`
    `> 0` → if `s1` comes after `s2`
 Used to check if two C-strings are equal.

###  `strlen` – String Length
`strlen(str);`
- Returns how many characters are in the string (not counting `'\0`)
**Example:** `strlen("Hi")` → `2`

###  `strcat` – Concatenate Strings
`strcat(dest, src);`
- Adds `src` to the end of `dest`
- `dest` must have enough space!
`char s[20] = "Hi "; strcat(s, "there");  // s becomes "Hi there"`


---
### Conversion Functions in `<cstdlib>`
The following functions are used to convert C-strings to numeric values:
- `atoi` — Converts a C-string to an `int`
- `atol` — Converts a C-string to a `long`
- `atof` — Converts a C-string to a `double`
```cpp
    const char* intStr = "42";
    const char* doubleStr = "3.14";

    int x = atoi(intStr);       // x = 42
    double y = atof(doubleStr); // y = 3.14
```
- These functions **do not perform error checking**. If the string is not a valid number, the result is undefined or may be zero.

---

### String Class
The C++ `string` class (defined in `<string>`) offers a safer and more convenient alternative to C-style strings. 
```cpp
#include <string>
using namespace std;

// Use `getline` to read an entire line, including spaces:
string sentence;
getline(cin, sentence);

string word = "cat";

char c = word[2];      // Direct access (no bounds checking)
char d = word.at(2);   // With bounds checking (throws exception)

int len = word.length();   // Returns the number of characters

int i = stoi("123");       // Converts string to int
double d = stod("3.14");   // Converts string to double

string s = to_string(42);  // Converts number to string: "42"

if (s1 == s2 || s1 > s2) {
    // Process
}
```
To convert a `string` to a C-style string 
```cpp
strcpy(cstr, str.c_str());  // Copies string to a C-style buffer
```


---

###  `Vector` 
- A `vector` is a dynamic array that can grow or shrink in size.
- Defined in the `<vector>` header.
- Belongs to the `std` namespace.
```cpp
#include <vector>
using namespace std;

vector<int> numbers;            // Empty vector of ints
vector<string> names(5);        // Vector with 5 default-initialized strings
vector<double> scores = {90.5, 87.0, 76.2};  // Initialized with values


// Adds an element to the end of the vector.
numbers.push_back(10);

//Returns the number of elements.
int n = numbers.size();

//Returns `true` if the vector has no elements.
if (numbers.empty()) { ... }

//Returns a reference to the element at given index with bounds checking.
cout << numbers.at(2);

//Accesses an element without bounds checking.
cout << numbers[2];

//Access the first and last elements.
int first = numbers.front();
int last = numbers.back();

//Removes all elements from the vector.
numbers.clear();

```

---
### Pointers 
A pointer is a variable that stores the **memory address** of another variable.
```cpp
int *p1, *p2; // p1 and p2 are pointers to int
int v1, v2;   // v1 and v2 are regular int variables
```
The address-of `&` operator gives the **memory address** of a variable.
```cpp
p1 = &v1; // p1 now stores the address of v1
```
Dereferencing Operator `*` Used to **access the value** at the address a pointer holds.```
```cpp
int v1 = 0;
int* p1 = &v1;
*p1 = 42;

cout << v1 << endl;   // Output: 42
cout << *p1 << endl;  // Output: 42
```

---
## The `new` Operator
Used to dynamically allocate memory for a variable.
```cpp
int* p1 = new int; // Allocates memory for an int, assigns address to p1

cin >> *p1;
*p1 = *p1 + 7;
```
Sometimes, the amount of memory needed isn’t known until **runtime**.
- Example: Reading user input to determine the size of an array.
```cpp
int n;
cin >> n;
int* arr = new int[n]; // Allocate memory for n integers
```
Dynamically allocated memory resides in the **heap**, which typically has more space than the **stack**. Useful for large data structures (e.g., arrays, trees, linked lists).
Memory allocated dynamically **does not get destroyed** when a function ends, unlike local (stack) variables. It stays until it is explicitly released with `delete`.
```cpp
// Failure to delete leads to memory leaks.
delete p;       // for a single variable
delete[] arr;   // for an array
```

---
### Dangling Pointers
A **dangling pointer** is a pointer that refers to memory that has already been **deallocated**.
- Using `delete` on a pointer destroys the dynamic variable it points to.
- If another pointer also refers to that memory, it now becomes **invalid**.
- This results in a **dangling pointer** — a pointer to memory that no longer exists.
```cpp
int* p1 = new int(42);
int* p2 = p1;

delete p1; // Deallocates memory
*p2 = 100; // ❌ Undefined behavior: p2 is now dangling
```

---

### Automatic Variables
**Automatic variables** are created and destroyed automatically by the system when a function starts and ends.
- Declared inside a function or block (local variables).
- Memory is allocated on the **stack**.
- **Automatically destroyed** when the function scope ends.
- No need for `new` or `delete`.
```cpp
void myFunction() {
    int x = 10; // Automatic variable
} // x is destroyed here
```

---
### Type Definitions 
Type definitions allow you to assign **custom names** to existing types, improving **clarity** **consistency**, and **maintainability**.
- Used to create **aliases** for data types.
```cpp
typedef ExistingType NewTypeName;

typedef unsigned int UInt;
UInt age; // equivalent to: unsigned int age;
```
Typedefs are particularly useful when working with **pointers**, reducing syntax complexity and minimizing mistakes.
```cpp
typedef int* IntPtr;
IntPtr p;      // Equivalent to: int* p;
IntPtr p1, p2; // Both are int pointers!
```

---

### Dynamic Arrays
A **dynamic array** is an array whose size is determined **at runtime**, allowing memory to be allocated exactly when needed. **Static arrays** require size definition at compile time:
```cpp
int arr[10]; // Static array size fixed at compile time
```
**Dynamic arrays** solve issues like:
- Variable size requirements during execution
- Risk of overestimating (wastes memory)
- Risk of underestimating (program errors)
```cpp
typedef double* DoublePtr;
DoublePtr d = new double[10]; // Allocates array of 10 doubles

//`d` can now be used like a normal array:
d[0] = 3.14;
cout << d[5];
```
Always free dynamically allocated memory using `delete[]` to avoid memory leaks.
```cpp
delete[] d;
```
- The brackets `[]` signal that a **dynamic array** is being deleted.
- Without brackets, only the first element would be deallocated — causing **undefined behavior**.

---

### Structures
A **structure** (`struct`) in C++ is a user-defined data type that groups related variables under a single name.
- Typically declared **outside** any function for global accessibility.
```cpp
struct CDAccount {
    double balance;
    double interestRate;
    int term;
};

CDAccount acc = {0, 0.1, 1};
```
- Declare structure variables:
```cpp
CDAccount myAccount, yourAccount;
```
Each structure variable contains its own copy of all member variables.
```cpp
myAccount.balance = 1000;
yourAccount.interestRate = 5.1;
```
It’s valid for different structures to use the **same member names**.
No conflict: `superGrow.quantity` and `apples.quantity` are **distinct**.
- Structures can be passed by **value** or **reference**.
```cpp
void getData(CDAccount& theAccount); // Pass by reference
```
- Functions can return entire structure values.
```cpp
CDAccount shrinkWrap(double theBalance, double theRate, int theTerm) {
    CDAccount temp;
    temp.balance = theBalance;
    temp.interestRate = theRate;
    temp.term = theTerm;
    return temp;
}

CDAccount newAccount = shrinkWrap(1000.00, 5.1, 11);
```
- Structures of the same type can be **directly assigned**:
```cpp
CDAccount myAccount, yourAccount;
myAccount.balance = 1000.00;
yourAccount = myAccount; // Copies all members
```
A structure can contain other structures as member variables.
```cpp
struct Date {
    int month, day, year;
};

struct PersonInfo {
    double height;
    int weight;
    Date birthday;
};

PersonInfo person1;
cout << person1.birthday.year;
```

---

### Classes
A **class** is a **user-defined type** in C++ that encapsulates **data** (variables) and **functions**(behavior) in a single structure.
##### Member Variables 
These are the **variables declared inside a class**. Each object created from the class has **its own separate copy** of these variables.
```cpp
class Person {
public:
    int age;        // Member variable
    string name;    // Member variable
};
```
##### Member Functions 
These are **functions defined inside a class** that can **access or modify** the member variables of the class.
```cpp
class Person {
public:
    int age;
    string name;

    void introduce() { // Member function
        cout << "Hi, I am " << name << " and I am " << age << " years old.";
    }
};
```
##### Creating Objects and Accessing Members
```cpp
Person p1;
p1.age = 22;
p1.name = "Alice";
p1.introduce();  // Calls the member function
```
##### The `::` Scope Resolution Operator
```cpp
class Person {
public:
    int age;
    string name;
    void introduce(); // Declared only
};

// Defined outside using ::
void Person::introduce() {
    cout << "Hi, I am " << name << ", age " << age;
}
```

---
### Constructors
A **constructor** is a special member function of a class that is **automatically called when an object is created**. Its purpose is to **initialize the object’s member variables**.
- Has **no return type** — not even `void`.
- Name must be **identical to the class name**.
- Usually declared as **public**.
- Called **automatically** during object creation.
- Can be **overloaded**.
```cpp
class BankAccount {
public:
    BankAccount(int dollars, int cents, double rate); // Constructor
    BankAccount(); // Default constructor

    void update();
private:
    double balance;
    double interestRate;

    double fraction(double percent); // Private member
};

//This constructor initializes `balance` and `interestRate`. It includes error-checking logic for input validation.
BankAccount::BankAccount(int dollars, int cents, double rate) {
    if ((dollars < 0) || (cents < 0) || (rate < 0)) {
        cout << "Illegal values for money or rate\n";
        exit(1);
    }
    balance = dollars + 0.01 * cents;
    interestRate = rate;
}
```
We can call the constructor
```cpp
BankAccount acc;
acc.BankAccount(10, 50, 2.0); // ❌ Invalid: constructors aren't called like regular functions

BankAccount acc(10, 50, 2.0); // ✅ Automatically calls the constructor
```
C++ allows **multiple constructors** with different parameter lists (constructor overloading):
```cpp
BankAccount(double balance, double rate);
BankAccount(double balance);
BankAccount(double rate);
BankAccount(); // Default
```
##### Initialization Lists
Instead of assigning values in the constructor body, you can use **initialization lists** for cleaner, faster initialization:
```cpp
BankAccount::BankAccount(int dollars, int cents, double rate)
    : balance(dollars + 0.01 * cents), interestRate(rate)
{
    if ((dollars < 0) || (cents < 0) || (rate < 0)) {
        cout << "Illegal values for money or rate\n";
        exit(1);
    }
}
```
##### Member Initializers
Allows default values directly in the class:
```cpp
class Coordinate {
private:
    int x = 1;
    int y = 2;
};
```
##### Constructor Delegation
Allows one constructor to **call another** using the initialization list:
```cpp
class Coordinate {
private:
    int x, y;
public:
    Coordinate(int a, int b) : x(a), y(b) {}

    Coordinate() : Coordinate(99, 99) {} // Delegated constructor
};
```

---

### Inheritance
Inheritance allows a class (**derived class**) to acquire properties and behaviors (members) from another class (**base class**).
```cpp
class Animal {
public:
    void eat() { cout << "Eating\n"; }
};

class Dog : public Animal {
public:
    void bark() { cout << "Barking\n"; }
};
```
The `protected` access specifier in C++ allows **class members** (variables or functions) to be:
- **Accessible inside the class itself**
- **Accessible in derived (child) classes**
- ❌ **Not accessible from outside the class hierarchy**
It sits **between** `private` and `public` in terms of visibility.
```cpp
class Base {
protected:
    int protectedValue;
};

class Derived : public Base {
public:
    void accessProtected() {
        protectedValue = 10; // ✅ Accessible
    }
};

int main() {
    Derived d;
    // d.protectedValue = 20; ❌ Not accessible here
}
```
- Use `protected` when:
    - You want **derived classes** to access internal data/functions.
    - But you **do not** want those members to be **accessible from outside** the class hierarchy.
- Common in **inheritance-heavy** class hierarchies and **framework design**.

---

### Destructors
A **destructor** is a special member function that is **automatically called** when an object **goes out of scope** or is **deleted**.
- Used to **release resources** (memory, files, network handles, etc.)
- Has **no return type**, not even `void`
- Name is the class name preceded by a tilde `~`
```cpp
class FileManager {
public:
    FileManager() { cout << "Opening file...\n"; }
    ~FileManager() { cout << "Closing file...\n"; }
};

int main() {
    FileManager f; // Constructor called
} // Destructor called automatically here
```
- Destructors should be **`virtual`** in base classes when using polymorphism:
```cpp
class Base {
public:
    virtual ~Base(); // Ensures proper destruction of derived objects
};
// If not marked `virtual`, derived class destructors **may not be called** properly when using base pointers.
```
---

### Polymorphism
Polymorphism allows **the same interface** to represent **different underlying data types or behaviors**.
- **Compile-time (Static)**: Function overloading, operator overloading.
- **Runtime (Dynamic)**: Achieved using **virtual functions** and **base class pointers/references**.
Use `virtual` keyword in base class. Enables **dynamic binding**.
```cpp
class Shape {
public:
    virtual void draw() { cout << "Shape\n"; }
};

class Circle : public Shape {
public:
    void draw() override { cout << "Circle\n"; }
};

Shape* s = new Circle();
s->draw(); // Output: Circle
```

---

### Abstraction
Abstraction means **hiding implementation details** and **showing only essential features** to the user.
- Achieved using **abstract classes** (with pure virtual functions).
- Focuses on **"what"** an object does, not **"how"** it does it.

An **abstract class** is any class that has **at least one** pure virtual function: A **pure virtual function** is a function **declared in a base class** that **must be overridden** in any derived class. It has **no implementation** in the base class.
```cpp
virtual ReturnType FunctionName(ParameterList) = 0; //The `= 0` makes it pure.
```
- `Animal` is now an **abstract base class**.
- `makeSound()` is a **contract**: any subclass **must** override it.
- You **cannot** create an object of `Animal`.
```cpp
class Animal {
public:
    virtual void makeSound() = 0; // Pure virtual function
};

Animal a; // ❌ Error: Cannot instantiate abstract class
```
- `Dog` provides a **concrete implementation** of `makeSound()`.
- Now you **can** create objects of `Dog`:
```cpp
class Dog : public Animal {
public:
    void makeSound() override {
        cout << "Bark\n";
    }
};

Dog d;
d.makeSound(); // Output: Bark

Animal* a = new Dog();
a->makeSound(); // Output: Bark
```

|Feature|`virtual`|`pure virtual`|
|---|---|---|
|Requires Override?|❌ No|✅ Yes (in derived class)|
|Base Class Abstract?|❌ No|✅ Yes|
|Has Implementation?|✅ Usually|❌ Never (in base class)|
|Can Instantiate Base?|✅ Yes|❌ No|
|Supports Polymorphism|✅ Yes|✅ Yes|

---

### Friend Functions
A **friend function** is a **non-member function** that has **access to the private and protected members** of a class.
- Declared with the keyword `friend` **inside the class**.
- **Not a member** of the class (no `::` operator).
- Can **access private data directly**, like member functions.
```cpp
class DayOfYear {
public:
    friend bool equal(DayOfYear date1, DayOfYear date2);
private:
    int day;
    int month;
};

bool equal(DayOfYear date1, DayOfYear date2) {
    return date1.day == date2.day && date1.month == date2.month;
}
```
- No `DayOfYear::equal(...)` — it's not a member.
- Still allowed to access `date1.day` and `date1.month`.
Friend functions are **called like ordinary functions**, not through an object:
```cpp
DayOfYear d1, d2;
if (equal(d1, d2)) {
    cout << "Dates are equal\n";
}
```

---

### `const` for Function Parameters

A) `const` with **Call-by-Reference Parameters**
- **Efficiency**: Passes by reference → avoids copying
- **Safety**: Prevents accidental modification
```cpp
void printName(const string& name);

void printName(string& name); // allows modification

name += " modified"; // ❌ Not allowed if const
```

B) `const` with **Pointers**
```cpp
void show(const int* ptr);  // You can't change *ptr
void show(int* const ptr);  // You can't change ptr itself
void show(const int* const ptr); // You can't change either
```

| Declaration<br>      | Can modify pointer? | Can modify value pointed to? |
| -------------------- | ------------------- | ---------------------------- |
| int* ptr             | ✅                   | ✅                            |
| const int* ptr       | ✅                   | ❌                            |
| int* const ptr       | ❌                   | ✅                            |
| const int* const ptr | ❌                   | ❌                            |

### `const` for Member Functions
```cpp
class Money {
public:
    void display() const; // const member function
};
```
- Promises: “This function **won’t modify the object** it’s called on.”
- Required when calling the function on a `const` object or from a `const` reference

---

### Operator Overloading
In C++, **operator overloading** lets you redefine the behavior of an operator (`+`, `-`, `==`, `<<`, etc.) for user-defined types (like classes). This allows you to use familiar syntax with custom objects.
- At least one operand must be a **user-defined type**.
- Operators can be **friend functions**.
- Cannot:
    - Create new operators
    - Change number of operands
    - Change precedence or associativity
- Cannot be overloaded: `.`, `::`, `*`, `?:`
```cpp
// Without Operator Overloading
Money total = add(cost, tax);

// With Operator Overloading
Money total = cost + tax;
```
Let’s say you have a `Money` class. Here’s how you can define the `+` operator for it:
```cpp
class Money {
private:
    long allCents;

public:
    Money(long cents = 0) : allCents(cents) {}

    friend Money operator+(const Money& m1, const Money& m2);
};

Money operator+(const Money& m1, const Money& m2) {
    return Money(m1.allCents + m2.allCents);
}
```
Friend function allows the operator function to **access private members** like `allCents`.
Lets define << and >>
```cpp
friend ostream& operator<<(ostream& out, const Money& m);
friend istream& operator>>(istream& in, Money& m);
```

---

### Arrays of Classes & Structs
You can create arrays where **each element is a class or a struct**.
```cpp
struct Data {
    double time[10];
    int distance;
};

Data myBest;
myBest.time[0] = 12.5;

//OR
class TemperatureList {
private:
    double list[MAX_SIZE];
    int size;
public:
    void add_temperature(double temp);
};
```
Dynamic arrays are arrays created during runtime using pointers and `new`.
- Size isn't known at compile time.
- Flexible memory usage.
```cpp
class StringVar {
private:
    char* value;
    int maxLength;
public:
    StringVar(int size);
    ~StringVar(); // destructor
};
```
If your class uses **pointers** (especially with `new`), the default copy constructor provided by the compiler **copies only the pointer, not the data it points to**.
```cpp
class MyClass {
private:
    int* data;
public:
    MyClass(int value) {
        data = new int(value);
    }

    ~MyClass() {
        delete data;
    }
};
MyClass a(5);
MyClass b = a;   // ❗ Copy constructor is called here
```
- `a.data` and `b.data` point to the **same memory**.
- When either `a` or `b` is destroyed, the memory is deleted.
- The other object now has a **dangling pointer** → leads to undefined behavior (crashes, bugs, etc.)
##### ✅ Solution: Define a Copy Constructor
```cpp
class StringVar {
private:
    char* value;
    int maxLength;

public:
    StringVar(const char str[]) {
        maxLength = strlen(str);
        value = new char[maxLength + 1];
        strcpy(value, str);
    }

    // 🛡️ Copy Constructor
    StringVar(const StringVar& other)
        : maxLength(other.maxLength)
    {
        value = new char[maxLength + 1];
        strcpy(value, other.value);
    }

    ~StringVar() {
        delete[] value;
    }
};
```
- `a.data` and `b.data` point to **different memory**.
- Safe to destroy either object.
```cpp
StringVar a("Hello");
StringVar b = a;  // deep copy — no shared memory
```
When Is the Copy Constructor Called?
**When an object is passed by value:**
```cpp
void print(StringVar x);  // x is a copy → copy constructor is called
```
**When an object is returned by value from a function:**
```cpp
StringVar makeGreeting() {
    StringVar greet("Hi");
    return greet;  // copy constructor
}
```
**When an object is initialized from another:**
```cpp
StringVar b = a;
```

---

### What Is Separate Compilation?
Separate compilation is the **process of dividing a large program into multiple source files**, each of which can be compiled independently.
- Enhances **code organization**
- Encourages **reusability**
- Makes **large projects manageable**
- Improves **compile-time performance**

####  What Is an ADT?
An **Abstract Data Type (ADT)** is a class that:
- **Hides implementation details**
- **Exposes only necessary operations**
- All **member variables are `private`**
- The **interface (public API)** defines how users interact with the object
- The **implementation** is hidden from the user
#### Structure of an ADT
##### 1. **Interface (What the class does)**
Includes:
- Class definition
- Public member functions
- Friend functions
- Operator overloads
- Function documentation/comments
This is usually stored in a **header file** (`.h`).

##### 2. **Implementation (How the class works)**
Includes:
- Function definitions (both public and private)
- Helper/private functions
- Data members (variables)
This is stored in a **source file** (`.cpp`).

```cpp
#ifndef DTIME_H
#define DTIME_H

class DigitalTime {
public:
    // Public interface
    void set_time(int hour, int minute);
    void print() const;

private:
    int hour;
    int minute;
};

#endif
```

```cpp
#include "dtime.h"
#include <iostream>

void DigitalTime::set_time(int h, int m) {
    hour = h;
    minute = m;
}

void DigitalTime::print() const {
    std::cout << hour << ":" << (minute < 10 ? "0" : "") << minute << "\n";
}
```

```cpp
#include "dtime.h"

int main() {
    DigitalTime dt;
    dt.set_time(9, 30);
    dt.print();
    return 0;
}
```

```cpp
// Compile each `.cpp` file separately:
g++ -c dtime.cpp
g++ -c main.cpp

// Link object files into an executable:
g++ dtime.o main.o -o my_program

```
 Most IDEs or build tools like `make` or `cmake` handle this automatically.

---

### Namespaces
A **namespace** is a **container for identifiers** — such as variable names, function names, or class names — that helps prevent **name collisions** in larger or modular programs. Namespaces avoid this by **scoping** those names. 

```cpp
namespace mymath {
    int add(int a, int b) {
        return a + b;
    }
}

int main() {
    int result = mymath::add(3, 4);  // Using the namespace
}
```
If you define a function or variable without a namespace:
```cpp
int myFunction() { ... }
```
It is in the **global namespace** — accessible from anywhere unless shadowed by something in a namespace.

---

### Templates
C++ templates allow you to write **generic code** that works with **any data type**. Instead of writing the same function or class multiple times for different types, you write **one version** using a **type parameter**.
```cpp
void swapValues(char& a, char& b) {
    char temp = a;
    a = b;
    b = temp;
}
```
Use a Template
```cpp
template <class T>
void swapValues(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}
```
- `T` is a **type parameter**.
- The compiler will automatically **generate the correct function** depending on the arguments you pass.
```cpp
int x = 5, y = 10;
swapValues(x, y);   // Works for int

char a = 'A', b = 'B';
swapValues(a, b);   // Works for char
```

Function templates work for one operation. If you want to generalize **a data structure** like a **pair**, a **list**, or a **stack**, you use **class templates**.
```cpp
template <class T>
class Pair {
private:
    T first, second;

public:
    Pair(T a, T b) : first(a), second(b) {}

    void setElement(int pos, T value) {
        if (pos == 1) first = value;
        else if (pos == 2) second = value;
    }

    T getElement(int pos) const {
        return (pos == 1) ? first : second;
    }
};

Pair<int> score(3, 4);         // A pair of integers
Pair<char> letters('X', 'Y');  // A pair of characters

score.setElement(1, 5);
std::cout << score.getElement(1);
```

---

```cpp
#include <iostream>
using namespace std;

// Structure representing a node in a linked list
struct Node
{
    int data; // Data stored in the node
    Node* next; // Pointer to the next node in the LinkedList
    Node* prev; // Pointer to the previous node in the LinkedList
};

// Class representing a LinkedList
class LinkedList
{
public:
    Node* head; // Pointer to the first node in the list

    // Constructor initializes an empty list
    LinkedList() : head(nullptr)
    {
    }

    // Inserts a new node at the beginning of the list
    void insertAtBeginning(const int value)
    {
        Node* newNode = new Node();
        // Create a new node and assign the given value
        newNode->data = value;
        // New node's next pointer points to the current head of the list
        newNode->next = head;
        // New node's prev pointer should be NULL since it will be the new head
        newNode->prev = nullptr;

        // If the list is not empty, update the current head's prev pointer
        if (head != nullptr)
        {
            head->prev = newNode;
        }
        // Update head to the new node
        head = newNode;
    }

    // Inserts a new node at the end of the list
    void insertAtLast(const int value)
    {
        Node* newNode = new Node();
        // Create a new node and assign the given value
        newNode->data = value;
        newNode->next = nullptr; // This will be the last node, so its next pointer is NULL

        // If the list is empty, the new node becomes the head
        if (head == nullptr)
        {
            head = newNode;
            return; // End of the function
        }

        // Start at the head of the list
        // Move iter to the end of the list stop when next is NULL
        Node* iter = head;
        while (iter->next != nullptr) // While next points to something
        {
            iter = iter->next;
        }
        // Set the next pointer of the last node to point to the new node
        iter->next = newNode;
        // Set the new node's prev pointer to point back to the last node
        newNode->prev = iter;
    }

    // Returns a pointer to the first node (head) of the list
    Node* front()
    {
        return head;
    }

    // Prints the linked list from the beginning to the end
    void printFromBeginning()
    {
        Node* curr = front(); // Get the first node
        while (curr) // Traverse the list
        {
            cout << curr->data << " -> "; // Print the data
            curr = curr->next; // Move to the next node
        }
        cout << "End of List" << endl;
    }

    // Returns a pointer to the last node of the list
    Node* end()
    {
        if (head == nullptr) // If the list is empty, return nullptr
        {
            return nullptr;
        }
        Node* node = head;
        while (node->next) // Traverse until the last node
        {
            node = node->next;
        }
        return node; // Return the last node
    }

    // Prints the linked list from last to first using the end() helper function
    void printFromLast()
    {
        Node* node = end(); // Get the last node
        if (!node) // If the list is empty, print message
        {
            cout << "List is empty" << endl;
            return;
        }
        while (node) // Traverse backwards using the prev pointer
        {
            cout << node->data << " -> "; // Print the data
            node = node->prev; // Move to the previous node
        }
        cout << "Start of List" << endl;
    }
};

int main()
{
    LinkedList list1;
    list1.insertAtLast(23);
    list1.insertAtBeginning(55);
    list1.insertAtBeginning(12);
    list1.insertAtLast(60);
    list1.printFromBeginning();
    list1.printFromLast();

    LinkedList* NP = &list1;
    cout << "\nNP -> " << NP->head; // Print head's pointed location
    Node* p = list1.front(); // Return head
    cout << "\n p -> " << p; // Print head's pointed location through a pointer
    cout << "\n p data -> " << p->data << endl; // Actual Value

    *p = *p->next->next;
    cout << "\n p nn -> " << p; // Print head's pointed location
    cout << "\n p nn data -> " << p->data << endl; // Print next-next (H->60->23) from head which is 23
}
```

```cpp
#include <iostream>
using namespace std;

template <typename T>
void swapValues(T& v1, T& v2)
{
    T temp;
    temp = v1;
    v1 = v2;
    v2 = temp;
}

template <typename T>
void outputAnyValue(T& value)
{
    cout << value << endl;
}

int main()
{
    int a = 10;
    int b = 20;
    swapValues(a, b);
    cout << a << endl;
    cout << b << endl;

    string val1 = "abc";
    string val2 = "def";
    swapValues(val1, val2);
    outputAnyValue(val1);
    outputAnyValue(val2);

    cout << "Please enter a number for the value of x -> 100/x : ";
    int x = 1;
    cin >> x;
    try
    {
        if (x == 0)
        {
            throw invalid_argument("Cannot divide by zero");
        }
        cout << "The new value is -> " << 100 / x << endl;
    }
    catch (const invalid_argument& e)
    {
        cout << "Exception: " << e.what();
    }

    try
    {
        int age;
        cout << "Enter your age: ";
        cin >> age;

        if (cin.fail())
        {
            throw invalid_argument("Invalid input. Please enter a numeric value.");
        }


        if (age < 0)
        {
            throw out_of_range("Age cannot be negative.");
        }

        if (age < 18)
        {
            throw runtime_error("You must be at least 18 years old.");
        }

        cout << "You are eligible!" << endl;
    }
    catch (const invalid_argument& e)
    {
        cout << "Exception: " << e.what();
    }
    catch (const out_of_range& e)
    {
        cout << "Exception: " << e.what();
    }
    catch (const runtime_error& e)
    {
        cout << "Exception: " << e.what();
    }
}
```

```cpp
#include <iostream>
#include <vector>

using namespace std;

class Mammal
{
protected:
    string address = "N/A";

public:
    string name = "N/A";
    string species = "unknown";
    int age = 0;
    int appendages = 0;
    double weight = 0;
    int id = 0;
    bool tail = false;

    Mammal()
        : name("No Name"), age(1), appendages(4), weight(10), id(1)
    {
    }

    Mammal(const string& Name, const string& Species, const int Age, const int Appendages, const double Weight,
           const int ID, const bool Tail)
        : name(Name), species(Species), age(Age), appendages(Appendages), weight(Weight), id(ID), tail(Tail)
    {
    }

    // virtual ~Mammal() = default;

    void printType()
    {
        cout << "I am an object of type Mammal" << endl;
    }

    virtual void printInfo()
    {
        cout << "Hello my name is " << name << " and I am a " << age << " year old " << species << "\n";
    }
};

class Cat final : public Mammal
{
public:
    const string species = "Cat";
    bool tail = true;
    bool adopted = false;
    string breed = "Tabby";
    string favFood = "N/A";

    Cat()
        : Mammal("No Name", "Cat", 0, 4, 0, 0, true)
    {
    }

    Cat(const string& Name, const int Age, const int Appendages, const double Weight, const int ID, const string& Breed,
        const string& Food)
        : Mammal(Name, "Cat", Age, Appendages, Weight, ID, true), breed(Breed), favFood(Food)
    {
    }

    void printType()
    {
        cout << "I am an object of type Cat" << endl;
    }

    void printInfo() override
    {
        cout << "Hello, my name is " << name
            << " and I am a " << age << "-year-old " << species << ".\n"
            << "I weigh " << weight << " kg and have " << appendages << " appendages.\n"
            << "Breed: " << breed << ", Favorite Food: " << favFood << ".\n"
            << "Adopted: " << (adopted ? "Yes" : "No") << ", Tail: " << (tail ? "Yes" : "No") << ".\n";
    }
};

class Human final : public Mammal
{
public:
    vector<string> languages;
    int height{};
    string eyeColor;

    Human()
        : Mammal("No Name", "Human", 0, 4, 0, 0, false)
    {
    }

    Human(const string& Name, const int Age, const int Height, const string& Address, const string& EyeColor,
          const vector<string>& Languages)
        : Mammal(Name, "Human", Age, 4, 0, 0, false), languages(Languages), height(Height), eyeColor(EyeColor)
    {
        address = Address;
    }

    void printType()
    {
        cout << "I am an object of type Human" << endl;
    }

    void speak() const
    {
        cout << name << " speaks ";

        if (languages.empty())
        {
            cout << "no languages" << endl;
            return;
        }

        for (int i = 0; i < languages.size(); ++i)
        {
            cout << languages[i];
            if (i < languages.size() - 1)
                cout << ", ";
        }
        cout << "." << endl;
    }


    void printInfo() override
    {
        cout << "Hello, my name is " << name << " and I am " << age << " years old.\n"
            << "I am " << height << " cm tall and have " << eyeColor << " eyes.\n"
            << "I live at " << address << ".\n";
    }
};

int main()
{
    Cat Mittens("MR.Mittens", 3, 4, 7, 1, "Tabby", "Fish");
    Mittens.printInfo();
    Mittens.printType();

    cout << endl;

    Mammal* mptr = &Mittens;
    mptr->printInfo();
    mptr->printType();

    cout << endl;

    Human human("Onur", 21, 194, "Peterborough", "Hazel", {"English,Turkish,German"});
    human.printInfo();
    human.speak();
    human.printType();
}
```

```cpp
#include <iostream>
#include <string>
#include <fstream>
#include <cstdlib>

using namespace std;

int main()
{
    double grade, sum = 0;
    int gradeCount = 0;
    string name;

    ifstream fileIn("students.txt");
    if (fileIn.fail())
    {
        cout << "Input file opening failed.\n" << endl;
        exit(1);
    }
    ofstream fileOut("grades.csv");
    if (fileOut.fail())
    {
        cout << "Output file opening failed.\n" << endl;
        exit(1);
    }
    fileOut << "Name,Grade" << endl;

    while (getline(fileIn, name))
    {
        do
        {
            cout << "Enter the grade for " << name << " (0-100): ";
            cin >> grade;
            if (grade < 0 || grade > 100)
            {
                cout << "Invalid grade. Please enter a grade between 0 and 100." << endl;
            }
        }
        while (grade < 0 || grade > 100);
        sum += grade;
        gradeCount++;
        fileOut << name << "," << grade << endl;
    }

    if (gradeCount > 0)
    {
        double average = 0;
        average = sum / gradeCount;
        cout << "The average grade of all students is: " << average << endl;
        cout << "Number of students processed: " << gradeCount << endl;
    }
    else
    {
        cout << "No grades were entered." << endl;
    }

    fileIn.close();
    fileOut.close();

    return 0;
}
```

```cpp
    #ifndef MEDIA_H
    #define MEDIA_H
    #include <iostream>
    #include <string>
    using namespace std;

    // Base class Media
    class Media
    {
    protected:
        // Common attributes for all media types
        string mediaTitle;
        string mediaDirector;
        int mediaYear = 0;

    public:
        // Default constructor
        Media() = default;

        // Constructor to initialize common media properties
        Media(const string& MediaTitle, const string& MediaDirector, int MediaYear);

        // Pure virtual functions for displaying and calculating data
        virtual void DisplayMedia() = 0; // Abstraction & Polymorphism
        virtual void CalculateEarnings() = 0; // Abstraction & Polymorphism

        // Virtual destructor
        virtual ~Media() = default;
    };

    #endif //MEDIA_H

    #ifndef SERIESDATA_H
    #define SERIESDATA_H

    // Derived class for series media
    class SeriesData final : public Media
    {
    private:
        // Series-specific attributes for encapsulation
        int seasonNumbers = 0;
        int prodCosts = 0;
        int firstYearRevenue = 0;

    public:
        // Default constructor
        SeriesData() = default;

        // Constructor to initialize both base and derived class members for inheritance
        SeriesData(const string& MediaTitle, const string& MediaDirector, int MediaYear,
                   int SeasonNumbers, int ProdCosts, int FirstYearRevenue);

        // Setters to modify private members
        void setSeasonNumbers(int seasons);
        void setProdCosts(int cost);
        void setFirstYearRevenue(int revenue);

        // Getters to access private members
        int getSeasonNumbers() const;
        int getProdCosts() const;
        int getFirstYearRevenue() const;


        // Override base class methods with specific implementations for polymorphism
        void DisplayMedia() override;
        void CalculateEarnings() override;

        // Additional method specific to SeriesData
        void DisplayEarnings();
    };

    #endif //SERIESDATA_H

    #ifndef MOVIEDATA_H
    #define MOVIEDATA_H

    using namespace std;

    // Derived class for movie media
    class MovieData final : public Media
    {
    private:
        // Movie-specific attributes for encapsulation
        int length = 0;
        double prodCost = 0.0;
        double firstYearRev = 0.0;

    public:
        // Default constructor
        MovieData() = default;

        // Constructor initializing both base and movie-specific attributes for inheritance
        MovieData(const string& Title, const string& Director, int Year, int Length, double Cost, double Revenue);

        // Setters to modify private members
        void setTitle(const string& t);
        void setDirector(const string& d);
        void setYear(int y);
        void setLength(int l);
        void setProdCost(double pc);
        void setFirstYearRev(double fyr);

        // Getters to access private members
        string getTitle() const;
        string getDirector() const;
        int getYear() const;
        int getLength() const;
        double getProdCost() const;
        double getFirstYearRev() const;

        // Implement abstract methods from base class for polymorphism
        void DisplayMedia() override;
        void CalculateEarnings() override;
    };

    #endif // MOVIEDATA_H


#include <iostream>
#include <iomanip>
#include <stdexcept>
#include "MovieData.h"

using namespace std;

// Parameterized constructor for the base Media class, initializes common variables
Media::Media(const string& MediaTitle, const string& MediaDirector, const int MediaYear)
    : mediaTitle(MediaTitle), mediaDirector(MediaDirector), mediaYear(MediaYear)
{
}


// Movie Data Definition
// Parameterized constructor initializes all member variables using an initializer list
MovieData::MovieData(const string& Title, const string& Director, const int Year, const int Length, const double Cost,
                     const double Revenue)
    : Media(Title, Director, Year), length(Length), prodCost(Cost), firstYearRev(Revenue)
{
}

// Sets the movie title with validation for non-empty string
void MovieData::setTitle(const string& t)
{
    if (t.empty())
    {
        throw invalid_argument("Title cannot be empty");
    }
    mediaTitle = t;
}

// Sets the director's name with validation for non-empty string
void MovieData::setDirector(const string& d)
{
    if (d.empty())
    {
        throw invalid_argument("Director name cannot be empty");
    }
    mediaDirector = d;
}

// Sets the release year with validation within a realistic range
void MovieData::setYear(const int y)
{
    if (y <= 1900 || y >= 2026)
    {
        throw invalid_argument("Year must be between 1901 and 2025");
    }
    mediaYear = y;
}

// Sets the movie length in minutes with validation for a positive value
void MovieData::setLength(const int l)
{
    if (l <= 0)
    {
        throw invalid_argument("Length must be positive");
    }
    length = l;
}

// Sets the production cost with validation to ensure it's non-negative
void MovieData::setProdCost(const double pc)
{
    if (pc < 0)
    {
        throw invalid_argument("Production cost cannot be negative");
    }
    prodCost = pc;
}

// Sets the first year revenue with validation to ensure it's non-negative
void MovieData::setFirstYearRev(const double fyr)
{
    if (fyr < 0)
    {
        throw invalid_argument("First year revenue cannot be negative");
    }
    firstYearRev = fyr;
}

// Retrieves the title of the movie
string MovieData::getTitle() const
{
    return mediaTitle;
}

// Retrieves the director's name
string MovieData::getDirector() const
{
    return mediaDirector;
}

// Retrieves the release year
int MovieData::getYear() const
{
    return mediaYear;
}

// Retrieves the running time in minutes
int MovieData::getLength() const
{
    return length;
}

// Retrieves the production cost
double MovieData::getProdCost() const
{
    return prodCost;
}

// Retrieves the first year revenue
double MovieData::getFirstYearRev() const
{
    return firstYearRev;
}

// Calculates and displays the movie's financial outcome for the first year
void MovieData::CalculateEarnings()
{
    if (prodCost > firstYearRev)
    {
        // If production cost exceeds revenue, display the loss
        cout << "First year loss: $" << fixed << setprecision(2) << prodCost - firstYearRev << endl;
    }
    else
    {
        // If revenue exceeds or equals cost, display the profit
        cout << "First year profit: $" << fixed << setprecision(2) << firstYearRev - prodCost << endl;
    }

    // Add a line break for readability
    cout << endl;
}


// Displays the movie details and calculates first-year profit or loss
void MovieData::DisplayMedia()
{
    cout << "Title : " << mediaTitle << endl;
    cout << "Director : " << mediaDirector << endl;
    cout << "Released : " << mediaYear << endl;
    cout << "Running Time: " << length << " minutes" << endl;
    cout << "Production cost: $" << fixed << setprecision(2) << prodCost << endl;
    cout << "First year revenue: $" << fixed << setprecision(2) << firstYearRev << endl;
    CalculateEarnings();
}

// Movie Data Definition
// Parameterized constructor initializes all member variables
SeriesData::SeriesData(const string& MediaTitle, const string& MediaDirector, const int MediaYear,
                       const int SeasonNumbers, const int ProdCosts, const int FirstYearRevenue)
    : Media(MediaTitle, MediaDirector, MediaYear),
      seasonNumbers(SeasonNumbers),
      prodCosts(ProdCosts),
      firstYearRevenue(FirstYearRevenue)
{
}

// Sets the number of seasons with validation for a positive value
void SeriesData::setSeasonNumbers(const int seasons)
{
    if (seasons <= 0)
    {
        throw invalid_argument("Season count must be positive");
    }
    seasonNumbers = seasons;
}

// Sets the production cost with validation to ensure it's non-negative
void SeriesData::setProdCosts(const int cost)
{
    if (cost < 0)
    {
        throw invalid_argument("Production cost cannot be negative");
    }
    prodCosts = cost;
}

// Sets the first year revenue with validation to ensure it's non-negative
void SeriesData::setFirstYearRevenue(const int revenue)
{
    if (revenue < 0)
    {
        throw invalid_argument("First year revenue cannot be negative");
    }
    firstYearRevenue = revenue;
}

// Retrieves the number of seasons
int SeriesData::getSeasonNumbers() const
{
    return seasonNumbers;
}

// Retrieves the production cost
int SeriesData::getProdCosts() const
{
    return prodCosts;
}

// Retrieves the first year revenue
int SeriesData::getFirstYearRevenue() const
{
    return firstYearRevenue;
}

// Calculates and displays the earnings for the series
void SeriesData::CalculateEarnings()
{
    if (prodCosts > firstYearRevenue)
    {
        cout << "First year loss: $" << fixed << setprecision(2) << prodCosts - firstYearRevenue << endl;
    }
    else
    {
        cout << "First year profit: $" << fixed << setprecision(2) << firstYearRevenue - prodCosts << endl;
    }
    cout << endl;
}

// Displays the series details and earnings
void SeriesData::DisplayMedia()
{
    cout << "Title : " << mediaTitle << endl;
    cout << "Director : " << mediaDirector << endl;
    cout << "Released : " << mediaYear << endl;
    cout << "Number of Seasons: " << seasonNumbers << endl;
    cout << "Production cost: $" << fixed << setprecision(2) << prodCosts << endl;
    cout << "First year revenue: $" << fixed << setprecision(2) << firstYearRevenue << endl;
    CalculateEarnings();
}


/*
 * This main function serves as the entry point of the program.
 * It demonstrates the creation and usage of MovieData and SeriesData objects with valid and invalid inputs.
 * Showcasing error handling, boundary testing, and general functionality.
 */
int main()
{
    //  Valid Inputs Test
    cout << "\n=== Valid Inputs Test ===\n";

    // Valid MovieData objects
    MovieData movie1("War of the Worlds", "Byron Haskin", 1953, 88, 15000000.0, 28000000.0);
    MovieData movie2("War of the Worlds", "Stephen Spielberg", 2005, 118, 22000000.0, 14000000.0);
    MovieData movie3("Inception", "Christopher Nolan", 2010, 148, 160000000.0, 830000000.0);
    MovieData movie4("The Matrix", "Lana Wachowski, Lilly Wachowski", 1999, 136, 63000000.0, 460000000.0);

    movie1.DisplayMedia();
    movie2.DisplayMedia();
    movie3.DisplayMedia();
    movie4.DisplayMedia();

    // Valid SeriesData objects
    SeriesData series1("Breaking Bad", "Vince Gilligan", 2008, 5, 25000000, 75000000);
    SeriesData series2("Game of Thrones", "David Benioff, D.B. Weiss", 2011, 8, 90000000, 150000000);

    series1.DisplayMedia();
    series2.DisplayMedia();

    // Invalid Inputs Test
    cout << "\n=== Invalid Inputs Test ===\n";

    try
    {
        MovieData invalidMovie;
        invalidMovie.setDirector(""); // Invalid
        invalidMovie.setYear(1800); // Invalid
        invalidMovie.setLength(-120); // Invalid
        invalidMovie.setProdCost(-10000.0); // Invalid
        invalidMovie.setFirstYearRev(-5000.0); // Invalid
    }
    catch (const invalid_argument& e)
    {
        cout << "Caught exception (MovieData): " << e.what() << endl;
    }

    try
    {
        MovieData testMovie("Sample", "Director", 2000, 100, 1000000.0, 2000000.0);
        testMovie.setTitle(""); // Invalid
    }
    catch (const invalid_argument& e)
    {
        cout << "Caught exception (MovieData): " << e.what() << endl;
    }

    try
    {
        SeriesData invalidSeries;
        invalidSeries.setSeasonNumbers(0); // Invalid
        invalidSeries.setProdCosts(-50000); // Invalid
        invalidSeries.setFirstYearRevenue(-100); // Invalid
    }
    catch (const invalid_argument& e)
    {
        cout << "Caught exception (SeriesData): " << e.what() << endl;
    }

    // Boundary Testing
    cout << "\n\n=== Boundary Testing ===\n";

    try
    {
        MovieData boundaryMin("Min Year Movie", "Director A", 1901, 1, 0.0, 0.0);
        boundaryMin.DisplayMedia();

        MovieData boundaryMax("Max Year Movie", "Director B", 2025, 600, 1000000000.0, 1000000000.0);
        boundaryMax.DisplayMedia();
    }
    catch (const invalid_argument& e)
    {
        cout << "Caught exception (Boundary - MovieData): " << e.what() << endl;
    }

    try
    {
        SeriesData boundarySeries("Edge Series", "Showrunner", 1901, 1, 0, 0);
        boundarySeries.DisplayMedia();

        SeriesData maxSeries("Max Series", "Executive Producer", 2025, 50, 500000000, 1000000000);
        maxSeries.DisplayMedia();
    }
    catch (const invalid_argument& e)
    {
        cout << "Caught exception (Boundary - SeriesData): " << e.what() << endl;
    }
    return 0;
}


```

```cpp
#include <iostream>
#include <fstream>

using namespace std;

// Definition of the Employee structure
struct Employee
{
    string firstName;
    string lastName;
    string phoneNumber;
    int ID;
    int salary;
    Employee* next;

    // Constructor initializing all member variables
    Employee(const string& fName, const string& lName, const string& phone, const int id, const int sal)
        : firstName(fName), lastName(lName), phoneNumber(phone), ID(id), salary(sal), next(nullptr)
    {
    }
};

// Class to manage a linked list of Employee objects
class EmployeeList
{
    Employee* head; // Pointer to the head of the list

public:
    // Constructor initializing the head to nullptr
    EmployeeList()
    {
        head = nullptr;
    }

    // Insert a new employee into the list in descending order of salary
    void insertEmployee(Employee* newEmployee)
    {
        // Insert at head if a list is empty or new salary is greater than head's
        if (head == nullptr || newEmployee->salary > head->salary)
        {
            newEmployee->next = head;
            head = newEmployee;
            return;
        }

        // Traverse to find the correct position based on salary
        Employee* current = head;
        while (current->next != nullptr && current->next->salary >= newEmployee->salary)
        {
            current = current->next;
        }

        // Insert the new employee
        newEmployee->next = current->next;
        current->next = newEmployee;
    }

    // Delete an employee from the list by their ID
    void deleteEmployeeByID(const int id)
    {
        Employee* current = head;
        Employee* previous = nullptr;

        // Search for the employee with the given ID
        while (current && current->ID != id)
        {
            previous = current;
            current = current->next;
        }

        // If not found, display a message
        if (!current)
        {
            cout << "Employee not found." << endl;
            return;
        }

        // If the employee to delete is the head
        if (!previous)
            head = current->next;
        else
            previous->next = current->next;

        delete current;
        cout << "\nEmployee with ID: " << id << " deleted." << endl;
    }

    // Print the entire employee list
    void printList() const
    {
        const Employee* current = head;
        while (current)
        {
            cout << current->firstName << " " << current->lastName
                << ", ID: " << current->ID
                << ", Phone: " << current->phoneNumber
                << ", Salary: " << current->salary << endl;
            current = current->next;
        }
    }
};

int main()
{
    EmployeeList linkedList;

    // Creating and inserting three employee objects
    Employee* emp1 = new Employee("Carpenter", "Wood", "222-222-2222", 333556666, 40000);
    Employee* emp2 = new Employee("Iron", "Ironman", "828-888-8888", 444444443, 73000);
    Employee* emp3 = new Employee("Martin", "Goal-keeper", "888-666-8888", 777777777, 86000);

    linkedList.insertEmployee(emp1);
    linkedList.insertEmployee(emp2);
    linkedList.insertEmployee(emp3);

    // Open employee list from a file
    ifstream inputFile("EmployeeList.txt");

    if (!inputFile)
    {
        cout << "Error: Input file could not be opened." << endl;
        return 1;
    }

    // Read and parse each line to extract employee data
    string line;
    while (getline(inputFile, line))
    {
        int pos = 0;
        int nextPos = line.find(',');

        string lastName = line.substr(pos, nextPos - pos);
        pos = nextPos + 1;

        nextPos = line.find(',', pos);
        string firstName = line.substr(pos, nextPos - pos);
        pos = nextPos + 1;

        nextPos = line.find(',', pos);
        int ID = stoi(line.substr(pos, nextPos - pos));
        pos = nextPos + 1;

        nextPos = line.find(',', pos);
        string phone = line.substr(pos, nextPos - pos);
        pos = nextPos + 1;

        int salary = stoi(line.substr(pos));

        // Create and insert an employee object
        Employee* emp = new Employee(firstName, lastName, phone, ID, salary);
        linkedList.insertEmployee(emp);
    }

    // Close the input file
    inputFile.close();

    // Print the full employee list
    linkedList.printList();

    // Delete an employee by ID and print the updated list
    linkedList.deleteEmployeeByID(444444444);
    cout << endl;
    linkedList.printList();

    return 0;
}

```
