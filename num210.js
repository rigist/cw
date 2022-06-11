//Convert a hash into an array. Nothing more, Nothing less.

const obj = { name: "Jeremy", age: 24, role: "Software Engineer" };

//should be converted into

//[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

toArr(obj);

function toArr({ ...obj }) {
  console.log(obj);
  console.log(Object.keys(obj));

  const resArr = [];

  for (let prop in obj) {
    console.log("obj." + prop + " = " + obj[prop]);
    console.log([prop, obj[prop]]);
    resArr.push([prop, obj[prop]]);
  }

  console.log(resArr);

  return resArr;

  /*  Object.keys(obj).map((item)=>{

  }) */
}
