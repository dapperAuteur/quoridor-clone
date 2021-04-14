console.log("loaded");
const canvas = document.getElementById('quoridorBoard')
// define board on canvas
const boardWidth = canvas.width
const boardHeight = canvas.height
const squareColor = 'rgb(0,200,0, 0.95)'
const areaBetweenSquares = 'rgb(0,0,200, 0.95)'
const squareWidth = 25
const boardDimension = 9

// define alleys on board
const numAlleys = 10
const alleyWidth = 16.11

// define fence
const fenceWidth = 16.11
const fenceLength = 79.16 // 46.11 + 25 + 8.05
const fenceColor = 'rgb(139,42,42)'

// helper functions to create board structure
function drawRect(ctx, startX, startY, rectWidth, rectHeight, rectColor) {
    ctx.fillStyle= rectColor
    ctx.fillRect(startX, startY, rectWidth, rectHeight)
}

// place vertical fence. before placing, check to see if this is a legal move
function placeFenceVertically(ctx,fenceStartX, fenceStartY) {
    drawRect(ctx, fenceStartX, fenceStartY, fenceWidth, fenceLength, fenceColor);
}

// place horizontal fence. before placing, check to see if this is a legal move
function placeFenceHorizontally(ctx,fenceStartX, fenceStartY) {
    drawRect(ctx, fenceStartX, fenceStartY, fenceLength, fenceWidth, fenceColor);
}

if (canvas) {
    let ctx = canvas.getContext('2d')
    // draw game surface
    drawBoard(ctx, boardDimension, boardWidth, boardHeight, squareColor)
    // practice functions, not used in game
    drawRect(ctx, 0, 0, 10, 10, fenceColor)
    drawRect(ctx, 365, 0, 5, 10, fenceColor)
    // practice functions for drawing fences, not used in game
    placeFenceVertically(ctx, 30, 0)
    placeFenceHorizontally(ctx, 79.16, 30)
}

// draw board is the function used to draw the game board.
function drawBoard(ctx, boardDimension, boardWidth, boardHeight, boardColor) {
    // draw space between squares
    drawRect(ctx, 0, 0, 370, 370, areaBetweenSquares)
    // draw squares
    for (let i = 0; i < boardDimension; i++) {
        for (let j = 0; j < boardDimension; j++) {
            drawRect(ctx, (j * (boardWidth/boardDimension)) + 5, (i * (boardHeight/boardDimension)) + 5, squareWidth, squareWidth, boardColor);
        }        
    }
}