# 📈 Maximum Product Subarray

## 📘 Topic
- Array
- Dynamic Programming
- Kadane Variation

### 📂 Category
- Medium
- Interview + LeetCode

---

# 📄 Problem Statement
- Given an integer array nums, find a subarray that has the largest product, and return the product.

- The test cases are generated so that the answer will fit in a 32-bit integer.

Given an integer array `nums`:

Find the contiguous subarray that has the largest product.

Return the product.

---

# 🧪 Example 1

### Input
```js
nums = [2,3,-2,4]
```

### Output
```js
6
```

### Explanation
```js
[2,3]
```

Product:



---

# 🧪 Example 2

### Input
```js
nums = [-2,0,-1]
```

### Output
```js
0
```

---

# 💡 Main Idea

Negative numbers can:

- turn small product into large product
- turn large product into small product

So we track:

- maximum product
- minimum product

at every step.

---

# ✅ JavaScript Solution

```js
let nums = [2, 3, -2, 4];

var maxProduct = function (nums) {

    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {

        const current = nums[i];

        // store old max
        const tempMax = maxProd;

        // update max and min
        maxProd = Math.max(
            current,
            current * maxProd,
            current * minProd
        );

        minProd = Math.min(
            current,
            current * tempMax,
            current * minProd
        );

        result = Math.max(result, maxProd);
    }

    return result;
};

console.log(maxProduct(nums));
```

---

# 🪄 Dry Run

## Input

```js
[2,3,-2,4]
```

---

# Initial

```js
maxProd = 2
minProd = 2
result = 2
```

---

# i = 1 → current = 3

```js
maxProd = max(3, 6, 6) = 6
minProd = min(3, 6, 6) = 3
```

result:
```js
6
```

---

# i = 2 → current = -2

```js
maxProd = max(-2, -12, -6) = -2
minProd = min(-2, -12, -6) = -12
```

---

# i = 3 → current = 4

```js
maxProd = max(4, -8, -48) = 4
minProd = min(4, -8, -48) = -48
```

---

# Final Answer

```js
6
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n)
```

---

## Space Complexity

```js
O(1)
```

---

# 🔥 Important Point

Why keep `minProd`?

Because:

```js
negative × negative = positive
```

A very small negative product can become largest later.

---

# ✅ Final Output

```js
6
```

---