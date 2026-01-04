# Merge Two Sorted Arrays Without Extra Space

## Problem Statement

Given two sorted arrays `a[]` and `b[]` of size `n` and `m` respectively, merge them in sorted order **without using any extra space**.

After merging:

- Array `a[]` should contain the first `n` smallest elements.
- Array `b[]` should contain the last `m` largest elements.

---

## Example

---

**Input:**  
`a = [2, 4, 7, 10], b = [2, 3] `

**Output:**  
`[2, 2, 3, 4, 7, 10]`

## Brainstorming & Idea

- Both arrays are already sorted.
- Largest elements of a[] are at the end.
- Smallest elements of b[] are at the start.
- If a large element in a[] is greater than a small element in b[], they should be swapped.
- After swapping, sorting both arrays restores correct order.
- This avoids using any extra memory.

### Approach (Two Pointer + Greedy)

- Set pointer i at the end of array a.
- Set pointer j at the start of array b.
- While i >= 0 and j < m:
- If a[i] > b[j], swap them.
- Move i backward and j forward.
- Sort both arrays individually.

### Dry Run Example

![Dry Run](./notes/image.png)

### Implementation

See: `solution.js`
