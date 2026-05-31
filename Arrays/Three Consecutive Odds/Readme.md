# 🔢 Three Consecutive Odds

## 📘 Topic
- Array
- Traversal
- Counting

### 📂 Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement
- Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

Given an integer array `arr`:

Return:

```js
true
```

if there are three consecutive odd numbers.

Otherwise return:

```js
false
```

---

# 🧪 Example 1

### Input
```js
arr = [2,6,4,1]
```

### Output
```js
false
```

### Explanation

Only one odd number exists.

No three consecutive odd numbers.

---

# 🧪 Example 2

### Input
```js
arr = [1,2,34,3,4,5,7,23,12]
```

### Output
```js
true
```

### Explanation

```js
[5,7,23]
```

are three consecutive odd numbers.

---

# 💡 Approach

- Keep a counter for consecutive odd numbers.
- If current number is odd:
  ```js
  count++
  ```
- If current number is even:
  ```js
  count = 0
  ```
- When count becomes `3`, return `true`.

---

# ✅ JavaScript Solution

```js
let arr = [2,6,4,1];

var threeConsecutiveOdds = function(arr) {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 1) {

            count++;

            if (count === 3) {
                return true;
            }

        } else {

            count = 0;
        }
    }

    return false;
};

console.log(threeConsecutiveOdds(arr));
```

---

# 🪄 Dry Run

## Input

```js
[1,2,34,3,4,5,7,23,12]
```

---

### i = 0

```js
1 → odd
count = 1
```

---

### i = 1

```js
2 → even
count = 0
```

---

### i = 5

```js
5 → odd
count = 1
```

### i = 6

```js
7 → odd
count = 2
```

### i = 7

```js
23 → odd
count = 3
```

Return:

```js
true
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

# ✅ Final Output

```js
false
```

(for input `[2,6,4,1]`)

---