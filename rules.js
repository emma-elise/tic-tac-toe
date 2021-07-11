import { myStore } from "./app.js";

let valid = false;

const threeBoardWinConditons = (currentPlayer, board) => {
  if (
    board[0] === currentPlayer &&
    board[1] === currentPlayer &&
    board[2] === currentPlayer
  ) {
    valid = true;
    return valid;
  } else if (
    board[3] === currentPlayer &&
    board[4] === currentPlayer &&
    board[5] === currentPlayer
  ) {
    valid = true;
    return valid;
  } else if (
    board[6] === currentPlayer &&
    board[7] === currentPlayer &&
    board[8] === currentPlayer
  ) {
    valid = true;
    return valid;
  } else if (
    board[0] === currentPlayer &&
    board[3] === currentPlayer &&
    board[6] === currentPlayer
  ) {
    valid = true;
    return valid;
  } else if (
    board[1] === currentPlayer &&
    board[4] === currentPlayer &&
    board[7] === currentPlayer
  ) {
    valid = true;
    return valid;
  } else if (
    board[2] === currentPlayer &&
    board[5] === currentPlayer &&
    board[8] === currentPlayer
  ) {
    valid = true;
    return valid;
  } else if (
    board[0] === currentPlayer &&
    board[4] === currentPlayer &&
    board[8] === currentPlayer
  ) {
    valid = true;
    return valid;
  } else if (
    board[2] === currentPlayer &&
    board[4] === currentPlayer &&
    board[6] === currentPlayer
  ) {
    valid = true;
    return valid;
  }
  return valid;
};

const fourBoardWinConditions = (currentPlayer, board) => {
  if (
    board[0] === currentPlayer &&
    board[1] === currentPlayer &&
    board[2] === currentPlayer &&
    board[3] === currentPlayer
  ) {
    return true;
  } else if (
    board[4] === currentPlayer &&
    board[5] === currentPlayer &&
    board[6] === currentPlayer &&
    board[7] === currentPlayer
  ) {
    return true;
  } else if (
    board[8] === currentPlayer &&
    board[9] === currentPlayer &&
    board[10] === currentPlayer &&
    board[11] === currentPlayer
  ) {
    return true;
  } else if (
    board[12] === currentPlayer &&
    board[13] === currentPlayer &&
    board[14] === currentPlayer &&
    board[15] === currentPlayer
  ) {
    return true;
  } else if (
    board[0] === currentPlayer &&
    board[4] === currentPlayer &&
    board[8] === currentPlayer &&
    board[12] === currentPlayer
  ) {
    return true;
  } else if (
    board[1] === currentPlayer &&
    board[5] === currentPlayer &&
    board[9] === currentPlayer &&
    board[13] === currentPlayer
  ) {
    return true;
  } else if (
    board[2] === currentPlayer &&
    board[6] === currentPlayer &&
    board[10] === currentPlayer &&
    board[14] === currentPlayer
  ) {
    return true;
  } else if (
    board[3] === currentPlayer &&
    board[7] === currentPlayer &&
    board[11] === currentPlayer &&
    board[15] === currentPlayer
  ) {
    return true;
  } else if (
    board[0] === currentPlayer &&
    board[5] === currentPlayer &&
    board[10] === currentPlayer &&
    board[15] === currentPlayer
  ) {
    return true;
  } else if (
    board[3] === currentPlayer &&
    board[6] === currentPlayer &&
    board[9] === currentPlayer &&
    board[12] === currentPlayer
  ) {
    return true;
  }
  return false;
};

const fiveBoardWinConditions = (currentPlayer, board) => {
  if (
    board[0] === currentPlayer &&
    board[5] === currentPlayer &&
    board[10] === currentPlayer &&
    board[15] === currentPlayer &&
    board[20] === currentPlayer
  ) {
    return true;
  } else if (
    board[1] === currentPlayer &&
    board[6] === currentPlayer &&
    board[11] === currentPlayer &&
    board[16] === currentPlayer &&
    board[21] === currentPlayer
  ) {
    return true;
  } else if (
    board[2] === currentPlayer &&
    board[7] === currentPlayer &&
    board[12] === currentPlayer &&
    board[17] === currentPlayer &&
    board[22] === currentPlayer
  ) {
    return true;
  } else if (
    board[3] === currentPlayer &&
    board[8] === currentPlayer &&
    board[13] === currentPlayer &&
    board[18] === currentPlayer &&
    board[23] === currentPlayer
  ) {
    return true;
  } else if (
    board[4] === currentPlayer &&
    board[9] === currentPlayer &&
    board[14] === currentPlayer &&
    board[19] === currentPlayer &&
    board[24] === currentPlayer
  ) {
    return true;
  } else if (
    board[0] === currentPlayer &&
    board[1] === currentPlayer &&
    board[2] === currentPlayer &&
    board[3] === currentPlayer &&
    board[4] === currentPlayer
  ) {
    return true;
  } else if (
    board[5] === currentPlayer &&
    board[6] === currentPlayer &&
    board[7] === currentPlayer &&
    board[8] === currentPlayer &&
    board[9] === currentPlayer
  ) {
    return true;
  } else if (
    board[10] === currentPlayer &&
    board[11] === currentPlayer &&
    board[12] === currentPlayer &&
    board[13] === currentPlayer &&
    board[14] === currentPlayer
  ) {
    return true;
  } else if (
    board[15] === currentPlayer &&
    board[16] === currentPlayer &&
    board[17] === currentPlayer &&
    board[18] === currentPlayer &&
    board[19] === currentPlayer
  ) {
    return true;
  } else if (
    board[20] === currentPlayer &&
    board[21] === currentPlayer &&
    board[22] === currentPlayer &&
    board[23] === currentPlayer &&
    board[24] === currentPlayer
  ) {
    return true;
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
    return true;
  } else if (
    board[4] === currentPlayer &&
    board[8] === currentPlayer &&
    board[12] === currentPlayer &&
    board[16] === currentPlayer &&
    board[20] === currentPlayer
  ) {
    return true;
  }
  return false;
};

let stupid;

const checkForWin = (myStore) => {
  console.log("Rules-BoardSize", myStore.boardSize);
  switch (myStore.boardSize) {
    case 1:
      console.log("Getting to Case 1");
      stupid = threeBoardWinConditons(myStore.currentPlayer, myStore.board);
      console.log("case 1", stupid);
      return stupid;
    case 2:
      return fourBoardWinConditions(myStore.currentPlayer, myStore.board);
    case 3:
      return fiveBoardWinConditions(myStore.currentPlayer, myStore.board);
    default:
      return false;
  }
};

export { checkForWin };
