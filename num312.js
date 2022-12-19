console.log(+add(1)(2));

function add(n) {
  // let sum = n;

  function fn(m) {
    //sum += m;
    //console.log(sum, fn.length);

    return add(n + m);
  }

  fn.toString = function () {
    return n;
  };

  return fn;
}

console.log(+add(1)(2)(3)); // == 6
console.log(+add(1)(2)(3)(4)); //  == 10
console.log(+add(1)(2)(3)(4)(5)); // == 15

console.log(+add(3)); // == 1);

let addTwo = add(2);

console.log(+addTwo);

console.log(+addTwo + 5); // == 7
console.log(+addTwo(3)); // == 5

let addThree = add(2);
let addFour = add(2);

console.log("-3", +addThree(1));
console.log("-4", +addThree(10));
