# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """

        val_list = [head.val]
        node = head
        node_count = 1

        while node.next:
            node = node.next
            val_list.append(node.val)
            node_count += 1

        return val_list[int(node_count / 2):]
