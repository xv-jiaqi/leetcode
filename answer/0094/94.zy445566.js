/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let resList = [];
    function midEach(node) {
        if (node==null){return}
        if (node.left!=null) {
            if (node.left instanceof TreeNode) {
                midEach(node.left)
            } else {
                resList.push(node.left)
            }  
        }
        if (node.val!=null) {
            resList.push(node.val)
        }
        if (node.right!=null) {
            if (node.right instanceof TreeNode) {
                midEach(node.right)
            } else {
                resList.push(node.right)
            }
        }
    }
    midEach(root);
    return resList
};