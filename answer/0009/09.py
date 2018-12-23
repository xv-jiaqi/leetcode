# FIXME 字符串解法效率极低
class Solution:
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """

        if x < 0:
            return False

        if x < 10:
            return True

        char_list = list(str(x))

        forward_pointer = 0
        backward_pointer = len(char_list) - 1

        while backward_pointer >= forward_pointer:
            if char_list[forward_pointer] == char_list[backward_pointer]:
                forward_pointer += 1
                backward_pointer -= 1
            else:
                return False

        return True
