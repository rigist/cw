//-----214
//https://www.codewars.com/kata/5452209f699b534c67000cdf

//frequency(["Peter", "Anna", "Rose", "Peter", "Peter", "Anna"]);

//[["Anna", 2], ["Peter", 3], ["Rose", 1]]
//frequency([1, 10, 12, 2, 1, 10, 2, 2]); //[[1, 2], [2, 3], [10, 2], [12, 1]]

function frequency(arr) {
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
  return arrSum.map((item, index) => [arrSet[index], item]);
}
