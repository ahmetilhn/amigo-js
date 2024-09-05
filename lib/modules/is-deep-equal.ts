import { isArray, isDate, isFunction, isObject } from "..";

const isDeepEqual = (valOne: any, valTwo: any): boolean => {
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
  } else if (isArray(valOne) && isArray(valTwo)) {
    if (!valOne.length && !valTwo.length) return true;
    let _i = 0;
    while (_i < valOne.length) {
      if (!isDeepEqual(valOne[_i], valTwo[_i])) return false;
      _i++;
    }
    return true;
  } else if (isObject(valOne) && isObject(valTwo)) {
    if (Object.keys(valOne).length !== Object.keys(valTwo).length) return false;
    for (const key in valOne) {
      if (!isDeepEqual(valOne[key], valTwo[key])) return false;
    }
    return true;
  } else if (isFunction(valOne) && isFunction(valTwo)) {
    return isDeepEqual(valOne.toString(), valTwo.toString());
  }

  return valOne === valTwo;
};

export default isDeepEqual;
