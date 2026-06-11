#  Find Peak Element

---

##  Topic / Concept
- Array
- Binary Search
- Peak Finding
- Divide and Conquer
- Searching Algorithms

### 📂 Category
- Medium
- Interview + LeetCode Type Problem

---

# 📄 Problem Statement

- A peak element is an element that is strictly greater than its neighbors.
- Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
- You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
- You must write an algorithm that runs in O(log n) time.

A peak element is an element that is:

```js
strictly greater than its neighbors
```

Given a 0-indexed integer array `nums`, find a peak element and return its index.

If multiple peaks exist, return the index of any peak.

---

# 📌 Special Condition

You may imagine:

```js
nums[-1] = -∞
nums[n] = -∞
```

Meaning:
- elements outside array are negative infinity
- boundary elements can also become peaks

---

# ⚠️ Important Requirement

You must solve the problem in:



time complexity.

This strongly hints toward:

# 🚀 Binary Search

---

# 🧠 Understanding Peak Element

An element is peak if:

```js
nums[i] > nums[i-1]
AND
nums[i] > nums[i+1]
```

---

# 🎯 Examples

---

## Example 1

### Input

```js
nums = [1,2,3,1]
```

### Output

```js
2
```

---

## Explanation

```js
Index: 0 1 2 3
nums = [1,2,3,1]
            ↑
```

Element:
```js
3
```

is greater than:
```js
2 and 1
```

So index:
```js
2
```

is a peak.

---

## Example 2

### Input

```js
nums = [1,2,1,3,5,6,4]
```

### Output

```js
5
```

---

## Explanation

Possible peaks:

### Peak 1
```js
2
```

at index:
```js
1
```

---

### Peak 2
```js
6
```

at index:
```js
5
```

Both are valid answers.

---

# 🔍 Key Observation

A peak always exists.

Why?

Because:
- array starts from `-∞`
- array ends at `-∞`

So somewhere array must rise then fall.

---

# 💡 Your Current Solution

Your code finds:

```js
maximum element index
```

And maximum element is always a peak.

So your solution works correctly.

---

# ✅ Your JavaScript Solution

```js
let nums = [1,2,3,1];

let maxIndex = 0;

for (let i = 1; i < nums.length; i++) {

    if (nums[i] > nums[maxIndex]) {
        maxIndex = i;
    }
}

console.log(maxIndex);
```

---

# 🪄 Dry Run (Your Solution)

## Input

```js
nums = [1,2,3,1]
```

---

# Initial

```js
maxIndex = 0
```

Current max:
```js
1
```

---

# i = 1

```js
nums[1] = 2
```

Compare:
```js
2 > 1 ✔
```

Update:
```js
maxIndex = 1
```

---

# i = 2

```js
nums[2] = 3
```

Compare:
```js
3 > 2 ✔
```

Update:
```js
maxIndex = 2
```

---

# i = 3

```js
nums[3] = 1
```

Compare:
```js
1 > 3 ❌
```

No update.

---

# Final Answer

```js
2
```

---

# ⏱ Complexity Analysis (Your Solution)

## Time Complexity

Loop traverses entire array:



---

## Space Complexity



---

# ⚠️ Interview Catch

Problem explicitly requires:



So interviewer expects:

# 🚀 Binary Search Solution

---

# 💡 Binary Search Intuition

Observe:

If:
```js
nums[mid] < nums[mid + 1]
```

then:
- peak exists on RIGHT side

Because array is rising.

---

If:
```js
nums[mid] > nums[mid + 1]
```

then:
- peak exists on LEFT side (including mid)

Because array is falling.

---

# 🎯 Main Binary Search Idea

At every step:
- move toward rising slope
- eventually reach a peak

---

# ✅ Optimal Binary Search Solution

```js
var findPeakElement = function(nums) {

    let left = 0;
    let right = nums.length - 1;

    while(left < right) {

        let mid = Math.floor((left + right) / 2);

        // Rising slope
        if(nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        }

        // Falling slope
        else {
            right = mid;
        }
    }

    return left;
};
```

---

# 🪄 Dry Run (Binary Search)

## Input

```js
nums = [1,2,3,1]
```

---

# Initial

```js
left = 0
right = 3
```

---

# Step 1

```js
mid = 1
nums[mid] = 2
nums[mid+1] = 3
```

Since:
```js
2 < 3
```

Move right:
```js
left = mid + 1
left = 2
```

---

# Step 2

```js
left = 2
right = 3
```

mid:
```js
2
```

Compare:
```js
nums[2] = 3
nums[3] = 1
```

Since:
```js
3 > 1
```

Move left:
```js
right = mid
right = 2
```

---

# Loop Ends

```js
left = right = 2
```

Return:
```js
2
```

---

# ⏱ Complexity Analysis (Optimal)

## Time Complexity

Binary search halves array every step:



---

## Space Complexity



---

# ⚠️ Edge Cases

---

## Case 1 → Single Element

```js
[5]
```

Output:
```js
0
```

Single element is peak.

---

## Case 2 → Strictly Increasing

```js
[1,2,3,4]
```

Peak:
```js
4
```

at last index.

---

## Case 3 → Strictly Decreasing

```js
[9,7,5,3]
```

Peak:
```js
9
```

at index `0`.

---

## Case 4 → Multiple Peaks

```js
[1,3,2,5,4]
```

Possible answers:
```js
1 or 3
```

---

# 🎯 Why Binary Search Works?

Key insight:

If array rises:
```js
peak must exist ahead
```

If array falls:
```js
peak already exists behind
```

So we can safely eliminate half array every step.

---

# 📈 Visual Intuition

---

## Rising Slope

```txt
1 2 3 4
      ↑
move right
```

---

## Falling Slope

```txt
4 3 2 1
↑
move left
```

---

# 🧩 Interview Insights

Interviewers may ask:

---

## Why maximum element is always peak?

Because:
```js
maximum > all neighbors
```

---

## Then why not linear scan?

Because requirement demands:
```js
O(log n)
```

---

## Why compare with nums[mid+1]?

To determine:
- rising slope
- falling slope

---

## Does peak always exist?

Yes.

Due to:
```js
nums[-1] = nums[n] = -∞
```

---

# 🔥 Important Learning

This problem teaches:

✅ Binary Search on Answers  
✅ Peak Finding Logic  
✅ Divide & Conquer  
✅ Array Slope Observation  
✅ Optimization Thinking  

---

# 🏁 Final Takeaway

Main intuition:

> If array rises, move right.  
> If array falls, move left.

Eventually binary search lands on a peak.

This is one of the most famous:

⭐ Binary Search Pattern Problems.

---

# ✅ Final Code Again (Your Solution)

```js
let nums = [1,2,3,1];

let maxIndex = 0;

for (let i = 1; i < nums.length; i++) {

    if (nums[i] > nums[maxIndex]) {
        maxIndex = i;
    }
}

console.log(maxIndex);
```

---

# ✅ Final Code Again (Optimal Binary Search)

```js
var findPeakElement = function(nums) {

    let left = 0;
    let right = nums.length - 1;

    while(left < right) {

        let mid = Math.floor((left + right) / 2);

        if(nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        }

        else {
            right = mid;
        }
    }

    return left;
};
```

---

# 📝 Extra Note

This problem is related to:

- Mountain Array Problems
- Local Maxima
- Binary Search Optimization
- Signal Processing Peaks

Very important interview problem.

---
