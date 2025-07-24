let board;
const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardWidth = columnCount * tileSize;
const boardHeigth = rowCount * tileSize;
let context;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeigth;
    board.width = boardWidth;
    context = board.getContext("2d");
}