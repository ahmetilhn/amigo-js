import NodeEnum from "../enums/NodeEnum";
import getNode from "../helpers/node.helper";

const isBoolean = (val: unknown): val is boolean => {
  return (
    typeof val === "boolean" &&
    (val === true || val === false) &&
    getNode(val) === NodeEnum.BOOLEAN
  );
};

export default isBoolean;
