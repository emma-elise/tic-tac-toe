import cpuTakesTurn from "./difficulty.js";
import { checkForWin } from "./rules.js";
import styling from "./styling.js";

const openSettings = (myStore) => {
  $("#settings").click(function () {
    myStore = {
      ...myStore,
      settingsChosen: false,
    };
    //settingsChosen = false;
    $(".modal").css({ display: "block", visibility: "visible" });
  });

  document.onkeydown = function (event) {
    event = event || window.event;
    if (event.key == escape) {
      $(".modal").css({ display: "none", visibility: "none" });
    }
  };
};

const confirmSettings = (myStore) => {
  $("#confirmSettings").click(function () {
    //event.preventDefault();
    myStore = {
      ...myStore,
      playerCount: $("input[name='players']:checked").val(),
      xOrOCheck: $("input[name='xOrO']:checked").val(),
      sizeCheck: $("input[name='boardSize']:checked").val(),
      difficultyCheck: $("input[name='difficulty']:checked").val(),
      firstPlayerName: $("input[name='oneName']").val(),
      secondPlayerName: $("input[name='twoName']").val(),
    };
    // $(".modal").css({ display: "none", visibility: "none" });
  });

  if (myStore.xOrOCheck === "X") {
    myStore.xSelected === true;
  } else if (myStore.xOrOCheck === "O") {
    myStore.oSelected === true;
  }

  if (myStore.sizeCheck === 9) {
    console.log("9");
    myStore = {
      ...myStore,
      boardSize: 1,
    };
  } else if (myStore.sizeCheck === 16) {
    console.log("16");
    myStore = {
      ...myStore,
      boardSize: 2,
    };
  } else if (myStore.sizeCheck === 25) {
    console.log("25");
    myStore = {
      ...myStore,
      boardSize: 3,
    };
  }

  $(".player-turn").text(`${myStore.currentPlayerName}'s Turn`);
  $(".xScore").text(`${myStore.firstPlayerName}: ${myStore.firstPlayerScore}`);
  $(".oScore").text(
    `${myStore.secondPlayerName}: ${myStore.secondPlayerScore}`
  );
};

const applySettings = (myStore) => {
  myStore = {
    ...myStore,
    settingsChosen: true,
  };
  openSettings(myStore);
  confirmSettings(myStore);
  console.log("ApplySettings");
};

const buildGrid = (myStore) => {
  console.log("Am I firing?");
  $("#grid .cell").remove();

  for (let i = 0; i < myStore.board.length; i++) {
    myStore.board.splice(myStore.board[i], 1, null);
    $("#grid").append($('<div class="cell"></div>'));
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
  }
};

const turnOrder = (myStore) => {
  let name = myStore.currentPlayerName;
  if (myStore.turnNumber === 0 && !myStore.settingsChosen) {
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

export { applySettings, confirmSettings, buildGrid, takeTurns };
