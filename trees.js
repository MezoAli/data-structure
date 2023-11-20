class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
//        9
//    4      20
//  1   6  15   170

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }
}

const myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(9);
myBinarySearchTree.insert(4);
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(1);
myBinarySearchTree.insert(6);
myBinarySearchTree.insert(15);
myBinarySearchTree.insert(170);
console.log(myBinarySearchTree.lookup(6));
console.log(myBinarySearchTree.lookup(13));

console.log(myBinarySearchTree);
