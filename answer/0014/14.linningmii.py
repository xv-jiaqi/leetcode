class Solution:
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """

        if len(strs) == 0:
            return ''

        prefix = ''

        while len(prefix) < len(strs[0]):
            for i in range(len(strs)):
                if i == 0:
                    prefix += strs[0][len(prefix)]
                    continue

                if strs[i][0: len(prefix)] != prefix:
                    return prefix[:-1]

        return prefix
