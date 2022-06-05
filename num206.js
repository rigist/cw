/* pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined] */

function pluck(objs, name) {
  return objs.map((item) => item[name]);
}

console.log(pluck([{ a: 1 }, { a: 2 }], "a"));

console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], "b"));
