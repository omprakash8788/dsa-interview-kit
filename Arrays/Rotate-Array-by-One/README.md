### Rotate Array by One (Clockwise)

## Problem Statement

Given an array `arr[]`, rotate the array by one position in `clockwise direction.`

- Clockwise rotation means:
- The last element `moves` to the front
- All remaining elements shift `one` position to the `right`

## Example

Input: `[1, 2, 3, 4, 5]`
Output:`[5, 1, 2, 3, 4]`

### Explanation:

`The last element 5 comes to the front and the rest of the elements shift one position to the right.`

### Initial Observations

- Only one rotation is required
- The last ***element*** plays a key role
- The relative order of other ***elements*** must remain unchanged
- This problem can be solved:
  - Using built-in array operations
  - Or manually using index shifting

### Core Idea

- `Remove` the last element of the array
- Insert it at the beginning
- The remaining elements automatically shift right
- This approach works because:
  - JavaScript arrays are dynamic
  - pop() removes the last element
  - unshift() inserts an element at the start

### Implementation

See: `solution.js`

### Algorithm

```text
Take last element using pop()
Insert it at the front using unshift()


```
