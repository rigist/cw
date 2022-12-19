function sum(x, y) {
  return x + y;
}

function double(x) {
  return sum(x, x);
}

function minus(x, y) {
  return x - y;
}

function addOne(x) {
  return sum(x, 1);
}
const c = chain({ sum, minus, double, addOne });
console.log("sum", c.sum(4, 4).sum(5).execute());
/*c.sum(4, 5)
  .sum(4, 5)
  .minus(4, 5)
  .sum(4, 5)
  .addOne()
  .double()
  .double()
  .execute(); // 72 */
console.log(
  c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute()
);

function chain(fns, temp, first = true) {
  const obj = {};
  obj.execute = function () {
    return temp;
  };

  // console.log("temp", temp);

  for (const f in fns) {
    //  console.log("f", f);
    obj[f] = function func(...args) {
      const res = first ? fns[f](...args) : fns[f](temp, ...args);
      return chain(fns, res, false);
    };
  }

  return obj;
}
/* 
  console.log("ttt", obj.sum(2));

  console.log("o", obj);
  console.log(Object.values(fns), Object.keys(fns));
  console.log(fns);
  sum1 = 0;
  chain.sum = function (a, b) {
    sum1 = Object.values(fns)[0](a, b);
    return this;
  };

  chain.execute;
 */

//console.log(chain.sum(3, 3));

//.sum(3, 3)
