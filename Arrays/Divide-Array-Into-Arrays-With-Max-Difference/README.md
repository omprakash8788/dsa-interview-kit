#  Divide Array Into Arrays With Max Difference

---

##  Topic / Concept
- Array
- Sorting
- Greedy Algorithm
- Grouping Elements
- Two Pointer Thinking

###  Category
- Medium
- Interview + LeetCode Type Problem

---

##  Problem Statement

You are given an integer array `nums` of size `n` where `n` is a multiple of `3` and a positive integer `k`.

Divide the array `nums` into `n / 3` arrays of size `3` satisfying the following condition:

- The difference between any two elements in one array is less than or equal to `k`.

Return a 2D array containing the arrays.

If it is impossible to satisfy the conditions, return an empty array.

If there are multiple answers, return any one of them.

---

##  Understanding the Problem

We need to:

- Divide the array into groups of exactly `3` elements.
- Inside every group:
  - `maxElement - minElement <= k`
- If any group violates this condition:
  - return `[]`

---

#  Examples

## Example 1

### Input
```js
nums = [1,3,4,8,7,9,3,5,1]
k = 2
```

### Output
```js
[[1,1,3],[3,4,5],[7,8,9]]
```

### Explanation

Group 1:
```js
[1,1,3]
3 - 1 = 2 ✔
```

Group 2:
```js
[3,4,5]
5 - 3 = 2 ✔
```

Group 3:
```js
[7,8,9]
9 - 7 = 2 ✔
```

All groups satisfy the condition.

---

## Example 2

### Input
```js
nums = [2,4,2,2,5,2]
k = 2
```

### Output
```js
[]
```

### Explanation

Possible grouping:
```js
[2,2,2]
[2,4,5]
```

Second group:
```js
5 - 2 = 3 ❌
```

Condition fails.

So answer is:
```js
[]
```

---

## Example 3

### Input
```js
nums = [4,2,9,8,2,12,7,12,10,5,8,5,5,7,9,2,5,11]
k = 14
```

### Output
```js
[[2,2,2],[4,5,5],[5,5,7],[7,8,8],[9,9,10],[11,12,12]]
```

### Explanation

Every group satisfies:
```js
max - min <= 14
```

---

#  Key Observation

If we sort the array:

- Closest numbers become adjacent.
- Best strategy:
  - Take every 3 consecutive elements.
- Why?
  - This minimizes the difference inside each group.

---

#  Greedy Approach

## Step-by-Step

### Step 1
Sort the array.

### Step 2
Take elements in chunks of 3.

### Step 3
Check:
```js
group[2] - group[0] <= k
```

### Step 4
If condition fails:
```js
return []
```

Otherwise:
- push group into result.

---



---

#  Dry Run

## Input

```js
nums = [1,3,4,8,7,9,3,5,1]
k = 2
```

---

## Step 1 → Sort

```js
[1,1,3,3,4,5,7,8,9]
```

---

## Step 2 → Grouping

### Group 1
```js
[1,1,3]
3 - 1 = 2 ✔
```

### Group 2
```js
[3,4,5]
5 - 3 = 2 ✔
```

### Group 3
```js
[7,8,9]
9 - 7 = 2 ✔
```

---

## Final Answer

```js
[[1,1,3],[3,4,5],[7,8,9]]
```

---

# ⏱ Complexity Analysis

## Time Complexity

### Sorting
```js
O(n log n)
```

### Traversing Array
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
O(n)
```

Because of result array.

---

# ⚠️ Edge Cases

## Case 1 → Impossible Group

```js
nums = [1,1,10]
k = 2
```

```js
10 - 1 = 9 ❌
```

Return:
```js
[]
```

---

## Case 2 → All Same Elements

```js
nums = [5,5,5,5,5,5]
k = 0
```

Output:
```js
[[5,5,5],[5,5,5]]
```

---

## Case 3 → Large k

```js
k = 1000
```

Almost all groups become valid.

---

#  Why Sorting Works?

Sorting guarantees:

- Nearby numbers have minimum difference.
- Greedy grouping becomes optimal.
- If sorted consecutive elements fail,
  no other grouping can fix it.

This is the core intuition.

---

#  Interview Insights

Interviewers may ask:

### Why sorting?
Because we need minimum possible difference inside groups.

### Why consecutive grouping?
Closest numbers after sorting produce smallest range.

### Can we do without sorting?
Very difficult and inefficient.

### Is greedy always correct?
Yes, because sorted adjacent grouping minimizes differences.

---

#  Final Takeaway

This problem is a classic:

- Sorting + Greedy
- Array Grouping
- Range Minimization

Main intuition:
> After sorting, grouping consecutive elements gives the smallest possible differences.

---

#  Final Code Again 

```js
var divideArray = function(nums, k) {

    nums.sort((a, b) => a - b);

    let res = [];

    for (let i = 0; i < nums.length; i += 3) {

        let group = [nums[i], nums[i + 1], nums[i + 2]];

        if (group[2] - group[0] > k) {
            return [];
        }

        res.push(group);
    }

    return res;
};
```

---