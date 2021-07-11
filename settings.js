import cpuTakesTurn from "./difficulty.js";
import { checkForWin } from "./checkForWin.js";
import styling from "./styling.js";

const defaultSettings = (myStore) => {
  myStore = {
    ...myStore,
    gameWon: false,
    settingsChosen: false,
    turnNumber: 0,
    gameActive: false,
    currentIndex: 0,
  };
};

const chooseSettings = (myStore) => {
  $("#settings").click(function () {
    myStore = {
      ...myStore,
      settingsChosen: false,
    };
    console.log("settingsChosen is " + myStore.settingsChosen);
    $(".modal").css({ display: "block", visibility: "visible" });
  });

  document.onkeydown = function (event) {
    event = event || window.event;
    if (event.key === "Escape") {
      $(".modal").css({ display: "none", visibility: "none" });
    }
  };

  $("#confirmSettings").click(function () {
    event.preventDefault();
    // event.preventDefault();
    // stopPropagation();
    myStore = {
      ...myStore,
      playerCount: $("input[name='players']:checked").val(),
      xOrOCheck: $("input[name='xOrO']:checked").val(),
      sizeCheck: $("input[name='boardSize']:checked").val(),
      firstPlayerName: $("input[name='oneName']").val(),
      secondPlayerName: $("input[name='twoName']").val(),
      settingsChosen: true,
    };
    // applySettings();
    $(".modal").css({ display: "none", visibility: "none" });
    console.log(myStore);
  });
};

const applySettings = (myStore) => {
  // myStore = {
  //   ...myStore,
  //   settingsChosen: true,
  // };

  $(".xScore").text(`${myStore.firstPlayerName} : ${myStore.firstPlayerScore}`);
  $(".oScore").text(
    `${myStore.secondPlayerName} : ${myStore.secondPlayerScore}`
  );

  if (myStore.xOrOCheck === "X") {
    myStore.xSelected === true;
  } else if (myStore.xOrOCheck === "O") {
    myStore.oSelected === true;
  }

  if (myStore.sizeCheck === 9) {
    myStore = {
      ...myStore,
      boardSize: 1,
    };
  } else if (myStore.sizeCheck === 16) {
    myStore = {
      ...myStore,
      boardSize: 2,
    };
  } else if (myStore.sizeCheck === 25) {
    myStore = {
      ...myStore,
      boardSize: 3,
    };
  }
  console.log("settingsChosen is " + myStore.settingsChosen);
  chooseSettings(myStore);
};

const buildGrid = (myStore) => {
  console.log("Grid is firing");
  $("#grid .cell").remove();
  for (let i = 0; i < myStore.board.length; i++) {
    $("#grid").append($('<div class="cell"></div>'));
  }
  myStore.board.forEach(function (cell, index) {
    myStore.board[index] = null;
  });
  console.log(myStore.board);

  switch (myStore.boardSize) {
    case 1:
      $("#grid .cell").css({
        flex: "1 0 170.67px",
      });
      break;
    case 2:
      $("#grid .cell").css({
        flex: "0 0 128px",
      });
      break;
    case 3:
      $("#grid .cell").css({
        flex: "0 0 102.4px",
      });
      break;
  }
};

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

const settings = (myStore) => {
  defaultSettings(myStore);
  chooseSettings(myStore);
  applySettings(myStore);
};

export { settings, buildGrid, takeTurns };
