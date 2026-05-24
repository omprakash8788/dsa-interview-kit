# 🏢 Maximum Consecutive Floors Without Special Floors

## 📘 Topic
- Array
- Sorting
- Gap Finding

### 📂 Category
- Medium
- Interview + LeetCode

---

# 📄 Problem Statement

- Alice manages a company and has rented some floors of a building as office space. Alice has decided some of these floors should be special floors, used for relaxation only.

- You are given two integers bottom and top, which denote that Alice has rented all the floors from bottom to top (inclusive). You are also given the integer array special, where special[i] denotes a special floor that Alice has designated for relaxation.

- Return the maximum number of consecutive floors without a special floor.

Given:
- `bottom`
- `top`
- array `special`

Find the maximum number of consecutive floors without a special floor.

---

# 🧪 Example 1

### Input
```js
bottom = 2
top = 9
special = [4,6]
```

### Output
```js
3
```

---

# ✅ Explanation

Floors without special floors:

```js
[2,3] → 2 floors
[5]   → 1 floor
[7,8,9] → 3 floors
```

Maximum:

```js
3
```

---

# 🧪 Example 2

### Input
```js
bottom = 6
top = 8
special = [7,6,8]
```

### Output
```js
0
```

---

# 💡 Approach

## Step 1
Sort special floors.

---

## Step 2
Check:
- gap before first special floor
- gaps between special floors
- gap after last special floor

---

# ✅ JavaScript Solution

```js
let bottom = 2,
    top = 9,
    special = [4,6];

var maxConsecutive = function(bottom, top, special) {

    // Sort special floors
    special.sort((a, b) => a - b);

    let maxGap = 0;

    // Gap before first special floor
    maxGap = Math.max(
        maxGap,
        special[0] - bottom
    );

    // Gaps between special floors
    for (let i = 1; i < special.length; i++) {

        let gap =
            special[i] - special[i - 1] - 1;

        maxGap = Math.max(maxGap, gap);
    }

    // Gap after last special floor
    maxGap = Math.max(
        maxGap,
        top - special[special.length - 1]
    );

    return maxGap;
};

console.log(
    maxConsecutive(bottom, top, special)
);
```

---

# 🪄 Dry Run

## Input

```js
bottom = 2
top = 9
special = [4,6]
```

---

# After Sorting

```js
[4,6]
```

---

# Gap Before First Special

```js
4 - 2 = 2
```

Floors:
```js
[2,3]
```

maxGap:
```js
2
```

---

# Gap Between Specials

```js
6 - 4 - 1 = 1
```

Floor:
```js
[5]
```

maxGap:
```js
2
```

---

# Gap After Last Special

```js
9 - 6 = 3
```

Floors:
```js
[7,8,9]
```

maxGap:
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

# 🔥 Important Point

Why subtract `1` here?

```js
special[i] - special[i-1] - 1
```

Because special floors themselves are excluded.

Example:

```js
4 and 6
```

Only:
```js
5
```

is valid.

---

# ✅ Final Output

```js
3
```

---