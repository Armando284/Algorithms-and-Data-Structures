import { IBinaryNode } from '@/interfaces/nodes'

/**
 * Performs a post-order traversal on a binary tree, visiting nodes in left-right-root order.
 * Post-order traversal is often used when deleting nodes or calculating values in subtrees.
 * @param {IBinaryNode<number>} root - The root node of the binary tree to traverse.
 * @returns {number[]} - An array of values from the binary tree in post-order sequence.
 */
export default function postOrder (root: IBinaryNode<number>): number[] {
  /**
   * Recursive helper function to traverse the binary tree in post-order.
   * @param {IBinaryNode<number> | null} curr - The current node being visited.
   * @param {number[]} path - Accumulates values of nodes visited in post-order.
   * @returns {number[]} - The updated path with values from the post-order traversal.
   */
  function walk (curr: IBinaryNode<number> | null, path: number[]): number[] {
    if (curr === null) {
      return path // Base case: if node is null, return current path
    }

    // Traverse the left subtree
    walk(curr.left, path)

    // Traverse the right subtree
    walk(curr.right, path)

    // Visit the current node
    path.push(curr.value)

    // Return path after visiting left, right, and root nodes
    return path
  }

  return walk(root, [])
}
