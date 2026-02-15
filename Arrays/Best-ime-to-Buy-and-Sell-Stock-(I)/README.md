### Best Time to Buy and Sell Stock

### Problem Statement

`You are given an array of integers prices[] where prices[i] represents the price of a stock on the ith day`

You want to maximize your profit by choosing:
 - One day to buy the stock
 - A different future day to sell the stock

Return the `maximum profit` you can achieve.
If no profit is possible, return 0.

*** Rules / Constraints**
 - You must buy before you sell
 - Only one transaction is allowed (one buy + one sell)
 - If prices are always decreasing → profit is 0

### Example 1

`Input =  [7, 1, 5, 3, 6, 4] `
`Output = 5` 

### Explanation:
 - Buy on day 2 (price = 1)
 - Sell on day 5 (price = 6)
 - Profit = 6 - 1 = 5


### Example 2
`Input [7, 6, 4, 3, 1]`
`Output 0`

### Explanation:
- Prices keep decreasing
- No valid transaction gives profit
- Maximum profit = 0

### Initial Observations
 - Profit is only possible if a smaller price comes before a larger price
 - Selling before buying is not allowed
 - We want the maximum difference prices[j] - prices[i] where j > i
 - Brute force comparison of all pairs is inefficient

### Core Idea
- Track the minimum price so far
- For each day:
  - Assume selling on that day
  - Calculate profit = current price - min price
 - Update maximum profit
 - Update minimum price when a lower price is found

### Implementation
See: `solution.js`
