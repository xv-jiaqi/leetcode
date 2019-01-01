class CountItem:
    def __init__(self, key, count):
        self.key = key
        self.count = count


class Solution:
    def sort_method(self, item):
        return item.count

    def frequencySort(self, s):
        """
        :type s: str
        :rtype: str
        """

        d_dict = {}

        for i in range(len(s)):
            if d_dict.get(s[i]):
                d_dict[s[i]] += 1
            else:
                d_dict[s[i]] = 1

        keys = d_dict.keys()
        sorted_list = []
        for key in keys:
            sorted_list.append(CountItem(key, d_dict.get(key)))

        sorted_list.sort(key=self.sort_method, reverse=True)

        result = ''
        for item in sorted_list:
            for char in range(item.count):
                result += item.key

        return result


solution = Solution()
print(solution.frequencySort("cccaaa"))
print(solution.frequencySort("tree"))
