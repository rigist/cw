function multiply(value, times) {
  const obj = {};
  let type = typeof value;
  console.log(type);

  if (
    type != "number" &&
    type != "string" &&
    type != "object" &&
    type != "function"
  ) {
    return value;
  }
  obj["number"] = function () {
    return value * times;
  };

  obj["string"] = function () {
    let result = "";
    for (let i = 0; i < times; i++) {
      result += value;
    }
    return result;
  };

  obj["object"] = function () {
    let arr = [];
    for (let i = 0; i < times; i++) {
      arr.push(value);
    }
    return arr;
  };

  obj["function"] = function () {
    let saveArgs;
    let saveThis;

    function func(...args) {
      saveArgs = args;
      saveThis = this;
      // console.log(
      //   args,
      //   this.is_context,
      //   value,
      //   value(1, "2"),
      //   value.bind(saveThis),
      //   value.bind(saveThis, 1, "2")
      // );
      for (let i = 0; i < times; i++) {
        value.call(this, ...saveArgs);
      }
    }
    return func;
  };

  return obj[type]();
}

//console.log(multiply(9, 3));

//console.log(multiply("[string]", 3));

//let ref = {};
//console.log(multiply(ref, 5));
/////////////////
var i = 0;
var fn = multiply(function (a, b) {
  if (this.is_context && a === 1 && b === "2") {
    console.log(i);
    i++;
  } else {
    console.log("---");
  }
}, 3);
fn.call({ is_context: true }, 1, "2");
// LOGS:
//   0
//   1
//   2

/* 
multiply(9, 3) == 9 * 3 == 27;
multiply("[string]", 2) == "[string]" + "[string]" == "[string][string]";

var i = 0;
var fn = multiply(function(a, b) {
  if (this.is_context && (a === 1) && (b === "2")) {
    console.log(i);
    i++;
  }
}, 3);
fn.call({ is_context: true }, 1, "2");
// LOGS:
//   0
//   1
//   2

var ref = {};
multiply(ref, 5) == [ref, ref, ref, ref, ref];

multiply(null, 10) == null;
*/
