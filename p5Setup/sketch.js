// Class to describe a cell in the grid
function Cell(i, j) {
    this.x = i;
    this.y = j;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.show = function(col) {
        fill(col);
        rect(this.x * w, this.y * h, w - 1, h - 1);
    }
}

var cols, rows;
cols = 5;
rows = 5;

// To solve scaling issues
var w, h;

var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;

function setup() {
    console.log("Volt's demonstration of the A* pathfinding algorithm in p5.js");

    createCanvas(600, 600);

    w = width / cols;
    h = height / rows;

    for (var i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j);
        }
    }

    start = grid[0][0];
    end = grid[cols - 1][rows - 1];

    openSet.push(start);

    console.log(grid)
}

// Display cells in the openSet as green
function showOpenSet() {
    for (var i = 0; i < openSet.length; i++) {
        openSet[i].show(color(0, 255, 0));
    }
}

// Display cells in the closedSet as red
function showClosedSet() {
    for (var i = 0; i < closedSet.length; i++) {
        closedSet[i].show(color(255, 0, 0));
    }
}

function draw() {
    if (openSet.length > 0) {
        // Continue the algorithm
    } else {
        // No solution
    }

    background(255);

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show(255);
        }
    }

    showOpenSet();

    showClosedSet();
}