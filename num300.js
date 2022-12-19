function detectInt(...fns) {
  console.log(fns);
  for (let i = 0; ; i++) {
    if (fns.every((item) => item(i))) {
      return i;
    }
  }
}

console.log(
  detectInt(
    (x) => x > 10,
    (x) => x % 7 === 3,
    (x) => x * 2 > 30,
    (x) => x % 2 === 0
  )
); // 24
