class Solution:
    def countBits(self, num):
        """
        :type num: int
        :rtype: List[int]
        """

        result = []
        bin_count = 1

        bin_threshold = self.bin_pow(bin_count)
        counter = 0

        while counter <= num:
            if counter < bin_threshold:
                if counter == 0:
                    result.append(0)
                elif counter == 1:
                    result.append(1)
                else:
                    result.append(result[counter - bin_threshold] + 1)
                counter += 1
            else:
                bin_count += 1
                bin_threshold = self.bin_pow(bin_count)

        return result

    def bin_pow(self, decimal):
        result = 1
        for item in range(decimal):
            result *= 2

        return result


s = Solution()
print(s.countBits(5))
print(s.countBits(7))
print(s.countBits(15))
