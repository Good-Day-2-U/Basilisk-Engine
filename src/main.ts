import { createArray, drawGrid } from "./gameGrid";
import { Player } from "./player";
import { UI, hubUI } from "./UI";
import { Gold } from "./gold";
import { Basilisk } from "./basilisk";

// import { moveHeader } from "./testFuncs";

///////////////////////////
// Variables
let dTime = 0;
let lastTime = performance.now();
let accumulatedTime = 0;
const TICKRATE : number = 1000 / 60;

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
canvas.style.backgroundColor = 'lightgrey'

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

    // Clear the canvas if wanted 
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
  } else if (!gameRunning){
    gameRunning = true
    requestAnimationFrame(gameLoop)
    pauseButton.innerHTML = 'Pause'
    console.log('Play')
  }
});

///////////////////////////
// Hub Event Listener
const hubButton = document.getElementById('hub-button') as HTMLButtonElement;
hubButton.addEventListener('click', () => {
  if (gameRunning){
    gameRunning = false
    console.log('Hub')
    requestAnimationFrame(gameOverHubLoop)
  }
});



///////////////////////////
// Game grid
const gameArray : number[][] = createArray(gameHeight, gameWidth)
console.log(gameArray)


///////////////////////////##############################///////////////////////////
// Player
export const player = new Player(cellSize, 1, 1, gameArray)

///////////////////////////
// Player Controls
const playerControls = () =>{
  document.addEventListener('keydown', (e) => {
    if (e.key === 'w' && player.y > 0 && gameRunning === true) {
      player.moveUp()
      checkGold()
    } else if (e.key === 's' && player.y < gameHeight - 1 && gameRunning === true) {
      player.moveDown()
      checkGold()
    } else if (e.key === 'a' && player.x > 0 && gameRunning === true) {
      player.moveLeft()
      checkGold()
    } else if (e.key === 'd' && player.x < gameWidth - 1 && gameRunning === true) {
      player.moveRight()
      checkGold()
    } else if (e.key === 'p' && gameRunning === true) {
      console.log(gameArray)
    }
  });
};
playerControls()

///////////////////////////
// Items, Gold, Enemies

const gold1 = new Gold(5, 5, 5, gameArray)
const gold2 = new Gold(5, 6, 5, gameArray)
const gold3 = new Gold(5, 8, 5, gameArray)
const gold4 = new Gold(12, 12, 5, gameArray)
gold1.insertGold()
gold2.insertGold()
gold3.insertGold()
gold4.insertGold()

const checkGold = () =>{
  if (player.loggedCells[1] === 5) {
    UI.updateGold()
    console.log(UI.gold)
    player.loggedCells[1] = 0
  }
}

///////////////////////////
// Basilisk

const basilisk = new Basilisk(16, 8, 10, gameArray)











///////////////////////////
// Update function
const update = function(TICKRATE: number) {
  
  player.insertPlayer(player.canvasArray)

  basilisk.insertBasilisk()
  basilisk.chasePlayer(player.x, player.y)
  
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
// Hub Update
const HUBupdate = function(TICKRATE: number) {


  console.log(TICKRATE)
}
///////////////////////////
// Hub Draw
const HUBdraw = function() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  hubUI.hubTitle(ctx)
  hubUI.showAttack(ctx)
  hubUI.showDefense(ctx)
  hubUI.showHealth(ctx)


  // Draw the game grid but not for the pause hub screen atm
  // drawGrid(gameArray, cellSize, ctx)
};
///////////////////////////
// Game Over / Hub Loop
const gameOverHubLoop = function(this: any) {
  if (gameRunning) {
    return
  }
  let currentTime = performance.now()
  dTime = currentTime - lastTime
  lastTime = currentTime
  accumulatedTime += dTime
  // Update the game in its own TICKRATE while drawing happens in the requestAnimationFrame tickrate
  while (accumulatedTime > TICKRATE) {
    HUBupdate(TICKRATE)
    accumulatedTime -= TICKRATE
  }
  //Constanly draw the game
  HUBdraw()
  requestAnimationFrame(gameOverHubLoop.bind(this))
}










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