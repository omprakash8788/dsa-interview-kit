# Median of Two Sorted Arrays

## Topic / Concept

- Array
- Binary Search
- Divide and Conquer
- Partitioning Technique

### Category

- Hard Level Problem  
- Very Important Interview Pattern (FAANG Level)

---

## Problem Statement

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the **median of the two sorted arrays**.

The overall run time complexity should be:

 **O(log (m + n))**

---

## Requirements

- You are given:
  - Two sorted arrays `nums1[]` and `nums2[]`
- You need to:
  - Return the **median value**

---

## Example

### Example 1

**Input**

nums1 = [1, 3]  
nums2 = [2]

**Output**

2.00000  

**Explanation**

Merged array → [1, 2, 3]  
Median → 2

---

### Example 2

**Input**

nums1 = [1, 2]  
nums2 = [3, 4]

**Output**

2.50000  

**Explanation**

Merged array → [1, 2, 3, 4]  
Median → (2 + 3) / 2 = 2.5

---

## Core Idea

The median depends on:

- **Odd length** → middle element  
- **Even length** → average of two middle elements  

---

## Approach 1 (Brute Force)

### Steps

1. Merge both arrays
2. Sort the merged array
3. Find the median

---



