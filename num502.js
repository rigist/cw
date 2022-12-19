function smartSum(...args) {
  let sumCoint = 0;

  //console.log(typeof [1]);

  //function summa() {}
  for (const item of args) {
    if (typeof item === "number") {
      sumCoint += item;
    } else {
      sumCoint += smartSum(...item);
    }
  }

  //   for (const item of args) {
  //     //console.log(typeof item);

  //     if (typeof item === "number") {
  //       sum += item;
  //     }
  //   }
  //console.log("sum", sumCoint);

  return sumCoint;
}

console.log(smartSum(1, 2, 3, [4, 5], 6)); // returns 21
console.log(smartSum(1, 2, [[3, 4], 5], 6)); // returns 21
