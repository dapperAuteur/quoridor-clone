console.log("loaded");
const canvas = document.getElementById('quoridorBoard')
// define board on canvas
const boardWidth = canvas.width
const boardHeight = canvas.height
const squareColor = 'rgb(0,200,0, 0.95)'
const areaBetweenSquares = 'rgb(0,0,200, 0.95)'
const squareWidth = 25
const boardDimension = 9

// create graph to represent board squares as nodes and alleys as edges
// create an Adjacency List Graph HashMap
// Key is the location of the square 0 - 80
// Value is an array of adjacent squares [1, 9]
// gameBoard is the graph that represents the game board
// gameBoard is used to determine witch squares are available for each player move. The number will be removed from the array after a fence is placed blocking movement to that square.
export const gameBoard = {
    0: [1,9],
    1: [0,2,10],
    2: [1,3,11],
    3: [2,4,12],
    4: [3,5,13],
    5: [4,6,14],
    6: [5,7,15],
    7: [6,8,16],
    8: [7,17],

    9: [10,18],
    10: [1,9,11,19],
    11: [2,10,12,20],
    12: [3,11,13,21],
    13: [4,12,14,22],
    14: [5,13,15,23],
    15: [6,14,16,24],
    16: [7,15,17,25],
    17: [8,16,26],

    18: [9,19,27],
    19: [10,18,20,28],
    20: [11,19,21,29],
    21: [12,20,22,30],
    22: [13,21,23,31],
    23: [14,22,24,32],
    24: [15,23,25,33],
    25: [16,24,26,34],
    26: [17,25,35],
    
    27: [18,28,36],
    28: [19,27,29,37],
    29: [20,28,30,38],
    30: [21,29,31,39],
    31: [22,30,32,40],
    32: [23,31,33,41],
    33: [24,32,34,42],
    34: [25,33,35,43],
    35: [26,34,44],

    36: [27,37,45],
    37: [28,36,38,46],
    38: [29,37,39,47],
    39: [30,38,40,48],
    40: [31,39,41,49],
    41: [32,40,42,50],
    42: [33,41,43,51],
    43: [34,42,44,52],
    44: [35,43,45,53],

    45: [36,46,54],
    46: [37,45,47,55],
    47: [38,46,48,56],
    48: [39,47,49,57],
    49: [40,48,50,58],
    50: [41,49,51,59],
    51: [42,50,52,60],
    52: [43,51,53,61],
    53: [44,52,62],

    54: [45,55,63],
    55: [46,54,56,64],
    56: [47,55,57,65],
    57: [48,56,58,66],
    58: [49,57,59,67],
    59: [50,58,60,68],
    60: [51,59,61,69],
    61: [52,60,62,70],
    62: [53,61,71],
    
    63: [54,64,72],
    64: [55,63,65,73],
    65: [56,64,66,74],
    66: [57,65,67,75],
    67: [58,66,68,76],
    68: [59,67,69,77],
    69: [60,68,70,78],
    70: [61,69,71,79],
    71: [62,70,80],

    72: [63,73],
    73: [64,72,74],
    74: [65,73,75],
    75: [66,74,76],
    76: [67,75,77],
    77: [68,76,78],
    78: [69,77,79],
    79: [70,78,],
    80: [71,79],
}

// gameBoardCenter is used to find the center of the square. This is used to draw the player pawn on the square after the player makes a legal move to the square.
export const gameBoardCenter = {
    0: {x:18, y: 18},
    1: {x:58, y: 18},
    2: {x:100, y: 18},
    3: {x:141, y: 18},
    4: {x:182, y: 18},
    5: {x:223, y: 18},
    6: {x:264, y: 18},
    7: {x:305, y: 18},
    8: {x:346, y: 18},

    9: {x:18, y: 58},
    10:{x:58, y: 58},
    11:{x:100, y: 58},
    12:{x:141, y: 58},
    13:{x:182, y: 58},
    14:{x:223, y: 58},
    15:{x:264, y: 58},
    16:{x:305, y: 58},
    17:{x:346, y: 58},

    18:{x:18, y: 100},
    19:{x:58, y: 100},
    20:{x:100, y: 100},
    21:{x:141, y: 100},
    22:{x:182, y: 100},
    23:{x:223, y: 100},
    24:{x:264, y: 100},
    25:{x:305, y: 100},
    26:{x:346, y: 100},

    27:{x:18, y: 141},
    28:{x:58, y: 141},
    29:{x:100, y: 141},
    30:{x:141, y: 141},
    31:{x:182, y: 141},
    32:{x:223, y: 141},
    33:{x:264, y: 141},
    34:{x:305, y: 141},
    35:{x:346, y: 141},

    36:{x:18, y: 182},
    37:{x:58, y: 182},
    38:{x:100, y: 182},
    39:{x:141, y: 182},
    40:{x:182, y: 182},
    41:{x:223, y: 182},
    42:{x:264, y: 182},
    43:{x:305, y: 182},
    44:{x:346, y: 182},

    45:{x:18, y: 223},
    46:{x:58, y: 223},
    47:{x:100, y: 223},
    48:{x:141, y: 223},
    49:{x:182, y: 223},
    50:{x:223, y: 223},
    51:{x:264, y: 223},
    52:{x:305, y: 223},
    53:{x:346, y: 223},

    54:{x:18, y: 264},
    55:{x:58, y: 264},
    56:{x:100, y: 264},
    57:{x:141, y: 264},
    58:{x:182, y: 264},
    59:{x:223, y: 264},
    60:{x:264, y: 264},
    61:{x:305, y: 264},
    62:{x:346, y: 264},

    63:{x:18, y: 305},
    64:{x:58, y: 305},
    65:{x:100, y: 305},
    66:{x:141, y: 305},
    67:{x:182, y: 305},
    68:{x:223, y: 305},
    69:{x:264, y: 305},
    70:{x:305, y: 305},
    71:{x:346, y: 305},

    72:{x:18, y: 346},
    73:{x:58, y: 346},
    74:{x:100, y: 346},
    75:{x:141, y: 346},
    76:{x:182, y: 346},
    77:{x:223, y: 346},
    78:{x:264, y: 346},
    79:{x:305, y: 346},
    80:{x:346, y: 346},
}

// define alleys on board
const numAlleys = 10
const alleyWidth = 16.11

// define fence
// The edges are deleted when a fence is placed on the board.
const fenceWidth = 16.11
const fenceLength = 79.16 // 46.11 + 25 + 8.05
const fenceColor = 'rgb(139,42,42)'

// placeFence will place a fence on the board after checking if it's a legal move
function placeFence(ctx) {
    // check if vertical or horizontal?
    if (true) {
        placeFenceVertically(ctx,fenceStartX, fenceStartY) 
    } else {
        placeFenceHorizontally(ctx,fenceStartX, fenceStartY)
    }
}

// Player and pawn info

// define pawn colors
const player1Color = 'rgb(0,0,0,1)'
const player2Color = 'rgb(128,0,128,1)'
const player3Color = 'rgb(255,255,1)'
const player4Color = 'rgb(255,165,1)'

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
    drawPlayerPawn(ctx, playerPawn1.location.x, playerPawn1.location.y, playerPawn1.color)
    drawPlayerPawn(ctx, playerPawn2.location.x, playerPawn2.location.y, playerPawn2.color)
}