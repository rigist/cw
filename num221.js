// 221

//942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
console.log(digitalRoot(942));

function digitalRoot(num) {
  while (num > 9) {
    const arr = num.toString().split("").map(Number);

    let sum = 0;
    for (const x of arr) {
      sum += x;
    }

    num = sum;
  }
  return num;
}
