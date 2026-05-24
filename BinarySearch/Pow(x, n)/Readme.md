# ⚡ Pow(x, n)

---

## 📘 Topic / Concept
- Math
- Recursion
- Binary Exponentiation
- Divide and Conquer
- Fast Power Algorithm

### 📂 Category
- Medium
- Interview + LeetCode Type Problem

---

# 📄 Problem Statement
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Implement:

```js
pow(x, n)
```

which calculates:



Meaning:

```js
x raised to the power n
```

---

# 🧠 Understanding the Problem

We need to compute:

```js
x × x × x × x ...
```

`n` times.

---

# 🎯 Examples

---

## Example 1

### Input

```js
x = 2.00000
n = 10
```

### Output

```js
1024.00000
```

---

## Explanation



---

## Example 2

### Input

```js
x = 2.10000
n = 3
```

### Output

```js
9.26100
```

---

## Explanation



---

## Example 3

### Input

```js
x = 2.00000
n = -2
```

### Output

```js
0.25000
```

---

## Explanation

Negative power means reciprocal.



---

# 🔍 Key Observation

Power can be:

- Positive
- Negative
- Zero

---

# 📌 Important Mathematical Rules

---

## Rule 1 → Positive Power



---

## Rule 2 → Zero Power



---

## Rule 3 → Negative Power



---

# 💡 Your Current Solution

## ✅ JavaScript Solution

```js
let x = 2.00000;
let n = 10;

let power = x ** n;

console.log(power);
```

---

# ✅ Why It Works?

JavaScript already provides:

```js
**
```

Exponentiation operator.

So:

```js
2 ** 10
```

means:



---

# 🪄 Dry Run

## Input

```js
x = 2
n = 10
```

---

# Computation

```js
2 ** 10
```

becomes:

```js
2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2
```

Result:

```js
1024
```

---

# Final Output

```js
1024
```

---

# ⏱ Complexity Analysis (Built-in Operator)

Internally optimized by JavaScript engine.

Approximate complexity:



for optimized implementations.

---

# ⚠️ Interview Catch

In interviews:

❌ Using:
```js
x ** n
```

may NOT be accepted.

Because interviewer wants:
- algorithm implementation
- optimized logic

Usually expected:

# 🚀 Binary Exponentiation

---

# 💡 Brute Force Approach

Multiply `x` exactly `n` times.

---

# ❌ Brute Force Solution

```js
var myPow = function(x, n) {

    let result = 1;

    let power = Math.abs(n);

    for(let i = 0; i < power; i++) {
        result *= x;
    }

    if(n < 0) {
        return 1 / result;
    }

    return result;
};
```

---

# ⏱ Complexity

```js
O(n)
```

Too slow for very large `n`.

---

# 🚀 Optimal Approach → Binary Exponentiation

Also called:

- Fast Power
- Exponentiation by Squaring

---

# 🎯 Main Idea

Instead of multiplying repeatedly:

Use:

---

## If n is even



---

## If n is odd



---

# 🔥 Huge Optimization

Instead of reducing power by:

```js
1
```

we reduce by:

```js
half
```

So complexity becomes:



---

# ✅ Optimal Recursive Solution

```js
var myPow = function(x, n) {

    // Base case
    if(n === 0) {
        return 1;
    }

    // Handle negative powers
    if(n < 0) {
        x = 1 / x;
        n = -n;
    }

    // Recursive call
    let half = myPow(x, Math.floor(n / 2));

    // Even power
    if(n % 2 === 0) {
        return half * half;
    }

    // Odd power
    return half * half * x;
};
```

---

# 🪄 Dry Run (Binary Exponentiation)

## Input

```js
x = 2
n = 10
```

---

# Step 1



---

# Step 2



---

# Step 3



---

# Step 4



---

# Final Result

```js
1024
```

---

# ⏱ Complexity Analysis (Optimal)

## Time Complexity

Each step divides power by 2:



---

## Space Complexity

Recursive stack:



---

# ⚠️ Edge Cases

---

## Case 1 → Power Zero

```js
x = 5
n = 0
```

Output:

```js
1
```

Because:



---

## Case 2 → Negative Power

```js
x = 2
n = -2
```

Output:

```js
0.25
```

---

## Case 3 → x = 1

```js
1^anything = 1
```

---

## Case 4 → Large n

Binary exponentiation handles efficiently.

---

# 🎯 Why Binary Exponentiation is Powerful?

Without optimization:

```js
2^1000000000
```

would require:
```js
1 billion multiplications
```

Binary exponentiation reduces operations drastically.

---

# 🧩 Interview Insights

Interviewers may ask:

---

## Why not use Math.pow()?

Because problem wants algorithm implementation.

---

## Why divide exponent by 2?

To reduce complexity exponentially.

---

## Why handle negative powers separately?

Because:



---

## What is Divide and Conquer here?

Breaking problem into:
```js
smaller powers
```

---

# 🔥 Important Learning

This problem teaches:

✅ Fast Exponentiation  
✅ Divide & Conquer  
✅ Recursion  
✅ Mathematical Optimization  
✅ Logarithmic Complexity  

---

# 🏁 Final Takeaway

Main intuition:

> Instead of multiplying x repeatedly, repeatedly halve the exponent.

This transforms:



which is a massive optimization.

---

# ✅ Final Code Again (Simple Version)

```js
let x = 2.00000;
let n = 10;

let power = x ** n;

console.log(power);
```

---

# ✅ Final Code Again (Optimal Interview Solution)

```js
var myPow = function(x, n) {

    if(n === 0) {
        return 1;
    }

    if(n < 0) {
        x = 1 / x;
        n = -n;
    }

    let half = myPow(x, Math.floor(n / 2));

    if(n % 2 === 0) {
        return half * half;
    }

    return half * half * x;
};
```

---

# 📝 Extra Note

Binary Exponentiation is used heavily in:

- Competitive Programming
- Cryptography
- Matrix Exponentiation
- Modular Arithmetic
- Game Engines

Very important algorithm.

---