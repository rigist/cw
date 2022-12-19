//-----------------220

/* 
is_prime(1)  /* false */
//is_prime(2)  /* true  */
//is_prime(-1) /* false */

//

console.time("qqq");
console.log(isPrime(2 ** 31 - 1));
console.timeEnd("qqq");

// 120
// 1 2 3 4 5 6 8 10 12 15 20 24 30 40 60 120

// num === i * x
//         2 <= 60
//         3 <= 40
//         5 <= 24
//        10 <= 12

// x === num / i

// i <= num / i
// i ** 2 <= num

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

// function is_prime(num) {
//   for (let i = 2; i <= num; i++) {
//     if (num != i) {
//       //console.log(i, num % i);
//       if (num % i == 0) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }
// }
