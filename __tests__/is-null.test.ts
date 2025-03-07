import isNull from "@/modules/is-null";

describe("isNull tests", () => {
  test("it should return true", () => {
    expect(isNull(null)).toBeTruthy();
  });
  test("it should return false", () => {
    expect(isNull(undefined)).toBeFalsy();
  });
});
