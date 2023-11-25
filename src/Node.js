/* eslint-disable lines-between-class-members */

export default class Node {
  neighbors = [];
  visited = false;
  prev = null;

  constructor(coordinates) {
    this.coord = coordinates;
  }

  addNeighbor(node) {
    this.neighbors.push(node);
    node.neighbors.push(this);
  }
}
