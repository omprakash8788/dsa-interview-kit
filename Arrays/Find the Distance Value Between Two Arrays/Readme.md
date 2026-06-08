# 📏 Find the Distance Value Between Two Arrays

## 📘 Topic
- Array
- Nested Loop
- Math (Absolute Difference)

### 📂 Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement

- Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

- The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

Given:
- `arr1`
- `arr2`
- integer `d`

The distance value is the number of elements `arr1[i]` such that:

```js
|arr1[i] - arr2[j]| > d
```

for every element in `arr2`.

Return the distance value.

---

# 🧪 Example 1

### Input

```js
arr1 = [4,5,8]
arr2 = [10,9,1,8]
d = 2
```

### Output

```js
2
```

---

# ✅ Explanation

For:

```js
4
```

```js
|4-10| = 6
|4-9|  = 5
|4-1|  = 3
|4-8|  = 4
```

All values are greater than `2`.

✔ Valid

---

For:

```js
5
```

```js
|5-10| = 5
|5-9|  = 4
|5-1|  = 4
|5-8|  = 3
```

All values are greater than `2`.

✔ Valid

---

For:

```js
8
```

```js
|8-10| = 2
```

Not greater than `2`.

❌ Invalid

---

Distance Value:

```js
2
```

---

# 💡 Approach

For every element in `arr1`:

- Compare with all elements of `arr2`
- If any difference is:

```js
<= d
```

mark it invalid.

Otherwise count it.

---

# ✅ JavaScript Solution

```js
let arr1 = [4,5,8],
    arr2 = [10,9,1,8],
    d = 2;

var findTheDistanceValue = function(arr1, arr2, d) {

    let count = 0;

    for (let i = 0; i < arr1.length; i++) {

        let isValid = true;

        for (let j = 0; j < arr2.length; j++) {

            if (
                Math.abs(arr1[i] - arr2[j]) <= d
            ) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            count++;
        }
    }

    return count;
};

console.log(
    findTheDistanceValue(arr1, arr2, d)
);
```

---

# 🪄 Dry Run

## Input

```js
arr1 = [4,5,8]
arr2 = [10,9,1,8]
d = 2
```

---

### Check 4

```js
6 > 2
5 > 2
3 > 2
4 > 2
```

✔ Count = 1

---

### Check 5

```js
5 > 2
4 > 2
4 > 2
3 > 2
```

✔ Count = 2

---

### Check 8

```js
|8-10| = 2
```

❌ Invalid

---

# Final Output

```js
2
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n × m)
```

where:

```js
n = arr1.length
m = arr2.length
```

---

## Space Complexity

```js
O(1)
```

---

# ✅ Final Output

```js
2
```

---