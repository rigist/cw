/* 
Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

 */

removeDuplicateWords(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
);

function removeDuplicateWords(s) {
  // your perfect code...

  let arr = s.split(" ");
  let res = [...new Set(arr)];
  return res.join(" ");
}
