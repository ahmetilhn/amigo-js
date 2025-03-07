import isNumber from "@/modules/is-number";
describe("isNumber tests", () => {
  test("should return false while param is equal object", () => {
    expect(isNumber({})).toBeFalsy();
  });
  test("should return false while param is equal null", () => {
    expect(isNumber(null)).toBeFalsy();
  });
  test("should return false while param is equal undefined", () => {
    expect(isNumber(undefined)).toBeFalsy();
  });
  test("should return false while param is equal array", () => {
    expect(isNumber([])).toBeFalsy();
  });
  test("should return true while param is equal number", () => {
    expect(isNumber(191)).toBeTruthy();
  });
  test("should return true while param is equal NaN", () => {
    expect(isNumber(NaN)).toBeFalsy();
  });
});
