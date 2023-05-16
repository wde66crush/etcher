populateBoard = (boardH, boardW) => {
  let boardSize  = boardH * boardW;
  let boardDivision = () => {
    for (i = 0; i < boardSize; i++){
      let boardSquare = $("<div><p>Howdy</p></div>").attr(
        {
        'class' : 'boardDiv',
        'id' : i
      }
    )
    // adding ids to the game squares to target in the mousover event. 
      $('#gameBoard').append(boardSquare)
    }
  }
  boardDivision();
}

selectSquare = () => {
  let activeSquare = $(this)
}
populateBoard(5, 5)
console.log("hit ")