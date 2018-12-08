# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def splitListToParts(self, root, k):
        """
        :type root: ListNode
        :type k: int
        :rtype: List[ListNode]
        """

        val_list = []
        node = root

        while node is not None:
            val_list.append(node.val)
            node = node.next

        larger_parts_count = len(val_list) % k
        normal_part_size = int(len(val_list) / k)

        larger_part_size = normal_part_size + 1
        result = []

        for i in range(k):
            if i < larger_parts_count:
                result.append(val_list[larger_part_size * i: larger_part_size * (i + 1)])
            else:
                result.append(val_list[normal_part_size * i + larger_parts_count: normal_part_size * (
                            i + 1) + larger_parts_count])

        return result
