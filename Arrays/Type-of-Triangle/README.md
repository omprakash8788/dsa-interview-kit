# Type of Triangle

## File Name

type-of-triangle.js

## Topic / Concept

- Array
- Math (Triangle Inequality)
- Conditional Logic

### Category

- Easy
- Logic Building

---

## Problem Statement

You are given an array `nums` of size 3 representing sides of a triangle.

👉 Determine the type of triangle:

- **Equilateral** → All sides equal
- **Isosceles** → Exactly two sides equal
- **Scalene** → All sides different
- **None** → Cannot form a triangle

---

##  Triangle Condition

A triangle is valid only if:

a + b > c  
a + c > b  
b + c > a

If any condition fails → return `"none"`

## Deeper Explain

- You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

- A triangle is called equilateral if it has all sides of equal length.
- A triangle is called isosceles if it has exactly two sides of equal length.
- A triangle is called scalene if all its sides are of different lengths.
- Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.

---

##  Examples

### Example 1

Input:  
[3,3,3]

Output:  
"equilateral"

---

### Example 2

Input:  
[3,4,5]

Output:  
"scalene"

---

### Example 3

Input:  
[1,2,3]

Output:  
"none"

---

##  Core Idea

1. First check → **Can triangle exist?**
2. Then classify based on equality of sides

---

##  Algorithm

Take a, b, c from array

If (a + b <= c OR a + c <= b OR b + c <= a):
return "none"

If (a == b AND b == c):
return "equilateral"

Else if (a == b OR b == c OR a == c):
return "isosceles"

Else:
return "scalene"

---
