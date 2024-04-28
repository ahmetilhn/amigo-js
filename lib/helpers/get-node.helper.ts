import { NULL_NODE, UNDEFINED_NODE } from "../constants/node.constant";

const getNode = (node: any): string => {
  if (node == null) return node === undefined ? UNDEFINED_NODE : NULL_NODE;
  return Object.prototype.toString.call(node);
};

export default getNode;
