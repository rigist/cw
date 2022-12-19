//[1,2,3].insert(0,42) => [42,1,2,3]

Array.prototype.insert = function (position, num) {
  //arr = this;
  // console.log(arr);
  // console.log(...arr.slice(0, position));
  // console.log(num);
  // console.log(...arr.slice(position, arr.length));

  //arr = [...arr.slice(0, position), num, ...arr.slice(position, arr.length)];
  // this = [];
  //this.push(...arr);
  //let res =
  this.splice(position, 0, num);
  //console.log(this, this.splice(position, 0, num));
  return this;
};

Object.defineProperty(Array.prototype, "insert", {
  enumerable: false,
});
//console.log([1, 2, 3].insert(0, 42));

//console.log([true, true, true].insert(2, false));
console.log([0, 1, 2].insert(2, 9));

//[[true,true,true],2,false,[true,true,false,true]]
//Expected: '[true, true, false, true]', instead got: '[true, true, false]'
