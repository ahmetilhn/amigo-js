import isArray from "./is-array";
import isDate from "./is-date";
import isObject from "./is-object";

const isPlainObject = (val: unknown): val is Record<string, unknown> => {
  return isObject(val) && !isArray(val) && !isDate(val);
};

export default isPlainObject;
