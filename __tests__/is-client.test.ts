import isClient from "@/modules/is-client";

describe("isClient tests", () => {
  test("it should return false", () => {
    expect(isClient()).toBeFalsy();
  });
  test("it should return true", () => {
    // @ts-ignore
    globalThis.window = {};
    expect(isClient()).toBeTruthy();
  });
});
