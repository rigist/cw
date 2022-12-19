//sortByBit([3, 8, 3, 6, 5, 7, 9, 1]) // => [1, 8, 3, 3, 5, 6, 9, 7]

/* E.g Given the array [7, 6, 15, 8]

7 has 3 on bits (000...0111)
6 has 2 on bits (000...0011)
15 has 4 on bits (000...1111)
8 has 1 on bit (000...1000)
So the array in sorted order would be [8, 6, 7, 15]. */

/* console.log(
  "---",
  (6)
    .toString(2)
    .split("")
    .filter((item) => item !== "0").length
); */

console.log(sortByBit([7, 6, 15, 8]));

function bitCoint(num) {
  return num
    .toString(2)
    .split("")
    .filter((item) => item !== "0").length;
}
function sortByBit(arr) {
  return arr.sort((a, b) => bitCoint(a) - bitCoint(b));
}
