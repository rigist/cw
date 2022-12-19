"use strict";
// class Animal {
//   constructor(name) {
//     this.name = name.toUpperCase();
//   }

//   hi() {
//     return "hi!";
//   }
// }

// class Cat extends Animal {
//   speak() {
//     return `${this.name} meows.`;
//   }
// }
function Animal(name) {
  this.name = name.toUpperCase();
}

Animal.prototype.hi = function () {
  return "hi!";
};
let krol = new Animal("krolik");
console.log(krol, krol.hi());

function Cat(name) {
  // this = { __proto__: Cat.prototype }
  Animal.call(this, name);
}

Cat.prototype.speak = function () {
  return `${this.name} meows.`;
};

// Cat.prototype.__proto__ = Animal.prototype;
// ...

Object.setPrototypeOf(Cat.prototype, Animal.prototype);

const cat1 = new Cat("Cat1");
console.log(cat1.name);
console.log(cat1.speak());
console.log(cat1.hi());

// cat1 ===
//   {
//     name: "CAT1",
//     __proto__: {
//       // === Cat.prototype
//       speak() {},
//       __proto__: {
//         // === Animal.prototype
//         hi() {},
//         __proto__: {
//           // === Object.prototype
//           toString() {},
//           hasOwnProperty() {},
//           __proto__: null,
//         },
//       },
//     },
//   };

// function a() {
//   console.log("this", this);
//   return 1;
// }
// // a();

// const o = {
//   b: function XXX() {
//     console.log("this2", this);
//   },
// };

// // const o2 = {
// //   o: "oooo",
// // };

// // o2.x = o.b;

// // o2.x();

// // const b1 = o.b;

// // b1();

// // console.log(new o.b());

// // o.b.call({ x: 123 });
