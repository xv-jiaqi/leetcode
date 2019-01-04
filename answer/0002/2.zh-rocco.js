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
  return array2ListNode(arrayAdd(listNode2Array(l1), listNode2Array(l2)));
};

function arrayAdd(a1, a2) {
  const arr = [];
  let max = Math.max(a1.length, a2.length);
  let carry = 0;

  for (let i = 0; i < max; i++) {
    const add = (a1[i] || 0) + (a2[i] || 0) + carry;
    carry = add >= 10 ? 1 : 0;
    arr.push(add % 10);
  }

  if (carry) {
    arr.push(1);
  }

  return arr;
}

function listNode2Array(listNode) {
  const arr = [];

  (function transfer(ln) {
    if (ln.val !== undefined) {
      arr.push(ln.val);
    }
    if (ln.next) {
      transfer(ln.next);
    }
  })(listNode);

  return arr;
}

function array2ListNode(arr) {
  const len = arr.length - 1;
  let ln = {};
  let i = len;

  while (i >= 0) {
    ln = {
      val: arr[i],
      next: i === len ? null : ln
    };
    i--;
  }

  return ln;
}
