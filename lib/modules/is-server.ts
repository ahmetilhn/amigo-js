import isUndefined from "./is-undefined";

const isServer = (): boolean => {
  return isUndefined(globalThis.window);
};

export default isServer;
