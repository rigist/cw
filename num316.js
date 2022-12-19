function isEven(el) {
  return el % 2 === 0;
}

function isGTten(el) {
  return el > 10;
}

//[12,20,22]

const multiFilter = function (...args) {
  console.log(args);
  return function (num) {
    return args.every((f) => f(num));
  };
};

console.log(
  [1, 2, 3, 4, 10, 11, 12, 20, 21, 22].filter(multiFilter(isEven, isGTten))
);
