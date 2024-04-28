import { isDateAfter, isDateBefore } from "./../lib/modules/date.module";
describe("isDateBefore tests", () => {
  test("should return false", () => {
    expect(isDateBefore(new Date(), new Date("2022-03-20"))).toBeFalsy();
  });
  test("should return true", () => {
    expect(isDateBefore(new Date(), new Date("2025-03-20"))).toBeTruthy();
  });
});
describe("isDateAfter tests", () => {
  test("should return false", () => {
    expect(isDateAfter(new Date(), new Date("2025-03-20"))).toBeFalsy();
  });
  test("should return true", () => {
    expect(isDateAfter(new Date(), new Date("2022-03-20"))).toBeTruthy();
  });
});
