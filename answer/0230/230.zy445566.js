/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (root==null) {return null}
    let list = [];
    function forTree(node) {
        list.push(node.val);
        if (node.left!=null) {
            forTree(node.left)
        }
        if (node.right!=null) {
            forTree(node.right)
        }
    }
    forTree(root)
    list.sort((a,b)=>{return a-b;})
    return list[k-1];
};