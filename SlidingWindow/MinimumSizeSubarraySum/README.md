# Minimum Size Subarray Sum



##  Topic / Concept

- Array
- Sliding Window
- Two Pointer Technique

### Category
- Medium Level Problem
- Very Important Interview Pattern

---

## Problem Statement

Given an array of positive integers `nums` and a positive integer `target`, return the **minimal length of a subarray** whose sum is **greater than or equal to target**.

- If no such subarray exists → return `0`
- Subarray must be **contiguous**

---

## Examples

### Example 1

Input:
target = 7  
nums = [2, 3, 1, 2, 4, 3]

Output:
2

Explanation:
Subarray [4, 3] → sum = 7 → length = 2

---

### Example 2

Input:
target = 4  
nums = [1, 4, 4]

Output:
1

Explanation:
Subarray [4] → length = 1

---

### Example 3

Input:
target = 11  
nums = [1,1,1,1,1,1,1,1]

Output:
0

Explanation:
No valid subarray exists

---

## Initial Observations

- All numbers are **positive**
- This is important → allows **sliding window**
- We need:
  - Minimum length
  - Sum ≥ target

---

## Core Idea (Sliding Window)

- Expand window using `right`
- Add elements to `sum`
- When `sum ≥ target`:
  - Try to **shrink window from left**
  - Update minimum length


