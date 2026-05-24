# 🏛️ Integer to Roman

## 📘 Topic
- Math
- String
- Greedy Algorithm

### 📂 Category
- Medium
- Interview + LeetCode

---

# 📄 Problem Statement

Given an integer `num`:

Convert it into a Roman numeral.

---

# 🏛 Roman Symbols

| Symbol | Value |
|---|---|
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

---

# ⚠️ Special Cases

Roman numerals use subtractive notation:

| Number | Roman |
|---|---|
| 4 | IV |
| 9 | IX |
| 40 | XL |
| 90 | XC |
| 400 | CD |
| 900 | CM |

---

# 🧪 Example 1

### Input
```js
num = 3749
```

### Output
```js
"MMMDCCXLIX"
```

---

# 🧪 Example 2

### Input
```js
num = 58
```

### Output
```js
"LVIII"
```

---

# 🧪 Example 3

### Input
```js
num = 1994
```

### Output
```js
"MCMXCIV"
```

---

# 💡 Approach

Use:
- values array
- symbols array

Start from largest Roman value.

If number is greater:
- subtract value
- add symbol

Repeat until number becomes `0`.

---

# ✅ JavaScript Solution

```js
let num = 3749;

var intToRoman = function(num) {

    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < values.length && num > 0; i++) {

        while (num >= values[i]) {

            num -= values[i];

            result += symbols[i];
        }
    }

    return result;
};

console.log(intToRoman(num));
```

---

# 🪄 Dry Run

## Input

```js
3749
```

---

# Step 1

Take:
```js
1000 → M
```

3 times:

```js
MMM
```

Remaining:

```js
749
```

---

# Step 2

Take:
```js
500 → D
```

Result:

```js
MMMD
```

Remaining:

```js
249
```

---

# Step 3

Take:
```js
100 → C
```

2 times:

```js
MMMDCC
```

Remaining:

```js
49
```

---

# Step 4

Take:
```js
40 → XL
```

Result:

```js
MMMDCCXL
```

Remaining:

```js
9
```

---

# Step 5

Take:
```js
9 → IX
```

Final:

```js
MMMDCCXLIX
```

---

# ⏱ Complexity

## Time Complexity

```js
O(1)
```

Roman values list is fixed.

---

## Space Complexity

```js
O(1)
```

---

# 🔥 Important Point

Why arrays are ordered descending?

Because Roman numerals are built:
```js
largest → smallest
```

Greedy approach always works here.

---

# ✅ Final Output

```js
"MMMDCCXLIX"
```

---