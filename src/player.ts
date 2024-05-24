


export class Player {
  size: number;
  x: number;
  y: number;
  canvasArray: number[][];



  steppedONTilesValue: number[] = [];


  constructor(size: number, x: number, y: number, canvasArray: number[][]) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.canvasArray = canvasArray;
  }
  moveUp() {
    this.y -= 1;
  }
  moveDown() {
    this.y += 1;
  }
  moveLeft() {
    this.x -= 1;
  }
  moveRight() {
    this.x += 1;
  }
  insertPlayer(canvasArray = this.canvasArray) {
    canvasArray[this.y][this.x] = 1;
  }
};

