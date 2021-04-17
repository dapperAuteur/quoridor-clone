// create graph to represent board squares as nodes and alleys as edges
// create an Adjacency List Graph HashMap
// Key is the location of the square 0 - 80
// Value is an array of adjacent squares [1, 9]
// Add Key:Value to array of adjacent squares that represents the center of the square [1,9].{center: {x: 182, y: 18}}
// gameBoard is the graph that represents the game board
let gameBoard = {
    0: [1,9].center= {x:182, y: 18},
    1: [0,2,10].center= {x:182, y: 18},
    2: [1,3,11].center= {x:182, y: 18},
    3: [2,4,12].center= {x:182, y: 18},
    4: [3,5,13].center= {x:182, y: 18},
    5: [4,6,14].center= {x:182, y: 18},
    6: [5,7,15].center= {x:182, y: 18},
    7: [6,8,16].center= {x:182, y: 18},
    8: [7,9,17].center= {x:182, y: 18},
    9: [8,10,18].center= {x:182, y: 18},
    10: [9,11,19].center= {x:182, y: 18},
    11: [10,12,20].center= {x:182, y: 18},
    12: [11,13,21].center= {x:182, y: 18},
    13: [12,14,22].center= {x:182, y: 18},
    14: [13,15,23].center= {x:182, y: 18},
    15: [14,16,24].center= {x:182, y: 18},
}