function checkWord11(board, word) {
  if (word.length > 1) {
    const arr = word.split("");
  }
  //console.log(arr);
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      if (arr[0] === board[i][k]) {
        console.log(i, k, arr[0]);
        console.log(board.slice(i - 1, i + 2));
        console.log(
          board.map((item) => item.slice(k - 1, k + 2)).slice(i - 1, i + 2)
        );
        /* checkWord(
          board.map((item) => item.slice(k - 1, k + 2)).slice(i - 1, i + 2),
          arr[1]
        ); */
      }
    }
  }
}

function checkWord(board, word) {
  if (word.length > 1) {
    const arr = word.split("");
  }
  let bool = false;
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      if (check(i, k, board, word)) {
        bool = check(i, k, board, word);
      }
    }
  }
  // console.log(bool);
  return bool;
}

function check(x, y, board, word) {
  if (word.length === 0) {
    return true;
  }
  if (x >= board[0].length || y >= board.length || x < 0 || y < 0) {
    return false;
  }
  if (word[0] !== board[y][x]) {
    return false;
  }

  arr = [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
    [x + 1, y + 1],
    [x - 1, y - 1],
    [x - 1, y + 1],
    [x + 1, y - 1],
  ];

  for (const item of arr) {
    if (check(item[0], item[1], board, word.slice(1))) {
      return true;
    }
  }

  return false;
}

const brd = [
  ["I", "L", "A", "W"],
  ["B", "N", "G", "E"],
  ["I", "U", "A", "O"],
  ["A", "S", "R", "L"],
];
console.log(checkWord(brd, "GEO"));

// console.log(check(2, 1, brd, "GEO"));
// console.log(check(0, 3, brd, "AIBILAW"));
//console.log(check(0, 0, [["A"]], "A"));

/* 

[ ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] ]

*/

// function br(bd, l) {
//   //console.log(bd);

//   for (let i = 0; i < bd.length; i++) {
//     for (let k = 0; k < bd[i].length; k++) {
//       if (l === bd[i][k]) {
//         //console.log(i, k, l, "--", k + 1, k - 1);
//       }
//     }
//   }
// }
