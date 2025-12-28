# Kth Smallest Element in Array

---

## Problem

Given an array `arr[]` and an integer `k` (where `k` is smaller than the size of the array), find the **kth smallest element** in the array.

The array contains unsorted elements.

---

## Examples

### Example 1

Input:

arr = `[7, 10, 4, 3, 20, 15], k = 3`
output : `7`


### Observations

- The phrase kth smallest implies ordered position
- Sorting places elements in increasing order
- After sorting:
  - kth smallest element is at index k - 1
- Array indexing is 0-based

### Core Idea

- Sort the array in ascending order
- Directly access the element at index k - 1

## Visual Reasoning (Notes)
- Handwritten notes and dry runs were used to understand:
- how sorting rearranges elements
- how the kth position maps to index k - 1
- `(Refer to the images inside the notes/ folder.)`


### Implementation

See: `solution.js`


## Algorithm

```text
Sort the array in ascending order
Return the element at index (k - 1)



