setTimeout(function() {
var board1 = Chessboard('board1', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
})
  $('#startBtn').on('click', board1.start)
  $('#clearBtn').on('click', board1.clear)
}, 0);

fetch('http://127.0.0.1:5000/', {
}) .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));




