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

// refactor to turn player to object
/*
player props: {
loc {x, y} is the center of the player pawn which is a circle,
color
}
*/

// define pawn colors
const player1Color = "black"
const player2Color = "purple"
const player3Color = "yellow"
const player4Color = "orange"

// PlayerPawns are the objects representing each player and pawn
let playerPawn1 = {
    location: {
        x: 182,
        y: 18
    },
    color: player1Color
}

let playerPawn2 = {
    location: {
        x: 182,
        y: 347
    },
    color: player2Color
}

let playerPawn3 = {
    location: {
        x: 18,
        y: 182
    },
    color: player3Color
}

let playerPawn4 = {
    location: {
        x: 347,
        y: 182
    },
    color: player4Color
}



// helper functions to create board structure
function drawRect(ctx, startX, startY, rectWidth, rectHeight, rectColor) {
    ctx.fillStyle= rectColor
    ctx.fillRect(startX, startY, rectWidth, rectHeight)
}

// helper function to draw player pawn
function drawPlayerPawn(ctx, x, y, pawnColor) {
    ctx.fillStyle = pawnColor
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill()
}

// player move functions allow player to place a fence on the board or move the player pawn.

// isLegalMove checks if the player move the legal.
// Returns true or false
function isLegalMove() {
    /*
    strategies for checking if legal
    check color(s) in the place(s) player is attempting to place pawn/fence
    */
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

// movePawn is used to move the player pawn one space or jump player
function movePawn(ctx, squareStartX, squareStartY, playerPawn) {
    // check if legal move here
    if (isLegalMove()) {
        drawPlayerPawn(ctx, x, y, pawnColor);   
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

    // practice drawing pawns
    // why does the correct color not display for each pawn. the last color is used for both pawns
    // drawPlayerPawn(ctx, playerPawn1.location.x, playerPawn1.location.y, playerPawn1.color)
    // drawPlayerPawn(ctx, playerPawn2.location.x, playerPawn2.location.y, playerPawn2.color)

    // why does add a 3rd or a 4th player/pawn cause the arc() to create triangles on the board regardless of placement of players/pawns
    // drawPlayerPawn(ctx, playerPawn3.location.x, playerPawn3.location.y, playerPawn3.color)
    // drawPlayerPawn(ctx, playerPawn4.location.x, playerPawn4.location.y, playerPawn4.color)
    // ctx.fillStyle = playerPawn3.color
    // ctx.arc(18, 182, 10, 0, Math.PI * 2);
    // ctx.fill()
}