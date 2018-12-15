class Solution:
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        """
        point_1 = m - 1
        point_2 = n - 1

        while point_1 >= 0 or point_2 >= 0:
            if point_2 < 0:
                return
            elif point_1 < 0:
                nums1[:point_2 + 1] = nums2[:point_2 + 1]
                return

            if nums1[point_1] >= nums2[point_2]:
                nums1[point_1 + point_2 + 1] = nums1[point_1]
                point_1 -= 1
            else:
                nums1[point_1 + point_2 + 1] = nums2[point_2]
                point_2 -= 1


solution = Solution()

nums_1 = [2, 0]
solution.merge(nums_1, 1, [1], 1)
print(nums_1)
