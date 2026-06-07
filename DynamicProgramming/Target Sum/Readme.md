# 🎯 Target Sum

## 📘 Topic
- Dynamic Programming (DP)
- Recursion
- DFS
- Memoization

### 📂 Category
- Medium
- Interview + LeetCode

---

# 📄 Problem Statement

- You are given an integer array nums and an integer target.

- You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

- For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
- Return the number of different expressions that you can build, which evaluates to target.

Given:
- integer array `nums`
- integer `target`

Add either:

```js
+
```

or

```js
-
```

before every number.

Return the number of different expressions whose result equals `target`.

---

# 🧪 Example 1

### Input

```js
nums = [1,1,1,1,1]
target = 3
```

### Output

```js
5
```

---

# ✅ Explanation

Valid expressions:

```js
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
```

Total:

```js
5
```

---

# 🧪 Example 2

### Input

```js
nums = [1]
target = 1
```

### Output

```js
1
```

---

# 💡 Approach

For every number:

- Choose `+`
- Choose `-`

Use DFS to explore all possibilities.

Use Memoization to avoid recalculating the same state.

---

# ✅ JavaScript Solution

```js
let nums = [1,1,1,1,1],
    target = 3;

var findTargetSumWays = function(nums, target) {

    const memo = new Map();

    function dfs(index, currentSum) {

        if (index === nums.length) {
            return currentSum === target ? 1 : 0;
        }

        const key = `${index},${currentSum}`;

        if (memo.has(key)) {
            return memo.get(key);
        }

        const add =
            dfs(index + 1,
                currentSum + nums[index]);

        const subtract =
            dfs(index + 1,
                currentSum - nums[index]);

        memo.set(key, add + subtract);

        return memo.get(key);
    }

    return dfs(0, 0);
};

console.log(
    findTargetSumWays(nums, target)
);
```

---

# 🪄 Dry Run

## Input

```js
nums = [1,1,1,1,1]
target = 3
```

---

# Start

```js
dfs(0,0)
```

For every element:

```js
+1
or
-1
```

---

# One Valid Path

```js
+1 +1 +1 +1 -1
```

Sum:

```js
3
```

✔

---

# Total Valid Ways

```js
5
```

---

# Final Output

```js
5
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n × totalStates)
```

with memoization.

---

## Space Complexity

```js
O(n × totalStates)
```

for memo + recursion stack.

---

# 🔥 Important Point

Without memoization:

```js
O(2^n)
```

because every element has:

```js
+
or
-
```

choice.

Memoization avoids repeated calculations.

---

# ✅ Final Output

```js
5
```

---