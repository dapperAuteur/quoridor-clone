console.log("loaded");
const canvas = document.getElementById('quoridorBoard')
if (canvas) {
    let ctx = canvas.getContext('2d')
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            ctx.fillStyle = 'rgb('+ Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ',0)';
            ctx.fillRect(j * 25, i * 25, 25, 25);      
        }        
    }
}