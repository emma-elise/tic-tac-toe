import { gameState } from "./app.js";
import { threeBoard, fourBoard, fiveBoard, currentPlayer } from "./settings.js";

export { gameWon, checkForWin };

let gameWon = false;

function threeBoardWinConditons() {
  if (
    gameState.board[0] === currentPlayer &&
    gameState.board[1] === currentPlayer &&
    gameState.board[2] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[3] === currentPlayer &&
    gameState.board[4] === currentPlayer &&
    gameState.board[5] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[6] === currentPlayer &&
    gameState.board[7] === currentPlayer &&
    gameState.board[8] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[0] === currentPlayer &&
    gameState.board[3] === currentPlayer &&
    gameState.board[6] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[1] === currentPlayer &&
    gameState.board[4] === currentPlayer &&
    gameState.board[7] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[2] === currentPlayer &&
    gameState.board[5] === currentPlayer &&
    gameState.board[8] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[0] === currentPlayer &&
    gameState.board[4] === currentPlayer &&
    gameState.board[8] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[2] === currentPlayer &&
    gameState.board[4] === currentPlayer &&
    gameState.board[6] === currentPlayer
  ) {
    gameWon = true;
  }
}

function fourBoardWinConditions() {
  if (
    gameState.board[0] === currentPlayer &&
    gameState.board[1] === currentPlayer &&
    gameState.board[2] === currentPlayer &&
    gameState.board[3] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[4] === currentPlayer &&
    gameState.board[5] === currentPlayer &&
    gameState.board[6] === currentPlayer &&
    gameState.board[7] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[8] === currentPlayer &&
    gameState.board[9] === currentPlayer &&
    gameState.board[10] === currentPlayer &&
    gameState.board[11] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[12] === currentPlayer &&
    gameState.board[13] === currentPlayer &&
    gameState.board[14] === currentPlayer &&
    gameState.board[15] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[0] === currentPlayer &&
    gameState.board[4] === currentPlayer &&
    gameState.board[8] === currentPlayer &&
    gameState.board[12] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[1] === currentPlayer &&
    gameState.board[5] === currentPlayer &&
    gameState.board[9] === currentPlayer &&
    gameState.board[13] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[2] === currentPlayer &&
    gameState.board[6] === currentPlayer &&
    gameState.board[10] === currentPlayer &&
    gameState.board[14] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[3] === currentPlayer &&
    gameState.board[7] === currentPlayer &&
    gameState.board[11] === currentPlayer &&
    gameState.board[15] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[0] === currentPlayer &&
    gameState.board[5] === currentPlayer &&
    gameState.board[10] === currentPlayer &&
    gameState.board[15] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[3] === currentPlayer &&
    gameState.board[6] === currentPlayer &&
    gameState.board[9] === currentPlayer &&
    gameState.board[12] === currentPlayer
  ) {
    gameWon = true;
  }
}

function fiveBoardWinConditions() {
  if (
    gameState.board[0] === currentPlayer &&
    gameState.board[5] === currentPlayer &&
    gameState.board[10] === currentPlayer &&
    gameState.board[15] === currentPlayer &&
    gameState.board[20] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[1] === currentPlayer &&
    gameState.board[6] === currentPlayer &&
    gameState.board[11] === currentPlayer &&
    gameState.board[16] === currentPlayer &&
    gameState.board[21] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[2] === currentPlayer &&
    gameState.board[7] === currentPlayer &&
    gameState.board[12] === currentPlayer &&
    gameState.board[17] === currentPlayer &&
    gameState.board[22] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[3] === currentPlayer &&
    gameState.board[8] === currentPlayer &&
    gameState.board[13] === currentPlayer &&
    gameState.board[18] === currentPlayer &&
    gameState.board[23] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[4] === currentPlayer &&
    gameState.board[9] === currentPlayer &&
    gameState.board[14] === currentPlayer &&
    gameState.board[19] === currentPlayer &&
    gameState.board[24] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[0] === currentPlayer &&
    gameState.board[1] === currentPlayer &&
    gameState.board[2] === currentPlayer &&
    gameState.board[3] === currentPlayer &&
    gameState.board[4] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[5] === currentPlayer &&
    gameState.board[6] === currentPlayer &&
    gameState.board[7] === currentPlayer &&
    gameState.board[8] === currentPlayer &&
    gameState.board[9] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[10] === currentPlayer &&
    gameState.board[11] === currentPlayer &&
    gameState.board[12] === currentPlayer &&
    gameState.board[13] === currentPlayer &&
    gameState.board[14] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[15] === currentPlayer &&
    gameState.board[16] === currentPlayer &&
    gameState.board[17] === currentPlayer &&
    gameState.board[18] === currentPlayer &&
    gameState.board[19] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[20] === currentPlayer &&
    gameState.board[21] === currentPlayer &&
    gameState.board[22] === currentPlayer &&
    gameState.board[23] === currentPlayer &&
    gameState.board[24] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[0] === currentPlayer &&
    gameState.board[6] === currentPlayer &&
    gameState.board[12] === currentPlayer &&
    gameState.board[18] === currentPlayer &&
    gameState.board[24] === currentPlayer
  ) {
    gameWon = true;
  } else if (
    gameState.board[4] === currentPlayer &&
    gameState.board[8] === currentPlayer &&
    gameState.board[12] === currentPlayer &&
    gameState.board[16] === currentPlayer &&
    gameState.board[20] === currentPlayer
  ) {
    gameWon = true;
  }
}

function checkForWin() {
  if (threeBoard === true) {
    threeBoardWinConditons();
  } else if (fourBoard === true) {
    fourBoardWinConditions();
  } else if (fiveBoard === true) {
    fiveBoardWinConditions();
  }
}
