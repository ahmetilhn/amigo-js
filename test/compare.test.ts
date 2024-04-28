import { isEqual } from "./../lib/utils/compare.util";
describe("Compare tests", () => {
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
});
