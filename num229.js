// // input
// groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);

// // output
// [
//   ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]
// ]

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));

function groupAnagrams(words) {
  const obj = {};

  for (let word of words) {
    const wordSorted = word.toLowerCase().split("").sort().join("");

    if (!obj[wordSorted]) {
      obj[wordSorted] = [];
    }
    obj[wordSorted].push(word);
  }

  //console.log(obj, Object.values(obj));

  return Object.values(obj);
}
