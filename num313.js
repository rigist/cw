function add(x, y, z, a, b, c, d, e, f, g) {
  return x + y + z + a + b + c + d + e + f + g;
}

function curryPartial11(fn) {
  //console.log("a", [...arguments]);

  const value = [...arguments][1];

  function funcCurri(...args) {
    //console.log("gg", args);

    let leng = args.length;

    if (!args[1]) {
      return function (b) {
        return function (c) {
          return fn(args[0], b, c);
        };
      };
    } //if

    //console.log("000", value);

    // console.log("001");
    // console.log("rrr", args);
    // console.log("vv", value, b, c);
    //};
  }

  function funcPart(b, c) {
    //console.log("vv", value, b, c);
    return fn(value, b, c);
  }

  if (![...arguments][1]) {
    return funcCurri;
  } else {
    return funcPart;
  }

  // 2 hfpyst a-bb ретурнить от условия
}

function curryPartial(fn, ...args) {
  /// args === 1,2,3
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return function (...nextArgs) {
    // nextArgs === 4,5
    return curryPartial(fn, ...args, ...nextArgs);
  };
}

curryPartial(add, 1, 2, 3)(4, 5)(6)(7, 8, 9, 0);
curryPartial(add, 1, 2, 3, 4, 5)(6)(7, 8, 9, 0);

curryPartial(add, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0) === 45;

curryPartial(add, 1, 2, 3)(4, 5)(6)(7, 8, 9, 0) === 45;

//console.log(curryPartial(add, 1));

// var curriedAdd = curryPartial(add);
// console.log("c", curriedAdd(1)(2)(3)); //6

// console.log("c2", curriedAdd(1)(2)(3)(4)(5)(6)(7)); //6
// console.log("c2", curriedAdd(1, 2, 3));
// console.log("c2", curriedAdd());

// var partialAdd = curryPartial(add, 1);
// console.log("p", partialAdd(2, 3)); //6

// curryPartial(add)(1)(2)(3); //6
// curryPartial(add, 1)(2)(3); //6
// curryPartial(add, 1)(2, 3); //6
// curryPartial(add, 1, 2)(3); //6
// curryPartial(add, 1, 2, 3); //6
// curryPartial(add)(1, 2, 3); //6
// curryPartial(add)(1, 2)(3); //6
// curryPartial(add)()(1, 2, 3); //6
// curryPartial(add)()(1)()()(2)(3); //6

// curryPartial(add)()(1)()()(2)(3, 4, 5, 6); //6
// curryPartial(add, 1)(2, 3, 4, 5); //6
