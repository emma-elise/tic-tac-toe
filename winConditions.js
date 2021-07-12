import { myStore, buildGame as resetGame } from "./app.js";
import { displayWinner } from "./displayWinner.js";

let winConditions = {
  threeBoard: function (currentPlayer, board) {
    if (
      board[0] === currentPlayer &&
      board[1] === currentPlayer &&
      board[2] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[3] === currentPlayer &&
      board[4] === currentPlayer &&
      board[5] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[6] === currentPlayer &&
      board[7] === currentPlayer &&
      board[8] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[0] === currentPlayer &&
      board[3] === currentPlayer &&
      board[6] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[1] === currentPlayer &&
      board[4] === currentPlayer &&
      board[7] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[2] === currentPlayer &&
      board[5] === currentPlayer &&
      board[8] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[0] === currentPlayer &&
      board[4] === currentPlayer &&
      board[8] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[2] === currentPlayer &&
      board[4] === currentPlayer &&
      board[6] === currentPlayer
    ) {
      displayWinner(myStore);
    }
    return false;
  },
};

export { winConditions };
