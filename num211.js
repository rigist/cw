kebabize("camelsHaveThreeHumps"); // camels-have-three-humps
//kebabize("camelsHave3Humps"); // camels-have-humps

function kebabize([...str]) {
  //console.log(/[A-Z]/.test("a"))
  //console.log(typeof("g"));

  const res = str.map((item) => {
    if (typeof item == "string") {
      if (/[A-Z]/.test(item)) {
        return `-${item.toLowerCase()}`;
      } else {
        return item;
      }
    }
  });

  return res.join("");

  //let res = 1;

  // /[A-Z]/.test(word.charAt(0))
}
