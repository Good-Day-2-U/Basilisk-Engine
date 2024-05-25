// import { player } from './main'
// import { gold1 } from './main'

export const createArray = (rows: number, cols: number) => {
  let arr = new Array(rows)
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array(cols)
    for (let j = 0; j < cols; j++) {
      arr[i][j] = 0
    }
  }
  return arr
}


export const drawGrid = (gameArray: number[][], cellSize: number, ctx: CanvasRenderingContext2D) => {
  if (ctx) {
    for (let i = 0; i < gameArray.length; i++) {
      for (let j = 0; j < gameArray[i].length; j++) {

        // if (gameArray[i][j] !== gameArray[player.y][player.x]) {
        //   gameArray[i][j] = 0
        // }



        if (gameArray[i][j] === 1) {
          ctx.fillStyle = 'black'
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
        } else if (gameArray[i][j] === 5) {
          ctx.fillStyle = 'yellow'
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
        } else {
          ctx.fillStyle = 'white'
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
        }
        ctx.strokeStyle = 'black'
        ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize)
      }
    }
  }
}