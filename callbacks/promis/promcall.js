async function fn(x) {
  return "hello world" + x;
}
const callbackFunction = callbackify(fn);

callbackFunction("text", (err, ret) => {
  if (err) throw err;
  console.log("ret", ret);
});
/// to do: func args
function callbackify(func) {
  //   console.log(
  //     "func",
  //     func().then((res) => console.log("res", res))
  //   );

  return function f(...args) {
    console.log();
    const arr = args.slice(0, -1);
    const cb = args[args.length - 1];
    func(...arr).then(
      (res) => cb(null, res),
      (err) => cb(err)
    );
  };
}

const fs = require("fs");

// promisify takes a function following the common error-first callback style,
// i.e. taking a (err, value) => ... callback as the last argument

// promisify принимает функцию, соответствующую общему стилю обратного вызова error-first,
//  т. е. принять (err, value) => ... обратный вызов в качестве последнего аргумента

const stat = promisify(fs.stat);

stat(".")
  .then((stats) => {
    console.log("stats", stats);
  })
  .catch((error) => {
    // Handle the error.
    console.log(error);
  });

function promisify(fnCb) {
  //console.log(fnCb);
  //   fnCb(".", (err, value) => {
  //     console.log("val", value);
  //   });
  return function (...args) {
    return new Promise((resolve, reject) => {
      fnCb(...args, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      }); //fnCb
    }); //Promise
  };
}

// fs.stat(filePath, (err, stats) => {
//     if (err) return next(err);

//https://learn.javascript.ru/async
