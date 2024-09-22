interface BTNode<T> {
  value: T
  left?: BTNode<T>
  right?: BTNode<T>
}

export default function postOrder (root: BTNode<number>): number[] {
  function walk (curr: BTNode<number> | undefined, path: number[]): number[] {
    if (curr === undefined) {
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
