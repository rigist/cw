dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]);
//  [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach']

function dbSort(a) {
  const arrNums = a
    .filter((item) => typeof item === "number")
    .sort((a, b) => a - b);
  // console.log("aav", arrNums)

  const arrStr = a.filter((item) => typeof item === "string").sort();
  //console.log( "sss", arrStr)
  return [...arrNums, ...arrStr];
}
