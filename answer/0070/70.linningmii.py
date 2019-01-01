class Solution:
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """

        dp = []

        for i in range(1, n + 1):
            if i == 1:
                dp.append(1)
            elif i == 2:
                dp.append(2)
            else:
                dp.append(dp[-2] + dp[-1])

        return dp[-1]
