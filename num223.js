const str1 = "what a beautiful day today";
const str2 = "it's okay, but very breezy";

const arr = [str1, str2];
console.log(findStr(arr));

console.log("2", findStr(["high", "day", "boot"]));

// ["high","day","boot"] , ["boot","high","day"]);

function findStr(arr) {
  const vowels = /[aeiou]+/gi;

  //   console.log(arr[0].match(vowels));
  //   console.log(Math.max(...arr[0].match(vowels).map((item) => item.length)));

  function maxLength(arr) {
    const arrMatch = arr.match(vowels);

    if (arrMatch === null) {
      return 0;
    }

    return Math.max(...arrMatch.map((item) => item.length));
  }

  return arr.sort((a, b) => maxLength(b) - maxLength(a));
}

//
function sortStringsByVowels(strings) {
  const vowels = /[aeiouy]{2,}/gi;

  //   console.log(arr[0].match(vowels));
  //   console.log(Math.max(...arr[0].match(vowels).map((item) => item.length)));

  function maxLength(arr) {
    return Math.max(...arr.match(vowels).map((item) => item.length));
  }

  return strings.sort((a, b) => maxLength(a) - maxLength(b));
}
