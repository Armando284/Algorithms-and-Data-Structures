import { IBinaryNode } from '@/interfaces/nodes'

export default function inOrder (root: IBinaryNode<number>): number[] {
  function walk (curr: IBinaryNode<number> | null, path: number[]): number[] {
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
