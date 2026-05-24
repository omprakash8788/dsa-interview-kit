# 📏 Maximum Gap

## 📘 Topic
- Array
- Sorting
- Math

### 📂 Category
- Medium
- Interview + LeetCode

---

# 📄 Problem Statement

- Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

- You must write an algorithm that runs in linear time and uses linear extra space.

Given an integer array `nums`:

Return the maximum difference between two successive elements in its sorted form.

If array contains less than 2 elements:

```js
return 0
```

---

# 🧪 Example 1

### Input
```js
nums = [3,6,9,1]
```

### Output
```js
3
```

---

# ✅ Explanation

After sorting:

```js
[1,3,6,9]
```

Differences:

```js
3 - 1 = 2
6 - 3 = 3
9 - 6 = 3
```

Maximum gap:

```js
3
```

---

# 🧪 Example 2

### Input
```js
nums = [10]
```

### Output
```js
0
```

---

# 💡 Approach

## Step 1
Sort the array.

## Step 2
Find difference between adjacent elements.

## Step 3
Track maximum difference.

---

# ✅ JavaScript Solution

```js
let nums = [3,6,9,1];

var maximumGap = function(nums) {

    nums.sort((a,b)=>(a-b));

    if(nums.length < 2){
        return 0;
    }

    let diff = 0;

    for (let i = 0; i < nums.length - 1; i++) {

        diff = Math.max(
            diff,
            nums[i + 1] - nums[i]
        );
    }

    return diff;
};

console.log(maximumGap(nums));
```

---

# 🪄 Dry Run

## Input

```js
[3,6,9,1]
```

---

# After Sorting

```js
[1,3,6,9]
```

---

# Compare Adjacent Differences

## i = 0

```js
3 - 1 = 2
```

diff:
```js
2
```

---

## i = 1

```js
6 - 3 = 3
```

diff:
```js
3
```

---

## i = 2

```js
9 - 6 = 3
```

diff remains:
```js
3
```

---

# Final Output

```js
3
```

---

# ⏱ Complexity

## Time Complexity

### Sorting
```js
O(n log n)
```

### Traversal
```js
O(n)
```

Final:
```js
O(n log n)
```

---

## Space Complexity

```js
O(1)
```

---

# 🚀 Interview Note

Problem asks for:
```js
O(n)
```

Optimal solution uses:
- Bucket Sort
- Pigeonhole Principle

But your sorting solution is correct and accepted in many cases.

---

# ✅ Final Output

```js
3
```

---