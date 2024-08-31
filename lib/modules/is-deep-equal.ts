import { isArray, isDate, isObject } from "..";

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
  }
  if (isArray(valOne) && isArray(valTwo) && !valOne.length && !valTwo.length)
    return true;
  if (isArray(valOne) || isArray(valTwo)) {
    let _i = 0;
    while (_i < valOne.length) {
      if (!isDeepEqual(valOne[_i], valTwo[_i])) return false;
      _i++;
    }
    return true;
  }
  if (isObject(valOne) || isObject(valTwo)) {
    if (Object.keys(valOne).length !== Object.keys(valTwo).length) return false;
    let _isDiff = false;
    for (const key in valOne) {
      _isDiff = isDeepEqual(valOne[key], valTwo[key]);
    }
    return _isDiff;
  }

  return valOne === valTwo;
};

export default isDeepEqual;
