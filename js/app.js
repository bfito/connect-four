console.log('Here we go!');

var myGlobalConnectGame;

$(document).ready(function () {
  var player1 = prompt('Enter name for Player #1');
  var player2 = prompt('Enter name for Player #2');
  myGlobalConnectGame = new ConnectFour(player1, player2);

  renderBoard();
  // console.log(newConnectGame);
  updateCurrentPlayer();
});

function updateCurrentPlayer() {
  if (myGlobalConnectGame.currentPlayer === myGlobalConnectGame.player1) {
    $('#current-player').html(myGlobalConnectGame.player1 + "'s Turn");
    $('#current-player').addClass("player-1");
    $('#current-player').removeClass("player-2");
  } else {
    $('#current-player').html(myGlobalConnectGame.player2 + "'s Turn");
    $('#current-player').addClass("player-2");
    $('#current-player').removeClass("player-1");
  }

  $('#current-player').css('visibility', 'visibile');
}


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
