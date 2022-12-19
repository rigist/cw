/* Function.prototype.lastName = function () {
  return this.lastName;
};
 */
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
  //{ name: this.firstName + " " + this.lastName };

  //return;
}

/* NameMe.prototype.fff = function () {
  return console.log("111");
}; */
var n = new NameMe("John", "Doe");

console.log(n.fff);
console.log(n.firstName); //Expected: John
console.log(n.lastName); //Expected: Doe
console.log(n.name); //Expected: John Doe

//https://learn.javascript.ru/class
