//----------215
/* 

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
*/

function incrementer(str) {
  /*  let s = "ssssd";
    console.log(s[s.length - 1]); */

  if (typeof str[str.length - 1] != "string") {
    return (str = str + "1");
  } else {
    let result = str.replace(
      /([a-z]{1,})(0{0,})([0-9]{1,})$/g,
      function (match0, match1, match2, match3) {
        // console.log(match1, match2, match3);
        // console.log("m", match2.split("").pop());
        if (match3[match3.length - 1] == "9") {
          match2 = match2.split(""); //.length = match2.length - 1; //.length
          match2.length = match2.length - 1;
          match2 = match2.join("");
        }
        //console.log("mm", match2);
        let res = `${match1}${match2}${Number(match3) + 1}`;
        return res;
      }
    );
    return result;
  }
}

console.log(incrementer("foo00099"));
//нули перед числом как?
// /([a-z]{1,})(0{0,})([0-9]{1,})$/g

/* match3[match3.length - 1] != "9"
            ? match2
            : () => {
                match2.split("").pop();
                return match2;
              } */
