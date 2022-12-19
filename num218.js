//------218
//

//A, B, C, D, E, F
//10 11 12 13 14 15

//FF@16 = 15∙16@1+15∙16@0 = 240+15 = 255@10

//"#FF9933" --> {r: 255, g: 153, b: 51}

function hexStringToRGB(str) {
  const [r, g, b] = str
    .slice(1)
    .match(/../g)
    .map((item) => parseInt(item, 16));

  return { r, g, b };
}

console.log(">>>>>", hexStringToRGB("#FF9933"));

function h2exStringToRGB(str) {
  //console.log(3**1);

  //  /[a-zA-Z0-9]{2}/g

  let result = str.replace(/([a-zA-Z0-9]{2})/g, function (match0, m1) {
    // console.log(m1);
    let first = m1[0];
    let second = m1[2];

    // console.log("H:", +withHex(m1[0]) * 16 + +withHex(m1[1]));

    function withHex(str) {
      //console.log(+str, typeof(str));

      if (
        str != "0" &&
        str != "1" &&
        str != "2" &&
        str != "3" &&
        str != "4" &&
        str != "5" &&
        str != "6" &&
        str != "7" &&
        str != "8" &&
        str != "9"
      ) {
        switch (str) {
          case "A":
            return 10;
            break;
          case "B":
            return 11;
            break;
          case "C":
            return 12;
            break;
          case "D":
            return 13;
            break;
          case "E":
            return 14;
            break;
          case "F":
            return 15;
            break;
          default:
            return false;
        } // switch
      } //if
      else {
        return +str;
      }
    } // withHex

    return `${+withHex(m1[0]) * 16 + +withHex(m1[1])} `;
  });
  // console.log(result);
  result = result.substring(1).trim().split(" ");
  // console.log(result);
  return { r: +result[0], g: +result[1], b: +result[2] };
}

// console.log(toRGB("#FF9933"));
// function toRGB(str) {
//   //console.log(3**1);

//   //  /[a-zA-Z0-9]{2}/g

//   let result = str.replace(/([a-zA-Z0-9]{2})/g, function (match0, m1) {
//     // console.log(m1);
//     let first = m1[0];
//     let second = m1[2];

//     // console.log("H:", +withHex(m1[0]) * 16 + +withHex(m1[1]));

//     function withHex(str) {
//       //console.log(+str, typeof(str));

//       if (
//         str != "0" &&
//         str != "1" &&
//         str != "2" &&
//         str != "3" &&
//         str != "4" &&
//         str != "5" &&
//         str != "6" &&
//         str != "7" &&
//         str != "8" &&
//         str != "9"
//       ) {
//         switch (str) {
//           case "A":
//             return 10;
//             break;
//           case "B":
//             return 11;
//             break;
//           case "C":
//             return 12;
//             break;
//           case "D":
//             return 13;
//             break;
//           case "E":
//             return 14;
//             break;
//           case "F":
//             return 15;
//             break;
//           default:
//             return false;
//         } // switch
//       } //if
//       else {
//         return +str;
//       }
//     } // withHex

//     return `${+withHex(m1[0]) * 16 + +withHex(m1[1])} `;
//   });
//   // console.log(result);
//   result = result.substring(1).trim().split(" ");
//   // console.log(result);
//   return { r: result[0], g: result[1], b: result[2] };
// }
