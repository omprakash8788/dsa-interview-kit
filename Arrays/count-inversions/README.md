### Problem Statement

`Given an array of integers arr[], find the Inversion Count of the array.`

An inversion is defined as a pair of indices `(i, j)` such that:

`i < j`

`arr[i] > arr[j]`

In simple terms, an inversion indicates how far the array is from being sorted.

### Example 1
Input - `[2, 4, 1, 3, 5]`
Output - `3`

### Explanation:
The inversion pairs are:`(2, 1)(4, 1)(4, 3)`
Total inversions = ***3***

### Initial Observations
- In a sorted array, inversion count is 0
- In a reverse sorted array, inversion count is maximum
- Every inversion represents a violation of sorted order
- The problem fundamentally checks pairwise order relationships

### Core Idea
- To count inversions:
- Fix one element at index i
- Compare it with every element to its right (j > i)
- If arr[i] > arr[j], count it as an inversion
## This guarantees that:
- Index condition i < j is satisfied
- Value condition arr[i] > arr[j] is checked

### Implementation
See: solution.js

### Algorithm (Brute Force)
```text
Initialize count = 0
For i from 0 to n-1:
    For j from i+1 to n-1:
        If arr[i] > arr[j]:
            count++

