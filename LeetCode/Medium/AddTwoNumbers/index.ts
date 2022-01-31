class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  return sumList(l1, l2);
}

function sumList(l1: ListNode, l2: ListNode): ListNode {
  let totalRoot: ListNode;
  let sumNextHouse = 0;

  while (l1 != null || l2 != null) {
    let number1 = 0;
    let number2 = 0;

    if (l1 != null) {
      number1 = l1.val;
      l1 = l1.next;
    }

    if (l2 != null) {
      number2 = l2.val;
      l2 = l2.next;
    }

    let resultSum = number1 + number2 + sumNextHouse;

    if (resultSum >= 10) {
      resultSum -= 10;
      sumNextHouse = 1;
    } else {
      sumNextHouse = 0;
    }

    totalRoot = addNodeToList(resultSum, totalRoot);
  }

  if (sumNextHouse) totalRoot = addNodeToList(1, totalRoot);

  return totalRoot;
}

function addNodeToList(value: number, root: ListNode): ListNode {
  if (root) {
    let node = root;

    while (node.next) node = node.next;

    node.next = new ListNode(value);
  } else {
    return new ListNode(value);
  }

  return root;
}
