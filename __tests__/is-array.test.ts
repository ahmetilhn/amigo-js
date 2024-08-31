import isArray from "../lib/modules/is-array";
describe("isArray  tests", () => {
  test("should return false while param is equal object", () => {
    expect(isArray({})).toBeFalsy();
  });
  test("should return false while param is equal undefined", () => {
    expect(isArray(undefined)).toBeFalsy();
  });
  test("should return false while param is equal null", () => {
    expect(isArray(null)).toBeFalsy();
  });
  test("should return true while param is equal array", () => {
    expect(isArray([])).toBeTruthy();
  });
  test("should return true while param is equal array", () => {
    expect(isArray(new Array([]))).toBeTruthy();
  });
});
