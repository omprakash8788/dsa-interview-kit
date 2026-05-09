#  Maximum Unique Subarray Sum After Deletion



##  Topic / Concept
- Array
- Hash Set
- Greedy
- Unique Elements

###  Category
- Medium
- Interview Important

---

##  Problem Statement

You are given an integer array `nums`.

- You may delete any number of elements (but array cannot become empty).

After deletion, choose a subarray such that:

- All elements are unique
- Sum of subarray is maximum

-- Return the maximum possible sum.


- You are given an integer ***array nums***.
- You are allowed to ***delete*** any number of elements from nums without making it empty. After performing the deletions, select a subarray of nums such that:
- All elements in the subarray are unique.
- The sum of the elements in the subarray is maximized.
- Return the maximum sum of such a subarray.

---


##  Examples

### Example 1
Input:
[1,2,3,4,5]

Output:
15

Explanation:
All elements are unique and positive.
Take whole array.

---

### Example 2
Input:
[1,1,0,1,1]

Output:
1

Explanation:
Keep only one `1`.

---

### Example 3
Input:
[1,2,-1,-2,1,0,-1]

Output:
3

Explanation:
Delete negatives.
Take [1,2].

---

## 💡 Core Idea

👉 Negative numbers reduce sum

👉 Duplicate numbers are not allowed

So:
- Take only unique positive numbers
- Ignore duplicates
- Ignore negatives

---

##  Algorithm

Find maximum element

If all elements <= 0:
    return maximum element

Create Set

For each number:
    If number >= 0 AND not in Set:
        Add to answer
        Mark as seen

Return answer

---

