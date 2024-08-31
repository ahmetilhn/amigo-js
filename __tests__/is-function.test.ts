import isFunction from "../lib/modules/is-function";
describe("isFunction tests", () => {
  test("should return false while param is equal NaN", () => {
    expect(isFunction(NaN)).toBeFalsy();
  });
  test("should return false while param is equal undefined", () => {
    expect(isFunction(undefined)).toBeFalsy();
  });
  test("should return false while param is equal null", () => {
    expect(isFunction(null)).toBeFalsy();
  });
  test("should return false while param is equal array", () => {
    expect(isFunction([])).toBeFalsy();
  });
  test("should return false while param is equal object", () => {
    expect(isFunction({})).toBeFalsy();
  });
  test("should return true while param is equal function", () => {
    expect(isFunction(() => {})).toBeTruthy();
  });
});
