console.log("loaded");
const canvas = document.getElementById('quoridorBoard')
// define board on canvas
const boardWidth = canvas.width
const boardHeight = canvas.height
const squareColor = 'rgb(0,200,0, 0.95)'
const boardDimension = 9

if (canvas) {
    let ctx = canvas.getContext('2d')
    for (let i = 0; i < boardDimension; i++) {
        for (let j = 0; j < boardDimension; j++) {
            ctx.fillStyle = squareColor
            ctx.fillRect(j * 25, i * 25, 25, 25);      
        }        
    }
}