import { resetGame } from "./app.js";
import { winConditions } from "./winConditions.js";

const checkForWin = (myStore) => {
  if (myStore.board.includes(null) === false) {
    $(".winnerName").text(`Draw! Try again.`);
    console.log("draw");
    setTimeout(resetGame(myStore), 250);
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

export { checkForWin };
