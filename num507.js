//function combos() {}

/* 

 combos(3) => [ [ 3 ], [ 1, 1, 1 ], [ 1, 2 ] ]
    combos(10) => [ [ 10 ],
      [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 2 ],
        [ 1, 1, 1, 1, 1, 1, 1, 3 ],
        [ 1, 1, 1, 1, 1, 1, 4 ],
        [ 1, 1, 1, 1, 1, 5 ],
        [ 1, 1, 1, 1, 6 ],
        [ 1, 1, 1, 7 ],
        [ 1, 1, 8 ],
        [ 1, 9 ],
        [ 1, 1, 1, 1, 1, 1, 2, 2 ],
        [ 1, 1, 1, 1, 1, 2, 3 ],
 */

// combos(1) === [[1]];
// combos(2) === [[2], [1, 1]];
// combos(3) === [[3], [1, 1, 1], [1, 2], [2, 1]];

console.log(
  combos(4).filter((item) => {
    for (let i = 0; i < item.length - 1; i++) {
      if (item[i] > item[i + 1]) {
        return false;
      }
    }
    return true;
  }) //.filter((item, index, arr) => {
  //   for (const val of arr) {
  //     item;
  //     val;

  //     for (let i = 0; i < arr.length; i++) {}
  //     // if (item[0] !== val[0] && item[item.length - 1] !== val[val.length - 1]) {
  //     //   return true;
  //     // }
  //   }
  //   //item.sort();
  // })
);
// [[1, 3], [1, 1,1,1], [1, 1,2], [1, 2,1]]
// [[2, 2], [2, 1, 1]]
// [[3, 1]]
// [[4]]

function combos(num) {
  if (num === 0) {
    return [[]];
  }

  const arr = [];

  for (let i = 1; i <= num; i++) {
    const res = combos(num - i).map((item) => [i, ...item]);

    arr.push(...res);

    console.log(i);
  }

  //console.log("arr", arr);

  // for (const item of arr) {
  //   item.sort();
  // }

  return arr;

  //arr.push([i, combos(num - 1)]);

  // const arrNum = [];
  // arrNum.push([num]);
  // const arrFill = [];
  // arrFill.length = num;
  // arrNum.push(arrFill.fill(1));
  // console.log("arrNum", arrNum);
}

// console.log(
//   "sss",
//   sortArr(
//     [1, 2],
//     [
//       [1, 2],
//       [3, 4],
//       [2, 1],
//     ]
//   )
// ); // [[1,2][3,4]]
function sortArr(arr1, arrBig) {
  // for (const item of arr1) {
  //   item.sort();
  // }

  arrBig = [...arrBig, ...arr1];

  for (const item of arrBig) {
    item.sort();
  }

  //const set = new Set(...arrBig);

  return;

  //return arr;
}
