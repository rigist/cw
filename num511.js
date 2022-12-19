function countChange33(money, coins) {
  // your implementation here
  let sum = 0;
  for (const item of coins) {
    if (money % item == 0) {
      sum++;
    }
  }
  return sum;
}

console.log(countChange(4, [1, 2])); // => 3

function countChange(money, coins) {
  console.log(coins.sort().reverse());
  arr = [];
  for (const item of coins) {
    coins.shift();
    count2(money - item, coins);
  }
  function count2(money2, coins2) {
    console.log(money2, coins2);
    for (let item of coins2) {
      if (money2 % item === 0) {
        arr.push(1);
      }
    }
  }
  console.log("arr", arr);
}

//1+1+1+1, 1+1+2, 2+2.
//countChange(10, [5, 2, 3]); // => 4
//countChange(11, [5, 7]); //  => 0

//1+1+1+1, 1+1+2, 2+2.

function countChange44(money, arr) {
  let sum = 0;
  arr.sort().reverse();
  let ost = 0;

  // for (let i = 0; i < arr.length; i++) {
  if (arr.length === 1) {
    if (money % arr[0] === 0) {
      return sum + 1;
    } else {
      return sum;
    }
  }
  // }
  let ddd = 0;
  while (money > arr[0]) {
    money = money - arr[0];
    ddd++;
    console.log("m", money, ddd);
  }
  //countChange(money, [1]);

  // if(money - arr[0] <= arr[0]){

  // }
  // for (let i = 0; i < arr.length; i++) {

  // }
  //countChange(money - item, [item])
  console.log(sum);
  return sum;
}

function countChange11(money, arr) {
  let sum = 0;
  for (let item of arr) {
    if (money % item === 0) {
      sum += 1;
    }
  }

  //** */console.log(arr.sort().reverse());

  for (let item of arr) {
    //if (countChange(money - item, [item])){}
  }

  //  4-[2]=2
  // countChange(2, [1])

  return sum;
}
