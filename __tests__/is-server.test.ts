import isServer from "@/modules/is-server";

describe("isServer tests", () => {
  test("it should return true", () => {
    expect(isServer()).toBeTruthy();
  });
  test("it should return false", () => {
    // @ts-ignore
    globalThis.window = {};
    expect(isServer()).toBeFalsy();
  });
});
