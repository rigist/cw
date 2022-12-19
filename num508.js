function deepCount(a) {
  //console.log(a, a[0], a.length);
  if (a.length == 0) {
    return 0;
  }

  let sum = 0;

  if (a.every((item) => !Array.isArray(item))) {
    return a.length;
  } else {
    for (let val of a) {
      if (Array.isArray(val)) {
        sum += deepCount(val);
      }
    }
  }

  return sum;
}

console.log(deepCount(["x", "y", ["z"]]));

//   []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
