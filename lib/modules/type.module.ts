import {
  ARRAY_NODE,
  BOOLEAN_NODE,
  DATE_NODE,
  FUNCTION_NODE,
  NUMBER_NODE,
} from "../constants/node.constant";
import getNode from "../helpers/get-node.helper";

/**
 * Check is array
 * @param {*} val - value to be processed
 * @returns {boolean} - if val is array return true else false
 * @example
 * isArray([]) // true
 * isArray({}) // false
 */
export const isArray = (val: any): boolean => {
  return Array.isArray(val) || getNode(val) === ARRAY_NODE;
};
/**
 * Check is object
 * @param {*} val - value to be processed
 * @returns {boolean} - if val is object return else false
 * @example
 * isObject([]) // true
 * isObject({}) // true
 */
export const isObject = (val: any): boolean => {
  return val !== null && (typeof val === "object" || typeof val === "function");
};
/**
 * Check is function
 * @param {*} val - value to be processed
 * @returns {boolean} - if val is function return true else false
 * @example
 * isFunction(() => {}) // true
 * isFunction(Function) // true
 */
export const isFunction = (val: any): boolean => {
  return typeof val === "function" && getNode(val) === FUNCTION_NODE;
};
/**
 * Check is number
 * @param {*} val - value to be processed
 * @returns {boolean} - if val is number return true else false
 * @example
 * isNumber(1) // true
 * isNumber("1") // false
 * isNumber(NaN) // true
 */
export const isNumber = (val: any): boolean => {
  return (
    (typeof val === "number" && !isNaN(val)) || getNode(val) === NUMBER_NODE
  );
};
/**
 * Check is date
 * @param {*} val - value to be processed
 * @returns {boolean} - if val is extend Date Object return true else false
 * @example
 * isDate("12-22-2022") // false
 * isDate(new Date()) // true
 */
export const isDate = (val: any): boolean => {
  return typeof val === "object" && getNode(val) === DATE_NODE;
};
/**
 * Check is boolean
 * @param {*} val - value to be processed
 * @returns {boolean} - if val is boolean return true else false
 * @example
 * isBoolean(true) // true
 * isBoolean(false) // true
 */
export const isBoolean = (val: any): boolean => {
  return (
    typeof val === "boolean" &&
    (val === true || val === false) &&
    getNode(val) === BOOLEAN_NODE
  );
};
