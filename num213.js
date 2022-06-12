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
validate();

function validate(ip = "123.45.67.89") {
  const arr = ip.split(".");

  arr.every((item) => {
    console.log(/([0-2][0-2][0-5]|[0-9][0-9]|[0-9])/.test(item));
  });
  /* 
  return /([0-2][0-2][0-5]|[0-9][0-9]|[0-9])\.([0-2][0-2][0-5]|[0-9][0-9]|[0-9])\.([0-2][0-2][0-5]|[0-9][0-9]|[0-9])\.([0-2][0-2][0-5]|[0-9][0-9]|[0-9])/.test(
    ip
  ); */
}
