//----------215
/* 

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
*/
console.log(incrementString("foobar000"));

function incrementString(str) {
  const endsWithDigits = /[0-9]+$/;

  if (!endsWithDigits.test(str)) {
    return str + "1";
  }
  return str.replace(endsWithDigits, (match) =>
    `${+match + 1}`.padStart(match.length, "0")
  );
}

// console.log("t", /[a-zA-Z]$/g.test("foo1"));

// function incrementer(str) {
//   if (str == "") {
//     return "1";
//   }
//   if (/[a-zA-Z]$/g.test(str)) {
//     return (str = str + "1");
//   } else {
//     let result = str.replace(
//       /([a-z]{1,})(0{0,})([0-9]{1,})$/g,
//       function (match0, match1, match2, match3) {
//         if (match3[match3.length - 1] == "9") {
//           match2 = match2.split("");
//           match2.length = match2.length - 1;
//           match2 = match2.join("");
//         }

//         let res = `${match1}${match2}${Number(match3) + 1}`;
//         return res;
//       }
//     );
//     return result;
//   }
// }

// console.log(incrementer("foo"));
//нули перед числом как?
// /([a-z]{1,})(0{0,})([0-9]{1,})$/g

/* match3[match3.length - 1] != "9"
            ? match2
            : () => {
                match2.split("").pop();
                return match2;
              } */
