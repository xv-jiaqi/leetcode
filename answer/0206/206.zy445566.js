/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head==null) {return head;}
    let newHead = null;
    let reverseTo = function(prenode,node) {
        if (node==null) {
            newHead = prenode;
            return;
        }
        if (node.next==null) {
            newHead = node;
            node.next = prenode;
            prenode.next = null;
            return;
        }
        reverseTo(node,node.next);
        node.next = prenode;
        prenode.next = null;
    }
    reverseTo(head,head.next);
    return newHead;
};