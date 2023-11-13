// create hash table
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // simple hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  // implement set function
  set(key, value) {
    const memoryPosotion = this._hash(key);
    if (!this.data[memoryPosotion]) {
      this.data[memoryPosotion] = [];
    }
    this.data[memoryPosotion].push([key, value]);
  }

  // implement get function
  get(key) {
    const memoryPosotion = this._hash(key);
    const currentBucket = this.data[memoryPosotion];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  // implement keys function to return keys
  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keys.push(this.data[i]);
      }
    }
    return keys.flat(2).filter((item) => typeof item === "string");
  }
}

const obj = new HashTable(50);
obj.set("grapes", 1000);
obj.set("apples", 10);
obj.set("watermelon", 1);
obj.set("pomegrnate", 2000);
obj.set("onions", 20);
obj.set("lemon", 160);
// console.log(obj.get("apples"));
console.log(obj.keys());
console.log(obj);

// Interview Question => First Occuring Character
// [1,3,5,7,9,2,4,5,1,2,7] => 5

const firstOccuringElement = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
};

console.log(firstOccuringElement([0, 3, 5, 13, 9, 2, 4, 10, 1, 2, 7]));
