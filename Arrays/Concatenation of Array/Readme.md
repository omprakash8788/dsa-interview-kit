# 🔄 Concatenation of Array

## 📘 Topic

* Array
* Simulation

### 📂 Category

* Easy
* Interview + LeetCode

---

# 📄 Problem Statement

- Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

- Specifically, ans is the concatenation of two nums arrays.

- Return the array ans.

Given an integer array `nums` of length `n`, create an array `ans` of length `2n`.

The array `ans` should satisfy:

```js
ans[i] = nums[i]
```

and

```js
ans[i + n] = nums[i]
```

for:

```js
0 <= i < n
```

In simple words, append the entire `nums` array to itself and return the resulting array.

---

# 🧪 Example 1

### Input

```js
nums = [1,2,1]
```

### Output

```js
[1,2,1,1,2,1]
```

### Explanation

The new array is formed as:

```js
[nums[0], nums[1], nums[2], nums[0], nums[1], nums[2]]
```

Result:

```js
[1,2,1,1,2,1]
```

---

# 🧪 Example 2

### Input

```js
nums = [1,3,2,1]
```

### Output

```js
[1,3,2,1,1,3,2,1]
```

### Explanation

The new array is formed as:

```js
[nums[0], nums[1], nums[2], nums[3],
 nums[0], nums[1], nums[2], nums[3]]
```

Result:

```js
[1,3,2,1,1,3,2,1]
```

---

# 💡 Approach

Create an empty array `ans`.

### Steps

1. Traverse `nums` and push all elements into `ans`.
2. Traverse `nums` again and push the same elements.
3. Return `ans`.

This creates a new array containing two copies of `nums`.

---

# ✅ JavaScript Solution

```js
let nums = [1,2,1];

var getConcatenation = function(nums) {

    let ans = [];

    for(let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }

    for(let j = 0; j < nums.length; j++) {
        ans.push(nums[j]);
    }

    return ans;
};

console.log(getConcatenation(nums));
```

---

# 🪄 Dry Run

## Input

```js
nums = [1,2,1]
```

Initial:

```js
ans = []
```

---

### First Loop

Push all elements:

```js
ans = [1]

ans = [1,2]

ans = [1,2,1]
```

---

### Second Loop

Push elements again:

```js
ans = [1,2,1,1]

ans = [1,2,1,1,2]

ans = [1,2,1,1,2,1]
```

---

# Final Array

```js
[1,2,1,1,2,1]
```

---

# ✅ Final Output

```js
[1,2,1,1,2,1]
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n)
```

Two traversals of the array:

```js
O(n) + O(n) = O(n)
```

---

## Space Complexity

```js
O(n)
```

A new array of size `2n` is created.

---

# 🚀 Optimal Solution

JavaScript provides a built-in way to concatenate arrays.

```js
var getConcatenation = function(nums) {
    return nums.concat(nums);
};
```

Or using the spread operator:

```js
var getConcatenation = function(nums) {
    return [...nums, ...nums];
};
```

---

# 🪄 Dry Run (Optimal)

## Input

```js
nums = [1,2,1]
```

Using:

```js
nums.concat(nums)
```

Result:

```js
[1,2,1,1,2,1]
```

---

# ⏱ Optimal Complexity

## Time Complexity

```js
O(n)
```

## Space Complexity

```js
O(n)
```

---

# ✅ Final Output

```js
[1,2,1,1,2,1]
```

---
