export { cpuTakesTurn };
import { gameState } from "./app.js";
import { checkForWin } from "./rules.js";
import { cpu } from "./settings.js";

function easyMove() {
  let cpuIndex = Math.round(Math.random() * gameState.board.length - 1);
  while (gameState.board[cpuIndex] !== null) {
    cpuIndex = Math.round(Math.random() * gameState.board.length - 1);
  }
  $(".cell").eq(cpuIndex).html(cpu).css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "36px",
    fontWeight: "bold",
    color: "black",
  });
  gameState.board.splice(cpuIndex, 1, cpu);
}

function cpuTakesTurn() {
  easyMove();
  checkForWin();
}
