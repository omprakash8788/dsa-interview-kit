# Remove Duplicates from Sorted Array

## Problem Statement

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only once.

The **relative order of the elements must remain the same**.

Return the number of **unique elements `k`**.

To get accepted, you need to:

- Modify the array `nums` so that the **first `k` elements contain the unique elements**.
- The remaining elements after `k` are **not important**.
- Return the value `k`.

---

## Examples

### Example 1

**Input**
```
nums = [1,1,2]
```

**Output**
```
k = 2
nums = [1,2,_]
```

**Explanation**

The unique elements in the array are:

```
[1,2]
```

So the number of unique elements is:

```
k = 2
```

Only the **first `k` elements** need to contain the correct values.

---

### Example 2

**Input**
```
nums = [0,0,1,1,1,2,2,3,3,4]
```

**Output**
```
k = 5
nums = [0,1,2,3,4,_,_,_,_,_]
```

**Explanation**

The unique elements are:

```
[0,1,2,3,4]
```

So:

```
k = 5
```

---

## Initial Observations

- The array is already **sorted**.
- Duplicate elements will always appear **next to each other**.
- We can solve this efficiently using the **Two Pointer Technique**.
- One pointer keeps track of **unique elements**, while the other scans the array.

---

## Core Idea

Use two pointers:

- `i` → Points to the **last unique element**
- `j` → Traverses the array

Steps:

1. Start with `i = 0`.
2. Traverse the array using `j` from `1` to `nums.length`.
3. If `nums[j] !== nums[i]`:
   - Move `i` one step forward.
   - Assign `nums[j]` to `nums[i]`.
4. Continue until the end of the array.
5. Return `i + 1` as the number of unique elements.

---

## Implementation

See: `solution.js`

```javascript
let nums = [1,1,2];

function removeD(nums){

    if (nums.length === 0) return 0;

    let i = 0; // Pointer for unique elements

    for (let j = 1; j < nums.length; j++) {

        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }

    }

    return i + 1; // Number of unique elements
}

let k = removeD(nums);

console.log(nums.slice(0, k));
```

---

## Algorithm

```
If nums is empty
    return 0

Set i = 0

For j from 1 to nums.length - 1
    If nums[j] is not equal to nums[i]
        Increment i
        Copy nums[j] into nums[i]

Return i + 1
```

---

## Time Complexity

```
O(n)
```

Where:

- `n` = number of elements in the array  
- Each element is visited **once**

---

## Space Complexity

```
O(1)
```

- No extra memory is used.
- The operation is done **in-place**.

---

## Conclusion

| Approach | Time Complexity | Space Complexity |
|--------|--------|--------|
| Two Pointer Technique | O(n) | O(1) |

This problem is a classic **Two Pointer Technique** example and is commonly asked in coding interviews because it tests:

- Efficient **array traversal**
- **In-place modifications**
- Understanding of **sorted arrays**