import { myStore, resetGame } from "./app.js";
import { displayWinner } from "./checkForWin.js";

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
    return;
  },

  fourBoard: function (currentPlayer, board) {
    if (
      board[0] === currentPlayer &&
      board[1] === currentPlayer &&
      board[2] === currentPlayer &&
      board[3] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[4] === currentPlayer &&
      board[5] === currentPlayer &&
      board[6] === currentPlayer &&
      board[7] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[8] === currentPlayer &&
      board[9] === currentPlayer &&
      board[10] === currentPlayer &&
      board[11] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[12] === currentPlayer &&
      board[13] === currentPlayer &&
      board[14] === currentPlayer &&
      board[15] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[0] === currentPlayer &&
      board[4] === currentPlayer &&
      board[8] === currentPlayer &&
      board[12] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[1] === currentPlayer &&
      board[5] === currentPlayer &&
      board[9] === currentPlayer &&
      board[13] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[2] === currentPlayer &&
      board[6] === currentPlayer &&
      board[10] === currentPlayer &&
      board[14] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[3] === currentPlayer &&
      board[7] === currentPlayer &&
      board[11] === currentPlayer &&
      board[15] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[0] === currentPlayer &&
      board[5] === currentPlayer &&
      board[10] === currentPlayer &&
      board[15] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[3] === currentPlayer &&
      board[6] === currentPlayer &&
      board[9] === currentPlayer &&
      board[12] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    }
    return false;
  },

  fiveBoard: function (currentPlayer, board) {
    if (
      board[0] === currentPlayer &&
      board[5] === currentPlayer &&
      board[10] === currentPlayer &&
      board[15] === currentPlayer &&
      board[20] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[1] === currentPlayer &&
      board[6] === currentPlayer &&
      board[11] === currentPlayer &&
      board[16] === currentPlayer &&
      board[21] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[2] === currentPlayer &&
      board[7] === currentPlayer &&
      board[12] === currentPlayer &&
      board[17] === currentPlayer &&
      board[22] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[3] === currentPlayer &&
      board[8] === currentPlayer &&
      board[13] === currentPlayer &&
      board[18] === currentPlayer &&
      board[23] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[4] === currentPlayer &&
      board[9] === currentPlayer &&
      board[14] === currentPlayer &&
      board[19] === currentPlayer &&
      board[24] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[0] === currentPlayer &&
      board[1] === currentPlayer &&
      board[2] === currentPlayer &&
      board[3] === currentPlayer &&
      board[4] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[5] === currentPlayer &&
      board[6] === currentPlayer &&
      board[7] === currentPlayer &&
      board[8] === currentPlayer &&
      board[9] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[10] === currentPlayer &&
      board[11] === currentPlayer &&
      board[12] === currentPlayer &&
      board[13] === currentPlayer &&
      board[14] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[15] === currentPlayer &&
      board[16] === currentPlayer &&
      board[17] === currentPlayer &&
      board[18] === currentPlayer &&
      board[19] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[20] === currentPlayer &&
      board[21] === currentPlayer &&
      board[22] === currentPlayer &&
      board[23] === currentPlayer &&
      board[24] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[0] &&
      currentPlayer &&
      board[6] &&
      currentPlayer &&
      board[12] &&
      currentPlayer &&
      board[18] &&
      currentPlayer &&
      board[24] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    } else if (
      board[4] === currentPlayer &&
      board[8] === currentPlayer &&
      board[12] === currentPlayer &&
      board[16] === currentPlayer &&
      board[20] === currentPlayer
    ) {
      displayWinner(myStore);
      return setTimeout(resetGame(myStore), 250);
    }
    return false;
  },
};

export { winConditions };
