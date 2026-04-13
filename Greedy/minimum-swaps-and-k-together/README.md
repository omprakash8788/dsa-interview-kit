# Minimum Swaps and K Together



## 🧠 Topic / Concept

- Array
- Sliding Window
- Two Pointer Technique
- Greedy

### Category
- Medium Level Problem
- Very Important Interview Pattern

---

## Problem Statement

Given:
- An array `arr[]`
- An integer `k`

 You can swap any two elements

Goal:
- Bring all elements **≤ k together (contiguous)**
- Find **minimum number of swaps required**

Given an array arr and a number k. One can apply a swap operation on the array any number of times, i.e choose any two index i and j (i < j) and swap arr[i] , arr[j] . Find the minimum number of swaps required to bring all the numbers less than or equal to k together, i.e. make them a contiguous subarray.

---

## Examples

### Example 1

Input:  
arr = [2, 1, 5, 6, 3]  
k = 3  

Output:  
1  

---

### Example 2

Input:  
arr = [2, 7, 9, 5, 8, 7, 4]  
k = 6  

Output:  
2  

---

### Example 3

Input:  
arr = [2, 4, 5, 3, 6, 1, 8]  
k = 6  

Output:  
0  

---

##  Core Idea

 First, count how many elements are **≤ k**

That defines the **window size**

 Then:
- Count how many **bad elements (> k)** are inside the window
- Minimize this count using sliding window

---

##  Intuition

- We WANT all good elements (≤ k) together  
- But currently, some "bad elements" (> k) are inside that group  

 Minimum swaps = minimum bad elements in any window

---

