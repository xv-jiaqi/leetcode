# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """

        l1_node = l1
        l1_val_list = [l1_node.val]

        while l1_node.next:
            l1_node = l1_node.next
            l1_val_list.append(l1_node.val)

        l2_node = l2
        l2_val_list = [l2_node.val]

        while l2_node.next:
            l2_node = l2_node.next
            l2_val_list.append(l2_node.val)

        val1 = int("".join(map(lambda num: str(num), l1_val_list)))
        val2 = int("".join(map(lambda num: str(num), l2_val_list)))

        return list(map(lambda char: int(char), str(val1 + val2)))
