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
const mergeTwoLists = function (l1, l2) {
  let mergeList = new ListNode(-1),
    currentList = mergeList;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      currentList.next = l1;
      l1 = l1.next;
    } else {
      currentList.next = l2;
      l2 = l2.next;
    }
    currentList = currentList.next;
  }

  currentList.next = (l1 === null) ? l2 : l1;
  return mergeList.next;
};