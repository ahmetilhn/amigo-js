import NodeEnum from "../enums/NodeEnum";
import getNode from "../helpers/node.helper";

const isNumber = (val: unknown): val is number => {
  return (
    typeof val === "number" && !isNaN(val) && getNode(val) === NodeEnum.NUMBER
  );
};

export default isNumber;
