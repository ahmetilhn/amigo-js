import NodeEnum from "../enums/NodeEnum";

const getNode = (node: any): string => {
  if (node == null)
    return node === undefined ? NodeEnum.UNDEFINED : NodeEnum.NULL;
  return Object.prototype.toString.call(node);
};

export default getNode;
