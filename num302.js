/* var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6 */

function add(n) {
  return function (num) {
    return num + n;
  };
}
