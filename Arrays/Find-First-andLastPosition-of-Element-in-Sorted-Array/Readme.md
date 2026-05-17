# 🔍 Find First and Last Position of Element in Sorted Array

---

## 📘 Topic / Concept
- Array
- Binary Search
- Searching Algorithms
- Sorted Array
- Lower Bound & Upper Bound

### 📂 Category
- Medium
- Interview + LeetCode Type Problem

---

# 📄 Problem Statement

- Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

- If target is not found in the array, return [-1, -1].

- You must write an algorithm with O(log n) runtime complexity.

Given an array of integers `nums` sorted in non-decreasing order, find the:

- starting position
- ending position

of a given target value.

If target is not found in the array, return:

```js
[-1, -1]
```

You must write an algorithm with:

```js
O(log n)
```

runtime complexity.

---

# 🧠 Understanding the Problem

We need to find:

```js
First occurrence of target
Last occurrence of target
```

inside a sorted array.

---

# 🎯 Goal

For:

```js
nums = [5,7,7,8,8,10]
target = 8
```

Return:

```js
[3,4]
```

Because:
```js
8 first appears at index 3
8 last appears at index 4
```

---

# 🧪 Examples

---

## Example 1

### Input

```js
nums = [5,7,7,8,8,10]
target = 8
```

### Output

```js
[3,4]
```

---

## Explanation

```js
Index:  0 1 2 3 4 5
nums = [5,7,7,8,8,10]
              ↑ ↑
```

First `8`:
```js
3
```

Last `8`:
```js
4
```

---

## Example 2

### Input

```js
nums = [5,7,7,8,8,10]
target = 6
```

### Output

```js
[-1,-1]
```

---

## Explanation

```js
6 does not exist
```

So return:
```js
[-1,-1]
```

---

## Example 3

### Input

```js
nums = []
target = 0
```

### Output

```js
[-1,-1]
```

---

# 🔍 Key Observation

Array is already:

```js
sorted
```

So:

✅ Binary Search can be used.

Requirement says:
```js
O(log n)
```

which strongly hints toward:

# 🚀 Binary Search

---

# ⚠️ Your Current Solution

Your solution:

```js
for loop from left
for loop from right
```

works correctly.

But complexity is:

```js
O(n)
```

because loops may scan entire array.

Problem requires:
```js
O(log n)
```

So interviewer expects:
```js
Binary Search
```

---

# 💡 Brute Force Approach (Your Code)

---



# 🪄 Dry Run (Your Solution)

## Input

```js
nums = [5,7,7,8,8,10]
target = 8
```

---

# First Loop

---

## i = 0

```js
nums[0] = 5
```

Not target.

---

## i = 1

```js
nums[1] = 7
```

Not target.

---

## i = 2

```js
nums[2] = 7
```

Not target.

---

## i = 3

```js
nums[3] = 8 ✔
```

Store:
```js
res[0] = 3
```

Break loop.

---

# Second Loop

---

## j = 5

```js
nums[5] = 10
```

Not target.

---

## j = 4

```js
nums[4] = 8 ✔
```

Store:
```js
res[1] = 4
```

Break loop.

---

# Final Output

```js
[3,4]
```

---

# ⏱ Complexity Analysis (Your Solution)

## Time Complexity

First loop:
```js
O(n)
```

Second loop:
```js
O(n)
```

Total:
```js
O(n)
```

---

## Space Complexity

```js
O(1)
```

---

# 🚀 Optimal Approach → Binary Search

Because array is sorted:

We can find:
- first occurrence
- last occurrence

using binary search.

---

# 🎯 Binary Search Idea

---

## First Occurrence

When target found:
```js
move left
```

to find earlier occurrence.

---

## Last Occurrence

When target found:
```js
move right
```

to find later occurrence.

---

# ✅ Optimal Binary Search Solution

# 🪄 Dry Run (Binary Search)

## Input

```js
nums = [5,7,7,8,8,10]
target = 8
```

---

# Finding First Position

---

## mid = 2

```js
nums[2] = 7
```

Move right:
```js
left = mid + 1
```

---

## mid = 4

```js
nums[4] = 8 ✔
```

Store:
```js
ans = 4
```

Move left:
```js
right = mid - 1
```

---

## mid = 3

```js
nums[3] = 8 ✔
```

Store:
```js
ans = 3
```

Move left again.

Final first position:
```js
3
```

---

# Finding Last Position

Similar logic.

Final last position:
```js
4
```

---

# Final Output

```js
[3,4]
```

---

# ⚠️ Edge Cases

---

## Case 1 → Empty Array

```js
[]
```

Output:
```js
[-1,-1]
```

---

## Case 2 → Single Element

```js
[8]
```

Output:
```js
[0,0]
```

---

## Case 3 → Target Missing

```js
[1,2,3]
target = 5
```

Output:
```js
[-1,-1]
```

---

## Case 4 → All Same Elements

```js
[2,2,2,2]
```

Output:
```js
[0,3]
```

---

# 🎯 Why Binary Search Works?

Because array is sorted.

Binary search eliminates half array each step.

Complexity becomes:

:contentReference[oaicite:0]{index=0}

instead of:

:contentReference[oaicite:1]{index=1}

---

# 🧩 Interview Insights

Interviewers may ask:

---

## Why not linear search?

Because problem explicitly demands:
```js
O(log n)
```

---

## Why two binary searches?

One search cannot guarantee:
- first occurrence
- last occurrence

Need separate logic.

---

## What are Lower Bound & Upper Bound?

### Lower Bound
First occurrence.

### Upper Bound
Position after last occurrence.

Very common in:
- STL
- Competitive Programming
- Searching problems

---

# 🔥 Important Learning

This problem teaches:

✅ Binary Search Variations  
✅ First & Last Occurrence Problems  
✅ Lower Bound Concept  
✅ Upper Bound Concept  
✅ Sorted Array Searching  

---

# 🏁 Final Takeaway

Main intuition:

> Since array is sorted, binary search can efficiently find both boundaries of target.

This is one of the most important:

⭐ Binary Search Interview Problems.
