let prices = [7,1,5,3,6,4]
let minPrice = prices[0];
let maxProfit = 0;
for (let i = 1; i < prices.length; i++) {
  // Calculate profit if selling today
  let profit = prices[i] - minPrice;
  // Update maxProfit if today's profit is greater
  if (profit > maxProfit) {
    maxProfit = profit;
  }
  // Update minPrice if today's price is lower
  if (prices[i] < minPrice) {
    minPrice = prices[i];
  }
}
console.log(maxProfit);
