//multiplyAll([1, 2, 3])(2) = [2, 4, 6];

console.log(multiplyAll([])(2));

function multiplyAll(arr) {
  return function (num) {
    return arr.map((item) => item * num);
  };
}
