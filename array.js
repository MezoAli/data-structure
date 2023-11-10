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

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     // O(1)
//     return this.data[index];
//   }

//   push(item) {
//     // O(1)
//     this.data[this.length] = item;
//     this.length++;
//     // as typical push method is js return length
//     return this.length;
//   }

//   pop() {
//     // O (1)
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   delete(index) {
//     // O(n)
//     if (index >= this.length) {
//       alert(`you only have ${this.length} length array`);
//       return;
//     }

//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const strings = new MyArray();
// strings.push("a");
// strings.push("b");
// strings.push("c");
// strings.push("d");
// strings.push("e");
// console.log(strings.pop());
// strings.delete(0);
// strings.delete(2);
// console.log(strings);

// Reverse String => Interview Question

// const reverseString = (str) => {
//   if (typeof str !== "string") {
//     alert("the input must be string");
//     return;
//   }
//   const strArray = str.split("");
//   console.log(strArray);
//   let newArray = [];
//   for (let i = strArray.length - 1; i >= 0; i--) {
//     newArray.push(strArray[i]);
//   }
//   //   strArray.forEach((item) => newArray.push(item));
//   const reversedString = newArray.join("");
//   return reversedString;
// };

// console.log(reverseString("abc"));
// console.log(reverseString("hi"));
// console.log(reverseString("my name is moutaz"));
// console.log(reverseString([]));

// Merge 2 Arrays and sort them
// [1,4,67,43] [2,5,9,32,104] => [1,2,4,5,9,32,43,67,104]

const mergeTwoArraysSorted = (arr1, arr2) => {
  const returedArray = [];

  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  for (let z = 0; z < [...arr1, ...arr2].length; z++) {
    if (array1Item < array2Item) {
      returedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      returedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  console.log(returedArray);

  return returedArray;
};

mergeTwoArraysSorted([0, 1, 4, 67, 43], [2, 5, 9, 32, 104, 198]);

const mergeTwoArraysSorted2 = (arr1, arr2) => {
  const newArrayUnSorted = [...arr1, ...arr2];
  return newArrayUnSorted.sort((a, b) => a - b);
};

console.log(mergeTwoArraysSorted2([1, 4, 67, 43], [2, 5, 9, 32, 104]));
