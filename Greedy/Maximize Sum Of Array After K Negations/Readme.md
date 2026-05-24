# ➖ Maximize Sum Of Array After K Negations

## 📘 Topic
- Array
- Greedy
- Sorting

### 📂 Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement

- Given an integer array nums and an integer k, modify the array in the following way:

- choose an index i and replace nums[i] with -nums[i].
- You should apply this process exactly k times. You may choose the same index i multiple times.

- Return the largest possible sum of the array after modifying it in this way.

Given:
- integer array `nums`
- integer `k`

In one operation:
```js
nums[i] = -nums[i]
```

You must perform exactly:
```js
k
```

negations.

Return the maximum possible array sum.

---

# 🧪 Example 1

### Input
```js
nums = [4,2,3]
k = 1
```

### Output
```js
5
```

---

# ✅ Explanation

Flip:
```js
2 → -2
```

Array:
```js
[4,-2,3]
```

Sum:
```js
5
```

---

# 🧪 Example 2

### Input
```js
nums = [3,-1,0,2]
k = 3
```

### Output
```js
6
```

---

# 🧪 Example 3

### Input
```js
nums = [2,-3,-1,5,-4]
k = 2
```

### Output
```js
13
```

---

# 💡 Approach

## Step 1
Sort array.

---

## Step 2
Flip negative numbers first.

Because:
```js
negative → positive
```

increases sum.

---

## Step 3
If `k` still odd:
- flip smallest number

---

## Step 4
Return total sum.

---

# ✅ JavaScript Solution

```js
let nums = [4,2,3],
    k = 1;

var largestSumAfterKNegations = function(nums, k) {

    // Sort array
    nums.sort((a, b) => a - b);

    // Flip negatives
    for (let i = 0; i < nums.length && k > 0; i++) {

        if (nums[i] < 0) {

            nums[i] = -nums[i];

            k--;
        }
    }

    // If k is odd
    let minNum = Math.min(...nums);

    if (k % 2 === 1) {

        nums[nums.indexOf(minNum)] = -minNum;
    }

    // Sum array
    return nums.reduce(
        (sum, val) => sum + val,
        0
    );
};

console.log(
    largestSumAfterKNegations(nums, k)
);
```

---

# 🪄 Dry Run

## Input

```js
nums = [4,2,3]
k = 1
```

---

# After Sorting

```js
[2,3,4]
```

---

# No Negative Numbers

No flip happens inside loop.

---

# k is Odd

```js
k = 1
```

Smallest number:

```js
2
```

Flip:

```js
-2
```

Array:

```js
[-2,3,4]
```

---

# Sum

```js
-2 + 3 + 4 = 5
```

---

# Final Output

```js
5
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
O(1)
```

---

# 🔥 Important Point

Why flip smallest number when `k` is odd?

Because:
```js
one extra negation is mandatory
```

To minimize loss:
```js
flip smallest value
```

---

# ✅ Final Output

```js
5
```

---