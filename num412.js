function max() {
  return Math.max.apply(null, arguments);
}

function filterNumbers(...args) {
  console.log(args);

  return args.filter((i) => isNumeric(i));
  // return Array.prototype.filter.call(arguments, function (value) {
  //   return isNumeric(value);
  // });

  // Array.prototype.filter.call(arguments, function (value) {
  //   return isNumeric(value);
  // })

  // arguments.filter(function (value) {
  //   return isNumeric(value);
  // })
}

//o.f(a, b, c); // this === o  arguments === [a, b, c]

// o.f.call(o, 1, 2, 3)
// o.f(1, 2, 3)

console.log(filterNumbers(1, 2, "a", 3, "x", 4, 5));

function isNumeric(n) {
  return !isNaN(n) && Number(n) === n;
}

function filterRange(min, max, ...args) {
  //var args = Array.prototype.slice.call(arguments, 2);
  // let min = args[0];
  // let max = args[1];
  // args = args.slice(2);
  // arguments.slice(2)
  console.log("args", args);

  return args.filter(function (value) {
    return min <= value && value <= max;
  });
  // return Array.prototype.filter.call(args, function (value) {
  //   return min <= value && value <= max;
  // });
}

//        min max [   args   ]
console.log(filterRange(1, 10, 7, 9, 10, 11));

function Lazy() {
  this.arr = [];
  // this.add = function (fn) {

  // };
}

Lazy.prototype.add = function (fn, ...args) {
  this.arr.push({ fn, args });
  return this;
};

Lazy.prototype.invoke = function (ar) {
  //console.log(ar);
  //console.log("this.arr", this.arr);

  let res = ar;

  //let k = 0;

  for (const f of this.arr) {
    //console.log("f", f, ...f.args);

    res = f.fn(...f.args, ...res);

    console.log("res", res);
  }

  return res;
};

const laz = new Lazy();

laz.add(filterNumbers);
laz.add(filterRange, 2, 7);
laz.add(max);

laz.invoke([1, 8, 6, [], "7", -1, { v: 5 }, 4]);

console.log(laz);
