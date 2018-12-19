# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


root_node = TreeNode(3)
node_1_1 = TreeNode(9)
node_1_2 = TreeNode(20)

root_node.left = node_1_1
root_node.right = node_1_2

node_2_1 = TreeNode(15)
node_2_2 = TreeNode(7)

node_1_2.left = node_2_1
node_1_2.right = node_2_2


class Solution:
    def zigzagLevelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """

        if root is None:
            return []

        queue = [root]
        new_queue = []
        level = 0

        result = []

        while len(queue) != 0:
            level_result = []
            level += 1

            for node in queue:
                level_result.append(node.val)
                if node.left:
                    new_queue.append(node.left)
                if node.right:
                    new_queue.append(node.right)

            queue = new_queue
            new_queue = []

            if level % 2 == 0:
                level_result.reverse()

            result.append(level_result)

        return result


solution = Solution()
print(solution.zigzagLevelOrder(root_node))
