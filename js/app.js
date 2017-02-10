console.log('Here we go!');

var myGlobalConnectGame;

$(document).ready(function () {
  myGlobalConnectGame = new ConnectFour('Nizar', 'Javier');

  renderBoard();
  console.log(newConnectGame);
});


function renderBoard () {
  $('#board').empty();

  myGlobalConnectGame.board.forEach(function (row) {
    row.forEach(function (slot) {
      if (slot === 1) {
        // player1 checker
        checkerClass = 'checker-player-1';
      } else if (slot === 2) {
        // player2 checker
        checkerClass = 'checker-player-2';
      } else {
        // empty slot
        checkerClass = '';

      }
      var slotHtml = '<div class="square"><div class="slot ' + checkerClass +' "></div></div>';
      $('#board').append(slotHtml);
    });
  });
}
