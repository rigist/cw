function sizeof(type) {
  // TODO: Compute the size of the C datatype represented by `type`
  // in bytes and return the result as an integer

  const sizes = {
    char: 1,
    short: 2,
    int: 2,
    long: 4,
    "long long": 8,
    "unsigned char": 1,
    "unsigned short": 2,
    "unsigned char": 1,
    "unsigned short": 2,
    "unsigned char": 1,
    "unsigned short": 2,
    "unsigned int": 2,
    "unsigned short": 2,
    "unsigned long": 4,
    "unsigned long long": 8,
    float: 4,
    double: 8,
  };
  if (typeof type === "string") {
    return sizes[type];
  }

  if (type.type === "struct") {
    let sum = 0;

    for (const member of type.members) {
      // if (!member.type) {
      //   sum += sizes[member];
      // } else {
      sum += sizeof(member);
      //}
    }

    return sum;
  }

  if (type.type === "union") {
    //let sum = 0;
    //console.log("tml", type.members.length);
    if (type.members.length !== 0) {
      let size = type.members.map((item) => sizeof(item));
      return Math.max(...size);
    } else {
      return 0;
    }
  }
}

console.log(sizeof("float"));

console.log(
  sizeof({
    type: "struct",
    members: [
      "int",
      "char",
      {
        type: "union",
        members: ["long long", "double"],
      },
    ],
  })
);

console.log(
  "union",
  sizeof({
    type: "union",
    members: ["long long", "double"],
  })
);

console.log(
  "8888",
  sizeof({
    type: "struct",
    members: [
      "int",
      "int",
      "float",
      {
        type: "union",
        members: [],
      },
    ],
  })
);

/* 
describe("sizeof", function () {
  it("should be able to compute the size in bytes of primitive datatypes", function () {
    Test.assertEquals(sizeof("char"), 1);
    Test.assertEquals(sizeof("short"), 2);
    Test.assertEquals(sizeof("int"), 2);
    Test.assertEquals(sizeof("long"), 4);
    Test.assertEquals(sizeof("long long"), 8);
    Test.assertEquals(sizeof("unsigned char"), 1);
    Test.assertEquals(sizeof("unsigned short"), 2);
    Test.assertEquals(sizeof("unsigned int"), 2);
    Test.assertEquals(sizeof("unsigned long"), 4);
    Test.assertEquals(sizeof("unsigned long long"), 8);
    Test.assertEquals(sizeof("float"), 4);
    Test.assertEquals(sizeof("double"), 8);
  });
  it("should be able to compute the size in bytes of composite datatypes as well", function () {
    Test.assertEquals(sizeof({
      type: "struct",
      members: ["int", "char"]
    }), 3);
    Test.assertEquals(sizeof({
      type: "union",
      members: ["long long", "double"]
    }), 8);
    Test.assertEquals(sizeof({
      type: "struct",
      members: [
        "unsigned char",
        "unsigned char",
        "unsigned char",
        "double",
        "double",
        {
          type: "union",
          members: [
            "unsigned short",
            "unsigned short",
            "unsigned short",
            "long long",
            "float",
            "float",
            {
              type: "struct",
              members: ["long", "unsigned int"]
            }
          ]
        },
        "short"
      ]
    }), 29);
    Test.assertEquals(sizeof({
      type: "struct",
      members: [
        "int",
        "int",
        "float",
        {
          type: "union",
          members: []
        }
      ]
    }), 8);
  });
});

*/
