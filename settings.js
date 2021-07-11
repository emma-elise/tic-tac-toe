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

const settings = (myStore) => {
  defaultSettings(myStore);
  chooseSettings(myStore);
  applySettings(myStore);
};

export { settings };
