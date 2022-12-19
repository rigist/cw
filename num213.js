//--------------213-----------------

/* 
Valid inputs examples:
with values between 0 and 255, inclusive.


Examples of valid inputs:
1.2.3.4
123.45.67.89

Invalid input examples:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

*/
console.log(validate("255.55.30.98"));

function validate(str) {
  const arr = str.split(".");

  if (arr.length !== 4) {
    return false;
  }

  function testItem(item) {
    if (!/^\d+$/.test(item)) {
      return false;
    }
    if (item !== "0" && item.startsWith("0")) {
      return false;
    }
    if (+item <= 255 && +item >= 0) {
      return true;
    }

    return false;
  }

  return arr.every((item) => testItem(item));
  // return arr.every(testItem);
}

function testItem(item) {
  if (!/^\d+$/.test(item)) {
    return false;
  }
  if (!/^0./.test(item)) {
    return false;
  }
  if (+item <= 255 && +item >= 0) {
    return true;
  }

  return false;
}

// if (item.length > 3 || item.length < 1) {
//   return false;
// }
// if (item.length == 3) {
//   //console.log("---");
//   //console.log("t", +item.substring(1));
//   if (item[0] == "0" /* || +item.substring(1) > 55 */) {
//     return false;
//   }
//   if (item[0] == "2" && +item.substring(1) > 55) {
//     return false;
//   }
//   if (item[0] != "1" && item[0] != "2") {
//     return false;
//   }
//   if (/[^0-9]{1,}/.test(item)) {
//     return false;
//   }
// } //if
// if (item.length == 2) {
//   if (item[0] == "0") {
//     return false;
//   }
//   if (/[^0-9]{1,}/.test(item)) {
//     return false;
//   }
// } //if
// if (item.length == 1) {
//   if (/[^0-9]{1,}/.test(item)) {
//     return false;
//   }
// }
// return true;
//test

// validate();

// function validate(ip = "23.45.67.89") {
//   const arr = ip.split(".");
//   console.log("t", /[0-2][0-2][0-5]|[0-9][0-9]|[0-9]/.test("444"));
//   //console.log(arr.length);
//   if (arr.length != 4) {
//     return false;
//   }
//   console.log(arr);
//   console.log(
//     arr.every((item) => {
//       return /* !/^[0]/.test(item) && */ /[0-2][0-2][0-5]|[0-9][0-9]|[0-9]/.test(
//         item
//       );
//     })
//   );

/*   arr.every((item) => {
    console.log(/([0-2][0-2][0-5]|[0-9][0-9]|[0-9])/.test(item));
  }); */
/* 
  return /([0-2][0-2][0-5]|[0-9][0-9]|[0-9])\.([0-2][0-2][0-5]|[0-9][0-9]|[0-9])\.([0-2][0-2][0-5]|[0-9][0-9]|[0-9])\.([0-2][0-2][0-5]|[0-9][0-9]|[0-9])/.test(
    ip
  ); */
//}

/* 
Test.assertEquals(isValidIP("0.0.0.0"), true);
  Test.assertEquals(isValidIP("12.255.56.1"), true);
  Test.assertEquals(isValidIP("137.255.156.100"), true);
  
  Test.assertEquals(isValidIP(''), false);
  Test.assertEquals(isValidIP('abc.def.ghi.jkl'), false);
  Test.assertEquals(isValidIP('123.456.789.0'), false);
  Test.assertEquals(isValidIP('12.34.56'), false);
  Test.assertEquals(isValidIP('01.02.03.04'), false);
  Test.assertEquals(isValidIP('256.1.2.3'), false);
  Test.assertEquals(isValidIP('1.2.3.4.5'), false);
  Test.assertEquals(isValidIP('123,45,67,89'), false);
  Test.assertEquals(isValidIP('1e0.1e1.1e2.2e2'), false);
  Test.assertEquals(isValidIP(' 1.2.3.4'), false);
  Test.assertEquals(isValidIP('1.2.3.4 '), false);
  Test.assertEquals(isValidIP('12.34.56.-7'), false);
  Test.assertEquals(isValidIP('1.2.3.4\n'), false);
  Test.assertEquals(isValidIP('\n1.2.3.4'), false);
});
*/
