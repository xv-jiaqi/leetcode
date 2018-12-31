# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


root_node = TreeNode(1)

node_2_1 = TreeNode(2)
node_2_2 = TreeNode(2)

root_node.left = node_2_1
root_node.right = node_2_2

node_3_1 = TreeNode(3)
node_3_2 = TreeNode(3)

node_2_1.left = node_3_1
node_2_2.right = node_3_2

node_4_1 = TreeNode(4)
node_4_2 = TreeNode(4)

node_3_1.left = node_4_1
node_3_2.right = node_4_2


class Solution:
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root is None:
            return True

        diff = abs(self.get_tree_height(root.left, 0) - self.get_tree_height(root.right, 0))

        if diff > 1:
            return False

        return self.isBalanced(root.left) and self.isBalanced(root.right)

    def get_tree_height(self, node, height):
        if node is None:
            return height

        height += 1

        if node.left is None and node.right is None:
            return height

        return max(self.get_tree_height(node.left, height), self.get_tree_height(node.right, height))


solution = Solution()
print(solution.isBalanced(root_node))  # False
