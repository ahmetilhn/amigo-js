import NodeEnum from "../enums/NodeEnum";
import getNode from "../helpers/node.helper";

const isFunction = (val: unknown): val is Function => {
  return typeof val === "function" && getNode(val) === NodeEnum.FUNCTION;
};

export default isFunction;
