function happyNumbers(x) {
  //   if (x == 1) {
  //     return 1;
  //   }

  const arrNums = [];

  for (let i = 1; i <= x; i++) {
    if (isHappy(i)) {
      arrNums.push(i);
    }
  }

  return arrNums;

  console.log(arrNums);

  // // const result = arrNums.filter()

  testNum(7);

  function testNum(n) {
    let double = x ** 2;

    let str = double + "";

    let numbers = str.match(/\d/g);
    console.log(numbers);
    //let res = numbers.map(testNum);
    //console.log("res", res);
  }
  //   const arrHappyNums = [];

  //   for (let i = 1; i <= x; i++) {}

  //   let double = x ** 2;

  //   console.log(double);

  //   let str = double + "";

  //   let numbers = str.match(/\d/g);

  //   console.log(numbers);

  //   let sum = 0;

  //   for (const num of numbers) {
  //     console.log(num ** 2);
  //     sum += num ** 2;
  //   }
  //   console.log(sum);
  //return 0;
}

function isHappy(n, arrNums = []) {
  //const arrNums = [];
  if (n === 1) {
    return true;
  }
  if (arrNums.includes(n)) {
    return false;
  }
  arrNums.push(n);

  let str = n + "";
  let arrStr = str.split("").map((item) => item ** 2);

  let sum = 0;
  for (const num of arrStr) {
    sum += num;
  }

  return isHappy(sum, arrNums);
}

// isHappy(7);

//7^2 = 49 --> 4 2 + 9 2 = 97 --> 92 + 72 = 130 --> 12 + 32 + 02 = 10 --> 12 + 02 = 1

console.log(happyNumbers(100));
