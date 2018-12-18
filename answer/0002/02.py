# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def get_val(self, node):
        if node is not None:
            return node.val
        else:
            return 0

    def digit_up(self, node):
        if node.next is not None:
            node.next.val += 1
            if node.next.val == 10:
                node.next.val = 0
                self.digit_up(node.next)
        else:
            node.next = ListNode(1)

    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """

        l1_node = l1
        l2_node = l2

        result = []

        while l1_node or l2_node:
            val1 = self.get_val(l1_node)
            val2 = self.get_val(l2_node)

            if val1 + val2 >= 10:
                result.append(val1 + val2 - 10)
                self.digit_up(l1_node)
            else:
                result.append(val1 + val2)

            print(result)

            if l1_node:
                l1_node = l1_node.next

            if l2_node:
                l2_node = l2_node.next

        return result


node1_0 = ListNode(3)
node1_1 = ListNode(4)
node1_2 = ListNode(2)

node1_0.next = node1_1
node1_1.next = node1_2

node2_0 = ListNode(4)
node2_1 = ListNode(6)
node2_2 = ListNode(5)

node2_0.next = node2_1
node2_1.next = node2_2

solution = Solution()
print(solution.addTwoNumbers(node1_0, node2_0))
