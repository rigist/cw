// console.log(createMessage("Hello")("World!")("how")("are")("you?")());
//"Hello World! how are you?"
//11-06
function createMessage(str) {
  function fn(strTwo) {
    if (strTwo !== undefined) {
      return createMessage(str + " " + strTwo);
    }
    return str;
  }

  return fn;
}

const fn = createMessage(1)(2)(3);

console.log("6--", fn(4)(5)(6)()); // "1 2 3 4 5 6"
console.log("9--", fn(7)(8)(9)()); // "1 2 3 7 8 9"

//https://learn.javascript.ru/function-object    21-43
