import { isArray, isDate, isObject } from "./type.module";

export const isDeepEqual = (valOne: any, valTwo: any): boolean => {
  if (valOne === valTwo) return true;
  if (typeof valOne !== typeof valTwo || valOne === null || valTwo === null)
    return false;
  if (
    isObject(valOne) &&
    isObject(valTwo) &&
    !Object.keys(valOne).length &&
    !Object.keys(valTwo).length &&
    !isDate(valOne) &&
    !isDate(valTwo)
  )
    return true;
  if (isDate(valOne) && isDate(valTwo)) {
    valOne = valOne as Date;
    valTwo = valTwo as Date;
    return isDeepEqual(valOne.getTime(), valTwo.getTime());
  }
  if (isArray(valOne) && isArray(valTwo) && !valOne.length && !valTwo.length)
    return true;

  if (isObject(valOne) || isObject(valTwo)) {
    if (Object.keys(valOne).length !== Object.keys(valTwo).length) return false;
    for (const key in valOne) {
      return isDeepEqual(valOne[key], valTwo[key]);
    }
  }
  if (isArray(valOne) || isArray(valTwo)) {
    const keysOfValOne = Object.keys(valOne);
    const keysOfValTwo = Object.keys(valTwo);

    if (keysOfValOne.length !== keysOfValTwo.length) return false;

    for (let i = 0; i < keysOfValOne.length; i++) {
      return isDeepEqual(valOne[i], valTwo[i]);
    }
  }
  return valOne === valTwo;
};

export const isNotEqual = (valOne: any, valTwo: any): boolean => {
  return !isDeepEqual(valOne, valTwo);
};
