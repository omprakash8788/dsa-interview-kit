# 🔢 Kth Missing Positive Number

## 📘 Topic
- Array
- Hash Set
- Missing Numbers

###  Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement
- Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

- Return the kth positive integer that is missing from this array.

Given:
- a sorted array `arr`
- an integer `k`

Return the `kth` missing positive integer.

---

# 🧪 Example 1

### Input
```js
arr = [2,3,4,7,11]
k = 5
```

### Output
```js
9
```

### Explanation

Missing numbers:

```js
[1,5,6,8,9,10,12...]
```

5th missing number:

```js
9
```

---

# 🧪 Example 2

### Input
```js
arr = [1,2,3,4]
k = 2
```

### Output
```js
6
```

### Explanation

Missing numbers:

```js
[5,6,7,8...]
```

2nd missing number:

```js
6
```

---

# 💡 Approach

## Step 1
Store all array elements in a Set.

## Step 2
Traverse numbers from `1` to `arr.length + k`.

## Step 3
Store numbers that are missing.

## Step 4
Return:

```js
missing[k - 1]
```

---

# ✅ JavaScript Solution

```js
let arr = [2,3,4,7,11],
    k = 5;

var findKthPositive = function(arr, k) {

    let n = arr.length + k;

    let set = new Set(arr);

    let missing = [];

    for(let i = 1; i <= n; i++) {

        if(!set.has(i)) {
            missing.push(i);
        }
    }

    return missing[k - 1];
};

console.log(findKthPositive(arr, k));
```

---

# 🪄 Dry Run

## Input

```js
arr = [2,3,4,7,11]
k = 5
```

---

# Set

```js
{2,3,4,7,11}
```

---

# Missing Numbers

```js
1
5
6
8
9
10
...
```

Array:

```js
[1,5,6,8,9,10]
```

---

# 5th Missing Number

```js
missing[4]
```

Result:

```js
9
```

---

# Final Output

```js
9
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n + k)
```

---

## Space Complexity

```js
O(n + k)
```

---

# 🔥 Important Point

Why use:

```js
arr.length + k
```

Because we need enough numbers to guarantee finding at least `k` missing values.

---

# ✅ Final Output

```js
9
```

---
