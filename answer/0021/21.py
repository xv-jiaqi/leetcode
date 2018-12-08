# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """

        result = []

        l1_node = l1
        l2_node = l2

        while l1_node is not None or l2_node is not None:
            if l1_node is None:
                result.append(l2_node.val)
                l2_node = l2_node.next
                continue

            if l2_node is None:
                result.append(l1_node.val)
                l1_node = l1_node.next
                continue

            if l1_node.val < l2_node.val:
                result.append(l1_node.val)
                l1_node = l1_node.next
            else:
                result.append(l2_node.val)
                l2_node = l2_node.next

        return result
