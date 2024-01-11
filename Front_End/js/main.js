setTimeout(function() {
var board1 = Chessboard('board1', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
})
  $('#startBtn').on('click', board1.start)
  $('#clearBtn').on('click', board1.clear)
}, 0);


