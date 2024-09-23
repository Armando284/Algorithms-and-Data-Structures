// Comparison of value AND shape
// Recursion keeps shape so DFS is mandatory
import { BinaryNode } from '@/interfaces/nodes'

export default function compare (
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null
): boolean {
  // if we got to the leafs and both are null TRUE
  // (we never found a false condition to return before)
  if (a === null && b === null) {
    return true
  }

  // if only one leaf is null FALSE
  if (a === null || b === null) {
    return false
  }

  // if nodes are not null but their values are not equal
  if (a.value !== b.value) {
    return false
  }

  // the recursive step it to AND both child results
  return compare(a.left, b.left) && compare(a.right, b.right)
}
