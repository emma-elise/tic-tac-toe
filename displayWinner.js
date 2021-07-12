const displayWinner = (myStore) => {
  if (myStore.currentPlayerName === myStore.firstPlayerName) {
    $(".xScore").text(
      `${myStore.firstPlayerName} : ${myStore.firstPlayerScore}`
    );
    myStore.firstPlayerScore++;
  } else {
    $(".oScore").text(
      `${myStore.secondPlayerName} : ${myStore.secondPlayerScore}`
    );
    myStore.secondPlayerScore++;
  }
  myStore.winnerName = myStore.currentPlayerName;
  $(".winnerName").text(`${myStore.winnerName} is the winner!`);
  console.log(myStore.winnerName + " is the winner!");
};

export { displayWinner };
