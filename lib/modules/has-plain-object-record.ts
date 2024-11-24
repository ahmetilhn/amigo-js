import isPlainObject from "./is-plain-object";

const hasPlainObjectRecord = (val: unknown): boolean => {
  if (!isPlainObject(val))
    throw new Error(
      "hasPlainObjectRecord should only use for plain object type."
    );
  return !!Object.keys(val).length;
};

export default hasPlainObjectRecord;
