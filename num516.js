var TreeNode = function (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

/**
 *      5
 *    /   \
 *  -22    11
 *  / \    / \
 * 9  50  9   2
 */

function maxSum(root) {
  if (root === null) {
    return 0;
  }

  let sum = 0;
  let max = 0;
  const arr = [];
  let sumList = 0;
  sumOfList(root);
  function sumOfList(obj) {
    if (obj.left != undefined && obj.right != undefined) {
      // console.log("ooo", obj.value);
      sum += obj.value;
      sum += sumOfList(obj.left);
      sum += sumOfList(obj.right);
    } else {
      sum += obj.value;
      arr.push(sum);
      sum = 0;
    }
    // console.log("sum", sum);
    return sum;
  }

  //console.log("arr", arr);

  return Math.max(...arr);
}

var root = new TreeNode(
  5,
  new TreeNode(-22, new TreeNode(9), new TreeNode(50)),
  new TreeNode(11, new TreeNode(9), new TreeNode(2))
);

console.log(maxSum(root)); //33

// arrList = [];
// if (obj.left === undefined && obj.right === undefined) {
//   sumList += obj.value;
//   return sumList;
// } else {
//   sumList += sumOfList(obj.left) + sumOfList(obj.right) + obj.value;
// }

//   sumList += maxSum(root.left) + maxSum(root.right) + root.value;

//   return root.value;

//   for (const key in root) {
//     if (root[key] === undefined && root.right === undefined) {
//       console.log(root.value);
//     }
//   }

//   if (root === undefined) {
//     return 0;
//   }

//   if (root.left === undefined && root.right === undefined) {
//     console.log(root.value);
//   }

//   sumList += root.value;

// sum += maxSum(root.left) + maxSum(root.right) + root.value;

// return sum;

//return 0; // TODO: implementation
