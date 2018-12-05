class Solution:
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        sorted_nums = sorted(nums)
        result = []

        for i in range(len(sorted_nums)):
            if i == 0:
                continue

            if sorted_nums[i] == sorted_nums[i - 1]:
                continue
            elif i == 1:
                result.append(sorted_nums[0])
            elif sorted_nums[i - 2] != sorted_nums[i - 1]:
                result.append(sorted_nums[i - 1])

            if i == len(sorted_nums) - 1 and sorted_nums[i - 1] != sorted_nums[i]:
                result.append(sorted_nums[i])

        return result


s = Solution()

print(s.singleNumber([1, 2, 1, 3, 2, 5]))  # [3, 5]
print(s.singleNumber([0, 1, 1, 2]))  # [0, 2]
