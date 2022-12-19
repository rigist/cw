class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName() {
    return this.firstName + " " + this.lastName;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

function PersonF(
  firstName = "John",
  lastName = "Doe",
  age = 0,
  gender = "Male"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}
PersonF.greetExtraTerrestrials = function (raceName) {
  return `Welcome to Planet Earth ${raceName}`;
};
PersonF.prototype.sayFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(PersonF.greetExtraTerrestrials("marsian"));

let pers = new PersonF();

console.log(pers.sayFullName());
