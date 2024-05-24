import { createArray, drawGrid } from "./gameGrid";
import { UI } from "./UI";


// import { moveHeader } from "./testFuncs";


///////////////////////////
// Variables
let dTime = 0;
let lastTime = performance.now();
let accumulatedTime = 0;
const TICKRATE : number = 1000 / 20;

// Game grid variables
const gameWidth = 32;
const gameHeight = 32;
const cellSize = 32;

///////////////////////////
// HTML Elements
const canvas = document.querySelector('#game-grid') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
canvas.width = gameWidth * cellSize;
canvas.height = gameHeight * cellSize;
canvas.style.border = '1px solid black';

///////////////////////////
// Game state
let gameRunning = true;

///////////////////////////
// Pause Event Listener
const pauseButton = document.getElementById('pause-button') as HTMLButtonElement;
pauseButton.addEventListener('click', () => {
  if (gameRunning){
    gameRunning = false
    pauseButton.innerHTML = 'Play'
    console.log('Pause')
    // Clear the canvas
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
  } else if (!gameRunning){
    // UI.startTime = performance.now()
    gameRunning = true
    requestAnimationFrame(gameLoop)
    pauseButton.innerHTML = 'Pause'
    console.log('Play')
  }
});

///////////////////////////
// Game grid
const gameArray : number[][] = createArray(gameHeight, gameWidth)
console.log(gameArray)

///////////////////////////
// Update function
const update = function(TICKRATE: number) {



  
  // console.log(TICKRATE)
}

///////////////////////////
// Draw function
const draw = function() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // Draw the game grid
  drawGrid(gameArray, cellSize, ctx)
  
  
  

};

///////////////////////////
// Game loop
const gameLoop = function(this: any) {
  if (!gameRunning) {
    return
  }
  


  let currentTime = performance.now()
  dTime = currentTime - lastTime
  lastTime = currentTime
  accumulatedTime += dTime


  // Update the game in its own TICKRATE while drawing happens in the requestAnimationFrame tickrate
  while (accumulatedTime > TICKRATE) {
    update(TICKRATE)
    accumulatedTime -= TICKRATE
  }


  //Constanly draw the game
  draw()
  requestAnimationFrame(gameLoop.bind(this))
};
window.onload = () => {
  requestAnimationFrame(gameLoop)
};

///////////////////////////
// Timer
document.addEventListener('visibilitychange', () => {
  if (document.hidden || !gameRunning) {
    gameRunning = false
    pauseButton.innerHTML = 'Play'
    console.log('Pause')
  } else {
    pauseButton.innerHTML = 'Pause'
    gameRunning = true
    requestAnimationFrame(gameLoop)
    console.log('Play')
  }
});
const runTimer = () => {
  UI.updateTimer(gameRunning)
  requestAnimationFrame(runTimer)
  // console.log(UI.timer)
  // console.log(UI.pausedTime)
};
runTimer();