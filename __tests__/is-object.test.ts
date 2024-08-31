import isObject from "../lib/modules/is-object";
describe("isObject tests", () => {
  test("should return false while param is equal array", () => {
    expect(isObject([])).toBeTruthy();
  });
  test("should return false while param is equal null", () => {
    expect(isObject(null)).toBeFalsy();
  });
  test("should return false while param is equal undefined", () => {
    expect(isObject(undefined)).toBeFalsy();
  });
  test("should return false while param is equal NaN", () => {
    expect(isObject(NaN)).toBeFalsy();
  });
  test("should return true while param is equal object", () => {
    expect(isObject({})).toBeTruthy();
  });
  test("should return true while param is equal date object", () => {
    expect(isObject(new Date())).toBeTruthy();
  });
});
