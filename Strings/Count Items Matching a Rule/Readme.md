# 🛍️ Count Items Matching a Rule

## 📘 Topic
- Array
- String
- Traversal

### 📂 Category
- Easy
- Interview + LeetCode

---

# 📄 Problem Statement

- You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

- The ith item is said to match the rule if one of the following is true:

- ruleKey == "type" and ruleValue == typei.
- ruleKey == "color" and ruleValue == colori.
- ruleKey == "name" and ruleValue == namei.
- Return the number of items that match the given rule.

Given:

```js
items[i] = [type, color, name]
```

and:

```js
ruleKey
ruleValue
```

Return the number of items that satisfy the rule.

Rules:

```js
ruleKey = "type"  → match type
ruleKey = "color" → match color
ruleKey = "name"  → match name
```

---

# 🧪 Example 1

### Input

```js
items = [
 ["phone","blue","pixel"],
 ["computer","silver","lenovo"],
 ["phone","gold","iphone"]
]

ruleKey = "color"
ruleValue = "silver"
```

### Output

```js
1
```

---

# 🧪 Example 2

### Input

```js
items = [
 ["phone","blue","pixel"],
 ["computer","silver","phone"],
 ["phone","gold","iphone"]
]

ruleKey = "type"
ruleValue = "phone"
```

### Output

```js
2
```

---

# 💡 Approach

- Find index corresponding to `ruleKey`
- Traverse all items
- Compare value at that index with `ruleValue`
- Count matches

---

# ✅ JavaScript Solution

```js
let items = [
    ["phone","blue","pixel"],
    ["computer","silver","lenovo"],
    ["phone","gold","iphone"]
];

let ruleKey = "color",
    ruleValue = "silver";

var countMatches = function(items, ruleKey, ruleValue) {

    let keyIndex;

    if(ruleKey === "type") {
        keyIndex = 0;
    }
    else if(ruleKey === "color") {
        keyIndex = 1;
    }
    else {
        keyIndex = 2;
    }

    let count = 0;

    for(let i = 0; i < items.length; i++) {

        if(items[i][keyIndex] === ruleValue) {
            count++;
        }
    }

    return count;
};

console.log(
    countMatches(items, ruleKey, ruleValue)
);
```

---

# 🪄 Dry Run

## Input

```js
ruleKey = "color"
ruleValue = "silver"
```

---

### Find Index

```js
color → 1
```

---

### Check Items

```js
["phone","blue","pixel"]
```

```js
blue !== silver
```

❌

---

```js
["computer","silver","lenovo"]
```

```js
silver === silver
```

✔ Count = 1

---

```js
["phone","gold","iphone"]
```

```js
gold !== silver
```

❌

---

# Final Output

```js
1
```

---

# ⏱ Complexity

## Time Complexity

```js
O(n)
```

---

## Space Complexity

```js
O(1)
```

---

# ✅ Final Output

```js
1
```

---