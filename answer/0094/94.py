# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """

        result = []
        cur_node = root

        stack = []
        still_has_node = True

        while still_has_node:
            if cur_node is None:
                if len(stack) == 0:
                    still_has_node = False
                    continue
                else:
                    pop_up_node = stack.pop(0)
                    result.append(pop_up_node.val)
                    cur_node = pop_up_node.right
                    continue
            else:
                stack.insert(0, cur_node)
                cur_node = cur_node.left

        return result
