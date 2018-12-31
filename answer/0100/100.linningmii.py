# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


root = TreeNode(1)
left = TreeNode(2)
right = TreeNode(3)

root.left = left
root.right = right


# 实际问题即为以相同的顺序遍历两颗二叉树
# 递归前序遍历版本
class Solution1:
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """

        result_p = self.traverse_tree(p)
        result_q = self.traverse_tree(q)

        if len(result_p) != len(result_q):
            return False

        for i in range(len(result_p)):
            if result_p[i] != result_q[i]:
                return False

        return True

    def traverse_tree(self, node):
        result = []

        if node is None:
            # 区分空节点
            result.append(None)
        else:
            result.append(node.val)
            result += self.traverse_tree(node.left) + self.traverse_tree(node.right)

        return result


# 非递归前序遍历版本, 相比递归循环的优势在于便于提前终止, 不需要等待整颗二叉树遍历完成
# 这个版本可以跑到100%
class Solution:
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """

        still_has_node = True

        # 用一个list来替代栈
        stack = []
        cur_p_node = p
        cur_q_node = q

        while still_has_node:
            # 判空
            if cur_p_node is None and cur_q_node is None:
                # 回到上一层节点
                if len(stack) == 0:
                    still_has_node = False
                    continue
                else:
                    parent_nodes = stack.pop(0)
                    cur_p_node = parent_nodes[0].right
                    cur_q_node = parent_nodes[1].right
                    continue

            elif cur_p_node is None or cur_q_node is None:
                return False

            # 比较值
            if cur_p_node.val != cur_q_node.val:
                return False

            stack.insert(0, [cur_p_node, cur_q_node])
            # 默认左子节点
            cur_p_node = cur_p_node.left
            cur_q_node = cur_q_node.left

        return True


solution = Solution()
print(solution.isSameTree(root, root))
