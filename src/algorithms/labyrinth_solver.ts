// const lab = [
//   "####E###",
//   "#      #",
//   "#S######",
// ]
const lab1 = ['#### ###', '#      #', '# ######']

// const lab2 = [
//   '@@@@@S@@@@',
//   '@   @ @@ @',
//   '@ @      @',
//   '@ @@@@@@@@',
//   '@        @',
//   '@@@@@@@@E@',
// ]
const lab2 = [
  '@@@@@ @@@@',
  '@   @ @@ @',
  '@ @      @',
  '@ @@@@@@@@',
  '@        @',
  '@@@@@@@@ @'
]

interface Point {
  x: number
  y: number
}

const dirs = [
  [-1, 0], // left
  [1, 0], // right
  [0, -1], // up
  [0, 1] // down
]

// casos base
// fuera del laberinto
// es un muro
// visitado
// es la salida

function walk (
  curr: Point,
  labyrinth: string[],
  wall: string,
  seen: boolean[][],
  exit: Point,
  path: Point[]
): boolean {
  // base
  // fuera del laberinto
  if (
    curr.x < 0 ||
    curr.x >= labyrinth[0].length ||
    curr.y < 0 ||
    curr.y >= labyrinth.length
  ) {
    return false
  }
  // es un muro
  if (labyrinth[curr.y][curr.x] === wall) {
    return false
  }
  // visitado
  if (seen[curr.y][curr.x]) {
    return false
  }
  // es la salida
  if (curr.x === exit.x && curr.y === exit.y) {
    path.push(curr)
    return true
  }

  seen[curr.y][curr.x] = true

  path.push(curr)

  for (let i = 0; i < dirs.length; i++) {
    const next: Point = { x: curr.x + dirs[i][0], y: curr.y + dirs[i][1] }
    if (walk(next, labyrinth, wall, seen, exit, path)) {
      return true
    }
  }

  path.pop()

  return false
}

function solve (
  labyrinth: string[],
  wall: string,
  start: Point,
  exit: Point
): Point[] {
  const path: Point[] = []
  const seen: boolean[][] = Array.from({ length: labyrinth.length }, () =>
    Array.from({ length: labyrinth[0].length })
  )

  walk(start, labyrinth, wall, seen, exit, path)

  return path
}

console.log(solve(lab1, '#', { x: 1, y: 2 }, { x: 4, y: 0 }))
console.log(solve(lab2, '@', { x: 5, y: 0 }, { x: 8, y: 5 }))
