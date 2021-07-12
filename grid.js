const buildGrid = () => {
  $("#grid .cell").remove();
  for (let i = 0; i < 9; i++) {
    $("#grid").append(
      $('<div class="cell"></div>').css({ flex: "1 0 170.67px" })
    );
  }
};

export { buildGrid };
