import styling from "./styling.js";
import { checkForWin } from "./checkForWin.js";
import cpuTakesTurn from "./difficulty.js";

const turnOrder = (myStore) => {
  $(".winnerName").text(`No winner yet...`);
  // if (myStore.turnNumber === 0 && !myStore.settingsChosen) {
  if (myStore.turnNumber === 0) {
    name = myStore.firstPlayerName;
    return "X";
  } else if (myStore.turnNumber % 2 === 0) {
    name = myStore.firstPlayerName;
    return "O";
  }
  name = myStore.secondPlayerName;
  return "X";
};

const counter = (myStore) => {
  let value = myStore.turnNumber++;
  myStore = {
    ...myStore,
    turnNumber: value,
  };
};

const takeTurns = (myStore) => {
  $(".cell").click(function () {
    let value = $(".cell").index(this);
    myStore = {
      ...myStore,
      currentIndex: value,
    };
    if (!myStore.player) {
      myStore = {
        ...myStore,
        player: "X",
      };
    }

    if (!myStore.cpu) {
      myStore = {
        ...myStore,
        cpu: "O",
      };
    }

    if (
      myStore.board[myStore.currentIndex] === myStore.player ||
      myStore.board[myStore.currentIndex] === myStore.cpu
    ) {
      return;
    } else {
      if (myStore.gameWon) return;
      if (!myStore.oSelected) {
        let newValue = turnOrder(myStore);
        myStore = {
          ...myStore,
          currentPlayer: newValue,
          gameActive: true,
        };
      }
      $(this).html(myStore.player).css(styling);
      myStore.board.splice(myStore.currentIndex, 1, myStore.player);
      console.log("board size", myStore.boardSize);
      console.log("Turn is firing", myStore.board);

      let newNewValue = checkForWin(myStore);
      myStore = {
        ...myStore,
        gameWon: newNewValue,
      };
      //gameWon = checkForWin(boardSize, currentPlayer);
      if (!myStore.gameWon && myStore.playerCount === 1) {
        cpuTakesTurn(myStore);
      }
    }
  });
  counter(myStore);
};

export { takeTurns, turnOrder };
