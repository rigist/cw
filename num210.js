//Convert a hash into an array. Nothing more, Nothing less.

const obj = { name: "Jeremy", age: 24, role: "Software Engineer" };

//should be converted into

//[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

toArr(obj);

function toArr(obj) {
  return Object.entries(obj).sort(function (a, b) {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }

    return 0;
  });
}
