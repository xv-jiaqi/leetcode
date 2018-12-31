/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    function isEmpty(listArray) {
        let isEmpty = true;
        for(let i=0;i<listArray.length;i++) {
            if (listArray[i]!=null) { isEmpty = false;}
        }
        return isEmpty;
    }
    function maxRes(listArray) {
        let tmpVal = Infinity;
        let tmpIndex  = -1;
        for(let i=0;i<listArray.length;i++) {
            if (listArray[i]==null) {continue;}
            if (listArray[i].val<tmpVal) {
                tmpIndex = i;
                tmpVal = listArray[i].val;
            }
        }
        if (tmpIndex>-1) {
            listArray[tmpIndex] = listArray[tmpIndex].next;
            return tmpVal;
        }
    }
    if (isEmpty(lists)){return null;}
    let head = new ListNode(maxRes(lists));
    let nodeTmp = head;
    while (!isEmpty(lists)) {
        nodeTmp.next = new ListNode(maxRes(lists));
        nodeTmp = nodeTmp.next;
    }
    return head;
};