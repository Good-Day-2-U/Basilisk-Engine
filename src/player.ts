


export class Player {
  size: number;
  x: number;
  y: number;
  canvasArray: number[][];
  loggedCells: number[] = [];



  steppedONTilesValue: number[] = [];


  constructor(size: number, x: number, y: number, canvasArray: number[][]) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.canvasArray = canvasArray;
  }
  moveUp() {
    this.y -= 1;
    this.loggedCells.push(this.canvasArray[this.y][this.x]);
    this.playerLoggedCellLength();
    this.canvasArray[this.y + 1][this.x] = this.loggedCells[this.loggedCells.length - 2];
    console.log(this.loggedCells);
  }
  moveDown() {
    this.y += 1;
    this.loggedCells.push(this.canvasArray[this.y][this.x]);
    this.playerLoggedCellLength();
    this.canvasArray[this.y - 1][this.x] = this.loggedCells[this.loggedCells.length - 2];
    console.log(this.loggedCells);
  }
  moveLeft() {
    this.x -= 1;
    this.loggedCells.push(this.canvasArray[this.y][this.x]);
    this.playerLoggedCellLength();
    this.canvasArray[this.y][this.x + 1] = this.loggedCells[this.loggedCells.length - 2];
    console.log(this.loggedCells);
  }
  moveRight() {
    this.x += 1;
    this.loggedCells.push(this.canvasArray[this.y][this.x]);
    this.playerLoggedCellLength();
    this.canvasArray[this.y][this.x - 1] = this.loggedCells[this.loggedCells.length - 2];
    console.log(this.loggedCells);
  }
  insertPlayer(canvasArray = this.canvasArray) {
    canvasArray[this.y][this.x] = 1;
  }

  playerLoggedCellLength() {
    if (this.loggedCells.length > 2) {
      this.loggedCells.shift();
    }
  }


};

