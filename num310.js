const True = (T) => (F) => T;
const False = (T) => (F) => F;

unchurch(True); //true;

//Not, And, Or and Xor.

function not(a) {
  return !a;
}
//And =
//function (A){
// return function(B){
//        return A(False)(True)
// }
//}

const And = (A) => (B) => A(B)(A);
const Not = (A) => A(False)(True);
const Or = (A) => (B) => A(A)(B);
const Xor = (A) => (B) => A(Not(B))(B);

// Not(False) === True
// Not(True) === False

//const Or = (A) => (B) => A();

And(True)(True) === True;
And(True)(False) === False;
And(False)(True) === False;
And(False)(False) === False;

/* function A(bool) {
  return bool;
}

function B(bool) {
  return bool;
} */

// const Not = A => null
// const Or = A => B => null
// const Xor = A => B => null
