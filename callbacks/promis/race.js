//let promise = Promise.race(iterable);
//ждёт только первый выполненный промис, из которого берёт результат (или ошибку)
// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Ошибка!")), 500)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]);

// .then(
//   (x) => console.log("1>>>", x),
//   (x) => console.log("2>>>", x) // 2
// ); // 1

PromiseRace([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Ошибка!")), 500)
  ), // 3
]).then(
  (x) => console.log("1>>>", x),
  (x) => console.log("2>>>", x) // 2
);

function PromiseRace(arr) {
  // if (arr.length === 0) {
  //   resolve([]);
  // }
  const promisRes = new Promise((resolve, reject) => {
    if (arr.length === 0) {
      resolve([]);
    }

    for (let k = 0; k < arr.length; k++) {
      arr[k].then(
        (result) => {
          resolve(result);
        },
        (err) => {
          reject(err);
        }
      );
    }
  });

  return promisRes;

  //   .then((res) => {
  //     res.sort(function (a, b) {
  //       if (a[1] > b[1]) {
  //         return 1;
  //       }
  //       if (a[1] < b[1]) {
  //         return -1;
  //       }

  //       return 0;
  //     });
  //     return res[0][0];
  //   });
}

//console.log(equalDate1.getTime() == equalDate2.getTime());
