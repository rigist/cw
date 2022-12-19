const Folder = require("./Folder");

const f1 = Folder([
  "a",
  Folder(["m", "n", "e"]),
  Folder(["u", "y", "t", Folder([])]),
  "b",
  Folder(["z", "y", Folder(["x"])]),
  "c",
]);

// f1.size((s) => {
//   console.log("size", s);
// });
// f1.read(1, (x) => {
//   console.log("file", x);
// });

// const psize = function () {
//   return new Promise((resolve, reject) => {
//     f1.size((s) => resolve(s));
//   }); //Promise
// };

// const pread = function (num) {
//   return new Promise((resolve, reject) => {
//     f1.read(num, (x) => resolve(x));
//   });
// };

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      // console.log(args);
      fn(...args, (x) => resolve(x));
    });
  }; //Promise
}

// arr[i] = pread(i).then((x) => {
//   if (typeof x === "string") {
//     return x;
//   } else {
//     return getAllFiles(x);
//   }
// });

function getAllFiles(f) {
  if (typeof f === "string") {
    return Promise.resolve([f]);
  }
  const psize = promisify(f.size.bind(f));
  const pread = promisify(f.read.bind(f));

  return psize()
    .then((s) =>
      Array(s)
        .fill()
        .map((_, i) => i)
    )
    .then((indexes) => indexes.map(pread(i).then((x) => getAllFiles(x))))
    .then((promises) => Promise.all(promises))
    .then((arr) => arr.flat());
}

getAllFiles(f1).then((arr) => {
  console.log(">>>>", arr);
});

// psize().then((s) => {
//   console.log(s); //6
// });

// pread(3).then((x) => {
//   console.log(x); // b
// });
