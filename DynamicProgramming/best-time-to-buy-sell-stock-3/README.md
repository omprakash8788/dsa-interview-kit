# Best Time to Buy and Sell Stock III

## Topic / Concept

- Array
- Dynamic Programming (DP)
- State Machine / Greedy Optimization

### Category

- Hard Level Problem
- FAANG Important

---

## Problem Statement

You are given an array `prices[]` where:

- `prices[i]` = stock price on day `i`

You can perform **at most 2 transactions**  
 You must **sell before buying again**

Return the **maximum profit**

You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

---

## Examples

### Example 1

Input:  
prices = [3,3,5,0,0,3,1,4]

Output:  
6

---

### Example 2

Input:  
prices = [1,2,3,4,5]

Output:  
4

---

### Example 3

Input:  
prices = [7,6,4,3,1]

Output:  
0

---

##  Core Idea (State Machine)

We track **4 states**:

| State | Meaning     |
| ----- | ----------- |
| buy1  | First buy   |
| sell1 | First sell  |
| buy2  | Second buy  |
| sell2 | Second sell |

---

##  Intuition

Think like this:

1. Buy stock → lose money
2. Sell stock → gain money
3. Repeat (max 2 times)

---
