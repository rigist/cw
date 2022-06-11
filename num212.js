//-----------212----------------

//abbreviate("elephant-rides are really fun!");
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
//=== "e6t-r3s are r4y fun!"

function abbreviate(str) {
  let result = str.replace(
    /([a-z])([a-z]{3,})([a-z])/g,
    function (match0, match1, match2, match3) {
      // console.log( match1.length, match1, match2, match3
      //  );
      let res = `${match1}${match2.length}${match3}`;
      return res;
    }
  );

  console.log(result);
  return result;
} //function

//([a-z])([a-z]{3,})([a-z])(.{1})|([a-z]{1,3}.)
