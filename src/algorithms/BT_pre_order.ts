import { BinaryNode } from '@/interfaces/nodes'

export default function preOrder (root: BinaryNode<number>): number[] {
  function walk (curr: BinaryNode<number> | null, path: number[]): number[] {
    if (curr === null) {
      return path
    }

    // recursive step
    // value
    path.push(curr.value)
    // left
    walk(curr.left, path)
    // right
    walk(curr.right, path)

    // just in case
    return path
  }

  return walk(root, [])
}
