
export class Gold {
  x: number;
  y: number;
  value: number;
  canvasArray: number[][];


  constructor(x: number, y: number, value: number, canvasArray: number[][]) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.canvasArray = canvasArray;
    this.canvasArray[this.y][this.x] = this.value;
  }


  insertGold() {
    this.canvasArray[this.y][this.x] = this.value;
    console.log(this.canvasArray);
  }
}

