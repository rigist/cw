Object.prototype.hash = function (str) {
  // console.log("---");

  // console.log("111", str, obj);
  let obj = this;

  let arr = str.split(".");

  let len = arr.length;

  //console.log("ttt", obj[arr[0]][arr[1]]);

  //function testObj(obj) {}

  for (const key of arr) {
    if (obj[key]) {
      /*  if (key === arr[arr.length - 1]) {
        return obj[key];
      } */
      obj = obj[key];
    } else {
      return undefined;
    }
  }
  return obj;
  /* 
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);

    // console.log("ooo", i, arr[i], obj[arr[i]]);

    if (obj[arr[i]]) {
      if (i === arr.length - 1) {
        return obj[arr[i]];
        //  console.log("ddd", obj[arr[i]]);
      }
      obj = obj[arr[i]];

      // console.log("zzz", obj);
    } else {
      return undefined;
      //console.log("undef");
    } */
  //}
};

//console.log(hash("person.history.homeStreet", obj));

/*  func(objOne);
  function func(obj) {
    for (const key of arr) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj.key !== "object") {
          return obj.key;
        } else {
          func(obj.key);
        }
      } else {
        return undefined;
      }
    }
  } */
//};

var obj = {
  person: {
    name: "joe",
    history: {
      hometown: "bratislava",
      bio: {
        funFact: "I like fishing.",
      },
    },
  },
};

console.log(obj.hash("person.name")); // 'joe'
console.log(obj.hash("person.history.bio")); // { funFact: 'I like fishing.' }
console.log(obj.hash("person.history.homeStreet")); // undefined
console.log(obj.hash("person.animal.pet.needNoseAntEater")); // undefined
