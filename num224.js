console.log(" ", over60({ Hindi: 60, Greek: 71, Dutch: 93 }));

//{"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])

function over60(obj) {
  return Object.keys(obj)
    .filter((item) => obj[item] >= 60)
    .sort((a, b) => obj[b] - obj[a]);

  // if (obj[item] > 60) return true;
}
