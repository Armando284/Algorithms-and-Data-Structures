import { IBinaryNode } from '@/interfaces/nodes'

export default function preOrder(root: IBinaryNode<number>): number[] {
  function walk(curr: IBinaryNode<number> | null, path: number[]): number[] {
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
