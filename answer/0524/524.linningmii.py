class Solution:
    def findLongestWord(self, s, d):
        """
        :type s: str
        :type d: List[str]
        :rtype: str
        """

        result = ""

        for word in d:
            if self.include_extend(s, word):
                if len(word) > len(result):
                    result = word
                elif len(word) == len(result) and word < result:
                    result = word

        return result

    def include_extend(self, outer, inner):
        inner_pointer = 0
        result_str = ""

        for i in range(len(outer)):
            if inner_pointer == len(inner):
                return result_str == inner

            if outer[i] == inner[inner_pointer]:
                result_str += inner[inner_pointer]
                inner_pointer += 1

        return result_str == inner


solution = Solution()
print(solution.findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]))  # apple
print(solution.findLongestWord("abpcplea", ["a", "b", "c"]))  # a
print(solution.findLongestWord("bab", ["ba", "ab", "a", "b"]))  # ab
