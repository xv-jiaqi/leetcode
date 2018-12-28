/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (head==null) {return head;}
    if (k<=1) {return head;}
    function reverseList(startNode,n) {
        if (n==0) {return startNode;}
        let endNode = startNode;
        let endPnode = startNode;
        for(let i=0;i<n;i++) {
            endPnode = endNode;
            endNode = endNode.next;
        }
        if (n==1) {
            let endNext = endNode.next;
            endNode.next = startNode;
            endPnode.next = startNode;
            startNode.next = endNext;
        } else {
            let endNext = endNode.next;
            endNode.next = startNode.next;
            endPnode.next = startNode;
            startNode.next = endNext;
        }
        if(n-2>0) {
            let changeNode = endNode.next;
            endNode.next = reverseList(changeNode,n-2).startNode;
        }
        
        return {startNode:endNode,endNode:startNode};
    }
    let i=0;let nodeI = head;
    let j=0;let nodeJ = head;
    let nodeK = head;
    let isFirst = true;
    let n=k-1; 
    while(nodeJ != null) {
        if (j-i>n || (nodeJ.next == null && j-i>=n)) {
            if(isFirst) {
                let resList = reverseList(nodeI,n);
                head = resList.startNode;
                nodeK = resList.endNode;
                isFirst = false;
            } else {
                let resList = reverseList(nodeI,n);
                nodeK.next = resList.startNode;
                nodeK = resList.endNode;
            }
            if (nodeI.next==null) {
                break;
            }
            nodeI = nodeJ;
            i=0;
            j=0;
        }
        nodeJ = nodeJ.next;
        j++;
        
    }
    return head;
};