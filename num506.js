// function flattenMap(map) {
//   // Add your code here
// }

/*   
  {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
}
return a new map:

{
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
}

  */

function flattenMap11(map) {
  //console.log(map);
  //console.log(Object.keys(map));
  //console.log(Object.values(map));
  //console.log(Object.entries(map));
  const newObj = {};
  // for (let k in map) {
  //   console.log(k);
  // }

  const keysArr = Object.keys(map);
  const keysVals = Object.values(map);
  const newKeysArr = [];
  //console.log("kkk", keysArr);

  for (let i = 0; i < keysArr.length; i++) {
    // if (
    //   typeof  === "number" ||
    //   typeof key === "string" ||
    //   Array.isArray(key)
    // ) {newKeysArr}

    newKeysArr[i] = flatten(keysArr[i], keysVals[i]);

    //console.log("g=", flatten(keysArr[i], keysVals[i]));
  }

  function flatten(key, val) {
    //console.log("vk==", key, val);
    if (
      typeof val === "number" ||
      typeof val === "string" ||
      Array.isArray(val)
    ) {
      return key;
    } else return flattenMap(val);
  }

  // console.log("nka=", newKeysArr);
  // let name = "";

  // for (const key of keysArr) {
  //   console.log(key);
  //   console.log(typeof map[key]);

  //   name += key;
  //   if (!(typeof map[key] === "number") || !(typeof map[key] === "string")) {
  //     console.log("obj", map[key]);
  //   }
  //   //console.log("nnn:", name);
  // }
}

console.log(
  flattenMap({
    b: {
      c: 12,
      x: {
        y: 9,
        z: 7,
        s: true,
      },
      d: "Hello World",
    },
    e: [1, 2, 3],
    k: 1111,
    rrr: null,
  })
);

function flattenMap(map, path = []) {
  const newObj = {};

  for (const key in map) {
    if (!isObject(map[key])) {
      newObj[[...path, key].join("/")] = map[key];
    } else {
      Object.assign(newObj, flattenMap(map[key], [...path, key]));
    }
  }

  return newObj;
}

function isObject(val) {
  return typeof val === "object" && !Array.isArray(val) && val !== null;
}

//{ a: { b: 12 } }

/* 


return a new map:

{
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
}
 */
