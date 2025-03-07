import isDefined from "./is-defined";

const isClient = (): boolean => {
  return isDefined(globalThis.window);
};

export default isClient;
