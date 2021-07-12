import { buildGame as resetGame } from "./app.js";

const chooseSettings = (myStore) => {
  $("#settings").click(function () {
    myStore = {
      ...myStore,
    };
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
    myStore = {
      ...myStore,
      playerCount: $("input[name='players']:checked").val(),
      boardSize: $("input[name='boardSize']:checked").val(),
      firstPlayerName: $("input[name='oneName']").val(),
      secondPlayerName: $("input[name='twoName']").val(),
      gameWon: false,
      settingsChanged: true,
    };
    $(".modal").css({ display: "none", visibility: "none" });
    resetGame(myStore);
  });
};

const miscSettings = (myStore) => {
  $(".xScore").text(`${myStore.firstPlayerName} : ${myStore.firstPlayerScore}`);
  $(".oScore").text(
    `${myStore.secondPlayerName} : ${myStore.secondPlayerScore}`
  );
};

const settings = (myStore) => {
  chooseSettings(myStore);
  miscSettings(myStore);
};

export { settings };
