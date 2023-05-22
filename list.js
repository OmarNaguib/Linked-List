// node object
function ListNode(value = null, next = null) {
  return { value, next };
}
// List functions
function append(value) {
  // if list is empty
  if (!this.head) this.head = ListNode(value);
  else {
    let currentNode = this.head;
    while (currentNode.next) currentNode = currentNode.next;
    currentNode.next = ListNode(value);
  }
}

function prepend(value) {
  this.head = ListNode(value, this.head);
}

function size() {
  let currentNode = this.head;
  let count = 0;
  while (currentNode) {
    count += 1;
    currentNode = currentNode.next;
  }
  return count;
}
// list object
function LinkedList(head = null) {
  return {
    head,
    append,
    prepend,
    size,
  };
}

const list = LinkedList();
list.prepend(1);
list.prepend(3);
console.log(list.size());
