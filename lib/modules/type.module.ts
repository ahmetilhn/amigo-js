import NodeEnum from "../enums/NodeEnum";
import getNode from "../helpers/node.helper";

export const isArray = (val: any): boolean => {
  return Array.isArray(val) || getNode(val) === NodeEnum.ARRAY;
};

export const isObject = (val: any): boolean => {
  return val !== null && typeof val === "object";
};

export const isFunction = (val: any): boolean => {
  return typeof val === "function" && getNode(val) === NodeEnum.FUNCTION;
};

export const isNumber = (val: any): boolean => {
  return (
    (typeof val === "number" && !isNaN(val)) || getNode(val) === NodeEnum.NUMBER
  );
};

export const isDate = (val: any): boolean => {
  return typeof val === "object" && getNode(val) === NodeEnum.DATE;
};

export const isBoolean = (val: any): boolean => {
  return (
    typeof val === "boolean" &&
    (val === true || val === false) &&
    getNode(val) === NodeEnum.BOOLEAN
  );
};
