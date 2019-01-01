class Solution:
    def isPowerOfThree(self, n):
        """
        :type n: int
        :rtype: bool
        """

        if n == 0:
            return False

        # 3^20次方超出32位整形范围
        return n > 0 and pow(3, 19) % n == 0


solution = Solution()

print(solution.isPowerOfThree(27))  # True
print(solution.isPowerOfThree(45))  # False
