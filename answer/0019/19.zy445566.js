/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p1 = head;
    let p2 = head;
    let disance = 0;
    while(p1.next!=null) {
        p1 = p1.next;
        if (disance<n) {
            disance++;
        } else {
            p2 = p2.next;
        }
        if (p1.next==null) {
            if (disance<n) {
                head=p2.next;
            } else {
                p2.next = p2.next.next;
            }
        }
    }
    if (disance == 0 && n>0) {return null}
    return head;
};