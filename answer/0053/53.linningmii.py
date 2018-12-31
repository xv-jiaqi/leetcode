class Solution:
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        dp = [nums[0]]

        for num in nums[1:]:
            if dp[-1] < 0:
                dp.append(num)
            elif dp[-1] + num > 0:
                dp.append(dp[-1] + num)
            else:
                dp.append(num)

        return max(dp)
