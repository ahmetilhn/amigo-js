import { isArray, isObject } from "./type.util";

export const isEqual = (valOne: any, valTwo: any): boolean => {
  if (valOne === valTwo) return true;
  if (typeof valOne !== typeof valTwo || valOne === null || valTwo === null)
    return false;
  if (
    isObject(valOne) &&
    isObject(valTwo) &&
    !Object.keys(valOne).length &&
    !Object.keys(valTwo).length
  )
    return true;
  if (isArray(valOne) && isArray(valTwo) && !valOne.length && !valTwo.length)
    return true;

  if (isObject(valOne) || isObject(valTwo)) {
    if (Object.keys(valOne).length !== Object.keys(valTwo).length) return false;
    for (const key in valOne) {
      return isEqual(valOne[key], valTwo[key]);
    }
  }
  if (isArray(valOne) || isArray(valTwo)) {
    const keysOfValOne = Object.keys(valOne);
    const keysOfValTwo = Object.keys(valTwo);

    if (keysOfValOne.length !== keysOfValTwo.length) return false;

    for (let i = 0; i < keysOfValOne.length; i++) {
      return isEqual(valOne[i], valTwo[i]);
    }
  }
  return valOne === valTwo;
};