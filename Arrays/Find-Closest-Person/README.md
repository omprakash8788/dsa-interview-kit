# Find Closest Person

##  Topic / Concept

- Math
- Absolute Difference
- Conditional Logic

###  Category

- Easy
- Logic Building

---

##  Problem Statement

You are given three integers:

- `x` → position of Person 1
- `y` → position of Person 2
- `z` → position of Person 3 (stationary)

👉 Both Person 1 and Person 2 move toward Person 3 at the same speed.

---

##  Objective

Determine who reaches Person 3 first:

- Return **1** → Person 1 arrives first
- Return **2** → Person 2 arrives first
- Return **0** → Both arrive at the same time

- You are given three integers x, y, and z, representing the positions of three people on a number line:

- x is the position of Person 1.
- y is the position of Person 2.
- z is the position of Person 3, who does not move.
- Both Person 1 and Person 2 move toward Person 3 at the same speed.
- Determine which person reaches Person 3 first:
  - Return 1 if Person 1 arrives first.
  - Return 2 if Person 2 arrives first.
  - Return 0 if both arrive at the same time.
  - Return the result accordingly.

---

##  Examples

### Example 1

Input:  
x = 2, y = 7, z = 4

Output:  
1

Explanation:  
Distance of Person 1 → |2 - 4| = 2  
Distance of Person 2 → |7 - 4| = 3  
👉 Person 1 is closer

---

### Example 2

Input:  
x = 2, y = 5, z = 6

Output:  
2

---

### Example 3

Input:  
x = 1, y = 5, z = 3

Output:  
0

---

##  Core Idea

👉 Distance = Absolute difference, distance = |position - target|

👉 Compare:

- d1 = |x - z|
- d2 = |y - z|

---

##  Algorithm

Calculate d1 = |x - z|  
Calculate d2 = |y - z|

If d1 < d2:
return 1

Else if d2 < d1:
return 2

Else:
return 0

---

