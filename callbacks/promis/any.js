// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Ошибка!")), 500)
//   ), // 3
// ]).then(console.log); // 1

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Ошибка!")), 500)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
// .then(
//   (x) => console.log("1>>>", x),
//   (x) => console.log("2>>>", x) // 2
// ); // 1

// PromiseAny([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Ошибка1")), 500)
//   ), // 1
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Ошибка2")), 500)
//   ), // 2
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Ошибка3")), 500)
//   ), // 3
// ])
//   .then(
//     (x) => console.log("1>>>", x),
//     (x) => console.log("2>>>", x) // 2
//   )
//   .catch((error) => {
//     console.log(error.constructor.name); // AggregateError
//     console.log(error.errors[0]); // Error: Ошибка!
//     console.log(error.errors[1]); // Error: Ещё одна ошибка!
//   });

function PromiseAny(arr) {
  const promisRes = new Promise((resolve, reject) => {
    if (arr.length === 0) {
      resolve([]);
    }

    const errs = new Error();
    errs.errors = [];

    //const arrRes = [];
    let i = 0;

    for (let k = 0; k < arr.length; k++) {
      arr[k].then(
        (result) => {
          resolve(result);
        },
        (err) => {
          errs.errors[k] = err;

          // arrRes[k] =
          //console.log(errs.errors);
          i++;
          if (i === arr.length) {
            reject(errs);
          }
        }
      );
    }
  });

  return promisRes;
}

PromiseAny([
  new Promise((_, reject) => setTimeout(() => reject(1), 400)),
  new Promise((_, reject) => setTimeout(() => reject(2), 200)),
  new Promise((_, reject) => setTimeout(() => reject(3), 300)),
  new Promise((_, reject) => setTimeout(() => reject(4), 100)),
]).then(
  () => {},
  (e) => {
    console.log(e.errors); // [1, 2, 3, 4];
  }
);
