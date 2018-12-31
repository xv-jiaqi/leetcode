class Solution:
    def getItemByIndex(self, targetList, index):
        if len(targetList) <= index:
            return None
        return targetList[index]

    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        s_dict = {}
        t_dict = {}

        if len(s) >= len(t):
            iterator = len(s)
        else:
            iterator = len(t)

        for i in range(iterator):
            if s_dict.get(self.getItemByIndex(s, i)):
                s_dict[self.getItemByIndex(s, i)] += 1
            else:
                s_dict[self.getItemByIndex(s, i)] = 1

            if t_dict.get(self.getItemByIndex(t, i)):
                t_dict[self.getItemByIndex(t, i)] += 1
            else:
                t_dict[self.getItemByIndex(t, i)] = 1

        for key in s_dict.keys():
            if s_dict.get(key) != t_dict.get(key):
                return False

        return True


s = Solution()
print(s.isAnagram("ab", "a"))
