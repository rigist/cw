String.prototype.map = function (fn) {
  return this.split("").map(fn).join("");
};

console.log(
  "map",
  "kkkk".map((i) => "z")
);

/*  */

String.prototype.join = function (str) {
  return this.split("").join(str);
};

console.log("join", "kfk".join(""));

String.prototype.filter = function (fn) {
  return this.split("").filter(fn).join("");
};

console.log(
  "filter",
  "kfk".filter((i) => i === "k")
);

String.prototype.forEach = function (fn) {
  return this.split("").forEach(fn);
};

"kfk".forEach((i) => console.log("forEach", i));

String.prototype.some = function (fn) {
  return this.split("").some(fn);
};

console.log(
  "some",
  "kkkkfkkk".some((i) => i === "f")
);

String.prototype.every = function (fn) {
  return this.split("").every(fn);
};

console.log(
  "every",
  "kkkkkkkk".every((i) => i === "k")
);

String.prototype.reduce = function (fn, value) {
  return this.split("").reduce(fn, value);
};

console.log(
  "reduce",
  "111".reduce((acc, cur) => +acc + +cur, 5)
);
//////////////////////////////////////////////////////

String.prototype.reduceRight = function (fn, value) {
  return this.split("").reduceRight(fn, value);
};

console.log(
  "reduceRight",
  "111".reduceRight((acc, cur) => +acc + +cur, 5)
);

String.prototype.sort = function (fn) {
  return this.split("").sort(fn).join("");
};

console.log("sort", "13254".sort());

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("reverse", "12345".reverse());

String.prototype.push = function (value) {
  return this.concat(value);
};

console.log("push", "bbb".push("a"));

String.prototype.pop = function () {
  return this.slice(0, -1);
};

console.log("pop", "bbb".pop());

String.prototype.shift = function () {
  return this.slice(1);
};

console.log("shift", "abc".shift());

String.prototype.unshift = function (...args) {
  return [...args, ...this.split("")].join("");
  return args.join("") + this;
};

console.log("unshift", "abc".unshift("1", "2", "3"));

String.prototype.splice = function (start, delCount, item) {
  //console.log("ssss", this, start, delCount, item);

  const arr = this.split("");

  arr.splice(start, delCount, item);
  return arr.join("");
};

//ssss [String: 'abc'] 1 1 g   // "gbc"

console.log("splice", "abc".splice(1, 1, "g")); //  Expected: 'Hello John', instead got: 'Peter'

//console.log("sss", ["a", "b", "c"].splice(1, 1, "g"));

// Array.prototype.map()
// Array.prototype.join()
// Array.prototype.filter()
// Array.prototype.forEach()
// Array.prototype.some()
// Array.prototype.every()
// Array.prototype.reduce()
// Array.prototype.reduceRight()
// Array.prototype.sort()
// Array.prototype.reverse()
// Array.prototype.push()
// Array.prototype.pop()
// Array.prototype.shift()
// Array.prototype.unshift()
// Array.prototype.splice()
