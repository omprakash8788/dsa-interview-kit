# Factorial of Large Numbers

## Problem Statement

Given an integer `n`, find its factorial.

Since factorial values grow very large, return the result as a **list of integers representing the digits** of `n!`.

Return:

- A list (array) of digits that make up the factorial of `n`.

---

## Examples

### Example 1

**Input:**
```
n = 5
```

**Output:**
```
[1, 2, 0]
```

**Explanation:**
```
5! = 1 × 2 × 3 × 4 × 5
   = 120
```

Digits of `120`:
```
[1, 2, 0]
```

---

### Example 2

**Input:**
```
n = 10
```

**Output:**
```
[3, 6, 2, 8, 8, 0, 0]
```

**Explanation:**
```
10! = 1 × 2 × 3 × 4 × 5 × 6 × 7 × 8 × 9 × 10
     = 3628800
```

Digits of `3628800`:
```
[3, 6, 2, 8, 8, 0, 0]
```

---

## Initial Observations

- Factorial grows very fast.
- For large `n`, the number becomes too big for normal integer storage.
- So we:
  - Store digits in an array.
  - Perform manual multiplication (like on paper).
  - Carefully handle carry.
- The result array stores digits in correct order.

---

## Core Idea

- Start with `result = [1]`.
- Multiply the current result by numbers from `2` to `n`.
- Multiply each digit from right to left.
- Maintain a `carry`.
- Insert leftover carry at the front.
- Continue until `n`.

---

## Implementation

See: `solution.js`

```javascript
let n = 10;

function factorialLarge(n) {
    let result = [1]; // Start with 1

    for (let i = 2; i <= n; i++) {
        let carry = 0;

        // Multiply each digit by i (from right to left)
        for (let j = result.length - 1; j >= 0; j--) {
            let mul = result[j] * i + carry;
            result[j] = mul % 10;
            carry = Math.floor(mul / 10);
        }

        // Add leftover carry to the front
        while (carry > 0) {
            result.unshift(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }

    return result;
}

let ans = factorialLarge(n);
console.log(ans);
```

---

## Algorithm

```
Initialize result array with [1]

For i from 2 to n:
    Set carry = 0

    For each digit from right to left:
        Multiply digit with i and add carry
        Store remainder (mul % 10)
        Update carry (floor(mul / 10))

    While carry > 0:
        Insert carry % 10 at beginning
        Update carry

Return result
```

---

## Time Complexity

- **O(n × d)**  
  Where:
  - `n` = input number  
  - `d` = number of digits in `n!`

---

## Space Complexity

- **O(d)**  
  Where `d` is the number of digits in `n!`.

---

## Conclusion

| Approach | Time Complexity | Space Complexity |
|----------|----------------|-----------------|
| Manual Digit Multiplication | O(n × d) | O(d) |

This approach simulates manual multiplication and is commonly asked in coding interviews for handling large number arithmetic.

---
