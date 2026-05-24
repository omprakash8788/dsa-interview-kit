# 📚 Summary Ranges

## 📘 Topic
- Array
- Two Pointers
- Range Traversal

### 📂 Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement

- You are given a sorted unique integer array nums.

- A range [a,b] is the set of all integers from a to b (inclusive).

- Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

- Each range [a,b] in the list should be output as:

*** "a->b" if a != b***
*** "a" if a == b ***

Given a sorted unique integer array `nums`:

Return the smallest sorted list of ranges that cover all numbers exactly once.

---

# 📌 Range Format

If:
```js
a == b
```

Store:
```js
"a"
```

Otherwise:
```js
"a->b"
```

---

# 🧪 Example 1

### Input
```js
nums = [0,1,2,4,5,7]
```

### Output
```js
["0->2","4->5","7"]
```

---

# 🧪 Example 2

### Input
```js
nums = [0,2,3,4,6,8,9]
```

### Output
```js
["0","2->4","6","8->9"]
```

---

# 💡 Approach

- Track starting number of range
- Continue while numbers are consecutive
- When sequence breaks:
  - store range
  - start new range

---

# ✅ JavaScript Solution

```js
let nums = [0,1,2,4,5,7];

var summaryRanges = function(nums) {

    let result = [];

    if (nums.length === 0) {
        return result;
    }

    let start = nums[0];

    for (let i = 0; i < nums.length; i++) {

        // End of range
        if (
            i === nums.length - 1 ||
            nums[i] + 1 !== nums[i + 1]
        ) {

            // Single number
            if (start === nums[i]) {
                result.push(`${start}`);
            }

            // Range
            else {
                result.push(`${start}->${nums[i]}`);
            }

            // Start next range
            start = nums[i + 1];
        }
    }

    return result;
};

console.log(summaryRanges(nums));
```

---

# 🪄 Dry Run

## Input

```js
[0,1,2,4,5,7]
```

---

# Start

```js
start = 0
```

---

# Consecutive Numbers

```js
0 → 1 → 2
```

Range breaks before `4`.

Store:

```js
"0->2"
```

---

# Next Range

```js
4 → 5
```

Store:

```js
"4->5"
```

---

# Last Number

```js
7
```

Single number:

```js
"7"
```

---

# Final Output

```js
["0->2","4->5","7"]
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

(excluding output array)

---

# 🔥 Important Point

Why check:

```js
nums[i] + 1 !== nums[i + 1]
```

Because:
- consecutive numbers differ by `1`
- sequence breaks otherwise

---

# ✅ Final Output

```js
["0->2","4->5","7"]
```

---