# 🔢 Count Equal and Divisible Pairs in an Array



---

##  Topic / Concept
- Array
- Hashing (Map)
- Math (Divisibility)
- Nested Loop Optimization

###  Category
- Easy → Medium
- Interview + LeetCode Type Problem

---

##  Problem Statement

Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

Given a 0-indexed array `nums` and an integer `k`:

Find number of pairs `(i, j)` such that:
- `0 <= i < j < n`
- `nums[i] == nums[j]`
- `(i * j) % k == 0`

---

##  Example

### Example 1

Input:  
nums = [3,1,2,2,2,1,3], k = 2  

Output:  
4  

### Explanation:
Valid pairs:
- (0,6) → 0×6 = 0 ✔
- (2,3) → 6 ✔
- (2,4) → 8 ✔
- (3,4) → 12 ✔

---



