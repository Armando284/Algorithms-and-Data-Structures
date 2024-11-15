import { IBinaryNode } from '@/interfaces/nodes'

/**
 * Performs an in-order traversal on a binary tree, visiting nodes in left-root-right order.
 * In-order traversal is commonly used for binary search trees to retrieve values in sorted order.
 * @param {IBinaryNode<number>} root - The root node of the binary tree to traverse.
 * @returns {number[]} - An array of values from the binary tree in in-order sequence.
 */
export default function inOrder (root: IBinaryNode<number>): number[] {
  /**
   * Recursive helper function to traverse the binary tree in in-order.
   * @param {IBinaryNode<number> | null} curr - The current node being visited.
   * @param {number[]} path - Accumulates values of nodes visited in in-order.
   * @returns {number[]} - The updated path with values from the in-order traversal.
   */
  function walk (curr: IBinaryNode<number> | null, path: number[]): number[] {
    if (curr === null) {
      return path // Base case: if node is null, return current path
    }

    // Traverse the left subtree
    walk(curr.left, path)

    // Visit the current node
    path.push(curr.value)

    // Traverse the right subtree
    walk(curr.right, path)

    // Return path after visiting left, root, and right nodes
    return path
  }

  return walk(root, [])
}
