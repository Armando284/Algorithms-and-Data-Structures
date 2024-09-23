import { BinaryNode } from '@/interfaces/nodes'

export default function inOrder(root: BinaryNode<number>): number[] {
  function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (curr === null) {
      return path
    }

    // recursive step
    // left
    walk(curr.left, path)
    // value
    path.push(curr.value)
    // right
    walk(curr.right, path)
    // just in case return
    return path
  }

  return walk(root, [])
}
