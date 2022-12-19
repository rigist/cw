class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    //this.info = `${this.name}s age is ${this.age}`;
  }

  get info() {
    return `${this.name}s age is ${this.age}`;
  }

  /*   info() {
    console.log(111);
    return `${this.name} age is ${this.age}`;
  } */
}

let john = new Person("john", 34);
console.log(john);
john.age++;
console.log(john.info);

console.log(john.age);
