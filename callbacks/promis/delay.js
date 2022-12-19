const plus1 = (x) => new Promise((r) => setTimeout(r, 1000, x + 1));
const plus2 = (x) => new Promise((r) => setTimeout(r, 2000, x + 2));
const plus3 = (x) => new Promise((r) => setTimeout(r, 3000, x + 3));
const plus4 = (x) => new Promise((r) => setTimeout(r, 4000, x + 4));
const plus5 = (x) => new Promise((r) => setTimeout(r, 5000, x + 5));

console.time("aaa");
Promise.resolve(0)
  .then(plus1)
  .then(plus2)
  .then(plus3)
  .then(plus4)
  .then(plus5)
  .then((x) => {
    console.log(x);
    console.timeEnd("aaa");
  }); // число 15 через 15 секунд

//Написать функцию delay:

function delay(time) {
  //   f = (res) => res;
  //   const resProm = new Promise((r) => setTimeout(r, time));
  // setTimeout(f, time);
  return (x) => new Promise((r) => setTimeout(r, time, x));
  //resProm.then((t) => f);
}

//const delay = (time) => new Promise((r) => setTimeout(r, 7000));

console.time("ttt");
Promise.resolve(0)
  .then(plus1)
  .then(plus2)
  .then(plus3)
  .then(delay(7000)) //7000
  .then(plus4)
  .then(plus5)
  .then((x) => {
    console.log(x);
    console.timeEnd("ttt");
  }); // число 15 через 22 секунд
