# Subarray with 0 Sum

##  Problem Statement

Given an array of integers `arr[]`, determine whether there exists a **subarray (of size at least one)** whose sum is equal to `0`.

Return:

- `true` → if such a subarray exists  
- `false` → if no such subarray exists  

---

##  Examples

### Example 1

**Input:**  
```
[4, 2, -3, 1, 6]
```

**Output:**  
```
true
```

**Explanation:**  
The subarray `[2, -3, 1]` gives:

```
2 + (-3) + 1 = 0
```

So, a subarray with sum `0` exists.

---

### Example 2

**Input:**  
```
[4, 2, 0, 1, 6]
```

**Output:**  
```
true
```

**Explanation:**  
`0` itself is an element in the array.  
Since a single-element subarray is allowed, a subarray with sum `0` exists.

---

##  Initial Observations

- A **subarray** means continuous elements.
- Subarray size must be **at least one**.
- If any element itself is `0`, answer is `true`.
- We need to check all possible continuous combinations.
- As soon as we find a sum equal to `0`, we can stop and return `true`.

---

##  Core Idea (Brute Force Approach)

- Start from each index `i`.
- Keep adding elements from index `i` to `j`.
- Maintain a running `sum`.
- If at any point `sum === 0`, return `true`.
- If no such subarray is found after checking all possibilities, return `false`.

---

## 🛠 Implementation (Brute Force)

See: `solution.js`

```javascript
let arr = [4, 2, -3, 1, 6];

function SubarrayWithZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        for (let j = i; j < arr.length; j++) {
            sum += arr[j];

            if (sum === 0) {
                return true; // Subarray with sum 0 found
            }
        }
    }
    return false;
}

let ans = SubarrayWithZero(arr);
console.log(ans);
```

---

##  Algorithm

```
For each index i from 0 to n-1:
    Initialize sum = 0
    For each index j from i to n-1:
        Add arr[j] to sum
        If sum becomes 0:
            Return true
Return false
```

---

## ⏱ Time Complexity

- **O(n²)** → Because of nested loops.

##  Space Complexity

- **O(1)** → No extra space used.

---

#  Optimized Approach (Prefix Sum + HashSet)

Instead of checking all subarrays, we can use the concept of **prefix sum**.

###  Key Idea

If two prefix sums are equal, it means the elements between them sum to `0`.

Example:

If:
```
prefixSum[i] == prefixSum[j]
```
Then:
```
Sum of elements from i+1 to j = 0
```

---

## 🛠 Optimized Implementation (O(n))

```javascript
function SubarrayWithZeroOptimized(arr) {
    let set = new Set();
    let sum = 0;

    for (let num of arr) {
        sum += num;

        // If sum becomes 0 OR already exists in set
        if (sum === 0 || set.has(sum)) {
            return true;
        }

        set.add(sum);
    }

    return false;
}

let arr2 = [4, 2, -3, 1, 6];
console.log(SubarrayWithZeroOptimized(arr2));
```

---

## ⏱ Optimized Complexity

### Time Complexity:
- **O(n)** → Single loop traversal

### Space Complexity:
- **O(n)** → HashSet to store prefix sums

---

#  Conclusion

| Approach | Time Complexity | Space Complexity |
|----------|----------------|-----------------|
| Brute Force | O(n²) | O(1) |
| Optimized (Prefix Sum) | O(n) | O(n) |

👉 In interviews, the **optimized approach** is preferred.

---

💻 Happy Coding!