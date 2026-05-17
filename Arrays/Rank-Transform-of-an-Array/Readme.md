# 🏆 Rank Transform of an Array

---

## 📘 Topic / Concept
- Array
- Sorting
- Hash Map
- Ranking System
- Coordinate Compression

### 📂 Category
- Easy → Medium
- Interview + LeetCode Type Problem

---

# 📄 Problem Statement

- Given an array of integers arr, replace each element with its rank.

- The rank represents how large the element is. The rank has the following rules:

- Rank is an integer starting from 1.
- The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
- Rank should be as small as possible.

Given an integer array `arr`, replace each element with its rank.

The rank represents how large the element is.

---

# 📜 Ranking Rules

## Rule 1
Rank starts from:

```js
1
```

---

## Rule 2
Larger element → Larger rank

---

## Rule 3
Equal elements must have same rank

---

## Rule 4
Ranks should be as small as possible

---

# 🧠 Understanding the Problem

We need to:

- Sort unique values
- Assign ranks
- Replace original elements with ranks

---

# 🎯 Main Goal

For:

```js
arr = [40,10,20,30]
```

Sorted unique values:

```js
[10,20,30,40]
```

Ranks:

```js
10 → 1
20 → 2
30 → 3
40 → 4
```

Final output:

```js
[4,1,2,3]
```

---

# 🧪 Examples

---

## Example 1

### Input

```js
arr = [40,10,20,30]
```

### Output

```js
[4,1,2,3]
```

---

## Explanation

Sorted unique values:

```js
[10,20,30,40]
```

Rank mapping:

```js
10 → 1
20 → 2
30 → 3
40 → 4
```

Transform original array:

```js
40 → 4
10 → 1
20 → 2
30 → 3
```

Final:
```js
[4,1,2,3]
```

---

## Example 2

### Input

```js
arr = [100,100,100]
```

### Output

```js
[1,1,1]
```

---

## Explanation

Only one unique value exists.

So:
```js
100 → rank 1
```

All elements become:
```js
[1,1,1]
```

---

## Example 3

### Input

```js
arr = [37,12,28,9,100,56,80,5,12]
```

### Output

```js
[5,3,4,2,8,6,7,1,3]
```

---

# 🔍 Key Observation

Equal numbers should share same rank.

So:

✅ Remove duplicates first.

Then:
- sort unique values
- assign increasing ranks

---

# 💡 Approach

---

## Step 1 → Remove Duplicates

Using:
```js
new Set(arr)
```

---

## Step 2 → Sort Unique Values

```js
sort((a,b)=>a-b)
```

---

## Step 3 → Create Rank Map

Example:

```js
{
  5:1,
  9:2,
  12:3
}
```

---

## Step 4 → Replace Elements

Map original values to ranks.

---

# 🪄 Dry Run

## Input

```js
arr = [40,10,20,30]
```

---

# Step 1 → Remove Duplicates

```js
[40,10,20,30]
```

(No duplicates)

---

# Step 2 → Sort

```js
[10,20,30,40]
```

---

# Step 3 → Create Rank Map

```js
{
  10:1,
  20:2,
  30:3,
  40:4
}
```

---

# Step 4 → Transform Array

```js
40 → 4
10 → 1
20 → 2
30 → 3
```

Final:
```js
[4,1,2,3]
```

---

# 🪄 Detailed Dry Run (Example 3)

## Input

```js
[37,12,28,9,100,56,80,5,12]
```

---

# Unique Values

```js
[37,12,28,9,100,56,80,5]
```

---

# Sorted Values

```js
[5,9,12,28,37,56,80,100]
```

---

# Rank Map

```js
5   → 1
9   → 2
12  → 3
28  → 4
37  → 5
56  → 6
80  → 7
100 → 8
```

---

# Transform Original Array

```js
37  → 5
12  → 3
28  → 4
9   → 2
100 → 8
56  → 6
80  → 7
5   → 1
12  → 3
```

Final:
```js
[5,3,4,2,8,6,7,1,3]
```

---

# ⏱ Complexity Analysis

---

## Time Complexity

### Creating Set
```js
O(n)
```

### Sorting
```js
O(n log n)
```

### Mapping
```js
O(n)
```

---

## Final Complexity

```js
O(n log n)
```

---

## Space Complexity

```js
O(n)
```

For:
- set
- hashmap
- result array

---

# ⚠️ Edge Cases

---

## Case 1 → All Same Values

```js
[7,7,7]
```

Output:
```js
[1,1,1]
```

---

## Case 2 → Negative Numbers

```js
[-10,-5,-1]
```

Ranks:
```js
[-10 → 1]
[-5  → 2]
[-1  → 3]
```

---

## Case 3 → Empty Array

```js
[]
```

Output:
```js
[]
```

---

# 🎯 Why Hash Map is Useful?

Hash map allows:

```js
rank lookup → O(1)
```

Without hashmap:
- repeated searching
- slower solution

---

# 🚀 Important Concept → Coordinate Compression

This problem is actually a form of:

# 📌 Coordinate Compression

Meaning:
- replace large values
- with smaller ordered ranks

Example:

```js
1000 → 1
5000 → 2
9999 → 3
```

Used heavily in:
- Segment Trees
- Fenwick Trees
- Competitive Programming

---

# 🧩 Interview Insights

Interviewers may ask:

---

## Why remove duplicates?

Equal values must share same rank.

---

## Why sorting?

Rank depends on numerical order.

---

## Why rank starts from 1?

Problem requirement.

---

## What if duplicates exist?

They receive same rank.

---

# 🔥 Important Learning

This problem teaches:

✅ Sorting  
✅ Hash Mapping  
✅ Ranking Logic  
✅ Coordinate Compression  
✅ Array Transformation  

---

# 🏁 Final Takeaway

Main intuition:

> Sort unique values and assign increasing ranks.

Then replace every original value using hashmap lookup.

This is a classic:
- Ranking
- Coordinate Compression
- Sorting + Mapping problem.

---

# ✅ Final Code Again

```js
let arr = [37,12,28,9,100,56,80,5,12];

let sorted = [...new Set(arr)].sort((a,b) => a-b);

let rankMap = {};

sorted.forEach((val, idx) => {
    rankMap[val] = idx + 1;
});

let result = arr.map(val => rankMap[val]);

console.log(result);
```

---

# 📝 Extra Note

```js
new Set(arr)
```

removes duplicates.

---

```js
arr.map()
```

creates transformed array.

---

This pattern appears frequently in:
- Ranking systems
- Leaderboards
- Competitive programming
- Data normalization

---