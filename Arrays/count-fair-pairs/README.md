#  Count the Number of Fair Pairs

##  File Name
count-fair-pairs.js

##  Topic / Concept
- Array
- Two Pointer
- Sorting
- Binary Search (Advanced)

###  Category
- Medium
- Interview Important

---

##  Problem Statement

You are given:
- An integer array `nums`
- Two integers `lower` and `upper`

 A pair `(i, j)` is **fair** if:

- 0 <= i < j < n  
- lower <= nums[i] + nums[j] <= upper  

 Return the total number of fair pairs.

## 
Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.

A pair (i, j) is fair if:

 0 <= i < j < n, and
lower <= nums[i] + nums[j] <= upper

---

## 🧾 Examples

### Example 1
Input:  
nums = [0,1,7,4,4,5], lower = 3, upper = 6  

Output:  
6  

---

### Example 2
Input:  
nums = [1,7,9,2,5], lower = 11, upper = 11  

Output:  
1  

---

