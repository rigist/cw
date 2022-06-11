//-----------------220

/* 
is_prime(1)  /* false */
//is_prime(2)  /* true  */
//is_prime(-1) /* false */

//
console.log(is_prime(4));

function is_prime(num) {
  for (let i = 2; i <= num; i++) {
    if (num != i) {
      //console.log(i, num % i);
      if (num % i == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
