class Solution(object):
    def toLowerCase(self, str):
        """
        :type str: str
        :rtype: str
        """

        result = ''

        for char in str:
            # ASCII Code A and Z
            if 65 <= ord(char) <= 90:
                result += chr(ord(char) + 32)
            else:
                result += char

        return result
