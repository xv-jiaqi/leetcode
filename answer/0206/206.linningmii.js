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
function reverseList(head) {
    if (!head || !head.next) {
        return head;
    }

    let cur = head;
    let prev = null;

    while (cur) {
        const next = cur.next
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev
}
