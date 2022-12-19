/* const addOne = (a) => a + 1
const multTwo = (b) => b * 2
const addOneMultTwo = (c) => multTwo(addOne(c)) */

const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

const addOneMultTwo = compose(multTwo, addOne);

//console.log(addOneMultTwo(5)); // returns 12

function compose(...fns) {
  fns.reverse();

  return function (arg) {
    for (const f of fns) {
      arg = f(arg);
    }
    return arg;
  };
  // console.log(fns);
  // let arg = 5;
  //console.log( fns[1](  fns[0](arg)));
  //return multTwo(addOne(arg))
}

/* function func(a){
    let a = a+1;
    return fn(a){return a*2}
} */
