import knightMoves from "./KnightMoves";

function prettyPrint(moves) {
  let str = `You made it in ${moves.length - 1} moves! Here's your path:\n`;
  moves.forEach((move) => {
    str += `[${move.toString()}]\n`;
  });
  console.log(str);
}

prettyPrint(knightMoves([0, 0], [0, 0]));
prettyPrint(knightMoves([0, 0], [1, 2]));
prettyPrint(knightMoves([0, 0], [3, 3]));
prettyPrint(knightMoves([3, 3], [0, 0]));
prettyPrint(knightMoves([0, 0], [7, 7]));
