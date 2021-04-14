console.log("loaded");
const canvas = document.getElementById('quoridorBoard')
// define board on canvas
const boardWidth = canvas.width
const boardHeight = canvas.height
const squareColor = 'rgb(0,200,0, 0.95)'
const squareWidth = 25
const boardDimension = 9

// define alleys on board
const numAlleys = 10
const alleyWidth = 16.11

// define fence
const fenceWidth = 16.11
const fenceLength = 79.16 // 46.11 + 25 + 8.05
const fenceColor = 'rgb(0,0,0, 0.75)'

// helper functions to create board structure
function drawRect(ctx, startX, startY, rectWidth, rectHeight, rectColor) {
    ctx.fillStyle= rectColor
    ctx.fillRect(startX, startY, rectWidth, rectHeight)
}

if (canvas) {
    let ctx = canvas.getContext('2d')
    drawBoard(ctx, boardDimension, squareColor, boardWidth, boardHeight)
    drawRect(ctx, 0, 0, 10, 10, fenceColor)
    drawRect(ctx, 365, 0, 5, 10, fenceColor)
    
    // draw alleys
    for (let i = 0; i < boardDimension; i++) {
        for (let j = 0; j < boardDimension; j++) {
    ctx.fillStyle = "black"
    drawRect(ctx, 30, 0, fenceWidth, fenceLength);
            ctx.fillStyle = "blue"
            drawRect(ctx, (j * 30) + 5, (i * 30) + 5, 25, 25);
    drawRect(ctx, 30, 0, fenceWidth, fenceLength, "black");
    // drawRect(ctx, 30, 0, fenceWidth, fenceLength);
    for (let i = 0; i < numAlleys; i++) {
        for (let j = 0; j < numAlleys; j++) {
            drawRect(ctx, (j * 30), (i * 30), 10, 10, "blue");
        }        
    }
}

// move board over 10px or the width of one alley
// Board x-coord should be at 5, 35, 65, 95, 125, 155, 185, 215, 245
// Board y-coord should be at 5, 35, 65, 95, 125, 155, 185, 215, 245
function drawBoard(ctx, boardDimension, boardWidth, boardHeight, boardColor) {
    for (let i = 0; i < boardDimension; i++) {
        for (let j = 0; j < boardDimension; j++) {
            drawRect(ctx, (j * (boardWidth/boardDimension)) + 5, (i * (boardHeight/boardDimension)) + 5, squareWidth, squareWidth, boardColor);
        }        
    }
}