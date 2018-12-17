/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    const dp = [prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0]

    for (let i = 2; i < prices.length; i++) {
        const profitOfTheDay = prices[i] - prices[i - 1]

        if (dp[dp.length - 1] + profitOfTheDay > 0) {
            dp.push(dp[dp.length - 1] + profitOfTheDay)
        } else {
            dp.push(0)
        }
    }

    return Math.max(...dp)
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))