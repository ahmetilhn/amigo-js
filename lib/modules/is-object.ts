const isObject = (val: any): boolean => {
  return val !== null && typeof val === "object";
};

export default isObject;
