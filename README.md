quoridor-clone

This is a board game clone created to learn how to use Canvas and JS. This is part of the TYP Series with the CentenarianFun && PhxJS learning communities.

## Math used to calculate square and alley placement

move board over 10px or the width of one alley
Board x-coord should be at 5, 35, 65, 95, 125, 155, 185, 215, 245
Board y-coord should be at 5, 35, 65, 95, 125, 155, 185, 215, 245

### draw alleys
Math to help calculate alleys
(370/9)-25 = 41.11 - 25 = 16.11
move board over 10px or the width of one alley
Board x-coord should be at 5, 35, 65, 95, 125, 155, 185, 215, 245
Alley x-coord should be at 0, 30-35, , 95, 125, 155, 185, 215, 245
Board y-coord should be at 5, 35, 65, 95, 125, 155, 185, 215, 245
Alley y-coord should be at 0, 35, 65, 95, 125, 155, 185, 215, 245
    drawRect(ctx, 30, 0, fenceWidth, fenceLength, fenceColor);

# BUGS
why does add a 3rd or a 4th player/pawn cause the arc() to create triangles on the board regardless of placement of players/pawns
```
drawPlayerPawn(ctx, playerPawn3.location.x, playerPawn3.location.y, playerPawn3.color)
drawPlayerPawn(ctx, playerPawn4.location.x, playerPawn4.location.y, playerPawn4.color)
ctx.fillStyle = playerPawn3.color
ctx.arc(18, 182, 10, 0, Math.PI * 2);
ctx.fill()
```