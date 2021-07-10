import {
  applySettings,
  settingsChosen,
  buildGrid,
  takeTurns,
} from "./settings.js";
import { gameWon } from "./rules.js";

export { gameState };

const gameState = {
  board: [null, null, null, null, null, null, null, null, null],
};

function buildGame() {
  applySettings();
  buildGrid();
  takeTurns();
  if (settingsChosen === false || gameWon === false) {
    return;
  } else {
    buildGrid();
  }
}

buildGame();
