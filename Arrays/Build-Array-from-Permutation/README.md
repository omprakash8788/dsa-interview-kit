# 🔁 Build Array from Permutation

---

##  Topic / Concept
- Array
- Index Mapping
- Simulation
- Permutation
- Double Indexing

###  Category
- Easy
- Interview + LeetCode Type Problem

---

# 📄 Problem Statement

- Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

- A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

Given a zero-based permutation `nums` (0-indexed), build an array `ans` of the same length where:



```js
ans[i] = nums[nums[i]]
```



for each:

```js
0 <= i < nums.length
```

Return the array `ans`.

---

# 🧠 What is a Zero-Based Permutation?

A zero-based permutation means:

- Array contains distinct integers
- Values range from:
```js
0 → nums.length - 1
```

Example:

```js
[0,2,1,5,3,4]
```

All values are unique and within valid index range.

---

# 🎯 Main Formula

For every index:

```js
ans[i] = nums[nums[i]]
```

This is called:

✅ Double Indexing

---

# 🧪 Examples

---

## Example 1

### Input

```js
nums = [0,2,1,5,3,4]
```

### Output

```js
[0,1,2,4,5,3]
```

---

## Step-by-Step Explanation

### Index 0

```js
nums[0] = 0

ans[0] = nums[nums[0]]
       = nums[0]
       = 0
```

---

### Index 1

```js
nums[1] = 2

ans[1] = nums[2]
       = 1
```

---

### Index 2

```js
nums[2] = 1

ans[2] = nums[1]
       = 2
```

---

### Index 3

```js
nums[3] = 5

ans[3] = nums[5]
       = 4
```

---

### Final Answer

```js
[0,1,2,4,5,3]
```

---

# 🧪 Example 2

### Input

```js
nums = [5,0,1,2,3,4]
```

### Output

```js
[4,5,0,1,2,3]
```

---

# 🪜 Dry Run

---

## Index 0

```js
nums[0] = 5

ans[0] = nums[5]
       = 4
```

---

## Index 1

```js
nums[1] = 0

ans[1] = nums[0]
       = 5
```

---

## Index 2

```js
nums[2] = 1

ans[2] = nums[1]
       = 0
```

---

## Final Array

```js
[4,5,0,1,2,3]
```

---

# 🔍 Key Observation

Every value inside `nums` is also a valid index.

That is why:

```js
nums[nums[i]]
```

works safely.

---

# 💡 Simple Approach

## Step 1
Create empty array `ans`.

## Step 2
Loop through `nums`.

## Step 3
Store:
```js
ans[i] = nums[nums[i]]
```

## Step 4
Return `ans`.

---


```

---

# 🪄 Detailed Dry Run

## Input

```js
nums = [0,2,1,5,3,4]
```

---

# Iteration 1

```js
i = 0

nums[i] = nums[0] = 0

ans[0] = nums[0] = 0
```

ans:
```js
[0]
```

---

# Iteration 2

```js
i = 1

nums[i] = nums[1] = 2

ans[1] = nums[2] = 1
```

ans:
```js
[0,1]
```

---

# Iteration 3

```js
i = 2

nums[i] = nums[2] = 1

ans[2] = nums[1] = 2
```

ans:
```js
[0,1,2]
```

---

# Iteration 4

```js
i = 3

nums[i] = nums[3] = 5

ans[3] = nums[5] = 4
```

ans:
```js
[0,1,2,4]
```

---

# Final Output

```js
[0,1,2,4,5,3]
```

---

# ⏱ Complexity Analysis

## Time Complexity

Loop runs `n` times:

```js
O(n)
```

---

## Space Complexity

Extra array used:

```js
O(n)
```

---

# ⚠️ Edge Cases

---

## Case 1 → Single Element

```js
nums = [0]
```

Output:
```js
[0]
```

---

## Case 2 → Reverse Permutation

```js
nums = [4,3,2,1,0]
```

Still works correctly.

---

## Case 3 → Large Array

Works efficiently because:
```js
O(n)
```

---

# 🎯 Why This Problem is Important?

This problem teaches:

✅ Index Mapping  
✅ Array Traversal  
✅ Double Indexing  
✅ Permutation Understanding  

Very common in:
- Graph problems
- Cyclic mappings
- Hashing logic
- Functional arrays

---

# 🧩 Interview Insights

Interviewers may ask:

---

## Why is nums[nums[i]] safe?

Because:
```js
nums[i]
```

is always a valid index.

---

## What is a permutation?

An arrangement of unique elements.

---

## Can we solve in-place?

Yes.

There is an advanced:
```js
O(1) space
```

solution using encoding math.

But this solution is simpler and more readable.

---

# 🔥 In-Place Optimization (Advanced)

Advanced trick:

Store both old and new values inside same index using math.

Formula:
```js
nums[i] = nums[i] + n * (nums[nums[i]] % n)
```

Then decode later.

Used for:
```js
O(1) extra space
```

But not necessary for beginners.

---

# 🏁 Final Takeaway

Main intuition:

> Every number in nums is itself a valid index.

So:
```js
nums[nums[i]]
```

becomes possible.

This is a classic:
- Array Mapping
- Permutation Traversal
- Double Indexing problem.

---

# ✅ Final Code Again

```js
let nums = [0,2,1,5,3,4];

let ans = [];

for (let i = 0; i < nums.length; i++) {

    ans[i] = nums[nums[i]];
}

console.log(ans);
```

---

# 📝 Extra Note

```js
nums[nums[i]]
```

is called:

## Double Indexing

Similar to:
- MATLAB indexing
- Pointer mapping
- Functional composition

---
