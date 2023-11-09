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
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    // as typical push method is js return length
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const strings = new MyArray();
strings.push("a");
strings.push("b");
strings.push("c");
strings.push("d");
strings.push("e");
console.log(strings.pop());
console.log(strings);
