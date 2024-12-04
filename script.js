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
