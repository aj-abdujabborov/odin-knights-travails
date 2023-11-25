/* eslint-disable no-param-reassign */
import board from "./GenerateBoard";

export default function knightMoves(start, end) {
  const src = board.nodes[start[0]][start[1]];
  const dest = board.nodes[end[0]][end[1]];

  const queue = [src];
  src.visited = true;
  while (dest.visited === false && queue.length) {
    const node = queue.shift();

    node.neighbors.forEach((neighbor) => {
      if (!neighbor.visited) {
        neighbor.visited = true;
        neighbor.prev = node;
        queue.push(neighbor);
      }
    });
  }

  const hist = [];
  let curr = dest;
  while (curr) {
    hist.push(curr.coord);
    curr = curr.prev;
  }

  board.clearPrevAndVisited();
  return hist.reverse();
}
