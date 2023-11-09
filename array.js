class Player {
  constructor(name, rule) {
    this.name = name;
    this.rule = rule;
  }

  introduce() {
    console.log(`hi, my name is ${this.name}`);
  }
}

const moutaz = new Player("Moutaz", "Coder");
console.log(moutaz);
moutaz.introduce();
