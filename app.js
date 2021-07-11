import { applySettings, buildGrid, takeTurns } from "./settings.js";

var myStore = {
  gameWon: false,
  settingsChosen: false,
  turnNumber: 0,
  gameActive: false,
  oSelected: false,
  xSelected: false,
  currentPlayer: "X",
  player: "",
  cpu: "",
  currentIndex: 0,
  boardSize: 1,
  playerCount: 1,
  firstPlayerName: "",
  secondPlayerName: "",
  xOrOCheck: "X",
  sizeCheck: 9,
  difficultyCheck: "easy",
  board: [null, null, null, null, null, null, null, null, null],
};

console.log("myStore", myStore);

const buildGame = (myStore) => {
  applySettings(myStore);
  console.log("Do we hit this?");
  buildGrid(myStore);
  takeTurns(myStore);
  if (myStore.settingsChosen === false || myStore.gameWon === false) {
    return;
  } else {
    buildGrid(myStore);
  }
};

buildGame(myStore);

export { myStore };
