// node object
function ListNode(value = null, next = null) {
  return { value, next };
}
// List functions
function append(value) {
  // if list is empty
  if (!this.head) {
    this.head = ListNode(value);
  } else {
    let currentNode = this.head;
    while (currentNode.next) currentNode = currentNode.next;
    currentNode.next = ListNode(value);
  }
}
// list object
function LinkedList(head = null) {
  return {
    head,
    append,
  };
}

const list = LinkedList();
list.append(3);
list.append(3);
console.log(list);
