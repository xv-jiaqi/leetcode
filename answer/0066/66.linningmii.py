class Solution:
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        result = digits[:]

        for i in range(len(result) - 1, -1, -1):
            if result[i] == 9:
                result[i] = 0

                if i == 0:
                    result.insert(0, 1)
            else:
                result[i] += 1
                return result

        return result
