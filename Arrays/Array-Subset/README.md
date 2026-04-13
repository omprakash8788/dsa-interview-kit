# Array Subset

## Topic / Concept

- Array
- Hashing (Frequency Map)
- Counting Technique

### Category

- Easy to Medium Level Problem
- Very Common Interview Question

---

## Problem Statement

Given two arrays `a[]` and `b[]`, determine whether `b[]` is a **subset** of `a[]`.

Given two arrays a[] and b[], your task is to determine whether b[] is a subset of a[].

Conditions:

- All elements of `b[]` must exist in `a[]`
- Frequency also matters (duplicates must match)

---

## Examples

### Example 1

Input:  
a = [11, 7, 1, 13, 21, 3, 7, 3]  
b = [11, 3, 7, 1, 7]

Output:  
true

---

### Example 2

Input:  
a = [1, 2, 3, 4, 4, 5, 6]  
b = [1, 2, 4]

Output:  
true

---

### Example 3

Input:  
a = [10, 5, 2, 23, 19]  
b = [19, 5, 3]

Output:  
false

---

##  Core Idea

- Count frequency of elements in `a[]`
- For each element in `b[]`:
  - Check if it exists
  - Decrease frequency
- If any element is missing → return false

---
