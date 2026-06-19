# 🔍 Number of Strings That Appear as Substrings in Word

## 📘 Topic

* String
* Array
* Filtering
* Substring Search

### 📂 Category

* Easy
* Interview + LeetCode

---

# 📄 Problem Statement

Given an array of strings `patterns` and a string `word`, return the number of strings in `patterns` that appear as a substring in `word`.

A substring is a contiguous sequence of characters within a string.

Return the total count of strings from `patterns` that exist in `word`.

---

# 🧪 Example 1

### Input

```js
patterns = ["a","abc","bc","d"]
word = "abc"
```

### Output

```js
3
```

### Explanation

```js
"a"   → present in "abc"
"abc" → present in "abc"
"bc"  → present in "abc"
"d"   → not present
```

Count:

```js
3
```

---

# 🧪 Example 2

### Input

```js
patterns = ["a","b","c"]
word = "aaaaabbbbb"
```

### Output

```js
2
```

### Explanation

```js
"a" → present
"b" → present
"c" → not present
```

Count:

```js
2
```

---

# 🧪 Example 3

### Input

```js
patterns = ["a","a","a"]
word = "ab"
```

### Output

```js
3
```

### Explanation

Each occurrence is counted separately.

```js
"a" → present
"a" → present
"a" → present
```

Count:

```js
3
```

---

# 💡 Approach

For every string in `patterns`:

* Check whether it exists inside `word`
* If yes, count it
* Return the total count

JavaScript provides the built-in method:

```js
word.includes(pattern)
```

which directly checks whether a substring exists.

---

# ✅ JavaScript Solution

```js
let patterns = ["a","abc","bc","d"];
let word = "abc";

var numOfStrings = function(patterns, word) {

    let count = patterns.filter(
        pat => word.includes(pat)
    ).length;

    return count;
};

console.log(numOfStrings(patterns, word));
```

---

# 🪄 Dry Run

## Input

```js
patterns = ["a","abc","bc","d"]
word = "abc"
```

---

### Check Each Pattern

```js
"a"   → true
count = 1
```

```js
"abc" → true
count = 2
```

```js
"bc"  → true
count = 3
```

```js
"d"   → false
count = 3
```

---

# Matching Patterns

```js
"a"
"abc"
"bc"
```

Total:

```js
3
```

---

# Final Output

```js
3
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n × m)
```

Where:

* `n` = number of patterns
* `m` = length of word

Each pattern may require searching inside the word.

---

## Space Complexity

```js
O(1)
```

Ignoring the temporary space used internally by `filter()`.

---

# 🚀 Alternative Solution Using Loop

```js
var numOfStrings = function(patterns, word) {

    let count = 0;

    for(let pattern of patterns) {

        if(word.includes(pattern)) {
            count++;
        }
    }

    return count;
};
```

---

# 🪄 Dry Run (Loop Version)

## Input

```js
patterns = ["a","abc","bc","d"]
word = "abc"
```

Iteration:

```js
"a"   → count = 1
"abc" → count = 2
"bc"  → count = 3
"d"   → count = 3
```

Return:

```js
3
```

---

# ⏱ Optimal Complexity

## Time Complexity

```js
O(n × m)
```

## Space Complexity

```js
O(1)
```

---

# ✅ Final Output

```js
3
```

---
