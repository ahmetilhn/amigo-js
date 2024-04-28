import {
  ARRAY_NODE,
  BOOLEAN_NODE,
  DATE_NODE,
  FUNCTION_NODE,
  NUMBER_NODE,
} from "../constants/node.constant";
import getNode from "../helpers/get-node.helper";

export const isArray = (val: any): boolean => {
  return Array.isArray(val) || getNode(val) === ARRAY_NODE;
};

export const isObject = (val: any): boolean => {
  return val !== null && (typeof val === "object" || typeof val === "function");
};

export const isFunction = (val: any): boolean => {
  return typeof val === "function" && getNode(val) === FUNCTION_NODE;
};

export const isNumber = (val: any): boolean => {
  return (
    (typeof val === "number" && !isNaN(val)) || getNode(val) === NUMBER_NODE
  );
};

export const isDate = (val: any): boolean => {
  return typeof val === "object" && getNode(val) === DATE_NODE;
};

export const isBoolean = (val: any): boolean => {
  return (
    typeof val === "boolean" &&
    (val === true || val === false) &&
    getNode(val) === BOOLEAN_NODE
  );
};
