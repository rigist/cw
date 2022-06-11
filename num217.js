//------217

/* 
calculate('123.456')       == 123.456
calculate('+ -5 5')        == 0
calculate('* + 2 2 3')     == 12
calculate('/ + 3 5 * 2 2') == 2
*/

console.log("c:", calculate("* + 2 2 3"));
function calculate(str) {
  //   /(\*|\+|-|\/)\s{0,}([0-9])\s{0,}([0-9])/g
  //console.log("0", str[0]);

  while (str[0] == "+" || str[0] == "-" || str[0] == "*" || str[0] == "/") {
    str = calcReplace(str);
  }

  // if (str[0] == "+" || str[0] == "-" || str[0] == "*" || str[0] == "/") {

  calcReplace(str);
  function calcReplace(str) {
    let result = str.replace(
      /(\*|\+|-|\/)\s{0,}([0-9])\s{0,}([0-9])/g,
      function (match0, m1, m2, m3) {
        // console.log(m1, m2, m3);
        let res = 0;
        //    (m1, m2, m3)=>{

        switch (m1) {
          case "+":
            res = +m2 + +m3;
            break;
          case "-":
            res = +m2 - +m3;
            break;
          case "*":
            res = +m2 * +m3;
            break;
          case "/":
            res = +m2 / +m3;
            break;
          default:
            res = 0;
        } // switch
        // console.log("t", res);

        return res;
        //  }// f

        //let res = `${match1}${match2}${Number(match3) + 1}`;
        //return res;
      }
    ); //replace
    return (str = result);
  } //calcReplace
  //} //if(str[0] == "+" || str[0] == "-" || str[0] == "*" || str[0] == "/")
  // console.log("result", result);
  return str;
} //calculate
