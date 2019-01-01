/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let buy = prices[0],
    balance = 0;

  for (const price of prices) {
    buy = Math.min(buy, price);
    balance = Math.max(balance, price - buy);
  }

  return balance;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));