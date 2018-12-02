class Solution:
    def thirdMax(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max_num = nums[0]
        second_num = None
        third_num = None

        for i in range(len(nums)):
            if i == 0:
                continue

            # 对比 max_num 并尝试在 second_num 为空时为 second_num 赋值
            if nums[i] > max_num:
                third_num = second_num
                second_num = max_num
                max_num = nums[i]
                continue
            elif nums[i] == max_num:
                continue
            elif second_num is None:
                second_num = nums[i]
                continue

            if second_num is None:
                continue

            # 对比 second_num 并尝试在 third_num 为空时为 third_num 赋值
            if nums[i] > second_num:
                third_num = second_num
                second_num = nums[i]
                continue
            elif nums[i] == second_num:
                continue
            elif third_num is None:
                third_num = nums[i]
                continue

            if third_num is None:
                continue

            if nums[i] > third_num:
                third_num = nums[i]
                continue

        if third_num is not None:
            return third_num
        else:
            return max_num


s = Solution()
print(s.thirdMax([1, 1, 2, 1]))
print(s.thirdMax([1, 2]))
print(s.thirdMax([1, 2, 2]))
