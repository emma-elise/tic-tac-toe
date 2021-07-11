import { settings } from "./settings.js";
import { takeTurn } from "./turn.js";
import { buildGrid } from "./grid.js";
import { resetScore } from "./resetScore.js";

var myStore = {
  board: [null, null, null, null, null, null, null, null, null],
  boardSize: 1,
  cpu: "",
  currentIndex: 0,
  currentPlayer: "X",
  currentPlayerName: "Player One",
  firstPlayerName: "Player One",
  firstPlayerScore: 0,
  gameActive: false,
  gameWon: false,
  oSelected: false,
  player: "",
  playerCount: 1,
  secondPlayerName: "Computer",
  secondPlayerScore: 0,
  settingsChosen: false,
  sizeCheck: 9,
  turnNumber: 0,
  winnerName: "",
  xOrOCheck: "X",
  xSelected: true,
};

const buildGame = (myStore) => {
  settings(myStore);
  buildGrid(myStore);
  if (myStore.settingsChosen === false && myStore.gameWon === false) {
    takeTurn(myStore);
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
