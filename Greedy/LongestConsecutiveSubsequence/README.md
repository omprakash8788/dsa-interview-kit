# Longest Consecutive Subsequence


##  Topic / Concept

- Array
- Hashing (Set)
- Sorting
- Greedy Thinking

### Category
- Medium Level Problem
- Important Interview Question

---

## Problem Statement

Given an integer array `arr[]` of non-negative integers, find the length of the **longest subsequence** such that the elements form **consecutive integers**.

- Elements can be in **any order**
- The subsequence does **not need to be contiguous**

---

## Examples

### Example 1

Input:
arr = [2, 6, 1, 9, 4, 5, 3]

Output:
6

Explanation:
Consecutive sequence → [1, 2, 3, 4, 5, 6]

---

### Example 2

Input:
arr = [1, 9, 3, 10, 4, 20, 2]

Output:
4

Explanation:
Consecutive sequence → [1, 2, 3, 4]

---

### Example 3

Input:
arr = [15, 13, 12, 14, 11, 10, 9]

Output:
7

Explanation:
Consecutive sequence → [9, 10, 11, 12, 13, 14, 15]

---

## Initial Observations

- Array is **unsorted**
- Order does **not matter**
- We need longest chain of consecutive numbers
- Duplicates may exist

---

## Approach 1: Sorting Method

### Idea

- Sort the array
- Count consecutive elements
- Skip duplicates



