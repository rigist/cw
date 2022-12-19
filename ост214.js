if (!obj) {
  return true;
}

let mapOne = new Map();

for (let item of arr) {
  let objItem = obj.criteria(item);
  if (!mapOne.get(objItem)) {
    mapOne.set(objItem, 0);
  }
  mapOne.set(objItem, mapOne.get(objItem) + 1);
}
console.log("ll", [...mapOne]);

console.log(mapOne);

const arrOnly = [...new Set(arr.map((item) => obj.criteria(item)))];

const arrOnlyZero = arrOnly.map((item) => [item, 0]);

//console.log(arrOnlyZero);

// console.log(
//   "pp",
let arrTwo = arr.reduce(function (acc, curr, index) {
  //console.log("::", acc, "---", curr);
  const arrTemp = [];
  for (let i = 0; i < arrOnlyZero.length; i++) {
    let first = JSON.stringify(obj.criteria(curr));

    let second = JSON.stringify(arrOnlyZero[i][0]);

    // console.log("if", obj.criteria(curr), arrOnlyZero[i][0], first == second);

    if (first == second) {
      //  console.log("tt", arrOnlyZero[i][1], arrOnlyZero[i][1] + 1);
      arrTemp.push([acc[i][0], acc[i][1] + 1]);
      // console.log("ttt", arrTemp);
    } else {
      arrTemp.push([acc[i][0], acc[i][1]]);
      // console.log("ff", arrOnlyZero[i]);
      //  console.log("fff", arrTemp);
    }
  }
  return arrTemp;

  // console.log("T", arrTemp);
}, arrOnlyZero);
// );

return arrTwo.sort(obj.compareTo);

if (obj.criteria == parity) {
  console.log(
    "rr",
    arr.reduce(
      function (acc, curr, index) {
        /*  console.log("::", acc, curr, index, acc[1][1]); */
        if (obj.criteria(curr) == "odd") {
          return [
            ["even", acc[0][1]],
            ["odd", acc[1][1] + 1],
          ];
        }
        if (obj.criteria(curr) == "even") {
          return [
            ["even", acc[0][1] + 1],
            ["odd", acc[1][1] + 1],
          ];
        }
      },
      [
        ["even", 0],
        ["odd", 0],
      ]
    )
  );
}

//console.log("sort", arr.sort(obj.compareTo));

const arrSet = [...new Set(arr)];
arrSet.sort(obj.compareTo);

const arrSum = new Array(arrSet.length);
arrSum.fill(0);

arrSet.forEach((item, index, array) => {
  for (const elem of arr) {
    if (elem === item) {
      arrSum[index]++;
    }
  }
});

return arrSum.map((item, index) => [arrSet[index], item]);
