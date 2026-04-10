# Common Elements in 3 Sorted Arrays

## Problem Statement

Given three integer arrays `arr1`, `arr2`, and `arr3` sorted in **non-decreasing order**, find all the **common elements** present in all three arrays.

- Return the result in **non-decreasing order**
- If no common elements exist, return `[-1]`
- **Duplicates should not be included**

---

## Examples

### Example 1

Input:
arr1 = [1, 5, 10, 20, 40, 80]  
arr2 = [6, 7, 20, 80, 100]  
arr3 = [3, 4, 15, 20, 30, 70, 80, 120]

Output:
[20, 80]

Explanation:
20 and 80 are the only elements present in all three arrays.

---

### Example 2

Input:
arr1 = [1, 2, 3, 4, 5]  
arr2 = [6, 7]  
arr3 = [8, 9, 10]

Output:
[-1]

Explanation:
No common elements exist.

---

### Example 3

Input:
arr1 = [1, 1, 1, 2, 2, 2]  
arr2 = [1, 1, 2, 2, 2]  
arr3 = [1, 1, 1, 1, 2, 2, 2, 2]

Output:
[1, 2]

Explanation:
Duplicates are ignored.

---

## Initial Observations

- Arrays are sorted
- Duplicate values may exist
- Need intersection of 3 arrays
- Sorted nature allows pointer optimization

---

## Approach 1: Set Method

### Idea

- Convert arrays into Sets (removes duplicates)
- Check common elements using `.has()`

### Implementation

See: solution.js

## Algo

```Convert all arrays into sets

Initialize empty result array

For each element in set1:
    If element exists in set2 AND set3:
        Add to result

If result is empty:
    return [-1]
Else:
    return result
```
