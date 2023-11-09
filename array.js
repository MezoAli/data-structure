// class constructor

// class Player {
//   constructor(name, rule) {
//     this.name = name;
//     this.rule = rule;
//   }

//   introduce() {
//     console.log(`hi, my name is ${this.name}`);
//   }
// }

// const moutaz = new Player("Moutaz", "Coder");
// console.log(moutaz);
// moutaz.introduce();

// Implement Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    // O(1)
    return this.data[index];
  }

  push(item) {
    // O(1)
    this.data[this.length] = item;
    this.length++;
    // as typical push method is js return length
    return this.length;
  }

  pop() {
    // O (1)
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    // O(n)
    if (index >= this.length) {
      alert(`you only have ${this.length} length array`);
      return;
    }

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const strings = new MyArray();
strings.push("a");
strings.push("b");
strings.push("c");
strings.push("d");
strings.push("e");
console.log(strings.pop());
strings.delete(0);
strings.delete(2);
console.log(strings);
