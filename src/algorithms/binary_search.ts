/**
 * Performs a binary search to determine if a target value (needle) exists in a sorted array (haystack).
 * The search runs in O(log n) time complexity, making it efficient for large sorted arrays.
 * @param {number[]} haystack - A sorted array of numbers in which to search.
 * @param {number} needle - The target value to search for in the array.
 * @returns {boolean} - Returns true if the target value is found, otherwise false.
 */
export function binarySearch (haystack: number[], needle: number): boolean {
  let low = 0 // Starting index of the search range
  let high = haystack.length // Ending index of the search range (exclusive)

  do {
    // Calculate the midpoint of the current range
    const medium = Math.floor(low + (high - low) / 2)
    const value = haystack[medium] // Value at the midpoint

    // Check if the midpoint value matches the target (needle)
    if (value === needle) {
      return true // Target found
    } else if (value > needle) {
      high = medium // Narrow search range to lower half
    } else {
      low = medium + 1 // Narrow search range to upper half
    }
  } while (low < high)

  return false // Target not found
}
