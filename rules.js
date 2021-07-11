import { myStore, resetGame } from "./app.js";

const threeBoardWinConditions = (currentPlayer, board) => {
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
};

const fourBoardWinConditions = (currentPlayer, board) => {
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
};

const fiveBoardWinConditions = (currentPlayer, board) => {
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
};

const displayWinner = (myStore) => {
  myStore.winnerName = myStore.currentPlayerName;
  $(".winnerName").text(`${myStore.winnerName} is the winner!`);
  if (myStore.turnNumber % 2 === 0) {
    myStore.secondPlayerScore++;
    $(".oScore").text(
      `${myStore.secondPlayerName} : ${myStore.secondPlayerScore}`
    );
  } else {
    myStore.firstPlayerScore++;
    $(".xScore").text(
      `${myStore.firstPlayerName} : ${myStore.firstPlayerScore}`
    );
  }
};

const checkForDraw = (myStore) => {
  if (myStore.board.includes(null) === false) {
    $(".winnerName").text(`Draw! Try again.`);
    console.log("draw");
  }
  setTimeout(resetGame(myStore), 250);
};

const checkForWin = (myStore) => {
  if (myStore.board.includes(null) === false) {
    $(".winnerName").text(`Draw! Try again.`);
    console.log("draw");
  }
  console.log("Rules-BoardSize", myStore.boardSize);
  switch (myStore.boardSize) {
    case 1:
      console.log("Getting to Case 1");
      return threeBoardWinConditions(myStore.currentPlayer, myStore.board);
    case 2:
      return fourBoardWinConditions(myStore.currentPlayer, myStore.board);
    case 3:
      return fiveBoardWinConditions(myStore.currentPlayer, myStore.board);
    default:
      return false;
  }
};

export { checkForWin };
