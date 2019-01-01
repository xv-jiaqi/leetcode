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
/**
 * 1. 使用两个指针，分别指向两条链表中当前待比较的节点，创建一条新链表，用于存放两条链表中的节点;
 * 2. 每次比较完节点元素的大小，将较小的元素节点引入新链表，指针向后移，这个过程持续到指针中有一个为空;
 * 3. 把另一个非空指针指向链表的剩余部分，链接到新链表之后，这个归并过程就完成了。
 */
const mergeTwoLists = function(l1, l2) {
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
    currentList = currentList.next; // 当前节点后移
  }

  currentList.next = (l1 === null) ? l2 : l1; // 剩余链表合并

  return mergeList.next;
};