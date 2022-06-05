/*
Input:

[ 1, 8, 4, 4, 6, 1, 8 ]
Expected output:

6
*/
console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));

function findUnique(numbers) {
  // Return the unique number

  let num = numbers[0];
  let k = 0;

  for (const n of numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] == num) {
        k = k + 1;
        num = numbers[k];
        console.log(num);
        break;
      }
    }
  } //for
  return num;
}
