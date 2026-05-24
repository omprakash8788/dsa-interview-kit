# 📈 Adjacent Increasing Subarrays Detection I

## 📘 Topic
- Array
- Sliding Window
- Two Pointers

### 📂 Category
- Medium
- Interview + LeetCode

---

# 📄 Problem Statement
- Given an array nums of n integers and an integer k, determine whether there exist two adjacent subarrays of length k such that both subarrays are strictly increasing. Specifically, check if there are two subarrays starting at indices a and b (a < b), where:

- Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
- The subarrays must be adjacent, meaning b = a + k.
- Return true if it is possible to find two such subarrays, and false otherwise.


Given:
- an integer array `nums`
- an integer `k`

Check whether there exist:

```js
two adjacent subarrays of length k
```

such that both are:

```js
strictly increasing
```

and:

```js
second subarray starts exactly after first
```

Meaning:

```js
b = a + k
```

---

# 🧪 Example 1

### Input
```js
nums = [2,5,7,8,9,2,3,4,3,1]
k = 3
```

### Output
```js
true
```

---

# ✅ Explanation

First subarray:

```js
[7,8,9]
```

Second adjacent subarray:

```js
[2,3,4]
```

Both are strictly increasing.

---

# 🧪 Example 2

### Input
```js
nums = [1,2,3,4,4,4,4,5,6,7]
k = 5
```

### Output
```js
false
```

---

# 💡 Approach

For every possible starting index:

Check:
1. First subarray of size `k`
2. Adjacent second subarray of size `k`

If both are strictly increasing:
```js
return true
```

Else:
```js
false
```

---

# ✅ JavaScript Solution

```js
let nums = [2,5,7,8,9,2,3,4,3,1],
    k = 3;

var hasIncreasingSubarrays = function(nums, k) {

    let stromadive = nums;

    // Check increasing subarray
    const isIncreasing = (start) => {

        for (let i = start; i < start + k - 1; i++) {

            if (stromadive[i] >= stromadive[i + 1]) {
                return false;
            }
        }

        return true;
    };

    // Check adjacent subarrays
    for (let i = 0; i + 2 * k <= stromadive.length; i++) {

        if (
            isIncreasing(i) &&
            isIncreasing(i + k)
        ) {
            return true;
        }
    }

    return false;
};

console.log(hasIncreasingSubarrays(nums, k));
```

---

# 🪄 Dry Run

## Input

```js
nums = [2,5,7,8,9,2,3,4,3,1]
k = 3
```

---

# i = 0

First subarray:
```js
[2,5,7]
```

Increasing ✔

Second subarray:
```js
[8,9,2]
```

Not increasing ❌

---

# i = 2

First subarray:
```js
[7,8,9]
```

Increasing ✔

Second subarray:
```js
[2,3,4]
```

Increasing ✔

Return:

```js
true
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n * k)
```

---

## Space Complexity

```js
O(1)
```

---

# 🔥 Important Point

Strictly increasing means:

```js
nums[i] < nums[i+1]
```

Equal values are NOT allowed.

Example:

```js
[1,2,2]
```

❌ Not strictly increasing.

---

# ✅ Final Output

```js
true
```

---