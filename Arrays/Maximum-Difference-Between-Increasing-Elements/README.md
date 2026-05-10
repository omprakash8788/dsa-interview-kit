# 📈 Maximum Difference Between Increasing Elements

## 🧠 Topic / Concept
- Array
- Greedy
- Prefix Minimum

### 📊 Category
- Easy
- Interview Important

---

## 📌 Problem Statement

Given an integer array `nums`:

👉 Find the maximum value of:

nums[j] - nums[i]

Such that:

- 0 <= i < j < n
- nums[i] < nums[j]

👉 Return:
- Maximum difference
- `-1` if no valid pair exists


- Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

- Return the maximum difference. If no such i and j exists, return -1.

---

## 🧾 Examples

### Example 1
Input:
[7,1,5,4]

Output:
4

Explanation:
5 - 1 = 4

---

### Example 2
Input:
[9,4,3,2]

Output:
-1

Explanation:
No increasing pair exists

---

### Example 3
Input:
[1,5,2,10]

Output:
9

Explanation:
10 - 1 = 9

---

## 💡 Core Idea

👉 Keep track of:

- Smallest value seen so far
- Maximum difference possible

At every index:
- Treat current element as potential `nums[j]`
- Compare with smallest previous value

---

## 🧠 Algorithm

Initialize:
    minVal = nums[0]
    maxDiff = -1

Traverse array from index 1:

    If current > minVal:
        update maxDiff

    Update minVal

Return maxDiff

---

