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

// player move functions allow player to place a fence on the board or move the player pawn.

// isLegalMove checks if the player move the legal.
// Returns true or false
function isLegalMove() {
    return true
}

// place vertical fence. before placing, check to see if this is a legal move
function placeFenceVertically(ctx,fenceStartX, fenceStartY) {
    // check if legal move here
    if (isLegalMove()) {
        drawRect(ctx, fenceStartX, fenceStartY, fenceWidth, fenceLength, fenceColor);   
    } else {
        console.log("NOT A LEGAL MOVE");
    }
}

// place horizontal fence. before placing, check to see if this is a legal move
function placeFenceHorizontally(ctx,fenceStartX, fenceStartY) {
    // check if legal move here
    if (isLegalMove()) {
        drawRect(ctx, fenceStartX, fenceStartY, fenceLength, fenceWidth, fenceColor);   
    } else {
        console.log("NOT A LEGAL MOVE");
    }
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

// draw game surface/board
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