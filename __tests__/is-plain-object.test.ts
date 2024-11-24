import isPlainObject from "../lib/modules/is-plain-object";
describe("isPlainObject tests", () => {
  test("it should return true when got empty plain object", () => {
    expect(isPlainObject({})).toBeTruthy();
  });

  test("it should return false when got Date", () => {
    expect(isPlainObject(new Date())).toBeFalsy();
  });

  test("it should return false when got null or undefined", () => {
    expect(isPlainObject(null)).toBeFalsy();
    expect(isPlainObject(undefined)).toBeFalsy();
  });

  test("it should return true when got object has record", () => {
    expect(isPlainObject({ name: "John" })).toBeTruthy();
  });

  test("it should return true when got object with nested object", () => {
    expect(
      isPlainObject({
        user: {
          name: "John",
        },
      })
    ).toBeTruthy();
  });

  test("it should return false when got empty array or array has size", () => {
    expect(isPlainObject([])).toBeFalsy();
    expect(isPlainObject([1, 2, 3])).toBeFalsy();
  });
});
