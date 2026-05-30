# 🤝 Number of Good Pairs

## 📘 Topic
- Array
- Nested Loop
- Hash Map

### 📂 Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement
- Given an array of integers nums, return the number of good pairs.

- A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Given an integer array `nums`:

A pair `(i, j)` is called a good pair if:

```js
nums[i] == nums[j]
```

and

```js
i < j
```

Return the total number of good pairs.

---

# 🧪 Example 1

### Input
```js
nums = [1,2,3,1,1,3]
```

### Output
```js
4
```

### Explanation

Good pairs:

```js
(0,3)
(0,4)
(3,4)
(2,5)
```

---

# 🧪 Example 2

### Input
```js
nums = [1,1,1,1]
```

### Output
```js
6
```

---

# 🧪 Example 3

### Input
```js
nums = [1,2,3]
```

### Output
```js
0
```

---

# 💡 Approach

Use two loops:

- Pick first element
- Compare with remaining elements
- If values are equal, increment count

---

# ✅ JavaScript Solution

```js
let nums = [1,2,3,1,1,3];

var numIdenticalPairs = function(nums) {

    let count = 0;

    for(let i = 0; i < nums.length; i++) {

        for(let j = i + 1; j < nums.length; j++) {

            if(nums[i] === nums[j] && i < j) {
                count++;
            }
        }
    }

    return count;
};

console.log(numIdenticalPairs(nums));
```

---

# 🪄 Dry Run

## Input

```js
[1,2,3,1,1,3]
```

---

# Good Pairs

```js
(0,3) → 1 = 1
(0,4) → 1 = 1
(3,4) → 1 = 1
(2,5) → 3 = 3
```

Count:

```js
4
```

---

# Final Output

```js
4
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n²)
```

---

## Space Complexity

```js
O(1)
```

---

# 🚀 Optimal Hash Map Solution

```js
var numIdenticalPairs = function(nums) {

    let obj = {};
    let count = 0;

    for(let num of nums) {

        if(obj[num]) {
            count += obj[num];
        }

        obj[num] = (obj[num] || 0) + 1;
    }

    return count;
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
O(n)
```

---

# ✅ Final Output

```js
4
```

---