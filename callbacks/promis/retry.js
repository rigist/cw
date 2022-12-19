function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("----");
      if (Math.random() < 0.5) {
        resolve(a + b);
      } else {
        reject("err");
      }
    }, 500);
  });
}

const sumWithRetry = withRetry(sum, 4);

sumWithRetry(2, 3).then(
  (x) => console.log("1 >>", x),
  (x) => console.log("2 >>", x)
);

// function withRetry(fn, num) {
//   let i = 0;
//   return function func(a, b) {
//     return new Promise((resolve, reject) => {
//       fn(a, b).then(
//         (res) => resolve(res),
//         (err) => {
//           if (i < num) {
//             i++;
//             func(a, b).then(
//               (res) => resolve(res),
//               (err) => reject(err)
//             );
//           } else {
//             reject(err);
//           }
//         }
//       );
//     });
//   };
// }

function withRetry(fn, num) {
  return function (...args) {
    let i = 0;
    function func(...args) {
      i++;
      return fn(...args).catch((err) => {
        if (i < num) {
          return func(...args);
        }
        throw err;
      });
    }

    return func(...args);
  };
}

let ok = 0;
let err = 0;

for (let i = 0; i < 1e4; i++) {
  sumWithRetry(2, 3).then(
    (x) => ok++,
    (x) => err++
  );
}

setTimeout(() => {
  console.log({ ok, err });
}, 3000);

//console.log("errr");
//   if (i < num) {
//     /*  for (let i = 0; i <= num; i++) */ i++;
//     console.log("111-", i);
//     func(a, b).then(
//       (res) => {
//         //i = num;
//         console.log("res", res, i);
//         resolve(res);
//       },
//       (err) => {
//         //i++;
//         console.log("222-", i);
//         reject(err);
//       }
//     );
//   } else {
//     //console.log("333-", i);
//     reject(err);
//   }
//   if (i < num) {
//     const rz = fn(a, b);
//   }
//   i++;

//arr.push(fn(a, b));
//console.log("arr", arr);
//   Promise.any(arr)
//     .then((res) => console.log("rrr", res))
//     .catch((err) => console.log("eee", err));
