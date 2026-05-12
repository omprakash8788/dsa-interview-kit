#  Longest Harmonious Subsequence

---

##  Topic / Concept
- Array
- Hash Map / Frequency Counter
- Subsequence
- Counting Technique

###  Category
- Easy → Medium
- Interview + LeetCode Type Problem

---

#  Problem Statement

We define a harmonious array as an array where:

```js
maximum value - minimum value = 1
```

Given an integer array `nums`, return the length of its longest harmonious subsequence among all its possible subsequences.

- We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

- Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

---

#  What is a Subsequence?

A subsequence is formed by deleting some elements without changing the order of the remaining elements.

For example:

```js
[1,3,2,2,5,2,3,7]
```

Possible subsequence:
```js
[3,2,2,2,3]
```

Order remains same.

---

#  Harmonious Condition

For a subsequence to be harmonious:

```js
max - min = 1
```

Examples:

✔ Valid
```js
[2,2,3,3]
max = 3
min = 2

3 - 2 = 1
```

❌ Invalid
```js
[1,1,1]

1 - 1 = 0
```

---

# 🧪 Examples

---

## Example 1

### Input

```js
nums = [1,3,2,2,5,2,3,7]
```

### Output

```js
5
```

### Explanation

Longest harmonious subsequence:

```js
[3,2,2,2,3]
```

Here:

```js
max = 3
min = 2

3 - 2 = 1 ✔
```

Length:
```js
5
```

---

## Example 2

### Input

```js
nums = [1,2,3,4]
```

### Output

```js
2
```

### Explanation

Possible harmonious subsequences:

```js
[1,2]
[2,3]
[3,4]
```

Each has length:
```js
2
```

---

## Example 3

### Input

```js
nums = [1,1,1,1]
```

### Output

```js
0
```

### Explanation

Only one unique number exists.

```js
max - min = 0
```

No harmonious subsequence exists.

---

# 🔍 Key Observation

If two numbers differ by exactly `1`,
they can form a harmonious subsequence.

For example:

```js
2 and 3
7 and 8
10 and 11
```

So we only need:

```js
frequency(num) + frequency(num + 1)
```

---

# 💡 Optimal Approach → Frequency Map

Instead of generating all subsequences:

✅ Count frequency of every number.

Then check:

```js
num and num + 1
```

If both exist:

```js
count(num) + count(num + 1)
```

Take maximum length.

---

# 🪜 Step-by-Step Algorithm

## Step 1
Create frequency map.

## Step 2
Traverse all unique numbers.

## Step 3
Check if:
```js
num + 1 exists
```

## Step 4
Update answer:
```js
count(num) + count(num + 1)
```

---

# 🪄 Dry Run

## Input

```js
nums = [1,3,2,2,5,2,3,7]
```

---

# Step 1 → Frequency Map

```js
{
  1: 1,
  2: 3,
  3: 2,
  5: 1,
  7: 1
}
```

---

# Step 2 → Check Adjacent Numbers

---

## Check 1 and 2

```js
1 + 3 = 4
```

maxLen:
```js
4
```

---

## Check 2 and 3

```js
3 + 2 = 5
```

maxLen:
```js
5
```

---

## Check 3 and 4

4 doesn't exist ❌

---

## Check 5 and 6

6 doesn't exist ❌

---

## Check 7 and 8

8 doesn't exist ❌

---

# Final Answer

```js
5
```

---

# ⏱ Complexity Analysis

## Time Complexity

### Building Frequency Map
```js
O(n)
```

### Traversing Map
```js
O(n)
```

### Final Complexity
```js
O(n)
```

---

## Space Complexity

```js
O(n)
```

For storing frequency map.

---

# ⚠️ Edge Cases

---

## Case 1 → All Same Numbers

```js
[1,1,1,1]
```

No adjacent number exists.

Answer:
```js
0
```

---

## Case 2 → Negative Numbers

```js
[-1,-2,-2,-1]
```

Valid harmonious subsequence exists.

Answer:
```js
4
```

---

## Case 3 → Empty Array

```js
[]
```

Answer:
```js
0
```

---

# 🎯 Why Hash Map Works?

Hash map gives:

```js
frequency lookup → O(1)
```

So checking:
```js
num + 1
```

becomes very fast.

Without hashmap:
- repeated counting
- slower solution

---

# 🧩 Interview Insights

Interviewers may ask:

---

## Why use frequency map?

To count occurrences efficiently.

---

## Why check only num + 1?

Because condition says:

```js
max - min = 1
```

Only adjacent values matter.

---

## Why not sorting?

Sorting also works but takes:

```js
O(n log n)
```

Hash map solution is better:

```js
O(n)
```

---

## Difference Between Subarray and Subsequence?

### Subarray
Continuous elements.

### Subsequence
Can skip elements.

---

# 🔥 Alternative Sorting Approach

Sort array first:

```js
nums.sort((a,b)=>a-b)
```

Then count consecutive values.

But hashmap solution is more optimal.

---

# 🏁 Final Takeaway

This problem teaches:

✅ Frequency Counting  
✅ Hash Map Optimization  
✅ Adjacent Value Logic  
✅ Subsequence Thinking  

Main intuition:

> A harmonious subsequence only depends on two numbers whose difference is exactly 1.

---

# ✅ Final Code Again

```js
var findLHS = function(nums) {

    let obj = {};
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {

        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }

    for (let [numStr, count] of Object.entries(obj)) {

        let num = Number(numStr);

        if (obj[num + 1] !== undefined) {

            maxLen = Math.max(
                maxLen,
                count + obj[num + 1]
            );
        }
    }

    return maxLen;
};
```

---