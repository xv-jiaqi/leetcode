class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        hash_dict = {}

        for i in range(len(nums)):
            num = nums[i]

            if hash_dict.get(target - num) is not None:
                return [hash_dict.get(target - num), i]

            hash_dict[num] = i


solution = Solution()
print(solution.twoSum([2, 7, 11, 15], 9))
