// function deepCompare11(o1, o2) {
//   const keys1 = Object.keys(o1);
//   const keys2 = Object.keys(o2);

//   for (const key in o1) {
//     if (typeof o1[key] === "object") {
//       deepCompare(o1[key], o2[key]);
//     }
//     //** */console.log("kk", key, o1[key] == o2[key]);
//   }

//   // console.log(keys1, keys2);

//   // console.log(o1[keys1[0]] === o2[keys2[0]]);
// }

//***console.log(
//deepCompare({ name: "Joe", two: { a: 1 } }, { name: "Joe", two: { a: 1 } });
//);

function deepCompare(o1, o2) {
  //const keys1 = Object.keys(o1);
  //const keys2 = Object.keys(o2);

  for (const key in o1) {
    console.log("k", key, o1[key] == o2[key]);
  }

  //console.log(keys1, keys2);

  //console.log(o1[keys1[0]] === o2[keys2[0]]);
}

console.log(deepCompare({ name: "Joe" }, { name: "Joe" }));

/* Функция также должна иметь возможность корректно сравнивать простые значения, такие как строки и числа (без использования приведения типов, пожалуйста).
  
  Чтобы упростить задачу, ему придется иметь дело только с простыми значениями, объектами и массивами, содержащими строки, логические значения и числа, без учета регулярных выражений, дат и функций. */
