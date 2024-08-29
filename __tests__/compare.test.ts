import { isDeepEqual, isNotEqual } from "../lib/modules/compare.module";
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
    expect(isDeepEqual(undefined, undefined)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual(null, null)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual({}, {})).toBeTruthy();
  });
  test("should return true", () => {
    expect(isDeepEqual({ name: "test" }, { name: "test" })).toBeTruthy();
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
