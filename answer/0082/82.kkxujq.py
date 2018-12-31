# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    node_counter = 0

    def find_next_different_node(self, head):
        self.node_counter += 1

        if head.next is None:
            return None

        if head.val == head.next.val:
            return self.find_next_different_node(head)

        return head

    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        result = []

        node = head

        while node is not None:
            node = self.find_next_different_node(node)
            if self.node_counter == 1:
                result.append(node)
            self.node_counter = 0

        return result


s = Solution()
