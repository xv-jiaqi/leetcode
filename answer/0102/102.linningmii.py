# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """

        if root is None:
            return []

        queue = [root]
        new_queue = []
        result = []

        while len(queue) != 0:
            level_result = []

            for node in queue:
                level_result.append(node.val)

                if node.left:
                    new_queue.append(node.left)
                if node.right:
                    new_queue.append(node.right)

            queue = new_queue
            new_queue = []
            result.append(level_result)

        return result
