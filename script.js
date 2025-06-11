// script.js
const board = document.getElementById('board');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart-btn');
const resetScoresBtn = document.getElementById('reset-scores');
const difficultySelect = document.getElementById('difficulty');
const modeSelect = document.getElementById('mode');

const clickSound = document.getElementById('click-sound');
const winSound   = document.getElementById('win-sound');
const drawSound  = document.getElementById('draw-sound');

let scoreX = 0, scoreO = 0, scoreDraw = 0;
let currentPlayer = 'X';
let gameActive = true;
let gameState = Array(9).fill("");

const winningConditions = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// 📦 Initialization
loadScores();
updateScoreboard();
createBoard();

// Additional code continues...
