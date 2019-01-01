class Solution:
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """

        hash_table = {}

        result = []

        for i in range(len(nums)):
            if hash_table.get(nums[i]):
                hash_table[nums[i]]['count'] += 1
            else:
                hash_table[nums[i]] = {'num': nums[i], 'count': 1}

        for item in sorted(hash_table.values(), key=lambda x: x['count'], reverse=True):
            if len(result) >= k:
                return result

            result.append(item['num'])

        return result


solution = Solution()
print(solution.topKFrequent([1, 1, 1, 2, 2, 3], 2))  # [1, 2]
print(solution.topKFrequent([1], 1))  # [1]
