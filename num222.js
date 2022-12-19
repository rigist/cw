//https://www.codewars.com/kata/alphabetized
//15-54
console.log("222", alphabetized("The Holy Bible"));

function alphabetized(str) {
  return str
    .replace(/[^a-z]/gi, "")
    .split("")
    .map((item, i) => [item, i])
    .sort((a, b) => {
      const diff = a[0].toLowerCase().localeCompare(b[0].toLowerCase());
      if (diff !== 0) {
        return diff;
      }
      return a[1] - b[1];
    })
    .map((item) => item[0])
    .join("");

  /* return Array.from(str)
    .sort((a, b) => {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      } else if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    })
    .join(""); */
}
