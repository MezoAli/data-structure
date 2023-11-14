// 10 ---> 5 ----> 16

// const myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode?.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this;
    }
    let newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    let afterNode = leader?.next;
    leader.next = newNode;
    newNode.next = afterNode;
    this.length++;
  }

  remove(index) {
    let leader = this.traverseToIndex(index - 1);
    const nodeToRemoved = leader.next;
    leader.next = nodeToRemoved.next;
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.prepend(9);
// myLinkedList.insert(99, 23);
// myLinkedList.insert(2, 100);
// myLinkedList.insert(2, 101);
// myLinkedList.remove(2);

// console.log(myLinkedList);

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new DoublyNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode?.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this;
    }
    let newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    let afterNode = leader?.next;
    leader.next = newNode;
    newNode.next = afterNode;
    this.length++;
  }

  remove(index) {
    let leader = this.traverseToIndex(index - 1);
    const nodeToRemoved = leader.next;
    leader.next = nodeToRemoved.next;
    this.length--;
    return this;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
console.log(myDoublyLinkedList);
