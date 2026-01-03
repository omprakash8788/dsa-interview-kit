# Find the Duplicate Number

---

## Problem Statement

Given an integer array `nums` containing `n + 1` integers where each integer
is in the range `[1, n]` inclusive.

There is **only one repeated number**.  
Your task is to return this repeated number.

### Constraints

- Do NOT modify the input array
- Use only **constant extra space**

---

## Examples

### Example 1

Input:
`[1, 3, 4, 2, 2]`

Output:
`2`

---

### Example 2

Input:
`[3, 1, 3, 4, 2]`

Output:
`3`

---

### Example 3

Input:
`[3, 3, 3, 3, 3]`

Output:
`3`

---

## Initial Observations

- Array size is `n + 1`
- Values are restricted to `[1, n]`
- At least one number must repeat (Pigeonhole Principle)
- Cannot modify array
- Cannot use extra memory

---

## Key Insight

The array can be interpreted as a **linked list**:

### Implementation

See: `solution.js`
