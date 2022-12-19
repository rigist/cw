function once(fn) {
  let called = false;

  return function (a) {
    // console.log(count, count);
    if (!called) {
      called = true;
      return fn(a);
    }
  };
}

logOnce = once(console.log);
logOnce("foo"); // -> "foo"
logOnce("bar"); // -> no effect

//16-10  -31 ????

/* 
 if (count === 0) {
    count = count + 1;
    return fn;
  } else {
    return undefined;
  }

*/
