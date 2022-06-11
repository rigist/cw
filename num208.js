/*
Input:

[ 1, 8, 4, 4, 6, 1, 8 ]
Expected output:

6
*/
console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));

function findUnique(arr) {
  // Return the unique number

  const arrSet = [...new Set(arr)];
  arrSet.sort();
  // console.log(arrSet);
  const arrSum = new Array(arrSet.length);
  arrSum.fill(0);
  // console.log(arrSum);
  arrSet.forEach((item, index, array) => {
    //console.log(item, index);
    for (const elem of arr) {
      if (elem === item) {
        arrSum[index]++;
      }
    }
  });
  //console.log("a", arrSum);
  let result;
  const arrTwo = arrSum.forEach((item, index) => {
    item == 1 ? (result = arrSet[index]) : false;
  });
  return result;

  /*   let res = [...new Set(numbers)];
  console.log(res);

  let resArr = [0, 0, 0, 0]; /* new Array(res.length); */
  /* let k = 0;

  let p = 0;
  for (let z = 0; z < res.length; z++) {}
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == res[z]) {
      resArr[z] = resArr[z] + 1;
      console.log(resArr[z]);
    }
  } */
}

//let k = 0;
/*  let res;
  for (let num of numbers) {
  } */

/* 
//   if (res == numbers[i] /* && numbers[i] != null */ //) {
//     numbers.splice(i, 1);
//     console.log(numbers);
//     res = numbers[i + 1];
//numbers[i] = null;
//res
// } */

/* 
  numbers.map((elem, index, arr) => {
    if (arr.includes(elem, index + 1)) {
      elem = null;
      arr[arr.indexOf(elem, index + 1)] = null;
    }
    console.log();
  });
 */
//console.log(numbers);
//let res;
//let k = 1;

//   for (let i = 0; i < numbers.length; i++) {
//     //console.log(res, k + 1);
//     console.log("i", numbers[i], i + 1, numbers.indexOf(numbers[i]));
//     if (numbers.indexOf(numbers[i], i + 1) >= 0) {
//       numbers[i] = null;
//       numbers[numbers.indexOf(numbers[i], i + 1)] = null;
//       console.log(numbers);
//       //   k = k + 1;
//       //   res = numbers[k];
//     }

//     /* if (res == numbers[i]) {
//       k = k + 1;
//       res = numbers[k];
//     } else {
//       console.log(res);
//     } */
//   } //for

/*  numbers.forEach((item, index, arr) => {
    console.log(arr.includes(item, index + 1));
  }); */

/* let num = numbers[0];
  let k = 0;

  for (const n of numbers) {



     for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] == num) {
        k = k + 1;
        num = numbers[k];
        console.log(num);
        break;
      }
    }
  } //for
  return num; */
//}
