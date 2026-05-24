# 🔢 Count Negative Numbers in a Sorted Matrix

## 📘 Topic
- Matrix
- Array
- Traversal

### 📂 Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement

Given a matrix `grid` sorted in non-increasing order:

- row-wise
- column-wise

Return the total number of negative numbers.

---

# 🧪 Example 1

### Input
```js
grid = [
 [4,3,2,-1],
 [3,2,1,-1],
 [1,1,-1,-2],
 [-1,-1,-2,-3]
]
```

### Output
```js
8
```

---

# 🧪 Example 2

### Input
```js
grid = [
 [3,2],
 [1,0]
]
```

### Output
```js
0
```

---

# 💡 Approach

Traverse every element in matrix.

If element is negative:
```js
count++
```

---

# ✅ JavaScript Solution

```js
let grid = [
    [4,3,2,-1],
    [3,2,1,-1],
    [1,1,-1,-2],
    [-1,-1,-2,-3]
];

var countNegatives = function(grid) {

    let count = 0;

    for(let i = 0; i < grid.length; i++) {

        for(let j = 0; j < grid[i].length; j++) {

            if(grid[i][j] < 0) {
                count++;
            }
        }
    }

    return count;
};

console.log(countNegatives(grid));
```

---

# 🪄 Dry Run

## Input

```js
[
 [4,3,2,-1],
 [3,2,1,-1],
 [1,1,-1,-2],
 [-1,-1,-2,-3]
]
```

---

# Negative Numbers

```js
-1
-1
-1
-2
-1
-1
-2
-3
```

Count:

```js
8
```

---

# Final Output

```js
8
```

---

# ⏱ Complexity

## Time Complexity

```js
O(m × n)
```

---

## Space Complexity

```js
O(1)
```

---

# 🚀 Optimized Approach

Since matrix is sorted:
- start from top-right corner
- move left/down

Can solve in:

```js
O(m + n)
```

---

# ✅ Optimized Solution

```js
var countNegatives = function(grid) {

    let rows = grid.length;
    let cols = grid[0].length;

    let row = 0;
    let col = cols - 1;

    let count = 0;

    while(row < rows && col >= 0) {

        if(grid[row][col] < 0) {

            count += rows - row;

            col--;
        }
        else {
            row++;
        }
    }

    return count;
};
```

---

# ✅ Final Output

```js
8
```

---