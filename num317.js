function flip(fn) {
  function rever(...args) {
    console.log(fn, args);
    return fn(...args.reverse());
  }

  return rever;
}

console.log(flip(print)(4, 5)); // returns "5 -> 4"

function print(a, b) {
  return a + " -> " + b;
}
