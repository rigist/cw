//-------------219

/* 
runLengthEncoding "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb" 
        `shouldBe` [(34,'a'), (3,'b')]
         */
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"));

function runLengthEncoding(str) {
  console.log(str);

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
    return [arrSet[index], arrSum[index]];
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
