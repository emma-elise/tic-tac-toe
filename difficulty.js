import { checkForWin } from "./checkForWin.js";
import styling from "./styling.js";

let cpuIndex;

const difficulty = (myStore) => {
  cpuIndex = Math.round(Math.random() * myStore.board.length - 1);
  while (myStore.board[cpuIndex] !== null) {
    cpuIndex = Math.round(Math.random() * myStore.board.length - 1);
  }
  $(".cell").eq(cpuIndex).html(myStore.cpu).css(styling);
  myStore.board.splice(cpuIndex, 1, myStore.cpu);
};

const cpuTakesTurn = (myStore) => {
  difficulty(myStore);
  checkForWin(myStore);
};

export default cpuTakesTurn;
