//---------216

/* 
arr1=[1,2,3,4,5]
arr2=[9,8,0,0,0]
findPair(arr1,arr2) should return [[1,9],[2,8]]
because:

1  2  3 4 5
+  +  + + +
9  8  0 0 0
|  |  | | |
10 10 3 4 5
1,9 and 2,8 have the same sum value 10
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [9, 8, 0, 0, 0];
console.log(findPair(arr1, arr2));

function findPair(arr1, arr2) {
  const arrSum = new Array(arr1.length);
  arrSum.fill(0);

  const arrSumNew = arr1.map((item, index) => item + arr2[index]);

  const arrSet = [...new Set(arrSumNew)];

  const arrSetSum = new Array(arrSet.length);

  arrSetSum.fill(0);

  arrSet.forEach((item, index, array) => {
    //console.log(item, index);
    for (const elem of arrSumNew) {
      if (elem === item) {
        arrSetSum[index]++;
      }
    }
  });

  // console.log(arrSet, arrSetSum);

  let only;
  arrSetSum.forEach((item, index) => {
    if (item > 1) {
      only = arrSet[index];
    }
  });

  //  console.log("o", only);

  const resultEnd = arr1.map((item, index, arr1) => {
    if (item + arr2[index] == 10) {
      console.log("a", [arr1[index], arr2[index]]);
      return [arr1[index], arr2[index]];
    }
  });
  // console.log(resultEnd);

  return resultEnd.filter((item) => item != undefined);
}
