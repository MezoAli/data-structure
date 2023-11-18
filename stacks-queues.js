class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
      return undefined;
    }
    const TopValue = this.top.value;
    this.top = this.top.next;
    this.length--;
    return TopValue;
  }

  peek() {
    if (this.length === 0) {
      return this;
    }
    return this.top;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Youtube");
myStack.push("Discord");
console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.peek());

console.log(myStack);
