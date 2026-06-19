# 🏔️ Find the Highest Altitude

## 📘 Topic

* Array
* Prefix Sum
* Simulation

### 📂 Category

* Easy
* Interview + LeetCode

---

# 📄 Problem Statement

- There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

- You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

There is a biker going on a road trip.

The biker starts at altitude:

```js
0
```

You are given an integer array `gain` where:

```js
gain[i]
```

represents the net altitude change between point `i` and `i + 1`.

Return the highest altitude reached during the trip.

---

# 🧪 Example 1

### Input

```js
gain = [-5,1,5,0,-7]
```

### Output

```js
1
```

### Explanation

Altitudes at each point:

```js
[0,-5,-4,1,1,-6]
```

Highest altitude:

```js
1
```

---

# 🧪 Example 2

### Input

```js
gain = [-4,-3,-2,-1,4,3,2]
```

### Output

```js
0
```

### Explanation

Altitudes at each point:

```js
[0,-4,-7,-9,-10,-6,-3,-1]
```

Highest altitude:

```js
0
```

Because the biker starts at altitude `0`, and all other altitudes are below `0`.

---

# 💡 Approach

We need to keep track of:

* Current altitude
* Maximum altitude reached so far

Steps:

1. Start altitude at `0`
2. Add each gain value to current altitude
3. Update maximum altitude using `Math.max()`
4. Return the maximum altitude

---

# ✅ JavaScript Solution

```js
let gain = [-5,1,5,0,-7];

let altitude = 0;
let maxAltitude = 0;

for(let i = 0; i < gain.length; i++) {

    altitude = altitude + gain[i];

    maxAltitude = Math.max(maxAltitude, altitude);
}

console.log(maxAltitude);
```

---

# 🪄 Dry Run

## Input

```js
gain = [-5,1,5,0,-7]
```

Initial values:

```js
altitude = 0
maxAltitude = 0
```

---

### Iteration 1

```js
altitude = 0 + (-5) = -5
maxAltitude = max(0, -5) = 0
```

---

### Iteration 2

```js
altitude = -5 + 1 = -4
maxAltitude = max(0, -4) = 0
```

---

### Iteration 3

```js
altitude = -4 + 5 = 1
maxAltitude = max(0, 1) = 1
```

---

### Iteration 4

```js
altitude = 1 + 0 = 1
maxAltitude = max(1, 1) = 1
```

---

### Iteration 5

```js
altitude = 1 + (-7) = -6
maxAltitude = max(1, -6) = 1
```

---

# Final Altitudes

```js
[0,-5,-4,1,1,-6]
```

Highest altitude:

```js
1
```

---

# ✅ Final Output

```js
1
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n)
```

Because we traverse the array only once.

---

## Space Complexity

```js
O(1)
```

Only two variables are used.

---

# 🚀 Optimized Solution

The above solution is already optimal because:

* Single traversal
* Constant extra space

```js
var largestAltitude = function(gain) {

    let altitude = 0;
    let maxAltitude = 0;

    for(let num of gain) {

        altitude += num;
        maxAltitude = Math.max(maxAltitude, altitude);
    }

    return maxAltitude;
};
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
