function digitsAverage(input) {
  // console.log("inp", input);
  let str = input + "";
  let numbers = str.match(/\d/g);

  // console.log(numbers.length);

  if (numbers.length === 1) {
    return input;
  }

  ///console.log(numbers);

  const arrNewNums = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    arrNewNums.push(mean(numbers[i], numbers[i + 1]));
  }

  // console.log("n", arrNewNums);

  let newNum = arrNewNums.join("");

  //console.log("nnn", newNum);

  function mean(a, b) {
    // console.log(a, b, (+a + +b) / 2);
    return Math.ceil((+a + +b) / 2);
  }

  return digitsAverage(+newNum);

  // for (let i = 0; i < numbers.length; i++) {
  //   mean(numbers[i], numbers[i + 1]);
  // }
}
//console.log(digitsAverage(2));
console.log(digitsAverage(246)); // ==>  4

//digitsAverage(89)  ==>  9
