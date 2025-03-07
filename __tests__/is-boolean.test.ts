import isBoolean from "@/modules/is-boolean";

describe("isBoolean tests", () => {
  test("should return false", () => {
    expect(isBoolean("test")).toBeFalsy();
  });
  test("should return false", () => {
    expect(isBoolean({})).toBeFalsy();
  });
  test("should return false", () => {
    expect(isBoolean(null)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isBoolean(null)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isBoolean([])).toBeFalsy();
  });
  test("should return false", () => {
    expect(isBoolean(new Date())).toBeFalsy();
  });
  test("should return false", () => {
    expect(isBoolean(0)).toBeFalsy();
  });
  test("should return true", () => {
    expect(isBoolean(false)).toBeTruthy();
  });
  test("should return true", () => {
    expect(isBoolean(true)).toBeTruthy();
  });
});
