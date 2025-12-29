# Sort 0s, 1s and 2s

---

## Problem

Given an array `arr[]` containing only the values:

- `0`
- `1`
- `2`

Rearrange the array so that all `0`s come first, followed by all `1`s, and then all `2`s.

**Constraint:**  
The solution must be implemented **without using any built-in sorting function**.

---

## Examples

### Example 1

Input: `[0, 1, 2, 0, 1, 2] `
Output : `[0, 0, 1, 1, 2, 2]`


## Observations

- The array contains only three distinct values
- Relative ordering within the same value does not matter
- A single traversal is sufficient
- The problem is about segregation, not general sorting

## Core Idea

- Use three pointers to divide the array into regions:
- low → boundary for `0s`
- mid → current element `under examination`
- high → boundary for `2s`
`This technique is commonly known as the Dutch National Flag approach.`


## Visual Reasoning (Notes)

- Handwritten diagrams were used to track:
- pointer movement
- swap operations
- how the array gradually becomes partitioned
- (Refer to images inside the notes/ folder.)

### Implementation

See: `solution.js`


### Algorithm
```text
Initialize low = 0, mid = 0, high = n - 1

While mid <= high:
    If arr[mid] == 0:
        swap arr[low] and arr[mid]
        low++
        mid++

    Else if arr[mid] == 1:
        mid++

    Else (arr[mid] == 2):
        swap arr[mid] and arr[high]
        high--

