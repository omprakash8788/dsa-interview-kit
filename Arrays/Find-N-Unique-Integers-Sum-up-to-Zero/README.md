# Find N Unique Integers Sum up to Zero



##  Topic / Concept
- Array
- Math
- Greedy Construction

###  Category
- Easy
- Pattern-Based Problem

---

##  Problem Statement

Given an integer `n`:

👉 Return an array of **n unique integers** such that:
- All elements are **distinct**
- Their **sum = 0**


- Given an integer n, return any array containing n unique integers such that they add up to 0.

- We need to create an array of n unique integers such that the sum = 0.

- Unique → No repeated integers.

- Sum = 0 → The positive and negative numbers should balance each other.

- Numbers naturally cancel each other:
- If you take k and -k, their sum is 0.
- Example: 2 + (-2) = 0.

---

##  Key Observations

- If you take a number `k`, you can balance it with `-k`
- Example:
  2 + (-2) = 0  

👉 So we can always create pairs: (-1, 1), (-2, 2), (-3, 3)


- If `n` is **odd**, include `0`

---

## 🧾 Examples

### Example 1
Input:  
n = 5  

Output:  
[-2, -1, 1, 2, 0]  

---

### Example 2
Input:  
n = 3  

Output:  
[-1, 0, 1]  

---

### Example 3
Input:  
n = 1  

Output:  
[0]  

---

## 🧠 Algorithm

Initialize empty array

Loop from 1 to floor(n/2):
    Add -i
    Add +i

If n is odd:
    Add 0

Return array

---

