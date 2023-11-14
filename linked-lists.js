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
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.prepend(9);
myLinkedList.insert(99, 23);
myLinkedList.insert(2, 100);
myLinkedList.insert(2, 101);

console.log(myLinkedList);
