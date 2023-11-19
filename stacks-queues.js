class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// implement stacks using linked lists

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
      //   this.top.next = newNode;
      //   this.bottom.next = null;

      this.length++;
      return this;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const TopValue = this.top.value;
    this.top = this.top.next;
    this.length--;
    return TopValue;
  }

  peek() {
    if (this.length === 0) {
      return null;
    }
    return this.top;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Youtube");
myStack.push("Discord");
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.peek());

// console.log(myStack);

// implement stack using Arrays

class StackArray {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  peek() {
    if (this.data.length === 0) {
      return null;
    }
    return this.data[this.data.length - 1];
  }

  pop() {
    if (this.data.length === 0) {
      return null;
    }
    const topItem = this.data[this.data.length - 1];
    this.data.pop();
    return topItem;
  }
}

const myStack1 = new StackArray();
myStack1.push("Google");
myStack1.push("Youtube");
myStack1.push("Discord");
// console.log(myStack1.peek());
// myStack1.pop();
// myStack1.pop();
// myStack1.pop();

// console.log(myStack1);

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first.value;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Google");
myQueue.enqueue("Youtube");
myQueue.enqueue("Discord");
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();

console.log(myQueue);
