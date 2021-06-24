// 2. 两数相加

// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// v1: js 没有ListNode类型，链表类型结构类似对象嵌套，每个对象中存储有指向下一个对象的key
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
const addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let current = result;
  let n = 0;
  while (l1 || l2) {
    const n1 = l1 && l1.val ? l1.val : 0;
    const n2 = l2 && l2.val ? l2.val : 0;

    const sum = n1 + n2 + n;
    n = parseInt(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (n > 0) current.next = new ListNode(n);
  return result.next;
};
