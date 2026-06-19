# 🎯 Find Closest Number to Zero

## 📘 Topic

* Array
* Math
* Simulation

### 📂 Category

* Easy
* Interview + LeetCode

---

# 📄 Problem Statement

Given an integer array `nums` of size `n`, return the number whose value is closest to `0`.

If multiple numbers are equally close to `0`, return the larger number.

In other words:

* Find the number with the smallest absolute value.
* If two numbers have the same absolute value, choose the positive one.

---

# 🧪 Example 1

### Input

```js
nums = [-4,-2,1,4,8]
```

### Output

```js
1
```

### Explanation

Distances from `0`:

```js
|-4| = 4

|-2| = 2

|1| = 1

|4| = 4

|8| = 8
```

The smallest distance is:

```js
|1| = 1
```

So the answer is:

```js
1
```

---

# 🧪 Example 2

### Input

```js
nums = [2,-1,1]
```

### Output

```js
1
```

### Explanation

Distances from `0`:

```js
|2| = 2

|-1| = 1

|1| = 1
```

Both `-1` and `1` are equally close to `0`.

Since we must return the larger value:

```js
1
```

---

# 💡 Approach

Keep track of the current closest number.

### Steps

1. Initialize `closest` as the first element.
2. Traverse the array.
3. Compare absolute values:

   * If current number is closer to `0`, update `closest`.
4. If both numbers are equally close:

   * Choose the larger number.
5. Return `closest`.

---

# ✅ JavaScript Solution

```js
let nums = [-4,-2,1,4,8];

var findClosestNumber = function(nums) {

    let closest = nums[0];

    for(let i = 0; i < nums.length; i++) {

        let num = nums[i];

        if(Math.abs(num) < Math.abs(closest)) {

            closest = num;

        } else if(
            Math.abs(num) === Math.abs(closest) &&
            num > closest
        ) {

            closest = num;
        }
    }

    return closest;
};

console.log(findClosestNumber(nums));
```

---

# 🪄 Dry Run

## Input

```js
nums = [-4,-2,1,4,8]
```

Initial:

```js
closest = -4
```

---

### i = 0

```js
num = -4

|-4| = 4
```

No change.

```js
closest = -4
```

---

### i = 1

```js
num = -2

|-2| = 2
```

Since:

```js
2 < 4
```

Update:

```js
closest = -2
```

---

### i = 2

```js
num = 1

|1| = 1
```

Since:

```js
1 < 2
```

Update:

```js
closest = 1
```

---

### i = 3

```js
num = 4

|4| = 4
```

No change.

```js
closest = 1
```

---

### i = 4

```js
num = 8

|8| = 8
```

No change.

```js
closest = 1
```

---

# Distance Comparison

```js
-4 → 4

-2 → 2

 1 → 1

 4 → 4

 8 → 8
```

Closest distance:

```js
1
```

---

# Final Output

```js
1
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n)
```

We traverse the array only once.

---

## Space Complexity

```js
O(1)
```

Only one extra variable is used.

---

# 🚀 Optimal Solution

The given solution is already optimal.

```js
var findClosestNumber = function(nums) {

    let closest = nums[0];

    for(let num of nums) {

        if(Math.abs(num) < Math.abs(closest)) {

            closest = num;

        } else if(
            Math.abs(num) === Math.abs(closest) &&
            num > closest
        ) {

            closest = num;
        }
    }

    return closest;
};
```

---

# 🪄 Dry Run (Tie Case)

## Input

```js
nums = [2,-1,1]
```

Start:

```js
closest = 2
```

Check:

```js
-1 → |−1| = 1

closest = -1
```

Next:

```js
1 → |1| = 1
```

Equal distance:

```js
|1| === |-1|
```

Since:

```js
1 > -1
```

Update:

```js
closest = 1
```

Return:

```js
1
```

---

# ⏱ Optimal Complexity

## Time Complexity

```js
O(n)
```

## Space Complexity

```js
O(1)
```

---

# ✅ Final Output

```js
1
```

---
