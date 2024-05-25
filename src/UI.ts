const scoreElement = document.getElementById('score') as HTMLDivElement;
const goldElement = document.getElementById('gold') as HTMLDivElement;
const timerElement = document.getElementById('timer') as HTMLDivElement;
const levelElement = document.getElementById('level') as HTMLDivElement;
const canvas = document.getElementById('game-grid') as HTMLCanvasElement;

// Left UI
const attackLevel = document.getElementById('att-level') as HTMLDivElement;
const defenseLevel = document.getElementById('def-level') as HTMLDivElement;
const healthLevel = document.getElementById('hp-level') as HTMLDivElement;


// Right UI
const attBuyButton = document.getElementById('buy-att') as HTMLButtonElement;
const defBuyButton = document.getElementById('buy-def') as HTMLButtonElement;
const hpBuyButton = document.getElementById('buy-hp') as HTMLButtonElement;
attBuyButton.addEventListener('click', () => {
  if (UI.gold >= 1) { 
    UI.gold -= 1;
    goldElement.innerHTML = `Gold: ${UI.gold.toString()}`
    console.log('Attack bought');
    hubUI.attack += 1;
    attackLevel.innerHTML = `Attack: ${hubUI.attack}`;
    console.log(hubUI.attack);
  }
});
defBuyButton.addEventListener('click', () => {
  if (UI.gold >= 1) { 
    UI.gold -= 1;
    goldElement.innerHTML = `Gold: ${UI.gold.toString()}`
    console.log('Defense bought');
    hubUI.defense += 1;
    defenseLevel.innerHTML = `Defense: ${hubUI.defense}`;
    console.log(hubUI.defense);
  }
});
hpBuyButton.addEventListener('click', () => {
  if (UI.gold >= 1) { 
    UI.gold -= 1;
    goldElement.innerHTML = `Gold: ${UI.gold.toString()}`
    console.log('Health bought');
    hubUI.health += 1;
    healthLevel.innerHTML = `Health: ${hubUI.health}`;
    console.log(hubUI.health);
  }
});



///////////////////////////
// Game state
export const UI = {
  score: 0,
  gold: 0,
  timer: 0,
  level: 0,
  startTime: performance.now(),
  pausedTime: 0,
  updateScore: function() {
    this.score += 1
    scoreElement.innerHTML = this.score.toString()
  },
  updateGold: function() {
    this.gold += 1
    goldElement.innerHTML = `Gold: ${this.gold.toString()}`
  },
  updateTimer: function(gameRunning: boolean) {
    if (gameRunning) {
      this.timer = parseFloat(((performance.now() - this.startTime) / 1000).toFixed(2)) - parseFloat(this.pausedTime.toFixed(2));
      timerElement.innerHTML = this.timer.toFixed(2).toString();
    }
    if (!gameRunning) {
      this.pausedTime = parseFloat((parseFloat(((performance.now() - this.startTime) / 1000).toFixed(2)) - parseFloat(this.timer.toFixed(2))).toFixed(2));
    }
  },
  updateLevel: function() {
    this.level += 1
    levelElement.innerHTML = this.level.toString()
  }
};


export const hubUI = {
  attack: 0,
  defense: 0,
  health: 0,
  gold: 0,
  
  
  hubTitle: function(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'black'
    ctx.font = "30px Arial";
    ctx.fillText("Welcome to the Hub", canvas.width / 2.8, canvas.height / 8);
  },
  
  showAttack: function(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'black'
    ctx.font = "20px Arial";
    ctx.fillText(`Attack: ${this.attack}`, canvas.width / 2.8, canvas.height / 4);
  },

  showDefense: function(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'black'
    ctx.font = "20px Arial";
    ctx.fillText(`Defense: ${this.defense}`, canvas.width / 2.8, canvas.height / 3);
  },

  showHealth: function(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'black'
    ctx.font = "20px Arial";
    ctx.fillText(`Health: ${this.health}`, canvas.width / 2.8, canvas.height / 2.5);
  },
  
};