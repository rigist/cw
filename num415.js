Array.prototype.reduce2 = function (fn, acc) {
  console.log("acc", acc, this);

  const arr = this;

  if (acc === undefined) {
    acc = this[0];
  }

  console.log(this, fn, acc);

  /* function func(accumulator, currentValue, index, array) {
    return accumulator + fn(currentValue);
  } */

  let accum = acc;

  for (let i = 0; i < arr.length; i++) {
    accum = fn(accum, arr[i]);
  }

  // for (const item of arr) {
  //   //console.log("-", accum, item);
  //   accum = fn(accum, item);
  //   //console.log("--", accum, item);
  // }

  return accum;
};

console.log([3, 2, 1].reduce((a, b) => a ** b, 2)); // 64
console.log([3, 2, 1].reduce2((a, b) => a ** b)); // 9
