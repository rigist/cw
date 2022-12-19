// 18-19  -29   18-58
// 12-08

function spyOn(func) {
  //const obj = {};

  let count = 0;

  const setValue = new Set();
  const setReturn = new Set();

  function fn(...args) {
    count++;
    //console.log("fl", func.length, args, ...args);
    args.forEach((item) => setValue.add(item));
    //console.log(set);
    // console.log("cc", count);
    const result = func(...args);
    setReturn.add(result);
    return result;
  }

  fn.callCount = () => count;
  fn.wasCalledWith = (value) => setValue.has(value);
  fn.returned = (value) => setReturn.has(value);

  return fn;
}

function adder(n1, n2) {
  return n1 + n2;
}

let adderSpy = spyOn(adder);

console.log(adderSpy(2, 4));
console.log(adderSpy(3, 5));
console.log(adderSpy(2, 4));
console.log("call", adderSpy.callCount());
console.log(adderSpy.wasCalledWith(4)); // true  возвращает true, если когда- spyлибо вызывалась с val, иначе возвращает false.
console.log(adderSpy.wasCalledWith(0));
console.log(adderSpy.returned(8)); // true   возвращает true, если когда- spyлибо возвращалось val, иначе возвращаетfalse
console.log(adderSpy.returned(0));

//console.log(spyOn().callCount());
//// let adderSpy = spyOn(adder);

//// console.log(adderSpy(2, 4));
// /// Array.prototype.myFunction = myFunction;
/* adderSpy(2, 4); // returns 6
adderSpy(3, 5); // returns 8
adderSpy.callCount(); // returns 2  возвращает количество spy вызовов
adderSpy.wasCalledWith(4); // true  возвращает true, если когда- spyлибо вызывалась с val, иначе возвращает false.
adderSpy.wasCalledWith(0); // false
adderSpy.returned(8); // true   возвращает true, если когда- spyлибо возвращалось val, иначе возвращаетfalse
adderSpy.returned(0); // false
 */

// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key)

/* function memo(fn) {
    //const obj = {};
  
    const map = new Map();
    return function (a) {
      if (!map.has(a)) {
        map.set(a, fn(a));
        //obj[a] = fn(a);
      }
      return map.get(a);
    };
  } */

/*  const obj = {
    count: 0,
    wasCall: false,
    isReturned: false,
    callCount() {
      return "1";
    },
    wasCalledWith() {},
    returned() {},
  };
  console.log(this);
  return obj; */
