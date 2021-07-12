import { buildGame as resetGame } from "./app.js";
import { winConditions } from "./winConditions.js";

const checkForWin = (myStore) => {
  if (myStore.turnNumber === 9) {
    $(".winnerName").text(`Draw! Try again.`);
    console.log("draw");
    resetGame(myStore);
  }
  return winConditions.threeBoard(myStore.currentPlayer, myStore.board);
};

export { checkForWin };
