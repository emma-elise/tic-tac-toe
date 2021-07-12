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
  player: "",
  playerCount: 1,
  secondPlayerName: "Computer",
  secondPlayerScore: 0,
  turnNumber: 0,
  winnerName: "",
};

console.log(myStore);

const buildGame = (myStore) => {
  myStore.board.forEach(function (cell, index) {
    myStore.board[index] = null;
  });
  settings(myStore);
  buildGrid(myStore);
  while (!myStore.gameWon || myStore.settingsChanged) {
    return takeTurn(myStore);
  }
};

resetScore(myStore);
buildGame(myStore);

export { myStore, buildGame };
