import { IBinaryNode } from '@/interfaces/nodes'

export default function postOrder (root: IBinaryNode<number>): number[] {
  function walk (curr: IBinaryNode<number> | null, path: number[]): number[] {
    if (curr === null) {
      return path
    }

    // recursive step
    // left
    walk(curr.left, path)
    // right
    walk(curr.right, path)
    // value
    path.push(curr.value)
    // just in case
    return path
  }

  return walk(root, [])
}
