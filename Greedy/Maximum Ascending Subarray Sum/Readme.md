# 📈 Maximum Ascending Subarray Sum

## 📘 Topic

* Array
* Sliding Window
* Greedy

### 📂 Category

* Easy
* Interview + LeetCode

---

# 📄 Problem Statement

Given an array of positive integers `nums`, return the maximum possible sum of a strictly increasing subarray.

A subarray is a contiguous sequence of elements within an array.

A subarray is considered ascending if:

```js
nums[i] < nums[i + 1]
```

for every valid index in the subarray.

Return the maximum sum among all ascending subarrays.

---

# 🧪 Example 1

### Input

```js
nums = [10,20,30,5,10,50]
```

### Output

```js
65
```

### Explanation

Ascending subarrays:

```js
[10,20,30] → 60

[5,10,50] → 65
```

Maximum sum:

```js
65
```

---

# 🧪 Example 2

### Input

```js
nums = [10,20,30,40,50]
```

### Output

```js
150
```

### Explanation

Entire array is strictly increasing:

```js
10 + 20 + 30 + 40 + 50 = 150
```

---

# 🧪 Example 3

### Input

```js
nums = [12,17,15,13,10,11,12]
```

### Output

```js
33
```

### Explanation

Ascending subarrays:

```js
[12,17] → 29

[15] → 15

[13] → 13

[10,11,12] → 33
```

Maximum sum:

```js
33
```

---

# 💡 Approach

Maintain two variables:

* `cur` → current ascending subarray sum
* `max` → maximum sum found so far

Steps:

1. Start both variables with the first element.
2. Traverse the array from index `1`.
3. If current element is greater than the previous element:

   * Continue the ascending subarray.
   * Add current value to `cur`.
4. Otherwise:

   * Start a new subarray.
   * Set `cur` to current element.
5. Update `max` after each iteration.
6. Return `max`.

---

# ✅ JavaScript Solution

```js
let nums = [10,20,30,5,10,50];

var maxAscendingSum = function(nums) {

    let cur = nums[0];
    let max = nums[0];

    for(let i = 1; i < nums.length; i++) {

        if(nums[i] > nums[i - 1]) {
            cur += nums[i];
        } else {
            cur = nums[i];
        }

        max = Math.max(max, cur);
    }

    return max;
};

console.log(maxAscendingSum(nums));
```

---

# 🪄 Dry Run

## Input

```js
[10,20,30,5,10,50]
```

Initial values:

```js
cur = 10
max = 10
```

---

### i = 1

```js
20 > 10
```

Continue ascending subarray:

```js
cur = 10 + 20 = 30

max = 30
```

---

### i = 2

```js
30 > 20
```

Continue ascending subarray:

```js
cur = 30 + 30 = 60

max = 60
```

---

### i = 3

```js
5 < 30
```

Start new subarray:

```js
cur = 5

max = 60
```

---

### i = 4

```js
10 > 5
```

Continue ascending subarray:

```js
cur = 5 + 10 = 15

max = 60
```

---

### i = 5

```js
50 > 10
```

Continue ascending subarray:

```js
cur = 15 + 50 = 65

max = 65
```

---

# Ascending Subarrays

```js
[10,20,30] → 60

[5,10,50] → 65
```

Maximum sum:

```js
65
```

---

# Final Output

```js
65
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n)
```

We traverse the array only once.

---

## Space Complexity

```js
O(1)
```

Only constant extra variables are used.

---

# 🚀 Optimal Solution

The current solution is already optimal.

```js
var maxAscendingSum = function(nums) {

    let currentSum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i++) {

        if(nums[i] > nums[i - 1]) {
            currentSum += nums[i];
        } else {
            currentSum = nums[i];
        }

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
```

---

# ⏱ Optimal Complexity

## Time Complexity

```js
O(n)
```

## Space Complexity

```js
O(1)
```

---

# ✅ Final Output

```js
65
```

---
