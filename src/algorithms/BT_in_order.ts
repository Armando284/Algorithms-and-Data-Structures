interface TreeNode<T> {
  value: T
  left?: TreeNode<T>
  right?: TreeNode<T>
}

export default function inOrder (root: TreeNode<number>): number[] {
  function walk (curr: TreeNode<number> | undefined, path: number[]): number[] {
    if (curr === undefined) {
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
