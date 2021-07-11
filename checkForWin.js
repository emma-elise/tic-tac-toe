import { resetGame } from "./app.js";
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
  switch (myStore.boardSize) {
    case 1:
      return winConditions.threeBoard(myStore.currentPlayer, myStore.board);
    case 2:
      return winConditions.fourBoard(myStore.currentPlayer, myStore.board);
    case 3:
      return winConditions.fiveBoard(myStore.currentPlayer, myStore.board);
    default:
      return false;
  }
};

export { checkForWin, displayWinner, checkForDraw };
