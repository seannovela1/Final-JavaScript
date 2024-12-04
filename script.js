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

function handleSquareClick(index) {
    if (boardState[index] !== '' || !gameActive) return;


     // Update board state
     boardState[index] = currentPlayer;
     squares[index].textContent = currentPlayer;

      // Check for a winner or tie
    if (checkWinner()) {
        gameOver(currentPlayer + ' Wins!');
    } else if (boardState.every(square => square !== '')) {
        gameOver('It\'s a Tie!');
    } else {
        // Switch turn
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        turnElement.textContent = currentPlayer;
    }
}


function checkWinner() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
    });
}


function gameOver(message) {
    gameActive = false;
    resultMessage.textContent = message;
    gameOverMessage.style.display = 'block';


    // Update score
    if (message.includes('X')) {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    } else if (message.includes('O'))