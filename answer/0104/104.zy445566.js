/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root==null) {return 0;}
    let dep = 0;
    function forTree(node,depth) {
        depth++;
        if (depth>dep) {
            dep = depth;
        }
        if (node.left!=null) {
            forTree(node.left,depth)
        }
        if (node.right!=null) {
            forTree(node.right,depth)
        }
    }
    forTree(root,dep)
    return dep
};