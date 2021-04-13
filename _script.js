console.log("loaded");

// define board
const canvas = document.getElementById('quoridorBoard')
const boardWidth = canvas.width
const boardHeight = canvas.height
const boardDimension = 9
const boardAlley = 5
const squareColor = 'rgb(0,200,0, 0.95)'
// alleys
const alleyWidth = 10

// define player pawn

// define fence
const fenceWidth = 10
const fenceHeight = 110

if (canvas) {
    let ctx = canvas.getContext('2d')
    drawBoard(ctx, boardDimension)
} else {
    console.log("canvas NOT supported");
}

function drawBoard(ctx, boardDimension) {
    for (let i = boardAlley; i < boardDimension; i++) {
        for (let j = boardAlley; j < boardDimension; j++) {
            ctx.fillStyle = 'rgb('+ Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ',0)';
            ctx.fillRect(j * 25, i * 25, 40, 40);      
        }        
    }
}