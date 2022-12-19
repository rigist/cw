// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key)

function memo(fn) {
  //const obj = {};

  const map = new Map();
  return function (a) {
    if (!map.has(a)) {
      map.set(a, fn(a));
      //obj[a] = fn(a);
    }
    return map.get(a);
  };
}

const cube = (x) => {
  console.log("x", x);
  for (let i = 0; i < 1e9; i++);
  return x ** 3;
};

const cubeMemo = memo(cube);

console.time("cube");
console.log(cubeMemo(0)); // 125  ≈1s
console.timeEnd("cube");

console.time("cube2");
console.log(cubeMemo(0)); // 125  ≈0.001s
console.timeEnd("cube2");
