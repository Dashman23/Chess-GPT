setTimeout(function() {
var board1 = Chessboard('board1', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
})
  $('#startBtn').on('click', board1.start)
  $('#clearBtn').on('click', board1.clear)

let test = null;
fetch('http://127.0.0.1:5000/')// Fetch request
 .then(response => response.text())
 .then(data => {      //Stores data into variable to then be used
 test = data;         //After initialising variable to then be used in button to move peice
 $('#Test').on('click', function() {
   board1.move(test); //Moves peice according to back end
 });
})
 .catch(error => console.error('Error:', error)); // Catch any errors




const url = `http://127.0.0.1:5000/gpt`;
fetch(url, {
 method: "POST",
 headers: {
   "Content-Type": "text/plain",
 },
 body: board1.fen().text,
})
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

}, 0);
