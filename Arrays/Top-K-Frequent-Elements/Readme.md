# 🔝 Top K Frequent Elements

## 📘 Topic
- Array
- Hash Map
- Sorting
- Frequency Count

### 📂 Category
- Medium
- Interview + LeetCode

---

# 📄 Problem Statement

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Given an integer array `nums` and an integer `k`:

Return the `k` most frequent elements.

You may return the answer in any order.

---

# 🧪 Example 1

### Input
```js
nums = [1,1,1,2,2,3]
k = 2
```

### Output
```js
[1,2]
```

---

# 🧪 Example 2

### Input
```js
nums = [1]
k = 1
```

### Output
```js
[1]
```

---

# 🧪 Example 3

### Input
```js
nums = [1,2,1,2,1,2,3,1,3,2]
k = 2
```

### Output
```js
[1,2]
```

---

# 💡 Approach

## Step 1
Count frequency using object.

## Step 2
Convert object into array using:

```js
Object.entries()
```

---

## Step 3
Sort by frequency in descending order.

---

## Step 4
Take first `k` elements.

---

# ✅ JavaScript Solution

```js
let nums = [1, 1, 1, 2, 2, 3],
    k = 2;

let obj = {};

// Count frequency
for (let i = 0; i < nums.length; i++) {

    if (obj[nums[i]] == undefined) {
        obj[nums[i]] = 1;
    }
    else {
        obj[nums[i]]++;
    }
}

// Sort by frequency
let sort = Object.entries(obj).sort((a, b) => b[1] - a[1]);

// Take top k elements
let result = sort
                .slice(0, k)
                .map((item) => Number(item[0]));

console.log(result);
```

---

# 🪄 Dry Run

## Input

```js
nums = [1,1,1,2,2,3]
k = 2
```

---

# Frequency Object

```js
{
  1:3,
  2:2,
  3:1
}
```

---

# After Object.entries()

```js
[
 ['1',3],
 ['2',2],
 ['3',1]
]
```

---

# After Sorting

```js
[
 ['1',3],
 ['2',2],
 ['3',1]
]
```

Descending frequency order.

---

# Take First K Elements

```js
[
 ['1',3],
 ['2',2]
]
```

---

# Extract Numbers

```js
[1,2]
```

---

# ⏱ Complexity

## Time Complexity

### Frequency Count
```js
O(n)
```

### Sorting
```js
O(n log n)
```

### Final
```js
O(n log n)
```

---

## Space Complexity

```js
O(n)
```

---

# 🚀 Interview Note

Optimal solution can be done using:
- Bucket Sort
- Heap (Priority Queue)

with better complexity.

But your solution is clean and accepted.

---

# ✅ Final Output

```js
[1,2]
```

---