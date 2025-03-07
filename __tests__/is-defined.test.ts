import isDefined from "@/modules/is-defined";

describe("isDefined tests", () => {
  test("it should return true", () => {
    expect(isDefined(global.atob)).toBeTruthy();
  });
  test("it should return false", () => {
    const userInfo = {} as Record<string, string>;
    expect(isDefined(userInfo.name)).toBeFalsy();
  });
});
