import { gameState } from "./app.js";
import { gameWon, checkForWin } from "./rules.js";
import { cpuTakesTurn } from "./difficulty.js";

export {
  playerCount,
  xOrOCheck,
  difficultyCheck,
  applySettings,
  settingsChosen,
  confirmSettings,
  buildGrid,
  cpu,
  currentPlayer,
  fiveBoard,
  fourBoard,
  threeBoard,
  takeTurns,
  turnNumber,
};

// Game load / no special settings chosen
let settingsChosen = false;

// User confirms settings
let playerCount = 1;
let firstPlayerName = "";
let secondPlayerName = "";
let xOrOCheck = "X";
let sizeCheck = 9;
let difficultyCheck = "easy";

// Apply settings to game board
let threeBoard = true;
let fourBoard = false;
let fiveBoard = false;

// Take turns
let turnNumber = 0;
let gameActive = false;
let oSelected = false;
let xSelected = false;
let currentPlayer = "X";
let player = "";
let cpu = "";

function openSettings() {
  $("#settings").click(function () {
    settingsChosen = false;
    $(".modal").css({ display: "block", visibility: "visible" });
  });

  document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode == 27) {
      $(".modal").css({ display: "none", visibility: "none" });
    }
  };
}

function confirmSettings() {
  $("#confirmSettings").click(function () {
    event.preventDefault();
    playerCount = $("input[name='players']:checked").val();
    xOrOCheck = $("input[name='xOrO']:checked").val();
    sizeCheck = $("input[name='boardSize']:checked").val();
    difficultyCheck = $("input[name='difficulty']:checked").val();
    firstPlayerName = $("input[name='oneName']").val();
    secondPlayerName = $("input[name='twoName']").val();
    $(".modal").css({ display: "none", visibility: "none" });
  });

  if (xOrOCheck === "X") {
    xSelected === true;
  } else if (xOrOCheck === "O") {
    oSelected === true;
  }

  if (sizeCheck === 9) {
    threeBoard = true;
    fourBoard = false;
    fiveBoard = false;
  } else if (sizeCheck === 16) {
    threeBoard = false;
    fourBoard = true;
    fiveBoard = false;
  } else if (sizeCheck === 25) {
    threeBoard = false;
    fourBoard = false;
    fiveBoard = true;
  }
}

function applySettings() {
  settingsChosen = true;

  openSettings();
  confirmSettings();
}

function buildGrid() {
  $("#grid .cell").remove();

  for (let i = 0; i < gameState.board.length; i++) {
    gameState.board.splice(gameState.board[i], 1, null);
    $("#grid").append($('<div class="cell"></div>'));
    if (threeBoard === true) {
      $("#grid .cell").css({
        flex: "1 0 170.67px",
      });
    } else if (fourBoard === true) {
      $("#grid .cell").css({
        flex: "0 0 128px",
      });
    } else if (fiveBoard === true) {
      $("#grid .cell").css({
        flex: "0 0 102.4px",
      });
    }
  }
}

function turnOrder() {
  if (turnNumber === 0 && settingsChosen === false) {
    currentPlayer = "X";
  } else if (turnNumber % 2 === 0) {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

const counter = () => turnNumber++;

function takeTurns() {
  $(".cell").click(function () {
    let currentIndex = $(".cell").index(this);
    if (player === "") player = "X";
    if (cpu === "") cpu = "O";
    if (
      gameState.board[currentIndex] === player ||
      gameState.board[currentIndex] === cpu
    ) {
      return;
    } else {
      if (gameWon === true) return;
      if (oSelected === false) {
        turnOrder();
        gameActive = true;
      }
      $(this).html(player).css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "36px",
        fontWeight: "bold",
        color: "black",
      });
      gameState.board.splice(currentIndex, 1, player);
      checkForWin();
      if (gameWon === false && playerCount === 1) {
        cpuTakesTurn();
      }
    }
  });
  counter();
}
