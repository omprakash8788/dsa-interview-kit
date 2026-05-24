# 🔢 Unique Number of Occurrences

## 📘 Topic
- Array
- Hash Map
- Set

### 📂 Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement

Given an integer array `arr`:

Return:
- `true` if frequency of every value is unique
- otherwise return `false`

---

# 🧪 Example 1

### Input
```js
arr = [1,2,2,1,1,3]
```

### Output
```js
true
```

---

# ✅ Explanation

Frequency count:

```js
1 → 3 times
2 → 2 times
3 → 1 time
```

All occurrence counts are unique.

---

# 🧪 Example 2

### Input
```js
arr = [1,2]
```

### Output
```js
false
```

---

# ✅ Explanation

```js
1 → 1
2 → 1
```

Both have same occurrence count.

---

# 🧪 Example 3

### Input
```js
arr = [-3,0,1,-3,1,1,1,-3,10,0]
```

### Output
```js
true
```

---

# 💡 Approach

## Step 1
Count frequency using object.

---

## Step 2
Store frequencies inside a `Set`.

If frequency already exists:
```js
return false
```

Else:
```js
add frequency into set
```

---

# ✅ JavaScript Solution

```js
let arr = [1,2,2,1,1,3];

var uniqueOccurrences = function(arr) {

    let obj = {};

    // Count frequency
    for(let i = 0; i < arr.length; i++) {

        if(obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
    }

    let set = new Set();

    // Check unique frequencies
    for (let key in obj) {

        if (set.has(obj[key])) {
            return false;
        }

        set.add(obj[key]);
    }

    return true;
};

console.log(uniqueOccurrences(arr));
```

---

# 🪄 Dry Run

## Input

```js
[1,2,2,1,1,3]
```

---

# Frequency Object

```js
{
  1:3,
  2:2,
  3:1
}
```

---

# Set Traversal

Add:
```js
3
```

Set:
```js
{3}
```

---

Add:
```js
2
```

Set:
```js
{3,2}
```

---

Add:
```js
1
```

Set:
```js
{3,2,1}
```

---

No duplicate frequencies found.

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
O(n)
```

---

# 🔥 Important Point

Why use `Set`?

Because:
```js
Set stores only unique values
```

If frequency already exists:
```js
duplicate occurrence found
```

---

# ✅ Final Output

```js
true
```

---