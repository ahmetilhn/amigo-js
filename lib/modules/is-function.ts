import NodeEnum from "../enums/NodeEnum";
import getNode from "../helpers/node.helper";

const isFunction = (val: any): boolean => {
  return typeof val === "function" && getNode(val) === NodeEnum.FUNCTION;
};

export default isFunction;
