# Union of Arrays with Duplicates

## 🧩 Problem Statement

You are given two arrays `a[]` and `b[]`.  
Your task is to return the **Union** of both arrays.

### Union Definition:
- The union of two arrays is a collection of **all distinct elements**
- If an element appears multiple times in one or both arrays, it should appear **only once** in the result
- Elements are **not necessarily sorted**
- You may return the result in **any order**

---

## 📝 Examples

### Example 1
**Input:**

a = `[1, 2, 3, 2, 1]`
b = `[3, 2, 2, 3, 3, 2]`

Output:`[1, 2, 3]`

### Initial Observation
- Arrays may contain duplicates
- Union requires unique elements only
- Order of elements does not matter
- Efficient lookup is needed to avoid repetition

### Visual Reasoning
  - Basic Intuition
- Traverse both arrays
- Store elements only once
- Ignore repeated occurrences
- (Refer to images inside the notes/ folder.)

### Approach 1: Using Set (Hashing)
  - Idea
- JavaScript provides a `built-in Set` data structure which:
- Stores unique values only
- Automatically removes duplicates

### Steps
- Merge both arrays
- Insert all elements into a Set
- Convert the Set back to an array

### Key Takeaways
- Set is ideal for union-type problems
- Eliminates duplicates automatically
- Clean and optimal solution
- Frequently asked in DSA & interviews