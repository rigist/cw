kebabize("camelsHave333TTThreeHumps"); // camels-have-three-humps
//kebabize("camelsHave3Humps"); // camels-have-humps

function kebabize(str) {
  //console.log(/[A-Z]/.test("a"))
  //console.log(typeof("g"));

  return str
    .replace(/[0-9]/g, "")
    .split("")
    .map((item, index) => {
      // if () {
      if (/[A-Z]/.test(item) && index != 0) {
        return `-${item.toLowerCase()}`;
      } else {
        return item.toLowerCase();
      }
      // }
    })
    .join("");

  //let res = 1;

  // /[A-Z]/.test(word.charAt(0))
}
