# Best Time to Buy and Sell Stock II

## File Name

best-time-to-buy-sell-stock-2.js

## Topic / Concept

- Array
- Greedy Algorithm
- Peak-Valley Approach

### Category

- Easy → Medium
- Very Common Interview Problem

---

## Problem Statement

You are given an array `prices` where:

prices[i] = price of stock on day i

You can:

- Buy and sell multiple times
- Hold only one stock at a time
- Buy and sell on the same day if needed

Return the **maximum profit**

- You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

- On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

- Find and return the maximum profit you can achieve.

---

## Examples

### Example 1

Input:  
[7,1,5,3,6,4]

Output:  
7

Explanation:  
Buy at 1 → sell at 5 → profit = 4  
Buy at 3 → sell at 6 → profit = 3  
Total = 7

---

### Example 2

Input:  
[1,2,3,4,5]

Output:  
4

---

### Example 3

Input:  
[7,6,4,3,1]

Output:  
0

---

## Core Idea (Greedy)

Take every **increasing step profit**

If: prices[i] > prices[i-1]
Add: prices[i] - prices[i-1]

---

##  Algorithm

Initialize profit = 0

For i from 1 to n:
If current price > previous price:
Add difference to profit

Return profit

---
