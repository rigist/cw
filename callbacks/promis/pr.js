// const t = Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]);

// t.then(
//   (a) => console.log("all", a),
//   (a) => console.log("all2", a)
// );

// PromiseAll([
//   new Promise((resolve, reject) => setTimeout(() => reject(1), 3000)), // 1
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then(
//   (x) => console.log("1>>>", x),
//   (x) => console.log("2>>>", x) // 2
// );

function PromiseAll(arr) {
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
      arr[k].then(
        (result) => {
          arrRes[k] = result;
          i++;
          if (i === arr.length) {
            resolve(arrRes);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });

  return promisRes;
}

//console.log(arr);

// console.log(arr[2].then((result) => console.log(result)));

//console.log(prom.then((result) => console.log(result)));

// arrRes.push(

//console.log(result), console.log("RES", arrRes
//);
// console.log(
//   "p",
//   prom.then((res) => console.log(res))
// );

//console.log("res", arrRes);

// PromiseAll(
//   [
//     new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
//   ] // 3
// );

const f = (value, ms = Math.random() * 1000 + 500) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });

const mult3 = (x) => f(x * 3, 500);
const devide5 = (x) => f(x / 5, 1500);
const square = (x) => f(x ** 2, 2000);

devide5(100).then((x) => console.log(x));

doAsyncPipeline([mult3, devide5, square], 10).then((x) => {
  console.log("???", x); // 36
}); //30  6  36

function doAsyncPipeline(arr, num) {
  // for (let i = 0; i < arr.length; i++) {

  // }

  // let i1 = 0;

  // let i2 = 1;

  // let fn1 = arr[i1];

  // let fn2 = arr[i2];

  let resProm = Promise.resolve(num);
  for (const fn of arr) {
    resProm = resProm.then((res) => fn(res));
  }
  return resProm;

  // return arr[0](num)
  //   .then((result) => arr[1](result))
  //   .then((result) => arr[2](result))
  //   .then((result) => arr[3](result))
  //   .then((result) => arr[4](result))
  //   .then((result) => arr[5](result))
  //   .then((result) => arr[6](result))
  // let i = 0;
  // function func(i, num) {

  //   func(

  //   );
  // }

  // //arr[i](num).then((res) => arr[i + 1](res))

  // return func(arr, i, num).then((res) => res);
}

function doAsyncPipeline11(arr, num) {
  //let result = [];

  let k = 0;
  if (arr.length === 0) {
    return num;
  }
  if (arr.length === 1) {
    return arr[k](num);
  }
  if (arr.length === 2) {
    return arr[k](num).then((result) => arr[k + 1](result));
  }

  const resTwo = arr[k](num).then((result) => arr[k + 1](result));

  let d = 3;
  function func(prom, fn, leng, arr) {
    if (leng === 3) {
      return prom.then((result) => fn(result));
    } else {
      return func(
        prom.then((result) => fn(result)),
        arr[(d = d + 1)]
      );
    }
  }
  return func(resTwo, arr[k + 2], arr.length, arr);

  // const res3 = arr.reduce(function (previousValue, currentValue, index, array) {
  //   return currentValue(previousValue);
  // }, num);

  //console.log("r3", res3);

  // let res = num;

  // // for (const fn of arr) {
  // //   fn(res).then((res) => {
  // //     console.log("res", res);
  // //     return res;
  // //   });
  // // }

  // for (let i = 0; i < arr.length; i++) {
  //   fpromis(arr[i], num);
  // }

  // //console.log("fff", fpromis(arr[0], num));

  // function fpromis(fn, number) {
  //   return fn(number);
  //   //const promRes2 = new Promise((resolve) => {fn()});
  // }

  // function fpromisThen(res, fn, number) {
  //   return res.then((result) => fn(result));
  // }

  // return arr[0](num)
  //   .then((result) => arr[1](result))
  //   .then((result) => arr[2](result));

  // // for (const fn of arr) {
  // //   fn(num).then();
  // // }

  // console.log("result", result);
  // const promRes = new Promise((resolve) => {}); // promRes
}
