interface BTNode<T> {
  value: T
  left?: BTNode<T>
  right?: BTNode<T>
}

export default function preOrder (root: BTNode<number>): number[] {
  function walk (curr: BTNode<number> | undefined, path: number[]): number[] {
    if (curr === undefined) {
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
