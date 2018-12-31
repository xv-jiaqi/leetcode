# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def sortList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """

        result = []
        node = head

        while node is not None:
            result.append(node.val)
            node = node.next

        result.sort()
        return result
