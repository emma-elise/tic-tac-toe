import { applySettings, buildGrid, takeTurns } from "./settings.js";

var myStore = {
  gameWon: false,
  settingsChosen: false,
  turnNumber: 0,
  gameActive: false,
  oSelected: false,
  xSelected: false,
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
  drawCount: 0,
  xOrOCheck: "X",
  sizeCheck: 9,
  difficultyCheck: "easy",
  board: [null, null, null, null, null, null, null, null, null],
};

console.log("winner name is", myStore.winnerName);

const resetScore = (myStore) => {
  $("#reset").click(function () {
    myStore.firstPlayerScore = 0;
    myStore.secondPlayerScore = 0;
    myStore.drawCount = 0;
    console.log("reset button pushed");
  });
};

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

resetScore(myStore);
buildGame(myStore);

export { myStore };
