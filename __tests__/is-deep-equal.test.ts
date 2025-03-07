import isDeepEqual from "@/modules/is-deep-equal";
describe("isDeepEqual tests", () => {
  test("should return false", () => {
    expect(isDeepEqual("test", "Test")).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDeepEqual("test", 1)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDeepEqual(2, "Test")).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDeepEqual(1, 2)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDeepEqual(null, 1)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDeepEqual(null, NaN)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDeepEqual(null, undefined)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDeepEqual(NaN, undefined)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDeepEqual(NaN, NaN)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDeepEqual({ test: 1 }, { test: 2 })).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDeepEqual(["ahmet"], { test: 2 })).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDeepEqual(["ahmet"], ["metin"])).toBeFalsy();
  });
  test("should return true", () => {
    expect(isDeepEqual(null, null)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual(1, 1)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual("2", "2")).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual([], [])).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual([10, 2], [10, 2])).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual(undefined, undefined)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual(null, null)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual({}, {})).toBeTruthy();
  });
  test("should return true", () => {
    expect(
      isDeepEqual(
        { name: "test", test: { a: 1 } },
        { name: "test", test: { a: 1 } }
      )
    ).toBeTruthy();
    expect(
      isDeepEqual(
        { name: "test", test: { a: { b: { c: { d: { e: () => 10 } } } } } },
        { name: "test", test: { a: 1 } }
      )
    ).toBeFalsy();
    expect(
      isDeepEqual(
        { name: "test", test: { a: { b: { c: { d: { e: () => 10 } } } } } },
        { name: "test", test: { a: { b: { c: { d: { e: () => 10 } } } } } }
      )
    ).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual([{ key: "value" }], [{ key: "value" }])).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual(["ahmet"], ["ahmet"])).toBeTruthy();
  });
  test("should return true", () => {
    expect(
      isDeepEqual(new Date("2011-10-10"), new Date("2011-10-10"))
    ).toBeTruthy();
  });
  test("should return false", () => {
    expect(
      isDeepEqual(new Date("2011-10-12"), new Date("2011-10-10"))
    ).toBeFalsy();
  });
  test("should return true when got same function", () => {
    expect(
      isDeepEqual(
        function () {
          return Math.random().toString(36).substr(2, 9);
        },
        function () {
          return Math.random().toString(36).substr(2, 9);
        }
      )
    ).toBeTruthy();
  });
  test("should return correct value when got big object", () => {
    const bigObjOne = {
      name: "Ahmet",
      age: 24,
      isDeveloper: true,
      skills: ["JavaScript", "Java", "Python"],
      details: {
        address: {
          city: "Istanbul",
          zipCode: 34000,
          location: {
            lat: 41.0082,
            long: 28.9784,
          },
        },
        workExperience: [
          {
            company: "Company A",
            years: 2,
            technologies: ["React", "Node.js"],
          },
          {
            company: "Company B",
            years: 1,
            technologies: ["Java", "Spring"],
          },
        ],
      },
      contact: {
        email: "ahmet@example.com",
        phones: ["555-1234", "555-5678"],
      },
      createdAt: new Date("Thu Sep 05 2024 16:15:42 GMT+0300 (GMT+03:00)"),
      idGenerator: function () {
        return this.name + Math.random().toString(36).substr(2, 9);
      },
      references: [
        {
          name: "John Doe",
          relation: "Manager",
          contactInfo: {
            email: "john@example.com",
            phone: "555-8765",
          },
        },
      ],
      nullValue: null,
      undefinedValue: undefined,
    };
    const bigObjTwo = {
      name: "Ahmet",
      age: 24,
      isDeveloper: true,
      skills: ["JavaScript", "Java", "Python"],
      details: {
        address: {
          city: "Istanbul",
          zipCode: 34000,
          location: {
            lat: 41.0082,
            long: 28.9784,
          },
        },
        workExperience: [
          {
            company: "Company A",
            years: 2,
            technologies: ["React", "Node.js"],
          },
          {
            company: "Company B",
            years: 1,
            technologies: ["Java", "Spring"],
          },
        ],
      },
      contact: {
        email: "ahmet@example.com",
        phones: ["555-1234", "555-5678"],
      },
      createdAt: new Date("Thu Sep 05 2024 16:15:42 GMT+0300 (GMT+03:00)"),
      idGenerator: function () {
        return this.name + Math.random().toString(36).substr(2, 9);
      },
      references: [
        {
          name: "John Doe",
          relation: "Manager",
          contactInfo: {
            email: "john@example.com",
            phone: "555-8765",
          },
        },
      ],
      nullValue: null,
      undefinedValue: undefined,
    };
    expect(isDeepEqual(bigObjOne, bigObjTwo)).toBeTruthy();
    bigObjTwo.age = 30;
    expect(isDeepEqual(bigObjOne, bigObjTwo)).toBeFalsy();
    bigObjTwo.age = 24;
    expect(isDeepEqual(bigObjOne, bigObjTwo)).toBeTruthy();
    bigObjTwo.createdAt = new Date();
    expect(isDeepEqual(bigObjOne, bigObjTwo)).toBeFalsy();
    bigObjTwo.createdAt = bigObjOne.createdAt;
    expect(isDeepEqual(bigObjOne, bigObjTwo)).toBeTruthy();
    // @ts-ignore: Unreachable code error
    bigObjOne.idGenerator = null;
    expect(isDeepEqual(bigObjOne, bigObjTwo)).toBeFalsy();
  });
});
