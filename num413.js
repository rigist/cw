Object.create = function (prototype, properties) {
  if (prototype === undefined) throw new TypeError();

  let obj = {};
  obj.__proto__ = prototype;

  if (properties !== undefined) {
    Object.defineProperties(obj, properties);
  }
  return obj;
};

var citizen = {
  sleep: function () {
    return "zzZ...";
  },
  panic: function () {
    return "AaAaAaAa!";
  },
};

/* create(citizen, {
  panic: {
    value: function () {
      return "SNAFU";
    },
  },
}); */

var veteran = Object.create(citizen, {
  panic: {
    value: function () {
      return "SNAFU";
    },
  },
});

console.log(Object.create());
