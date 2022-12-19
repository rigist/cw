//-------------219

/* 
runLengthEncoding "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb" 
        `shouldBe` [(34,'a'), (3,'b')]
         */
//console.log(runLengthEncoding("aabc"));

console.log(runLengthEncoding("aaaaabbccccbbbccccc")); // 5a2b4c3b5c

function runLengthEncoding(str) {
  let coint = 1;
  let strNew = "";

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (i !== str.length - 1 && str[i] === str[i + 1]) {
      coint += 1;
    } else {
      strNew += coint + str[i];
      coint = 1;
    }
  }

  return strNew;
} //f

function runLengthEncoding2(str) {
  let arr = [...str];

  // console.log(arr);

  const arrSet = [...new Set(arr)];
  //arrSet.sort();
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
  // console.log("::", arrSum, arrSet);
  let result = arrSet.map((item, index, arrSet) => {
    return [arrSum[index], arrSet[index]];
  });

  /*  const arrTwo = arrSum.forEach((item, index) => {
    item == 1 ? (result = arrSet[index]) : false;
  }); */
  return result;
} // runLengthEncoding

/*  let result = str.replace( /([a-zA-Z0-9]{2})/g, function (match0, m1, m2, m3, m4, m5) {
               console.log("m", m1, m2, m3,  m4, m5);
                
            }) */
//  (.)\1{1,}

/*   let k = 1;
  console.log("---");

  for (let i = 0; i < str.length; i++) {
    //console.log(str[i], str[i + 1]);

    if (str[i] === str[i + 1]) {
      k++;
      //console.log(str[i], str[i + 1], k);
    } //if
    else {
      k = 1;
      console.log("kkk", k);
    }
  } //for
  console.log("k", k); */

/*  const result = str.reduce(function(acc, current, index, arr) {
            return current == arr[index + 1] ? acc++ : acc;
             
            }, 0);  //reduce  */
//console.log("res", result);

// // console.log(str);

// let arr = [...str];

// // console.log(arr);

// const arrSet = [...new Set(arr)];
// //arrSet.sort();
// // console.log(arrSet);
// const arrSum = new Array(arrSet.length);
// arrSum.fill(0);
// // console.log(arrSum);
// arrSet.forEach((item, index, array) => {
//   //console.log(item, index);
//   for (const elem of arr) {
//     if (elem === item) {
//       arrSum[index]++;
//     }
//   }
// });
// // console.log("::", arrSum, arrSet);
// let result = arrSet.map((item, index, arrSet) => {
//   return [arrSum[index], arrSet[index]];
// });

// /*  const arrTwo = arrSum.forEach((item, index) => {
//   item == 1 ? (result = arrSet[index]) : false;
// }); */
// return result;
