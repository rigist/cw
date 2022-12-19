// 214

//-----214
//https://www.codewars.com/kata/5452209f699b534c67000cdf

//frequency(["Peter", "Anna", "Rose", "Peter", "Peter", "Anna"]);

//[["Anna", 2], ["Peter", 3], ["Rose", 1]]
//frequency([1, 10, 12, 2, 1, 10, 2, 2]); //[[1, 2], [2, 3], [10, 2], [12, 1]]

/* console.log(
  "alf",
  frequency([1, 10, 12, 2, 1, 10, 2, 2], { compareTo: alphabeticalCompare })
); //[[1, 2], [10, 2], [12, 1], [2, 3]] */

//console.log("fc", frequency([1, 2, 3, 4, 5, 6, 7], { criteria: parity })); ////[["even", 3], ["odd", 4]]  3 четн

//[["Peter", 3], ["Anna", 2], ["Rose", 1]]
//
/*frequency(["Peter", "Anna", "Rose", "Peter", "Peter", "Anna"], {
    compareTo: frequencyCompare
  }) */

/*--------------------------------*/
/* 
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}, 10); */
//---------------------------------------------

var persons = [
  { name: "Peter", profession: "teacher" },
  { name: "Michael", profession: "teacher" },
  { name: "Anna", profession: "scientific" },
  { name: "Rose", profession: "scientific" },
  { name: "Anna", profession: "scientific" },
  { name: "Anna", profession: "politician" },
];

console.log(
  "kk",
  frequency(persons, { criteria: profession, compareTo: frequencyCompare })
); //[["scientific", 3], ["teacher", 2], ["politician", 1]]

console.log(
  "pp",
  frequency(["Peter", "Anna", "Rose", "Peter", "Peter", "Anna"], {
    compareTo: frequencyCompare,
  })
);

//[["Anna", 2], ["Peter", 3], ["Rose", 1]]

//const { criteria =  } = obj;

function frequency(arr, obj = {}) {
  let mapTwo = new Map();

  const { criteria = (item) => item } = obj;
  const {
    compareTo = (a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    },
  } = obj;

  for (let item of arr) {
    let objItem = criteria(item);
    if (!mapTwo.get(objItem)) {
      mapTwo.set(objItem, 0);
    }
    mapTwo.set(objItem, mapTwo.get(objItem) + 1);
  }
  return Array.from(mapTwo).sort((a, b) => {
    return compareTo(a[0], b[0], a[1], b[1]);
  });
}

function alphabeticalCompare(value1, value2) {
  if (String(value1) < String(value2)) {
    return -1;
  } else if (String(value1) > String(value2)) {
    return 1;
  } else {
    return 0;
  }
}

function frequencyCompare(value1, value2, freq1, freq2) {
  return freq2 - freq1;
}

function isEven(number) {
  return number % 2 === 0;
}

function parity(number) {
  return isEven(number) ? "even" : "odd";
}

function profession(person) {
  return person.profession;
} /* .sort(compareTo(value1, value2, freq1, freq2)) */

/*   Array.from(mapTwo).sort((a, b) => {
      compareTo(a[0], b[0], a[1], b[1]);
    })
  ); */ //console.log("ct", compareTo); //-------------------------------------- .sort(compareTo([0],[0],[1],[1])) // value1, value2, freq1, freq2 // a[0][0] b[1][0] a[0][1] b[1][1] //sort(([0],[0],[1],[1]))
/*   console.log(
    "mt",
    /*  mapTwo  */

//-----214
//https://www.codewars.com/kata/5452209f699b534c67000cdf

//frequency(["Peter", "Anna", "Rose", "Peter", "Peter", "Anna"]);

//[["Anna", 2], ["Peter", 3], ["Rose", 1]]
//frequency([1, 10, 12, 2, 1, 10, 2, 2]); //[[1, 2], [2, 3], [10, 2], [12, 1]]

// console.log(
//   frequency([1, 10, 12, 2, 1, 10, 2, 2], { compareTo: alphabeticalCompare })
// ); //[[1, 2], [10, 2], [12, 1], [2, 3]]

// function frequency(arr, obj) {
//   console.log("o", obj);

//   console.log("cc0", obj.compareTo(1, 2));

//   console.log(arr.sort(obj.compareTo));
//   //-------------

//   const arrSet = [...new Set(arr)];
//   arrSet.sort(function (a, b) {
//     if (a[0] < b[0]) {
//       return -1;
//     }
//     if (a[0] > b[0]) {
//       return 1;
//     }

//     return 0;
//   });
//   // console.log(arrSet);
//   const arrSum = new Array(arrSet.length);
//   arrSum.fill(0);
//   // console.log(arrSum);
//   arrSet.forEach((item, index, array) => {
//     //console.log(item, index);
//     for (const elem of arr) {
//       if (elem === item) {
//         arrSum[index]++;
//       }
//     }
//   });
//   //console.log("a", arrSum);

//   arrSum.map((item, index) => [arrSet[index], item]);
//   return true;
// }

// function alphabeticalCompare(value1, value2) {
//   if (String(value1) < String(value2)) {
//     return -1;
//   } else if (String(value1) > String(value2)) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// function frequencyCompare(value1, value2, freq1, freq2) {
//   return freq2 - freq1;
// }

// function isEven(number) {
//   return number % 2 === 0;
// }

// function parity(number) {
//   return isEven(number) ? "even" : "odd";
// }

// function profession(person) {
//   return person.profession;
// }

// var persons = [
//   { name: "Peter", profession: "teacher" },
//   { name: "Michael", profession: "teacher" },
//   { name: "Anna", profession: "scientific" },
//   { name: "Rose", profession: "scientific" },
//   { name: "Anna", profession: "scientific" },
//   { name: "Anna", profession: "politician" },
// ];
