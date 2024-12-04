const squares = Array.from(document.querySelectorAll('.game-square'));
const turnElement = document.getElementById('turn');
const resultMessage = document.getElementById('result-message');
const playAgainButton = document.getElementById('button-play-again');
const scoreboardX = document.getElementById('scoreboard-x');
const scoreboardO = document.getElementById('scoreboard-o');
const gameOverMessage = document.getElementById('game-over-message');


let currentPlayer = 'X';
let gameActive = true;
let boardState = ['', '', '', '', '', '', '', '', ''];


const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
