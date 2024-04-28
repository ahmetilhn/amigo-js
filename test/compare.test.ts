import {
  isAfter,
  isBefore,
  isEqual,
  isNotEqual,
} from "../lib/modules/compare.module";
describe("isEqual tests", () => {
  test("should return false", () => {
    expect(isEqual("test", "Test")).toBeFalsy();
  });
  test("should return false", () => {
    expect(isEqual("test", 1)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isEqual(2, "Test")).toBeFalsy();
  });
  test("should return false", () => {
    expect(isEqual(1, 2)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isEqual(null, 1)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isEqual(null, NaN)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isEqual(null, undefined)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isEqual(NaN, undefined)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isEqual(NaN, NaN)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isEqual({ test: 1 }, { test: 2 })).toBeFalsy();
  });
  test("should return false", () => {
    expect(isEqual(["ahmet"], { test: 2 })).toBeFalsy();
  });
  test("should return false", () => {
    expect(isEqual(["ahmet"], ["metin"])).toBeFalsy();
  });
  test("should return true", () => {
    expect(isEqual(null, null)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isEqual(1, 1)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isEqual("2", "2")).toBeTruthy();
  });
  test("should return true", () => {
    expect(isEqual([], [])).toBeTruthy();
  });
  test("should return true", () => {
    expect(isEqual(undefined, undefined)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isEqual(null, null)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isEqual({}, {})).toBeTruthy();
  });
  test("should return true", () => {
    expect(isEqual({ name: "test" }, { name: "test" })).toBeTruthy();
  });
  test("should return true", () => {
    expect(isEqual([{ key: "value" }], [{ key: "value" }])).toBeTruthy();
  });
  test("should return true", () => {
    expect(isEqual(["ahmet"], ["ahmet"])).toBeTruthy();
  });
  test("should return true", () => {
    expect(
      isEqual(new Date("2011-10-10"), new Date("2011-10-10"))
    ).toBeTruthy();
  });
});
describe("isNotEqual tests", () => {
  test("should return true", () => {
    expect(isNotEqual(["test1"], ["test2"])).toBeTruthy();
  });
  test("should return true", () => {
    expect(isNotEqual(1, 2)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isNotEqual("test1", 4)).toBeTruthy();
  });
  test("should return false", () => {
    expect(isNotEqual(1, 1)).toBeFalsy();
  });
  test("should return true", () => {
    expect(isNotEqual(undefined, null)).toBeTruthy();
  });
});

describe("isBefore tests", () => {
  test("should return false", () => {
    expect(isBefore(2, 1)).toBeFalsy();
  });
  test("should return true", () => {
    expect(isBefore(3, 5)).toBeTruthy();
  });
});

describe("isAfter tests", () => {
  test("should return true", () => {
    expect(isAfter(2, 1)).toBeTruthy();
  });
  test("should return false", () => {
    expect(isAfter(3, 5)).toBeFalsy();
  });
});
