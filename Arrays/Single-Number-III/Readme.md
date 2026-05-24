# 🔢 Single Number III

## 📘 Topic
- Array
- Hash Map
- Bit Manipulation

### 📂 Category
- Medium
- Interview + LeetCode

---

# 📄 Problem Statement

- Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

- You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

Given an integer array `nums`:

- Exactly two elements appear only once
- All other elements appear exactly twice

Return the two single numbers.

You must solve it in:
- Linear time → `O(n)`
- Constant extra space

---

# 🧪 Example 1

### Input
```js
nums = [1,2,1,3,2,5]
```

### Output
```js
[3,5]
```

---

# 🧪 Example 2

### Input
```js
nums = [-1,0]
```

### Output
```js
[-1,0]
```

---

# 💡 Approach (Hash Map)

- Count frequency of every number
- Numbers with frequency `1` are answer

---

# ✅ JavaScript Solution

```js
let nums = [1,2,1,3,2,5];

let obj = {};

// Count frequency
for(let i = 0; i < nums.length; i++) {

    if(obj[nums[i]] == undefined) {
        obj[nums[i]] = 1;
    }
    else {
        obj[nums[i]]++;
    }
}

let temp = [];

// Find elements appearing once
for(let key in obj) {

    if(obj[key] == 1) {
        temp.push(Number(key));
    }
}

console.log(temp);
```

---

# 🪄 Dry Run

## Input

```js
[1,2,1,3,2,5]
```

---

# Frequency Map

```js
{
  1:2,
  2:2,
  3:1,
  5:1
}
```

---

# Single Numbers

```js
3
5
```

Output:

```js
[3,5]
```

---

# ⏱ Complexity

## Time Complexity
```js
O(n)
```

## Space Complexity
```js
O(n)
```

---

# 🚀 Optimal XOR Solution (Interview Preferred)

```js
var singleNumber = function(nums) {

    let xor = 0;

    for(let num of nums) {
        xor ^= num;
    }

    let diffBit = xor & (-xor);

    let a = 0;
    let b = 0;

    for(let num of nums) {

        if(num & diffBit) {
            a ^= num;
        }
        else {
            b ^= num;
        }
    }

    return [a, b];
};
```

---

# ⏱ Optimal Complexity

## Time
```js
O(n)
```

## Space
```js
O(1)
```

---