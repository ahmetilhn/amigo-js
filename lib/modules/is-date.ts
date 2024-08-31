import NodeEnum from "../enums/NodeEnum";
import getNode from "../helpers/node.helper";

const isDate = (val: any): boolean => {
  return typeof val === "object" && getNode(val) === NodeEnum.DATE;
};

export default isDate;
