# 📊 Minimum Difference Between Highest and Lowest of K Scores

## 📘 Topic

* Array
* Sorting
* Sliding Window

### 📂 Category

* Easy
* Interview + LeetCode

---

# 📄 Problem Statement

You are given an integer array `nums` where:

```js
nums[i]
```

represents the score of the `iᵗʰ` student.

You are also given an integer `k`.

Pick the scores of any `k` students such that the difference between the highest score and the lowest score is minimized.

Return the minimum possible difference.

---

# 🧪 Example 1

### Input

```js
nums = [90]
k = 1
```

### Output

```js
0
```

### Explanation

Only one student is selected:

```js
[90]
```

Difference:

```js
90 - 90 = 0
```

---

# 🧪 Example 2

### Input

```js
nums = [9,4,1,7]
k = 2
```

### Output

```js
2
```

### Explanation

Possible selections:

```js
[9,4] → 5

[9,1] → 8

[9,7] → 2

[4,1] → 3

[7,4] → 3

[7,1] → 6
```

Minimum difference:

```js
2
```

---

# 💡 Approach

### Key Observation

After sorting the array, the minimum difference for any group of `k` students will always be found in a contiguous window of size `k`.

### Steps

1. If `k === 1`, return `0`.
2. Sort the array in ascending order.
3. Use a sliding window of size `k`.
4. For each window:

   * Calculate:

```js
windowDifference = nums[i + k - 1] - nums[i]
```

5. Keep track of the minimum difference.
6. Return the minimum value.

---

# ✅ JavaScript Solution

```js
let nums = [9,4,1,7];
let k = 2;

var minimumDifference = function(nums, k) {

    if (k === 1) return 0;

    nums.sort((a, b) => a - b);

    let minScore = Infinity;

    for (let i = 0; i <= nums.length - k; i++) {

        minScore = Math.min(
            minScore,
            nums[i + k - 1] - nums[i]
        );
    }

    return minScore;
};

console.log(minimumDifference(nums, k));
```

---

# 🪄 Dry Run

## Input

```js
nums = [9,4,1,7]
k = 2
```

---

### Step 1: Sort Array

```js
[1,4,7,9]
```

Initial:

```js
minScore = Infinity
```

---

### Window 1

```js
[1,4]
```

Difference:

```js
4 - 1 = 3
```

Update:

```js
minScore = 3
```

---

### Window 2

```js
[4,7]
```

Difference:

```js
7 - 4 = 3
```

Update:

```js
minScore = 3
```

---

### Window 3

```js
[7,9]
```

Difference:

```js
9 - 7 = 2
```

Update:

```js
minScore = 2
```

---

# Windows Checked

```js
[1,4] → 3

[4,7] → 3

[7,9] → 2
```

Minimum:

```js
2
```

---

# Final Output

```js
2
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n log n)
```

Because sorting dominates the complexity.

```js
Sorting → O(n log n)

Sliding Window → O(n)
```

Overall:

```js
O(n log n)
```

---

## Space Complexity

```js
O(1)
```

Only a few extra variables are used.

> Note: JavaScript's built-in sort may use internal space depending on the engine, but algorithmically we consider it `O(1)` extra space.

---

# 🚀 Optimal Solution

The given solution is already optimal.

```js
var minimumDifference = function(nums, k) {

    if (k === 1) return 0;

    nums.sort((a, b) => a - b);

    let answer = Infinity;

    for (let i = 0; i <= nums.length - k; i++) {

        answer = Math.min(
            answer,
            nums[i + k - 1] - nums[i]
        );
    }

    return answer;
};
```

---

# 🪄 Dry Run (Optimal)

## Sorted Array

```js
[1,4,7,9]
```

Window differences:

```js
[1,4] → 3

[4,7] → 3

[7,9] → 2
```

Minimum:

```js
2
```

---

# ⏱ Optimal Complexity

## Time Complexity

```js
O(n log n)
```

## Space Complexity

```js
O(1)
```

---

# ✅ Final Output

```js
2
```

---
