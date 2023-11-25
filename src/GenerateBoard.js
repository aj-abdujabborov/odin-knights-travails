import Node from "./Node";

/* eslint-disable no-param-reassign */

export default (function GenerateBoard() {
  const nodes = [];
  const boardWidth = 8;

  function fillBoardWithNodes() {
    for (let i = 0; i < boardWidth; i += 1) {
      nodes[i] = [];
      for (let j = 0; j < boardWidth; j += 1) {
        nodes[i].push(new Node([i, j]));
      }
    }
  }

  function iterator(callback) {
    for (let i = 0; i < boardWidth; i += 1) {
      for (let j = 0; j < boardWidth; j += 1) {
        callback(nodes[i][j]);
      }
    }
  }

  function fillNeighbors(node) {
    const moves = [
      [1, 2],
      [-1, 2],
      [2, -1],
      [2, 1],
    ];
    moves.forEach((move) => {
      const xDest = node.coord[0] + move[0];
      const yDest = node.coord[1] + move[1];
      if (
        xDest >= 0 &&
        xDest < boardWidth &&
        yDest >= 0 &&
        yDest < boardWidth
      ) {
        node.addNeighbor(nodes[xDest][yDest]);
      }
    });
  }

  function clearPrevAndVisited() {
    iterator((node) => {
      node.visited = false;
      node.prev = false;
    });
  }

  fillBoardWithNodes();
  iterator(fillNeighbors);

  return { nodes, clearPrevAndVisited };
})();
