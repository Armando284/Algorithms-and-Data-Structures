import { BinaryNode } from '@/interfaces/nodes'

export default function bfs (head: BinaryNode<number>, needle: number): boolean {
  // Uses an array but the idea it's to use a queue since un/shift from an (javascript) array is O(N)
  // Then using an array will result in BFS O(N^2)
  const q: Array<BinaryNode<number> | null> = [head]

  while (q.length > 0) {
    const curr: BinaryNode<number> | null | undefined = q.shift()

    if (curr == null) {
      continue
    }

    // action
    if (curr.value === needle) {
      return true
    }

    q.push(curr.left)
    q.push(curr.right)
  }

  return false
}
