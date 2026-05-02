#  Number of Equivalent Domino Pairs

##  File Name
number-of-equivalent-domino-pairs.js

##  Topic / Concept
- Array
- Hashing (Frequency Map)
- Counting Pairs
- Normalization Technique

###  Category
- Easy → Medium
- Very Common Interview Pattern

##  Problem Statement

Given a list of dominoes, where each element is:

dominoes[i] = [a, b]

Two dominoes are considered equivalent if:

- (a == c AND b == d)  
OR  
- (a == d AND b == c)

Meaning one domino can be rotated to match another.

Return the number of pairs (i, j) such that:

0 <= i < j < dominoes.length

and dominoes[i] is equivalent to dominoes[j].


## RD
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

## 🧾 Examples

### Example 1
Input:  
[[1,2],[2,1],[3,4],[5,6]]  

Output:  
1  

### Example 2
Input:  
[[1,2],[1,2],[1,1],[1,2],[2,2]]  

Output:  
3  

## 💡 Core Idea

Treat these as SAME:
[1,2] == [2,1]

So normalize every domino:
- Always store smaller number first

Example:
[2,1] → "1,2"

## 🧠 Algorithm

Initialize empty map (freq)
Initialize count = 0

For each domino:
    Normalize (small, big)

    If key exists:
        count += freq[key]
        freq[key]++
    Else:
        freq[key] = 1

Return count


