function generator(sequencer) {}

function dummySeq() {
  return function () {
    return "dummy";
  };
}

function factorialSeq() {
  // ...
  let num = 0;
  let sum = 1;
  function fn() {
    if (num === 0) {
      num++;
      return 1;
    } else {
      //console.log(num, sum);
      sum = sum * num;
      num++;
      return sum;
    }
  }
  return fn;
}

// 0  - 1
// 1 -  1
// 2 -

const f = primeSeq(); //partialSumSeq(1, 3, 7, 2, 0); //primeSeq(); //rangeSeq(1, 2); // fibonacciSeq();  /* factorialSeq(); */

console.log(f()); // 1
console.log(f()); // 1
console.log(f()); // 2
console.log(f()); // 6
console.log(f()); // 24
console.log(f());
console.log(f());

// 1, 1, 2, 6, 24, ...

function fibonacciSeq() {
  let num1 = 0;
  let num2 = 1;
  let sum = 1;
  function fn() {
    if (num1 === 0 || num1 === 1) {
      num1++;
      return 1;
    } else {
      console.log(num1, num2, sum);
      sum = num1 + num2;
      num1++;
      num2++;
      return sum;
    }
  }
  return fn;
}

// 1, 1, 2, 3, 5, 8, 13, ...

function rangeSeq(start, step) {
  num = start;
  function fn() {
    let res = num;
    num += step;
    return res;
  }
  return fn;
}

// rangeSeq(1, 2)  -> 1, 3, 5, 7, ...

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primeSeq() {
  let value = 2;

  function fn() {
    const tmp = value;
    do {
      value++;
    } while (!isPrime(value));

    return tmp;
  }

  return fn;
}
// console.log("nn", num);
// if (num === 2) {
//   return num++;
// }

//while (condition) {}

// num = 8,
// for (let i = 2; ; i++) {
//   if (num % i === 0) {
//     console.log("---", num, i);
//     i = 1;
//     num++; // сост
//     break;
//   } else {
//     console.log("---else", num, i);
//     break;
//   }
// }
// res = num;
// num++;
// return res; // прост

// for (; num % i != 0; i++) {
//   console.log(num, i, num % i != 0);
//   let res = num;
//   num++;
//   return res;
// }
// }
// return isPrime;
//}

// 2, 3, 5, 7, 11, 13, ...

function partialSumSeq(...args) {
  console.log(args);
  let num = 0;
  let sum = 0;

  function fn() {
    if (num === 0) {
      sum = args[num];
      num++;
      return sum;
    }

    sum += args[num];
    num++;
    return sum;
  }
  return fn;
}

//function partialSumSeq(1, 3, 7, 2, 0) {...}
// 1, 4, 11, 13, 13, end
