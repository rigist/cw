console.log(persistence(39));

function persistence(num) {
  let count = 0;

  while (num > 9) {
    count++;
    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((prev, current) => prev * current, 1);
  }

  return count;
}
