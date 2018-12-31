class Solution:
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        if len(nums) == 0:
            return 0

        if len(nums) <= 2:
            return max(nums)

        dp = [nums[0], max(nums[0], nums[1])]

        for i in range(2, len(nums)):
            dp.append(max(dp[i - 2] + nums[i], dp[i - 1]))

        return max(dp)


s = Solution()
print(s.rob([1, 2, 3, 1]))  # 4
print(s.rob([2, 7, 9, 3, 1]))  # 12
print(s.rob([2, 1, 1, 2]))  # 4
