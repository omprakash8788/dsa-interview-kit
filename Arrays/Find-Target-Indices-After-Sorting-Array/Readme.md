#  Find Target Indices After Sorting Array

---

##  Topic / Concept
- Array
- Sorting
- Index Tracking
- Traversal
- Counting Logic

###  Category
- Easy
- Interview + LeetCode Type Problem

---

#  Problem Statement

- You are given a 0-indexed integer array nums and a target element target.

- A target index is an index i such that nums[i] == target.

- Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.



You are given a:

- 0-indexed integer array `nums`
- target element `target`

A target index is an index `i` such that:

```js
nums[i] == target
```

Return a list of target indices after sorting the array in non-decreasing order.

If target does not exist:
```js
return []
```

The returned list must be sorted in increasing order.

---

# 🧠 Understanding the Problem

We need to:

## Step 1
Sort array.

## Step 2
Find all indices where:
```js
nums[i] == target
```

## Step 3
Return those indices.

---

# 🎯 Main Goal

For:

```js
nums = [1,2,5,2,3]
target = 2
```

After sorting:

```js
[1,2,2,3,5]
```

Indices of `2` are:

```js
[1,2]
```

---

# 🧪 Examples

---

## Example 1

### Input

```js
nums = [1,2,5,2,3]
target = 2
```

### Output

```js
[1,2]
```

---

## Explanation

After sorting:

```js
[1,2,2,3,5]
```

Target:
```js
2
```

Found at:
```js
index 1
index 2
```

---

## Example 2

### Input

```js
nums = [1,2,5,2,3]
target = 3
```

### Output

```js
[3]
```

---

## Explanation

Sorted array:

```js
[1,2,2,3,5]
```

Target:
```js
3
```

Found at:
```js
index 3
```

---

## Example 3

### Input

```js
nums = [1,2,5,2,3]
target = 5
```

### Output

```js
[4]
```

---

# 🔍 Key Observation

After sorting:

- equal values become adjacent
- finding indices becomes easy

So:
1. Sort array
2. Traverse array
3. Store matching indices

---

# 💡 Approach

---

## Step 1 → Sort Array

```js
nums.sort((a,b)=>a-b)
```

---

## Step 2 → Traverse Array

Loop through all elements.

---

## Step 3 → Check Target

```js
if(nums[i] == target)
```

Store index.

---

## Step 4 → Return Result

Return all collected indices.

---

#  JavaScript Solution
---

# 🪄 Dry Run

## Input

```js
nums = [1,2,5,2,3]
target = 2
```

---

# Step 1 → Sort

```js
[1,2,2,3,5]
```

---

# Step 2 → Traverse

---

## i = 0

```js
nums[0] = 1
```

Not target.

---

## i = 1

```js
nums[1] = 2 ✔
```

Store:
```js
temp = [1]
```

---

## i = 2

```js
nums[2] = 2 ✔
```

Store:
```js
temp = [1,2]
```

---

## i = 3

```js
nums[3] = 3
```

Skip.

---

## i = 4

```js
nums[4] = 5
```

Skip.

---

# Final Output

```js
[1,2]
```

---

# ⏱ Complexity Analysis

---

## Time Complexity

### Sorting
```js
O(n log n)
```

### Traversing
```js
O(n)
```

### Final Complexity

```js
O(n log n)
```

---

## Space Complexity

```js
O(k)
```

Where:
```js
k = number of target indices
```

---

# ⚠️ Edge Cases

---

## Case 1 → Target Not Present

```js
nums = [1,2,3]
target = 5
```

Output:
```js
[]
```

---

## Case 2 → All Elements Same

```js
nums = [2,2,2,2]
target = 2
```

Output:
```js
[0,1,2,3]
```

---

## Case 3 → Single Element

```js
nums = [5]
target = 5
```

Output:
```js
[0]
```

---

# 🎯 Important Insight

This problem can also be solved without sorting.

Because we only need:

- count of smaller elements
- count of target elements

---

# 🚀 Optimized Counting Approach

Instead of sorting:

Count:
```js
smallerCount
targetCount
```

Then indices become:

```js
smallerCount → smallerCount + targetCount - 1
```

---

# ✅ Optimized O(n) Solution

```js
var targetIndices = function(nums, target) {

    let smaller = 0;
    let equal = 0;

    for(let num of nums) {

        if(num < target) {
            smaller++;
        }

        else if(num === target) {
            equal++;
        }
    }

    let res = [];

    for(let i = 0; i < equal; i++) {
        res.push(smaller + i);
    }

    return res;
};
```

---

# 🧠 Why Optimized Approach Works?

Suppose:

```js
smaller = 1
equal = 2
```

After sorting:

- first target starts at index `1`
- next target at index `2`

So:
```js
[1,2]
```

No sorting needed.

---

# ⏱ Complexity (Optimized)

## Time Complexity

```js
O(n)
```

---

## Space Complexity

```js
O(k)
```

---

# 🧩 Interview Insights

Interviewers may ask:

---

## Why sorting works?

Sorting groups equal values together.

---

## Can we avoid sorting?

Yes.

Using counting logic.

---

## Which solution is better?

### Sorting Solution
Simple and intuitive.

### Counting Solution
More optimized:
```js
O(n)
```

---

# 🔥 Important Learning

This problem teaches:

✅ Sorting  
✅ Index Tracking  
✅ Counting Optimization  
✅ Array Traversal  
✅ Alternative Thinking  

---

# 🏁 Final Takeaway

Main intuition:

> After sorting, all target values become consecutive.

So finding indices becomes straightforward.

Even better:
> We can mathematically determine indices without sorting.

---

# ✅ Final Code Again (Sorting Approach)

```js
var targetIndices = function(nums, target) {

    let temp = [];

    nums.sort((a,b)=>(a-b));

    for(let i = 0; i < nums.length; i++) {

        if(nums[i] == target) {
            temp.push(i);
        }
    }

    return temp;
};
```

---

# ✅ Final Code Again (Optimized O(n))

```js
var targetIndices = function(nums, target) {

    let smaller = 0;
    let equal = 0;

    for(let num of nums) {

        if(num < target) {
            smaller++;
        }

        else if(num === target) {
            equal++;
        }
    }

    let res = [];

    for(let i = 0; i < equal; i++) {
        res.push(smaller + i);
    }

    return res;
};
```

---
