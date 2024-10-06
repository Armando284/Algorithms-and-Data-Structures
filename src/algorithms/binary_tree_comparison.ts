/**
 * Compare two binary trees in value AND shape
 */

import { IBinaryNode } from '@/interfaces/nodes'

export default function compare(
  a: IBinaryNode<number> | null,
  b: IBinaryNode<number> | null
): boolean {
  if (a === null && b === null) {
    return true
  }

  if (a === null || b === null) {
    return false
  }

  if (a.value !== b.value) {
    return false
  }

  return compare(a.left, b.left) && compare(a.right, b.right)
}
