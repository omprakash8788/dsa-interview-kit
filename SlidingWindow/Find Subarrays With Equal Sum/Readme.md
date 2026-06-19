# 🔢 Find Subarrays With Equal Sum

## 📘 Topic

* Array
* Hash Set
* Sliding Window

### 📂 Category

* Easy
* Interview + LeetCode

---

# 📄 Problem Statement

Given a 0-indexed integer array `nums`, determine whether there exist two subarrays of length `2` with the same sum.

The two subarrays must start at different indices.

Return:

```js
true
```

if such subarrays exist, otherwise return:

```js
false
```

A subarray is a contiguous non-empty sequence of elements within an array.

---

# 🧪 Example 1

### Input

```js
nums = [4,2,4]
```

### Output

```js
true
```

### Explanation

Subarrays of length 2:

```js
[4,2] → 6

[2,4] → 6
```

Both subarrays have the same sum.

---

# 🧪 Example 2

### Input

```js
nums = [1,2,3,4,5]
```

### Output

```js
false
```

### Explanation

Subarrays of length 2:

```js
[1,2] → 3

[2,3] → 5

[3,4] → 7

[4,5] → 9
```

All sums are different.

---

# 🧪 Example 3

### Input

```js
nums = [0,0,0]
```

### Output

```js
true
```

### Explanation

Subarrays:

```js
[0,0] → 0

[0,0] → 0
```

The sums are equal.

Even though the contents are the same, they start at different indices.

---

# 💡 Approach

Use a `Set` to store the sums of every subarray of length `2`.

### Steps

1. Create an empty `Set`.
2. Traverse the array until `nums.length - 1`.
3. Calculate the sum of every adjacent pair.
4. If the sum already exists in the `Set`, return `true`.
5. Otherwise, add the sum to the `Set`.
6. If no duplicate sum is found, return `false`.

---

# ✅ JavaScript Solution

```js
let nums = [4,2,4];

var findSubarrays = function(nums) {

    const seen = new Set();

    for(let i = 0; i < nums.length - 1; i++) {

        const sum = nums[i] + nums[i + 1];

        if(seen.has(sum)) {
            return true;
        }

        seen.add(sum);
    }

    return false;
};

console.log(findSubarrays(nums));
```

---

# 🪄 Dry Run

## Input

```js
nums = [4,2,4]
```

Initial:

```js
seen = {}
```

---

### Iteration 1

```js
i = 0

sum = 4 + 2 = 6
```

Check:

```js
seen.has(6) → false
```

Add:

```js
seen = {6}
```

---

### Iteration 2

```js
i = 1

sum = 2 + 4 = 6
```

Check:

```js
seen.has(6) → true
```

Return:

```js
true
```

---

# Subarray Sums

```js
[4,2] → 6

[2,4] → 6
```

Duplicate sum found:

```js
6
```

---

# Final Output

```js
true
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n)
```

We traverse the array once.

---

## Space Complexity

```js
O(n)
```

In the worst case, all subarray sums are unique and stored in the `Set`.

---

# 🚀 Alternative Brute Force Solution

Compare every subarray sum with every other subarray sum.

```js
var findSubarrays = function(nums) {

    for(let i = 0; i < nums.length - 1; i++) {

        let sum1 = nums[i] + nums[i + 1];

        for(let j = i + 1; j < nums.length - 1; j++) {

            let sum2 = nums[j] + nums[j + 1];

            if(sum1 === sum2) {
                return true;
            }
        }
    }

    return false;
};
```

---

# 🪄 Dry Run (Brute Force)

## Input

```js
nums = [4,2,4]
```

Compare:

```js
[4,2] → 6

[2,4] → 6
```

Since:

```js
6 === 6
```

Return:

```js
true
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
true
```

---
