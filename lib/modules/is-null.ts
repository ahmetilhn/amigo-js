const isNull = (val: unknown): val is Exclude<any, null> => {
  return val === null;
};

export default isNull;
