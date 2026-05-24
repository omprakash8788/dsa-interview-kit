# 🔄 Permutations

## 📘 Topic
- Array
- Backtracking
- Recursion

### 📂 Category
- Medium
- Interview + LeetCode

---

# 📄 Problem Statement
- Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Given an array `nums` of distinct integers:

Return all possible permutations.

You may return the answer in any order.

---

# 🧪 Example 1

### Input
```js
nums = [1,2,3]
```

### Output
```js
[
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
]
```

---

# 🧪 Example 2

### Input
```js
nums = [0,1]
```

### Output
```js
[
 [0,1],
 [1,0]
]
```

---

# 🧪 Example 3

### Input
```js
nums = [1]
```

### Output
```js
[
 [1]
]
```

---

# 💡 Approach

Use:

- Backtracking
- Recursion

At every step:
- choose one number
- add to current path
- recurse
- remove last element (backtrack)

---

# ✅ JavaScript Solution

```js
let nums = [1,2,3];

var permute = function(nums) {

    const result = [];

    function backtrack(path) {

        // Base case
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let num of nums) {

            // Avoid duplicates in same permutation
            if (!path.includes(num)) {

                path.push(num);

                backtrack(path);

                path.pop();
            }
        }
    }

    backtrack([]);

    return result;
};

console.log(permute(nums));
```

---

# 🪄 Dry Run

## Input

```js
[1,2,3]
```

---

# Step 1

Choose:
```js
1
```

Path:
```js
[1]
```

---

# Step 2

Choose:
```js
2
```

Path:
```js
[1,2]
```

---

# Step 3

Choose:
```js
3
```

Path:
```js
[1,2,3]
```

Length becomes equal to nums length.

Store:
```js
[1,2,3]
```

---

# Backtrack

Remove:
```js
3
```

Try another number.

---

# Final Result

```js
[
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
]
```

---

# ⏱ Complexity

## Time Complexity

Permutations count:



---

## Space Complexity

```js
O(n)
```

(recursion stack)

---

# 🔥 Important Point

Why use:

```js
path.pop()
```

Because after recursion:
- we remove last choice
- try another possibility

This is called:

# 🔁 Backtracking

---

# ✅ Final Output

```js
[
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
]
```

---