# ✨ Delete Characters to Make Fancy String

## 🧠 Topic / Concept
- String
- Greedy
- Traversal

###  Category
- Easy
- Interview Friendly

---

##  Problem Statement

A string is called **fancy** if:

👉 No three consecutive characters are equal.

You are given a string `s`.

👉 Delete the minimum number of characters so that:
- No character appears 3 times continuously

Return the final fancy string.

- A fancy string is a string where no three consecutive characters are equal.

- Given a string s, delete the minimum possible number of characters from s to make it fancy.

- Return the final string after the deletion. It can be shown that the answer will always be unique.

---

## 🧾 Examples

### Example 1
Input:
"leeetcode"

Output:
"leetcode"

Explanation:
Remove one `e`

---

### Example 2
Input:
"aaabaaaa"

Output:
"aabaa"

---

### Example 3
Input:
"aab"

Output:
"aab"

---

## 💡 Core Idea

👉 Allow:
- 1 same character
- 2 same consecutive characters

❌ Do NOT allow:
- 3 consecutive same characters

---

## 🧠 Algorithm

Initialize:
    result = ""
    count = 0

Traverse string:

If current character == previous character:
    increase count
Else:
    reset count = 1

If count <= 2:
    add character to result

Return result

---

