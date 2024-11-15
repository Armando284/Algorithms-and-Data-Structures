/**
 * Compares two binary trees to check if they are identical in both value and structure.
 * This function recursively checks that each corresponding node in both trees has the same value
 * and that the trees have the same shape.
 * @param {IBinaryNode<number> | null} a - The root node of the first binary tree.
 * @param {IBinaryNode<number> | null} b - The root node of the second binary tree.
 * @returns {boolean} - Returns true if the trees are identical in value and shape, otherwise false.
 */
import { IBinaryNode } from '@/interfaces/nodes'

export default function compare (
  a: IBinaryNode<number> | null,
  b: IBinaryNode<number> | null
): boolean {
  // If both nodes are null, the trees are identical up to this point
  if (a === null && b === null) {
    return true
  }

  // If only one of the nodes is null, the trees differ in structure
  if (a === null || b === null) {
    return false
  }

  // If the current nodes have different values, the trees are not identical
  if (a.value !== b.value) {
    return false
  }

  // Recursively compare left and right subtrees
  return compare(a.left, b.left) && compare(a.right, b.right)
}
