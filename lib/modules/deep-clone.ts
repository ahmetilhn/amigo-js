import isArray from "./is-array";
import isDate from "./is-date";
import isObject from "./is-object";
const deepClone = <T>(val: T): T => {
  if (isArray(val)) {
    const clonedArr: unknown[] = [];

    // @ts-ignore: Unreachable code error
    val.forEach((item: unknown) => {
      // @ts-ignore: Unreachable code error
      clonedArr.push(isObject(item) ? deepClone(item) : item);
    });
    return clonedArr as T;
  } else if (isDate(val)) {
    return new Date(val as Date) as T;
  } else if (isObject(val)) {
    const clonedObj: Record<keyof T, T[keyof T]> = {} as T;
    for (const key in val) {
      if (Object.prototype.hasOwnProperty.call(val, key)) {
        // @ts-ignore: Unreachable code error
        clonedObj[key] = deepClone(val[key]);
      }
    }
    return clonedObj as T;
  }
  return val;
};

export default deepClone;
