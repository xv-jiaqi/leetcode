/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newl_add = 0;
    function getAdd(l1_val,l2_val){
        let newl_val = l1_val+l2_val+newl_add;
        newl_add = 0;
        while (newl_val>=10) {
            newl_val-=10;
            newl_add++
        }
        return newl_val;
    }
    let newl = new ListNode(getAdd(l1.val,l2.val))
    let newl_head = newl;
    let l1_head = l1;
    let l2_head = l2;
    while (l1.next!=null || l2.next!=null || newl_add>0) {
        let l1_val = 0;
        let l2_val = 0;
        if (l1.next!=null) {l1_val = l1.next.val;}
        if (l2.next!=null) {l2_val = l2.next.val;}
        let newl_val = getAdd(l1_val,l2_val);
        newl.next = new ListNode(newl_val);
        newl = newl.next;
        if(l1.next!=null){l1 = l1.next;}
        if(l2.next!=null){l2 = l2.next;}
    }
    return newl_head
};