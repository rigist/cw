var abc = makeLooper("abc");
console.log(abc()); // should return 'a' on this first call
console.log(abc()); // should return 'b' on this second call
console.log(abc()); // should return 'c' on this third call
console.log(abc()); // should return 'a' again on this fourth call
console.log(abc()); // should return 'b'
console.log(abc()); // should return 'c'
console.log(abc()); // should return 'a'

function makeLooper(str) {
  let i = 0;

  return function () {
    let s = str[i];
    i++;
    if (i === str.length) {
      i = 0;
    }
    return s;
  };
}
