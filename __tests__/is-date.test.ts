import isDate from "../lib/modules/is-date";

describe("isDate tests", () => {
  test("should return false", () => {
    expect(isDate(Date)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDate(null)).toBeFalsy();
  });
  test("should return false", () => {
    expect(isDate("12-22-2023")).toBeFalsy();
  });
  test("should return true", () => {
    expect(isDate(new Date())).toBeTruthy();
  });
});
