# FIXME 没写对

class Solution:
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """

        forward_pointer = 0
        backward_pointer = len(height) - 1

        max_area = 0

        while backward_pointer > forward_pointer:
            cur_area = min(height[forward_pointer], height[backward_pointer]) * (backward_pointer - forward_pointer)
            max_area = max(cur_area, max_area)

            if height[forward_pointer + 1] - height[forward_pointer] >= height[backward_pointer] - height[backward_pointer - 1]:
                forward_pointer += 1
            else:
                backward_pointer -= 1

        return max_area


solution = Solution()
print(solution.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
print(solution.maxArea([1, 2, 3, 4, 5, 6]))
print(solution.maxArea([1, 3, 2, 5, 25, 24, 5]))
