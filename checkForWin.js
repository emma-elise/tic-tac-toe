import { myStore, resetGame } from "./app.js";
import { winConditions } from "./winConditions.js";

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

export { checkForWin, displayWinner, checkForDraw };
