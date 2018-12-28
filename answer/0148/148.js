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
var sortList = function(head) {
    if (head==null) {return head}
    let node = head;
    let list = [];
    while (node!=null) {
        list.push(node.val)
        node = node.next;
    }
    list.sort((a,b)=>{return a-b;});
    head = new ListNode(list[0]);
    node = head;
    for (let i=1;i<list.length;i++) {
        node.next = new ListNode(list[i]);
        node = node.next;
    }
    return head;
};