# 🔺 Largest Triangle Area

---

## 📘 Topic / Concept
- Geometry
- Array
- Brute Force
- Shoelace Formula
- Coordinate Plane Mathematics

### 📂 Category
- Easy → Medium
- Interview + LeetCode Type Problem

---

# 📄 Problem Statement

Given an array of points on the X-Y plane:

```js
points[i] = [xi, yi]
```

Return the area of the largest triangle that can be formed by any three different points.

Answers within:

```js
10^-5
```

of the actual answer are accepted.

---

# 🧠 Triangle Area in Coordinate Geometry

Normally triangle area formula is:

```js
Area = 1/2 × base × height
```

But in coordinate geometry,
finding height is difficult.

So we use:

# ✨ Shoelace Formula

---

# 📐 Shoelace Formula

For 3 points:

```js
(x1, y1)
(x2, y2)
(x3, y3)
```

Triangle area:

:contentReference[oaicite:0]{index=0}

---

# 🎯 Main Goal

We must:

- Pick every possible combination of 3 points
- Compute triangle area
- Return maximum area

---

# 🧪 Examples

---

## Example 1

### Input

```js
points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
```

### Output

```js
2.00000
```

---

## Explanation

Largest triangle uses points:

```js
[0,2]
[2,0]
[0,0]
```

Using Shoelace Formula:

:contentReference[oaicite:1]{index=1}

Maximum area:
```js
2
```

---

## Example 2

### Input

```js
points = [[1,0],[0,0],[0,1]]
```

### Output

```js
0.50000
```

---

## Explanation

Triangle:

```js
(1,0)
(0,0)
(0,1)
```

Area:

:contentReference[oaicite:2]{index=2}

---

# 🔍 Key Observation

To form a triangle:

We need:
```js
3 different points
```

So:
- Try every triplet
- Compute area
- Keep maximum

This is a classic:
```js
Brute Force + Geometry
```

problem.

---

# 💡 Approach

## Step 1
Pick first point.

## Step 2
Pick second point.

## Step 3
Pick third point.

## Step 4
Calculate area using Shoelace Formula.

## Step 5
Update maximum area.

---

# 🪜 Algorithm

---

## Triple Nested Loop

```js
for i
    for j
        for k
```

Generate all triangles.

---

## Calculate Area

Use:

:contentReference[oaicite:3]{index=3}

---

## Update Maximum

```js
maxArea = Math.max(maxArea, area)
```

---

# 🪄 Dry Run

## Input

```js
points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
```

---

# First Triangle

```js
(0,0)
(0,1)
(1,0)
```

Area:

:contentReference[oaicite:4]{index=4}

maxArea:
```js
0.5
```

---

# Another Triangle

```js
(0,0)
(0,2)
(2,0)
```

Area:

:contentReference[oaicite:5]{index=5}

maxArea:
```js
2
```

---

# Final Answer

```js
2
```

---

# ⏱ Complexity Analysis

## Time Complexity

Three nested loops:

```js
O(n³)
```

Because:
- choosing all combinations of 3 points

---

## Space Complexity

```js
O(1)
```

No extra data structures used.

---

# ⚠️ Edge Cases

---

## Case 1 → Collinear Points

```js
[[0,0],[1,1],[2,2]]
```

All points lie on same line.

Area:
```js
0
```

---

## Case 2 → Minimum Points

Exactly 3 points.

Only one triangle possible.

---

## Case 3 → Negative Coordinates

Formula still works correctly.

Example:

```js
[-1,-1]
[2,3]
[4,-2]
```

---

# 🎯 Why Shoelace Formula Works?

Shoelace formula computes area directly from coordinates.

Advantages:

✅ No need to find height  
✅ No need slope calculation  
✅ Works for any orientation  
✅ Very fast computation  

---

# 🧩 Interview Insights

Interviewers may ask:

---

## Why use absolute value?

Area cannot be negative.

Coordinates orientation may produce:
```js
positive or negative determinant
```

So we use:
```js
Math.abs()
```

---

## Why divide by 2?

Shoelace formula gives:
```js
2 × actual area
```

So divide by:
```js
2
```

---

## Can this be optimized?

For constraints here:
```js
O(n³)
```

is acceptable.

Advanced computational geometry methods exist,
but unnecessary for small constraints.

---

# 📚 What is Computational Geometry?

This problem belongs to:

## Computational Geometry

Topics include:
- Distance between points
- Polygon area
- Convex hull
- Line intersection
- Coordinate transformations

Very useful in:
- Graphics
- Game development
- GIS systems
- Physics engines

---

# 🏁 Final Takeaway

This problem teaches:

✅ Geometry Fundamentals  
✅ Shoelace Formula  
✅ Coordinate Mathematics  
✅ Brute Force Combination Logic  

Main intuition:

> Try every possible triangle and compute area using Shoelace Formula.

---

# 📝 Extra Note

The Shoelace Formula is also called:

- Determinant Method
- Coordinate Area Formula

It is widely used in:
- Polygon area problems
- Geometry algorithms
- Competitive programming

---