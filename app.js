import { buildGrid, takeTurns, settings } from "./settings.js";
import { resetScore } from "./resetScore.js";

var myStore = {
  gameWon: false,
  settingsChosen: false,
  turnNumber: 0,
  gameActive: false,
  oSelected: false,
  xSelected: true,
  currentPlayer: "X",
  currentPlayerName: "Player One",
  winnerName: "",
  player: "",
  cpu: "",
  currentIndex: 0,
  boardSize: 1,
  playerCount: 1,
  firstPlayerName: "Player One",
  secondPlayerName: "Computer",
  firstPlayerScore: 0,
  secondPlayerScore: 0,
  xOrOCheck: "X",
  sizeCheck: 9,
  board: [null, null, null, null, null, null, null, null, null],
};

const buildGame = (myStore) => {
  buildGrid(myStore);
  if (myStore.settingsChosen === false && myStore.gameWon === false) {
    takeTurns(myStore);
    return;
  }
};

const resetGame = (myStore) => {
  buildGame(myStore);
};

settings(myStore);
buildGame(myStore);
resetScore(myStore);

export { myStore, resetGame };
