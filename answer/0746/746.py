class Solution:
    def minCostClimbingStairs(self, cost):
        """
        :type cost: List[int]
        :rtype: int
        """

        prev2 = 0
        prev1 = 0

        for c in cost:
            tmp = prev1
            prev1 = min(prev2 + c, prev1 + c)
            prev2 = tmp

        return min(prev1, prev2)


solution = Solution()
print(solution.minCostClimbingStairs([10, 15, 20]))  # 15
print(solution.minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))  # 6
