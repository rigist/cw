Function.prototype.pipe = function (fn) {
  return function (n) {
    return fn(this(n));
  }.bind(this);
};

var addOne = function (e) {
  return e + 1;
};

var square = function (e) {
  return e * e;
};

let result = [1, 2, 3, 4, 5].map(addOne.pipe(square)); //-> [4,9,16,25,36] +1 *
console.log(result);
/* let result = [1, 2, 3, 4, 5].map(square);
console.log(result);
addOne.pipe(); */
