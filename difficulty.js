import { checkForWin } from "./rules.js";
import styling from "./Styling.js";

let cpuIndex;

const easyMove = (myStore) => {
  cpuIndex = Math.round(Math.random() * myStore.board.length - 1);
  while (myStore.board[cpuIndex] !== null) {
    cpuIndex = Math.round(Math.random() * myStore.board.length - 1);
  }
  $(".cell").eq(cpuIndex).html(myStore.cpu).css(styling);
  myStore.board.splice(cpuIndex, 1, myStore.cpu);
};

const cpuTakesTurn = (myStore) => {
  easyMove(myStore);
  checkForWin(myStore);
};

export default cpuTakesTurn;
