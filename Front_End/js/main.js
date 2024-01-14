var output;
    function onDrop (source, target, piece, newPos, oldPos, orientation) {
            console.log('Source: ' + source)   //Taken from Chessboardjs example code for debugging purposes
            console.log('Target: ' + target)
            console.log('Piece: ' + piece)
            console.log('New position: ' + Chessboard.objToFen(newPos))
            console.log('Old position: ' + Chessboard.objToFen(oldPos))
            console.log('Orientation: ' + orientation)
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

            output = board1.fen();                                                 //Takes the board position in fen position to give to chat-gpt
            console.log(output)

            fetch(`http://127.0.0.1:5000/gpt`, {                     //fetch request which gives the back end the current fen postion of the board to give a action to do
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({message: output}),                        //Generates the json with the fen postiton as {message: "fen_position"}
            })
            .then(response => response.json())                                      //Back-end will return output { "message": "your_message_here", "Speech": "your_Speech_here" }
            .then(data => {                                                         // message - move chat gpt gives to do on board
                test = data.message;                                                // Speech - Chat-gpt response to given move, *Console log shows move for debugging
                console.log(test)
                    board1.move(test);                                              //This is what moves the peice on the board
                document.getElementById("GPT").innerHTML = data.Speech; //Changes the barebones html text to show the response
                })
            .catch(error => console.error('Error:', error));   //Needed catch statement
    }


    var board1 = Chessboard('board1', {   //Creates Chessboard
        draggable: true,
        dropOffBoard: 'trash',
        onDrop: onDrop,
        position: 'start',
        sparePieces: true

    });

    $('#startBtn').on('click', board1.start);   //Jquery way of creating the buttons of starting the board
    $('#clearBtn').on('click', board1.clear);   //This button is to clear



    /* Fetch request to Check connection between the front and back end
       Linked to Press Me Button to check if the pawn moves through the backend action given
     */
    fetch('http://127.0.0.1:5000/')
        .then(response => response.text())
        .then(data => {
            test = data;
            $('#Test').on('click', function () {
                board1.move(test);
            });
        })
        .catch(error => console.error('Error:', error));


