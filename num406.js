function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  /* function f() {
    return this.firstName + " " + this.lastName;
  } */

  /*  this.fullName(){
    return this.firstName + " " + this.lastName;
  } */
  /* this.fullName = function () {
    return f();
  }; */
}

Object.defineProperty(NamedOne.prototype, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
  set: function (str) {
    const arr = str.split(" ");
    console.log(arr.length);
    console.log(arr.length);
    if (arr.length == 2) {
      this.firstName = arr[0];
      this.lastName = arr[1];
    }
  },
});

// Object.defineProperty(NamedOne.prototype, "fullName", {});

let namedOne = new NamedOne("Naomi", "Wang");

namedOne.firstName = "John";
namedOne.lastName = "Doe";
// ...then...
namedOne.fullName; // -> "John Doe"

console.log(namedOne.fullName);

// -- And :
namedOne.fullName = "Bill Smith";
// ...then...
console.log(namedOne.firstName); // -> "Bill"
console.log(namedOne.lastName); // -> "Smith"

// -- But :
namedOne.fullName = "Tom"; // -> no : lastName missing
namedOne.fullName = "TomDonnovan"; // -> no : no space between first & last names
console.log(namedOne.fullName); // -> "Bill Smith" (unchanged)
