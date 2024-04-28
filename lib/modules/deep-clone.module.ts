export const deepClone = (val: any): typeof val => {
  if (val === null || typeof val !== "object") {
    return val;
  }

  if (Array.isArray(val)) {
    const clonedArr: any[] = [];
    for (let i = 0; i < val.length; i++) {
      clonedArr[i] = deepClone(val[i]);
    }
    return clonedArr;
  } else {
    const clonedObj: Record<string, any> = {};
    for (const key in val) {
      if (Object.prototype.hasOwnProperty.call(val, key)) {
        clonedObj[key] = deepClone(val[key]);
      }
    }
    return clonedObj;
  }
};
