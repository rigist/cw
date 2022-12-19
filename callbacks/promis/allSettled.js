// PromiseAll([
//   new Promise((resolve, reject) => setTimeout(() => reject(1), 3000)), // 1
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then(
//   (x) => console.log("1>>>", x),
//   (x) => console.log("2>>>", x) // 2
// );

// {
//     {status: 'fulfilled', value: value}
//   }

// {
//     {status: 'rejected', reason: error}
//     reason: error
//   }

PromiseAllSettled([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Ошибка!")), 4000)
  ), // 3
]).then(
  (x) => console.log("1>>>", x),
  (x) => console.log("2>>>", x) // 2
);

function PromiseAllSettled(arr) {
  // if (arr.length === 0) {
  //   resolve([]);
  // }
  const promisRes = new Promise((resolve, reject) => {
    if (arr.length === 0) {
      resolve([]);
    }
    const arrRes = [];
    let i = 0;

    for (let k = 0; k < arr.length; k++) {
      arr[k]
        .then(
          (result) => {
            return { status: "fulfilled", value: result };
          },
          (err) => {
            return { status: "rejected", reason: err };
          }
        )
        .then((obj) => {
          arrRes[k] = obj;
          i++;
          if (i === arr.length) {
            resolve(arrRes);
          }
        });
    }
  });

  return promisRes;
}
