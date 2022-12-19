// return the sum of all values in the tree, including the root

let simpleNode = {
  value: 10,
  left: { value: 1, left: null, right: null },
  right: { value: 2, left: null, right: null },
};

let unbalancedNode = {
  value: 11,
  left: { value: 0, left: null, right: null },
  right: { value: 0, left: null, right: { value: 1, left: null, right: null } },
};

function sumTheTreeValues(root) {
  if (root === null) {
    return 0;
  }

  return (
    sumTheTreeValues(root.left) + sumTheTreeValues(root.right) + root.value
  );
}

console.log(sumTheTreeValues(unbalancedNode));

/* 
  describe("Simple Test", function() {
  var simpleNode = {value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}};
  it("Sums up all children", function() {
    Test.assertEquals(sumTheTreeValues(simpleNode), 13);
  });
  
  var unbalancedNode = {value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}};
  it("Handles unbalanced trees", function() {
    Test.assertEquals(sumTheTreeValues(unbalancedNode), 12);
  });

});
  
  */
