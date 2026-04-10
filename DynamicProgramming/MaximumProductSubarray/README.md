# Maximum Product Subarray

## Problem Statement

Given an integer array `arr[]` that contains positive numbers, negative numbers, and zero, find the **maximum product of a subarray**.

- A subarray must be **contiguous**
- The result is guaranteed to fit in a **32-bit integer**

---

## Examples

### Example 1

Input:
arr = [-2, 6, -3, -10, 0, 2]

Output:
180

Explanation:
Subarray [6, -3, -10] → 6 × (-3) × (-10) = 180

---

### Example 2

Input:
arr = [-1, -3, -10, 0, 6]

Output:
30

Explanation:
Subarray [-3, -10] → (-3) × (-10) = 30

---

### Example 3

Input:
arr = [2, 3, 4]

Output:
24

Explanation:
All elements are positive → multiply all

---

## Initial Observations

- Negative numbers can turn **min → max**
- Zero resets the product
- We must track:
  - Maximum product so far
  - Minimum product so far

---

## Core Idea

- Maintain two variables:
  - `maxSoFar` → maximum product ending here
  - `minSoFar` → minimum product ending here
- If current number is negative → swap them
- Update result at each step


### Implementation

See: `solution.js`
