// node object
function ListNode(value = null, next = null) {
  return { value, next };
}
// List methods
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

// no need for head() since it can be accesed as a property

function tail() {
  let currentNode = this.head;
  while (currentNode.next) currentNode = currentNode.next;
  return currentNode;
}
function at(index) {
  let currentNode = this.head;
  let i = index;
  while (currentNode && i > 0) {
    currentNode = currentNode.next;
    i -= 1;
  }
  return currentNode || null;
}
function pop() {
  if (!this.head.next) this.head = null;
  else {
    let currentNode = this.head;
    while (currentNode.next.next) currentNode = currentNode.next;
    currentNode.next = null;
  }
}
function contains(value) {}
function find() {}
function toString() {}
function insertAt(value, index) {}
function removeAt(index) {}

// list object
function LinkedList(head = null) {
  return {
    head,
    append,
    prepend,
    size,
    tail,
    at,
    pop,
  };
}

const list = LinkedList();
list.prepend(1);
list.prepend(3);
// console.log(list.size());
// console.log(list.head);
// console.log(list.tail());
// console.log(list.at(0), list.at(1), list.at(2));

console.log(list.head);
list.pop();
console.log(list.head);
list.pop();
console.log(list.head);
