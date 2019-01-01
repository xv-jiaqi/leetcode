# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """

        if head is None:
            return []

        node = head
        reverse_list = [head.val]

        while node.next:
            node = node.next
            reverse_list.insert(0, node.val)

        return reverse_list
