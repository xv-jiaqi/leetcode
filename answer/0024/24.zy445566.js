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
var swapPairs = function(head) {
    function swapHeadNode(nowNode) {
        if (nowNode.next!=null) {
            let tmpNode = nowNode.next;
            nowNode.next =  nowNode.next.next;
            tmpNode.next = nowNode;
            return [tmpNode,nowNode];
        }
        return null;
    }
    function swapNode(nowNode) {
        let nowPNode = nowNode;
        nowNode = nowNode.next;
        if (nowNode!=null && nowNode.next!=null) {
            let tmpNode = nowNode.next;
            nowNode.next =  nowNode.next.next;
            tmpNode.next = nowNode;
            nowPNode.next = tmpNode;
            return nowNode;
        }
        return null;
    }
    if (head==null) {return null;}
    if (head.next ==null) {return head;}
    let resHead = swapHeadNode(head);
    head = resHead[0];
    let nowNode = resHead[1];
    while(nowNode!=null) {
        nowNode = swapNode(nowNode);
    }
    return head;
};