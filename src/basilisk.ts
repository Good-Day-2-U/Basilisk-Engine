// Basilisk class

export class Basilisk {
  x : number;
  y : number;
  value : number;
  canvasArray : number[][];

  loggedCells: number[] = [];

  accumulatedTime : number = 0;



  constructor(x : number, y : number, value : number, canvasArray : number [][]) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.canvasArray = canvasArray;
    this.canvasArray[this.y][this.x] = this.value;
  }
  insertBasilisk() {
    this.canvasArray[this.y][this.x] = this.value;
  }
  moveUp() {
    this.y -= 1;
    this.loggedCells.push(this.canvasArray[this.y][this.x]);
    this.basiliskLoggedCellLength();
    this.canvasArray[this.y + 1][this.x] = this.loggedCells[this.loggedCells.length - 2];
    console.log(this.loggedCells);
  }
  moveDown() {
    this.y += 1;
    this.loggedCells.push(this.canvasArray[this.y][this.x]);
    this.basiliskLoggedCellLength();
    this.canvasArray[this.y - 1][this.x] = this.loggedCells[this.loggedCells.length - 2];
    console.log(this.loggedCells);
  }
  moveLeft() {
    this.x -= 1;
    this.loggedCells.push(this.canvasArray[this.y][this.x]);
    this.basiliskLoggedCellLength();
    this.canvasArray[this.y][this.x + 1] = this.loggedCells[this.loggedCells.length - 2];
    console.log(this.loggedCells);
  }
  moveRight() {
    this.x += 1;
    this.loggedCells.push(this.canvasArray[this.y][this.x]);
    this.basiliskLoggedCellLength();
    this.canvasArray[this.y][this.x - 1] = this.loggedCells[this.loggedCells.length - 2];
    console.log(this.loggedCells);
  }
  basiliskLoggedCellLength() {
    if (this.loggedCells.length > 2) {
      this.loggedCells.shift();
    }
  }
  chasePlayer(playerX : number, playerY : number) {
    
    let tick = 500;
    this.accumulatedTime += 16;
    // console.log(this.accumulatedTime);

    if (playerX > this.x && this.accumulatedTime >= tick) {
      this.moveRight();
      this.accumulatedTime = 0;
    } else if (playerX < this.x && this.accumulatedTime >= tick) {
      this.moveLeft();
      this.accumulatedTime = 0;
    } else if (playerY > this.y && this.accumulatedTime >= tick) {
      this.moveDown();
      this.accumulatedTime = 0;
    } else if (playerY < this.y && this.accumulatedTime >= tick) {
      this.moveUp();
      this.accumulatedTime = 0;
    }
  }
}