# FIXME 有时候会超时, 需要优化
class Solution:
    def __init__(self):
        self.input_char_list = []

    def extend_palindrome(self, i):
        if i == len(self.input_char_list) - 1:
            return self.input_char_list[-1]

        back = i - 1
        forward = i + 1

        odd_pal = [self.input_char_list[i]]

        while back >= 0 and forward < len(self.input_char_list):
            if self.input_char_list[back] == self.input_char_list[forward]:
                odd_pal = self.input_char_list[back: forward + 1]
                back -= 1
                forward += 1
            else:
                back = -1

        longest_pal = ''.join(odd_pal)

        if self.input_char_list[i] == self.input_char_list[i + 1]:
            back = i - 1
            forward = i + 2

            even_pal = self.input_char_list[i: i + 2]

            while back >= 0 and forward < len(self.input_char_list):
                if self.input_char_list[back] == self.input_char_list[forward]:
                    even_pal = self.input_char_list[back: forward + 1]
                    back -= 1
                    forward += 1
                else:
                    back = -1

            if len(even_pal) > len(odd_pal):
                longest_pal = ''.join(even_pal)

        return longest_pal

    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """

        if len(s) < 2:
            return s

        self.input_char_list = list(s)
        longest_pal = ''

        for i in range(len(s)):
            pal = self.extend_palindrome(i)
            if len(longest_pal) < len(pal):
                longest_pal = pal

        return longest_pal


solution = Solution()
print(solution.longestPalindrome("bab"))
print(solution.longestPalindrome("cbbd"))
