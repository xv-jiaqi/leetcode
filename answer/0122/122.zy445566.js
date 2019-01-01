/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxRes = 0;
        for (let i = 0; i < prices.length-1; ++i) {
            if (prices[i] < prices[i + 1]) {
                maxRes += prices[i + 1] - prices[i];
            }
        }
    return maxRes;
};