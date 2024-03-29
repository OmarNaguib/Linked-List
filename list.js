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
function contains(value) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) return true;
    currentNode = currentNode.next;
  }
  return false;
}
function find(value) {
  let [currentNode, index] = [this.head, 0];
  while (currentNode) {
    if (currentNode.value === value) return index;
    currentNode = currentNode.next;
    index += 1;
  }
  return null;
}
function toString() {
  let currentNode = this.head;
  let string = "";
  while (currentNode) {
    string += `( ${currentNode.value} ) ->  `;
    currentNode = currentNode.next;
  }
  string += "null";
  return string;
}
function insertAt(value, index) {
  if (index === 0) {
    prepend(value);
    return;
  }
  const nodeBefore = this.at(index - 1);
  if (!nodeBefore) return;
  const newNode = ListNode(value);
  newNode.next = nodeBefore.next;
  nodeBefore.next = newNode;
}
function removeAt(index) {
  const nodeBefore = this.at(index - 1);
  if (!nodeBefore) return;
  if (!nodeBefore.next) return;
  nodeBefore.next = nodeBefore.next.next;
}

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
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const list = LinkedList();
list.prepend(1);
list.prepend(3);
// console.log(list.size());
// console.log(list.head);
// console.log(list.tail());
// console.log(list.at(0), list.at(1), list.at(2));

// console.log(list.head);
// list.pop();
// console.log(list.head);
// list.pop();
// console.log(list.head);

// console.log(list.contains(1), list.contains(1000), list.contains(3));

// console.log(list.find(1), list.find(2), list.find(3));

// console.log(list.toString());

list.insertAt(546546, 1);

console.log(list.head);

list.removeAt(1);
list.removeAt(1);
list.removeAt(1);
console.log(list.head);

list.insertAt(546546, 70);

list.removeAt(30);

console.log(list.head);
