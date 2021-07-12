import styling from "./styling.js";
import { checkForWin } from "./checkForWin.js";
import cpuTakesTurn from "./difficulty.js";

const turnOrder = (myStore) => {
  if (myStore.turnNumber === 0) {
    myStore.currentPlayer === "X";
  } else if (myStore.turnNumber % 2 === 0) {
    myStore.currentPlayerName = myStore.secondPlayerName;
    myStore.cpu = "O";
  } else {
    myStore.currentPlayerName = myStore.firstPlayerName;
    myStore.currentPlayer = "X";
  }
};

const counter = (myStore) => {
  let value = myStore.turnNumber++;
  myStore = {
    ...myStore,
    turnNumber: value,
  };
  console.log(myStore.turnNumber);
};

const playerTakesTurn = (myStore) => {
  $(".cell").click(function () {
    $(".winnerName").text(`No winner yet...`);
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
      $(this).html(myStore.player).css(styling);
      myStore.board.splice(myStore.currentIndex, 1, myStore.player);
      counter(myStore);
    }
    if (!myStore.gameWon && myStore.playerCount === 1) {
      cpuTakesTurn(myStore);
    } else if (!myStore.gameWon && myStore.playerCount === 2) {
      playerTakesTurn(myStore);
      console.log("else");
    }
  });
};

const takeTurn = (myStore) => {
  turnOrder(myStore);
  playerTakesTurn(myStore);
  //   turnMove(myStore);
};

export { takeTurn, counter, turnOrder };
