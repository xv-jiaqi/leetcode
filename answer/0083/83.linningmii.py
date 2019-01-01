# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """

        result = []
        node = head

        while node is not None:
            if len(result) == 0:
                result.append(node.val)
            elif result[-1] != node.val:
                result.append(node.val)

            node = node.next

        return result
