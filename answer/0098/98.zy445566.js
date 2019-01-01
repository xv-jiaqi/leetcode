/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function checkRoot(rootValList,nowVal) {
        for (let rootVal of rootValList) {
            if (rootVal.op=='left' && nowVal>=rootVal.val) {
                return false;
            }
            if (rootVal.op=='right' && nowVal<=rootVal.val) {
                return false;
            }
        }
        return true;
    }
    function checkNode (node,rootValList=[]) {
        if (node.left!=null) {
            let leftRootValList = [...rootValList];
            leftRootValList.push({val:node.val,op:'left'})
            if(checkRoot(leftRootValList,node.left.val)==false) {
                return false;
            }
            if(checkNode (node.left,leftRootValList)==false){
                return false;
            }
        }
        if (node.right!=null) {
            let rightRootValList = [...rootValList];
            rightRootValList.push({val:node.val,op:'right'})
            if(checkRoot(rightRootValList,node.right.val)==false) {
                return false;
            }
            if(checkNode (node.right,rightRootValList)==false){
                return false;
            }
        }
        return true;
    }
    if (root==null) {return true;}
    return checkNode (root)
};