const displayWinner = (myStore) => {
  myStore.winnerName = myStore.currentPlayerName;
  $(".winnerName").text(`${myStore.winnerName} is the winner!`);
  if (myStore.turnNumber % 2 === 0) {
    myStore.secondPlayerScore++;
    $(".oScore").text(
      `${myStore.secondPlayerName} : ${myStore.secondPlayerScore}`
    );
  } else {
    myStore.firstPlayerScore++;
    $(".xScore").text(
      `${myStore.firstPlayerName} : ${myStore.firstPlayerScore}`
    );
  }
};

export { displayWinner };
