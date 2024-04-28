import {
  isArray,
  isFunction,
  isNumber,
  isObject,
} from "./../lib/utils/type.util";

describe("isArray  tests", () => {
  test("should return false while param is equal object", () => {
    expect(isArray({})).toBeFalsy();
  });
  test("should return false while param is equal undefined", () => {
    expect(isArray(undefined)).toBeFalsy();
  });
  test("should return false while param is equal null", () => {
    expect(isArray(null)).toBeFalsy();
  });
  test("should return true while param is equal array", () => {
    expect(isArray([])).toBeTruthy();
  });
  test("should return true while param is equal array", () => {
    expect(isArray(new Array([]))).toBeTruthy();
  });
});

describe("isObject tests", () => {
  test("should return false while param is equal array", () => {
    expect(isObject([])).toBeFalsy();
  });
  test("should return false while param is equal null", () => {
    expect(isObject(null)).toBeFalsy();
  });
  test("should return false while param is equal undefined", () => {
    expect(isObject(undefined)).toBeFalsy();
  });
  test("should return false while param is equal NaN", () => {
    expect(isObject(NaN)).toBeFalsy();
  });
  test("should return true while param is equal object", () => {
    expect(isObject({})).toBeTruthy();
  });
});

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
});