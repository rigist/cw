//------217

/* 
calculate('123.456')       == 123.456
calculate('+ -5 5')        == 0
calculate('* + 2 2 3')     == 12
calculate('/ + 3 5 * 2 2') == 2
*/

// 12

// '/ + 3 5 * 2 2'

// 2

//* + 2 2 3

//1. в arr2 [3]
//2. в arr2 [3, 2]
//3. в arr2 [3, 2, 2]
//4. в arr2 [3, 4]
//5. в arr2 [12]

console.log(calc2("/ + 3 5 * 2 2"));

function calc2(str) {
  const tokens = str.split(" ");

  const numbers = [];

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  //console.log("rev", arr.reverse());

  for (let token of tokens.reverse()) {
    // console.log("op", operations[i]);
    if (token in operations) {
      //console.log("a22", arr2);
      let a = numbers.pop();
      let b = numbers.pop();
      //console.log("ab", a, b);

      numbers.push(operations[token](a, b));
    } else {
      numbers.push(+token);
      //console.log("a2", arr2);
    }
  }
  //console.log("arr", arr);

  return numbers[0];
}

function calculate(str) {
  if (str[0] != "+" && str[0] != "-" && str[0] != "*" && str[0] != "/") {
    return +str;
  }

  while (str[0] == "+" || str[0] == "-" || str[0] == "*" || str[0] == "/") {
    console.log(str);
    str = calcReplace(str);
  }

  // if (str[0] == "+" || str[0] == "-" || str[0] == "*" || str[0] == "/") {

  calcReplace(str);
  function calcReplace(str) {
    let result = str.replace(
      /(\*|\+|-|\/)\s{0,}-?([0-9]+(\.\d+)?)\s{0,}-?([0-9]+(\.\d+)?)/g,
      function (match0, m1, m2, m3) {
        console.log(arguments);
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
}

// console.log("c:", calculate("* + 2 2 3"));
//console.log("c:", calculate("+ 1.5 1.5"));
// function calculate(str) {
//   //   /(\*|\+|-|\/)\s{0,}([0-9])\s{0,}([0-9])/g
//   //console.log("0", str[0]);

//   if (str[0] != "+" && str[0] != "-" && str[0] != "*" && str[0] != "/") {
//     return +str;
//   }

//   while (str[0] == "+" || str[0] == "-" || str[0] == "*" || str[0] == "/") {
//     str = calcReplace(str);
//   }

//   // if (str[0] == "+" || str[0] == "-" || str[0] == "*" || str[0] == "/") {

//   calcReplace(str);
//   function calcReplace(str) {
//     let result = str.replace(
//       /(\*|\+|-|\/)\s{0,}([0-9])\s{0,}([0-9])/g,
//       function (match0, m1, m2, m3) {
//         // console.log(m1, m2, m3);
//         let res = 0;
//         //    (m1, m2, m3)=>{

//         switch (m1) {
//           case "+":
//             res = +m2 + +m3;
//             break;
//           case "-":
//             res = +m2 - +m3;
//             break;
//           case "*":
//             res = +m2 * +m3;
//             break;
//           case "/":
//             res = +m2 / +m3;
//             break;
//           default:
//             res = 0;
//         } // switch
//         // console.log("t", res);

//         return res;
//         //  }// f

//         //let res = `${match1}${match2}${Number(match3) + 1}`;
//         //return res;
//       }
//     ); //replace
//     return (str = result);
//   } //calcReplace
//   //} //if(str[0] == "+" || str[0] == "-" || str[0] == "*" || str[0] == "/")
//   // console.log("result", result);
//   return str;
// } //calculate
