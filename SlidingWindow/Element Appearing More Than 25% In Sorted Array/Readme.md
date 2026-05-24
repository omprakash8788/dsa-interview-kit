# 🔍 Element Appearing More Than 25% In Sorted Array

## 📘 Topic
- Array
- Sliding Window
- Frequency Logic

### 📂 Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement
- Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

Given a sorted array `arr`:

Exactly one integer appears more than:



of the time.

Return that integer.

---

# 🧪 Example 1

### Input
```js
arr = [1,2,2,6,6,6,6,7,10]
```

### Output
```js
6
```

---

# 🧪 Example 2

### Input
```js
arr = [1,1]
```

### Output
```js
1
```

---

# 💡 Main Idea

Since array is sorted:

If an element appears more than:



times,

then:

```js
arr[i] === arr[i + threshold]
```

will become true.

---

# ✅ JavaScript Solution

```js
let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];

var findSpecialInteger = function (arr) {

    const n = arr.length;

    const threshold = Math.floor(n / 4);

    for (let i = 0; i < n - threshold; i++) {

        if (arr[i] === arr[i + threshold]) {

            return arr[i];
        }
    }
};

console.log(findSpecialInteger(arr));
```

---

# 🪄 Dry Run

## Input

```js
[1,2,2,6,6,6,6,7,10]
```

---

# Length

```js
n = 9
```

Threshold:

```js
Math.floor(9 / 4) = 2
```

---

# Check Elements

## i = 0

```js
arr[0] = 1
arr[2] = 2
```

Not equal ❌

---

## i = 1

```js
arr[1] = 2
arr[3] = 6
```

Not equal ❌

---

## i = 3

```js
arr[3] = 6
arr[5] = 6
```

Equal ✔

Return:

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

Why does this work?

Because array is already sorted.

So repeated elements stay together.

If count exceeds:



then same element must appear after `threshold` distance.

---

# ✅ Final Output

```js
6
```

---