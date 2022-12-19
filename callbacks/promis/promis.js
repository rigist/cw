// let promise = new Promise(function (resolve, reject) {
//   // эта функция выполнится автоматически, при вызове new Promise

//   // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//   setTimeout(() => resolve("done"), 1000);
// });

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
  (result) => console.log(result), // выведет "done!" через одну секунду
  (error) => console.log(error) // не будет запущена
);
console.log("1111");
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(console.log);
console.log("1111");
function PromiseAll(arr) {
  console.log(arr);
  const arrRes = [];

  console.log(arr[2].then((result) => console.log(result)));

  for (const prom of arr) {
    console.log(prom.then((result) => console.log(result)));

    // arrRes.push(
    prom.then((result) => {
      console.log(result), arrRes.push(result), console.log("RES", arrRes);
    });
    //);
    // console.log(
    //   "p",
    //   prom.then((res) => console.log(res))
    // );
  }

  //console.log("res", arrRes);
}

PromiseAll(
  [
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
  ] // 3
);

///////////////////////////////////
// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(alert); // 1

function PromiseRace(arr) {
  console.log("race");
  for (const prom of arr) {
    console.log(
      "prr",
      prom.then((r) => console.log("r", r))
    );
  }
}

PromiseRace([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Ошибка!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]);
