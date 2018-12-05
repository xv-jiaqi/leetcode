class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """

        profit = 0
        max_profit = 0

        for i in range(1, len(prices)):
            profit += (prices[i] - prices[i - 1])
            profit = max(profit, 0)
            max_profit = max(profit, max_profit)

        return max_profit


solution = Solution()

print(solution.maxProfit([7, 1, 5, 3, 6, 4]))  # 5
print(solution.maxProfit([7, 6, 4, 3, 1]))  # 0
print(solution.maxProfit([2, 1, 2, 0, 1]))  # 1
print(solution.maxProfit([3, 2, 6, 5, 0, 3]))  # 4
