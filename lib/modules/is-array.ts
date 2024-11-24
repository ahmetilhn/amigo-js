import NodeEnum from "../enums/NodeEnum";
import getNode from "../helpers/node.helper";

const isArray = (val: unknown): val is Array<any> => {
  return Array.isArray(val) && getNode(val) === NodeEnum.ARRAY;
};

export default isArray;
