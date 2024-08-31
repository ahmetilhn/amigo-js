import isArray from "./is-array";
import isObject from "./is-object";
const deepClone = <T extends object>(val: NonNullable<T>): T => {
  if (!isObject(val)) return val;

  if (isArray(val)) {
    const clonedArr: unknown[] = [];

    // @ts-ignore: Unreachable code error
    val.forEach((item: unknown) => {
      clonedArr.push(item);
    });
    return clonedArr as T;
  }

  const clonedObj: Record<keyof T, T[keyof T]> = {} as T;
  for (const key in val) {
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      // @ts-ignore: Unreachable code error
      clonedObj[key] = deepClone(val[key]);
    }
  }
  return clonedObj as T;
};

export default deepClone;
