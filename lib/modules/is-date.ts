import NodeEnum from "../enums/NodeEnum";
import getNode from "../helpers/node.helper";

const isDate = (val: unknown): val is Date => {
  return typeof val === "object" && getNode(val) === NodeEnum.DATE;
};

export default isDate;
