// const fs = require("fs");

// // console.log(fs);

// fs.writeFile("test0.txt", "123456", () => {
//   fs.writeFile("test1.txt", "123456", () => {
//     fs.writeFile("test2.txt", "123456", () => {});
//   });
// });

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

function getAllFiles(folder, cb) {
  const arr = [];
  let count = 0;

  folder.size((s) => {
    for (let i = 0; i < s; i++) {
      folder.read(i, (x) => {
        console.log(x, typeof x);
        if (typeof x === "string") {
          arr.push(x);
          count++;
          if (arr.length === s) {
            cb(arr);
          }
        } else {
          getAllFiles(x, (t) => {
            console.log(x.length, t.length);
            if (x.length === 0) {
              console.log(x.length);
              arr.push("");
            } //
            arr.push(...t);
            count++;
            if (count === s) {
              cb(arr);
            }
          });
        }
      });
    }
  });
}

getAllFiles(f1, (arr) => {
  console.log(">>>", arr); // ["a", "b", "c", "m", "n", "z", "y", "x"]
});

///////////////////////////

// getAllFilesProm(f).then((x) => {
//   console.log(x); // ["A", "B", "C", "D", "E", "F"]
// });

// getAllFilesProm

// function getAllFiles(folder, cb) {
//     console.log(folder, cb);
//     const arr = [];
//     folder.size((s) => {
//       for (let i = 0; i < s; i++) {
//         console.log("i", i);

//         f1.read(i, (x) => {
//           arr.push(x);
//           if (arr.length === s) {
//             cb(arr);
//           }
//         });
//       }
//     });
//   }
