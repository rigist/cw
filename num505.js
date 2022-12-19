// function solve(a, b) {
//   //..
//   const arrA = a.split("");
//   const arrB = b.split("");
// }

//solve("zaz", "zazapulz"); // === solve("az", "azapulz") + solve("az", "apulz") + solve("az", "");
//= 4 because they are ZAZapulz, ZAzapulZ, ZazApulZ, zaZApulZ

// zazaz
//Z

console.log(solve("zaz", "zazapulz")); //= 4 because they are ZAZapulz, ZAzapulZ, ZazApulZ, zaZApulZ

// solve("zaz", "zazapulz");

// solve("az", "azapulz");
// solve("az", "apulz");
// solve("az", "");

function solve(str, word) {
  //console.log("ww=", str[0].(str));
  if (str.length === 0) {
    return 1;
  }
  //const arrRes = [];
  // const arrStr = str.split("");
  //const arrWord = word.split("");
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    if (str[0] === word[i]) {
      //console.log(str.slice(1), word.slice(1));
      sum += solve(str.slice(1), word.slice(i));

      //word.slice(i)
    }
  }

  return sum;

  //console.log(arrRes[0], arrRes[0].split("").shift().join(""));

  //solve("az", arrRes[0].shift);

  //return word.split(str).length - 1;
  // const arrStr = str.split("");
  // const arrWord = word.split("");
  // //console.log(arrStr, arrWord);
  // let strLen = arrStr.length;
  // let wordLen = arrWord.length;
  // let letter = 0;
  // //for (let letter of arrStr){
  // for (let i = 0; i < arrWord; i++) {
  //   if (arrStr[letter] === arrWord[i]) {
  //     console.log("i", i);
  //     // solve(strLen, wordLen);
  //   }
  //}
  //console.log(str.indexOf('z'))
  //console.log(word.split(arr[0]));
  //console.log("mmm", word.match(/^[z] | z /g))
  // for (let letter of arr){
  //   console.log(letter)
  // }
}

//solve("a", "abcaj"); // === 2

// "bcaj"  "j"
