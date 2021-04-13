console.log("loaded");
const canvas = document.getElementById('quoridorBoard')
// define board on canvas
const boardWidth = canvas.width
const boardHeight = canvas.height
const squareColor = 'rgb(0,200,0, 0.95)'
const boardDimension = 9

if (canvas) {
    let ctx = canvas.getContext('2d')
    drawBoard(ctx, boardDimension, squareColor, boardWidth, boardHeight)
}

function drawBoard(ctx, boardDimension, squareColor, boardWidth, boardHeight) {
    for (let i = 0; i < boardDimension; i++) {
        for (let j = 0; j < boardDimension; j++) {
            ctx.fillStyle = squareColor
            ctx.fillRect(j * (boardWidth/boardDimension), i * (boardHeight/boardDimension), 25, 25);      
        }        
    }
}