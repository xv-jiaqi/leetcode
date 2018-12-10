class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """

        hash_table = {}
        longest_length = 0

        for i in range(len(s)):
            if hash_table.get(s[i]):
                cur_length = len(hash_table.keys())

                if cur_length > longest_length:
                    longest_length = cur_length

                new_hash_table = {
                    s[i]: i
                }

                # 复制旧hash表中的非重复部分到新hash表中
                for key in hash_table.keys():
                    if hash_table.get(key) > hash_table.get(s[i]):
                        new_hash_table[key] = hash_table.get(key)

                hash_table = new_hash_table
            else:
                # 记录该字符出现的索引
                hash_table[s[i]] = i

        last_length = len(hash_table.keys())

        if last_length > longest_length:
            longest_length = last_length

        return longest_length


s = Solution()
print(s.lengthOfLongestSubstring("abcabcbb"))
print(s.lengthOfLongestSubstring("bbbbb"))
print(s.lengthOfLongestSubstring("pwwkew"))
print(s.lengthOfLongestSubstring(" "))
print(s.lengthOfLongestSubstring("dvdf"))
