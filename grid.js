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

export { buildGrid };
