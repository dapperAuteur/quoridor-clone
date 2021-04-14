console.log("loaded");
const canvas = document.getElementById('quoridorBoard')
// define board on canvas
const boardWidth = canvas.width
const boardHeight = canvas.height
const squareColor = 'rgb(0,200,0, 0.95)'
const squareWidth = 25
const boardDimension = 9

// helper functions to create board structure
function drawRect(ctx, startX, startY, rectWidth, rectHeight) {
    ctx.fillRect(startX, startY, rectWidth, rectHeight)
}

if (canvas) {
    let ctx = canvas.getContext('2d')
    drawBoard(ctx, boardDimension, squareColor, boardWidth, boardHeight)
    ctx.fillStyle= 'rgb(0,0,0, 0.75)'
    
    // draw alleys
    for (let i = 0; i < boardDimension; i++) {
        for (let j = 0; j < boardDimension; j++) {
            ctx.fillStyle = "blue"
            drawRect(ctx, (j * 30) + 5, (i * 30) + 5, 25, 25);
        }        
    }
}

function drawBoard(ctx, boardDimension, squareColor, boardWidth, boardHeight) {
    for (let i = 0; i < boardDimension; i++) {
        for (let j = 0; j < boardDimension; j++) {
            ctx.fillStyle = squareColor
            drawRect(ctx, (j * (boardWidth/boardDimension)) + 5, (i * (boardHeight/boardDimension)) + 5, 25, 25);
        }        
    }
}