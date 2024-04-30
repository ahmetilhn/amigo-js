import { isArray, isDate, isObject } from "./type.module";
/**
 * Compare according to equality
 * @param {*} valOne - First value to compare
 * @param {*} valTwo - Second value to compare
 * @returns {boolean} - If first value equal to second value return true else false
 */
export const isEqual = (valOne: any, valTwo: any): boolean => {
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
    return isEqual(valOne.getTime(), valTwo.getTime());
  }
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
/**
 * Compare according to not equality
 * @param {*} valOne - First value to compare
 * @param {*} valTwo - Second value to compare
 * @returns {boolean} - If first value not equal to second value return true else false
 */
export const isNotEqual = (valOne: any, valTwo: any): boolean => {
  return !isEqual(valOne, valTwo);
};

/**
 * Compare according to before
 * @param {number} numberOne - First value to compare
 * @param {number} numberTwo - Second value to compare
 * @returns {boolean} - if numberOne before numberTwo return true else false
 */
export const isBefore = (numberOne: number, numberTwo: number): boolean => {
  return numberOne < numberTwo;
};
/**
 * Compare according to after
 * @param {number} numberOne - First value to compare
 * @param {number} numberTwo - Second value to compare
 * @returns {boolean} - if numberOne after numberTwo return true else false
 */
export const isAfter = (numberOne: number, numberTwo: number): boolean => {
  return !isBefore(numberOne, numberTwo);
};
