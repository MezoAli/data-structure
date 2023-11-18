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
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Youtube");
myStack.push("Discord");

console.log(myStack);
