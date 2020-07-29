const generateBoard = (whiteQueen, blackQueen) => {
  const boardSize = 8;
  let board = [];

  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      if (
        (i === whiteQueen[0] && j === whiteQueen[1]) ||
        (i === blackQueen[0] && j === blackQueen[1])
      ) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    board.push(row);
  }

  return board;
};

const queenThreat = (board) => {
  let queens = [];

  for (i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        queens.push([i, j]);
      }
    }
  }

  let queensColPos = queens[0][0] - queens[1][0];
  let queensRowPos = queens[0][1] - queens[1][1];

  if (
    queensColPos === 0 ||
    queensRowPos === 0 ||
    Math.abs(queensRowPos) === Math.abs(queensColPos)
  ) {
    return true;
  } else {
    return false;
  }
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

let whiteQueen2 = [0, 0];
let blackQueen2 = [5, 7];
let generatedBoard2 = generateBoard(whiteQueen2, blackQueen2);

console.log(generatedBoard2);
console.log(queenThreat(generatedBoard2));
