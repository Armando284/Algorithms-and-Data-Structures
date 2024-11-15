import { IBinaryNode } from '@/interfaces/nodes'

/**
 * Performs a breadth-first search (BFS) on a binary tree to find a target value.
 * BFS explores each level of the tree before moving to the next, using a queue structure.
 * @param {IBinaryNode<number>} head - The root node of the binary tree to search.
 * @param {number} needle - The target value to search for in the tree.
 * @returns {boolean} - Returns true if the target value is found, otherwise false.
 */
export default function bfs (head: IBinaryNode<number>, needle: number): boolean {
  // Initialize queue with the head node; array is used here but would ideally be a proper queue
  const q: Array<IBinaryNode<number> | null> = [head]

  while (q.length > 0) {
    const curr: IBinaryNode<number> | null | undefined = q.shift() // Remove the first element from the queue

    if (curr == null) {
      continue // Skip if the current node is null
    }

    // Check if the current node's value matches the target
    if (curr.value === needle) {
      return true // Target found
    }

    // Add left and right children to the queue for further exploration
    q.push(curr.left)
    q.push(curr.right)
  }

  return false // Target not found after traversing the entire tree
}
