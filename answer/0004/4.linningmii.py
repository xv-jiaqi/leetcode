# FIXME 这个不是正确解, 不满足时间复杂度


class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """

        pointer1 = 0
        pointer2 = 0

        merged_list = []

        while pointer1 < len(nums1) or pointer2 < len(nums2):
            if pointer1 >= len(nums1):
                merged_list.append(nums2[pointer2])
                pointer2 += 1
                continue

            if pointer2 >= len(nums2):
                merged_list.append(nums1[pointer1])
                pointer1 += 1
                continue

            if nums1[pointer1] <= nums2[pointer2]:
                merged_list.append(nums1[pointer1])
                pointer1 += 1
            else:
                merged_list.append(nums2[pointer2])
                pointer2 += 1

        merged_list_length = len(merged_list)

        if merged_list_length % 2 == 1:
            return merged_list[int(merged_list_length / 2)]
        else:
            return (merged_list[int(merged_list_length / 2) - 1] + merged_list[int(merged_list_length / 2)]) / 2


solution = Solution()
print(solution.findMedianSortedArrays([1, 3], [2]))
print(solution.findMedianSortedArrays([1, 2], [3, 4]))
