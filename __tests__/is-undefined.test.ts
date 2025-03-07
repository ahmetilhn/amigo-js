import isUndefined from "@/modules/is-undefined";
describe("isUndefined tests", () => {
  test("it should return true", () => {
    expect(isUndefined(undefined)).toBe(true);
  });
  test("it should return false", () => {
    expect(isUndefined({})).toBe(false);
  });
  test("it should return false", () => {
    expect(isUndefined("Test")).toBe(false);
  });
  test("it should return false", () => {
    expect(isUndefined(null)).toBe(false);
  });
});
