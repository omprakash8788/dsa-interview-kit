# 📏 Height Checker

## 📘 Topic
- Array
- Sorting
- Comparison

### 📂 Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement
- A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

- You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

- Return the number of indices where heights[i] != expected[i].

Given an array `heights` representing students' heights:

Return the number of indices where:
```js
heights[i] != expected[i]
```

Where:
```js
expected
```

is the sorted version of `heights`.

---

# 🧪 Example 1

### Input
```js
heights = [1,1,4,2,1,3]
```

### Output
```js
3
```

---

# ✅ Explanation

Sorted array:

```js
[1,1,1,2,3,4]
```

Different indices:
```js
2, 4, 5
```

Count:
```js
3
```

---

# 🧪 Example 2

### Input
```js
heights = [5,1,2,3,4]
```

### Output
```js
5
```

---

# 🧪 Example 3

### Input
```js
heights = [1,2,3,4,5]
```

### Output
```js
0
```

---

# 💡 Approach

## Step 1
Create sorted copy of array.

## Step 2
Compare original array with sorted array.

## Step 3
Count mismatched indices.

---

# ✅ JavaScript Solution

```js
let heights = [1,1,4,2,1,3];

var heightChecker = function(heights) {

    let expected =
        [...heights].sort((a,b)=>(a-b));

    let count = 0;

    for(let i = 0; i < heights.length; i++) {

        if(heights[i] != expected[i]) {
            count++;
        }
    }

    return count;
};

console.log(heightChecker(heights));
```

---

# 🪄 Dry Run

## Input

```js
[1,1,4,2,1,3]
```

---

# Sorted Array

```js
[1,1,1,2,3,4]
```

---

# Compare

| Index | heights | expected | Match |
|---|---|---|---|
| 0 | 1 | 1 | ✔ |
| 1 | 1 | 1 | ✔ |
| 2 | 4 | 1 | ❌ |
| 3 | 2 | 2 | ✔ |
| 4 | 1 | 3 | ❌ |
| 5 | 3 | 4 | ❌ |

---

# Total Mismatch

```js
3
```

---

# ⏱ Complexity

## Time Complexity

### Sorting
```js
O(n log n)
```

### Traversal
```js
O(n)
```

Final:
```js
O(n log n)
```

---

## Space Complexity

```js
O(n)
```

(copy array)

---

# 🔥 Important Point

Why use:

```js
[...heights]
```

Because:
- `sort()` changes original array
- spread operator creates copy

---

# ✅ Final Output

```js
3
```

---