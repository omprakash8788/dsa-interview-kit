# 🔍 Check If N and Its Double Exist

## 📘 Topic
- Array
- Nested Loop
- Hash Set

###  Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement

- Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Given an integer array `arr`:

Check whether there exist two indices:

```js
i != j
```

such that:

```js
arr[i] == 2 * arr[j]
```

Return:
- `true` if such pair exists
- otherwise `false`

---

# 🧪 Example 1

### Input
```js
arr = [10,2,5,3]
```

### Output
```js
true
```

---

# ✅ Explanation

```js
10 == 2 * 5
```

So answer is:

```js
true
```

---

# 🧪 Example 2

### Input
```js
arr = [3,1,7,11]
```

### Output
```js
false
```

---

# 💡 Approach

Use two loops:
- compare every pair
- check if one number is double of another

---

# ✅ JavaScript Solution

```js
let arr = [10,2,5,3];

var checkIfExist = function(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (
                i !== j &&
                arr[i] === 2 * arr[j]
            ) {
                return true;
            }
        }
    }

    return false;
};

console.log(checkIfExist(arr));
```

---

# 🪄 Dry Run

## Input

```js
[10,2,5,3]
```

---

# Compare Pairs

## i = 0 → 10

Check:

```js
10 == 2 * 5
```

✔ True

Return:

```js
true
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
O(n²)
```

---

## Space Complexity

```js
O(1)
```

---

# 🚀 Optimal Hash Set Solution

```js
var checkIfExist = function(arr) {

    let set = new Set();

    for(let num of arr) {

        if (
            set.has(num * 2) ||
            (num % 2 === 0 && set.has(num / 2))
        ) {
            return true;
        }

        set.add(num);
    }

    return false;
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
true
```

---
