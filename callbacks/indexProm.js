const Folder = require("./Folder");

const f1 = Folder([
  "a",
  // Folder(["m", "n", "e"]),
  Folder(["u", "y", "t", Folder([])]),
  "b",
  // Folder(["z", "y", Folder(["x"])]),
  "c",
]);

// f1.size((s) => {
//   console.log("size", s);
// });
// f1.read(1, (x) => {
//   console.log("file", x);
// });

// function getAllFiles11(folder, cb) {
//   const arr = [];
//   let count = 0;

//   folder.size((s) => {
//     for (let i = 0; i < s; i++) {
//       folder.read(i, (x) => {
//         console.log(x, typeof x);
//         if (typeof x === "string") {
//           arr.push(x);
//           count++;
//           if (arr.length === s) {
//             cb(arr);
//           }
//         } else {
//           getAllFiles(x, (t) => {
//             console.log(x.length, t.length);
//             if (x.length === 0) {
//               console.log(x.length);
//               arr.push("");
//             } //
//             arr.push(...t);
//             count++;
//             if (count === s) {
//               cb(arr);
//             }
//           });
//         }
//       });
//     } //for
//   });
// }//function

// getAllFiles(f1, (arr) => {
//   console.log(">>>", arr); // ["a", "b", "c", "m", "n", "z", "y", "x"]
// });

///////////////////////////

getAllFiles(f1).then((x) => {
  console.log("---", x); // ["A", "B", "C", "D", "E", "F"]
});

function getAllFiles(folder) {
  folder.size((s) => {
    //console.log("size", s);
  });

  // console.log("f", folder, folder.length, typeof folder);
  const arr = [];
  let count = 0;
  return new Promise((resolve) => {
    folder.size((s) => {
      //console.log("s", s);
      if (s > 0) {
        for (let i = 0; i < s; i++) {
          folder.read(i, (x) => {
            //console.log(x, typeof x);
            if (typeof x === "string" && s > 0) {
              arr.push(x);
              //console.log(arr);
              count++;
              if (arr.length === s) {
                resolve(arr);
              }
            } else if (s > 0) {
              getAllFiles(x).then((t) => {
                //console.log(x.length, "-", x, "-", t, "-", s);

                //   if (t.length === 0) {
                //     console.log(x.length);
                //     arr.push(" ");
                //   } //
                arr.push(...t);
                count++;
                // console.log(count, s);
                //console.log(arr);
                if (count === s) {
                  //  console.log(count === s);
                  resolve(arr);
                }
              });
            } //else
          }); // folder.size
        } // for
      } else {
        //console.log(111111);
        resolve(arr);
      }
      //resolve();
    });
  });

  console.log(obj);
}

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
