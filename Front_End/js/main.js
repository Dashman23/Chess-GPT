    function onDrop (source, target, piece, newPos, oldPos, orientation) {
        console.log('Source: ' + source)
        console.log('Target: ' + target)
        console.log('Piece: ' + piece)
        console.log('New position: ' + Chessboard.objToFen(newPos))
        console.log('Old position: ' + Chessboard.objToFen(oldPos))
        output = board1.fen();
        console.log(output)
        console.log('Orientation: ' + orientation)
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

        fetch(`http://127.0.0.1:5000/gpt`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({message: output}),
    })
        .then(response => response.json())
        .then(data => {
            test = data.message;
                board1.move(test);
            })
        .catch(error => console.error('Error:', error));
        }


    var board1 = Chessboard('board1', {
        draggable: true,
        dropOffBoard: 'trash',
        onDrop: onDrop,
        position: 'start',
        sparePieces: true

    });

    $('#startBtn').on('click', board1.start);
    $('#clearBtn').on('click', board1.clear);

    var output;

    // Fetch request
    fetch('http://127.0.0.1:5000/')
        .then(response => response.text())
        .then(data => {
            test = data;
            $('#Test').on('click', function () {
                board1.move(test);
            });
        })
        .catch(error => console.error('Error:', error));

    const url = `http://127.0.0.1:5000/gpt`;
    fetch(`http://127.0.0.1:5000/gpt`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({message: output}),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
