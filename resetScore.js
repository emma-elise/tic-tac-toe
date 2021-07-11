const resetScore = (myStore) => {
  $("#reset").click(function () {
    console.log("reset score clicked");
    myStore.firstPlayerScore = 0;
    myStore.secondPlayerScore = 0;
    $(".xScore").text(`${myStore.firstPlayerName} : 0`);
    $(".oScore").text(`${myStore.secondPlayerName} : 0`);
  });
};

export default resetScore;
