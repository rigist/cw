let three = always(true);
console.log(three()); // returns 3 */

function always(n) {
  return function () {
    return n;
  };
}
