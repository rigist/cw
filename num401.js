Array.prototype.groupBy = function (fn = (x) => x) {
  const obj = {};

  //console.log(func.length);
  for (const num of this) {
    let res = fn(num);
    if (!obj.hasOwnProperty(res)) {
      obj[res] = [];
      //console.log(obj);
    }

    obj[res].push(num);
  }
  console.log(obj);
  return obj;
  //}
};

//[1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy();
/* {
  1: [1, 1, 1],
  2: [2, 2],
  3: [3],
  4: [4],
  5: [5],
  6: [6]
} */

[1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy(function (val) {
  return val % 3;
});
/* {
  0: [3, 6],
  1: [1, 4, 1, 1],
  2: [2, 2, 5]
} */
