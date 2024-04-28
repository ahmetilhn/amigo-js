export const isArray = (val: any): boolean => {
  return Array.isArray(val);
};

export const isObject = (val: any): boolean => {
  return typeof val === "object" && !Array.isArray(val) && val !== null;
};

export const isFunction = (val: any): boolean => {
  return typeof val === "function";
};

export const isNumber = (val: any): boolean => {
  return typeof val === "number" && !isNaN(val);
};
