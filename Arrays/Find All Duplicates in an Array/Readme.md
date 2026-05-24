# 🔁 Find All Duplicates in an Array

## 📘 Topic
- Array
- Hash Map
- Index Marking

### 📂 Category
- Medium
- Interview + LeetCode

---

# 📄 Problem Statement

- Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

- You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

 

Given an integer array `nums`:

- Numbers are in range:
```js
[1, n]
```

- Each number appears:
  - once
  - or twice

Return all numbers that appear twice.

---

# 🧪 Example 1

### Input
```js
nums = [4,3,2,7,8,2,3,1]
```

### Output
```js
[2,3]
```

---

# 🧪 Example 2

### Input
```js
nums = [1,1,2]
```

### Output
```js
[1]
```

---

# 🧪 Example 3

### Input
```js
nums = [1]
```

### Output
```js
[]
```

---

# 💡 Approach (Hash Map)

- Count frequency
- Numbers with count greater than `1` are duplicates

---

# ✅ JavaScript Solution

```js
let nums = [4,3,2,7,8,2,3,1];

let obj = {};
let temp = [];

// Count frequency
for(let i = 0; i < nums.length; i++) {

    if(obj[nums[i]] == undefined) {
        obj[nums[i]] = 1;
    }
    else {
        obj[nums[i]]++;
    }
}

// Find duplicates
for(let key in obj) {

    if(obj[key] > 1) {
        temp.push(Number(key));
    }
}

console.log(temp);
```

---

# 🪄 Dry Run

## Input

```js
[4,3,2,7,8,2,3,1]
```

---

# Frequency Object

```js
{
  1:1,
  2:2,
  3:2,
  4:1,
  7:1,
  8:1
}
```

---

# Duplicates

```js
2
3
```

Output:

```js
[2,3]
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
O(n)
```

---

# 🚀 Optimal Constant Space Solution

```js
var findDuplicates = function(nums) {

    let result = [];

    for(let i = 0; i < nums.length; i++) {

        let index = Math.abs(nums[i]) - 1;

        if(nums[index] < 0) {
            result.push(Math.abs(nums[i]));
        }
        else {
            nums[index] = -nums[index];
        }
    }

    return result;
};
```

---

# 💡 Optimal Idea

Use array indices as markers.

If index already negative:
```js
duplicate found
```

---

# ⏱ Optimal Complexity

## Time
```js
O(n)
```

## Extra Space
```js
O(1)
```

(excluding output array)

---