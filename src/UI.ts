const scoreElement = document.getElementById('score') as HTMLDivElement;
const timerElement = document.getElementById('timer') as HTMLDivElement;
const levelElement = document.getElementById('level') as HTMLDivElement;



export const UI = {
  score: 0,
  timer: 0,
  level: 0,
  startTime: performance.now(),
  pausedTime: 0,
  updateScore: function() {
    this.score += 1
    scoreElement.innerHTML = this.score.toString()
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