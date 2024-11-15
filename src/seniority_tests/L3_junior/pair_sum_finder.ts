/**
 * Junior: Pair Sum Finder
 *
 * Description:
 * Create a function that takes an array of integers and returns an array of all possible pairs that add up to a target value.
 * The function should return an empty list if no pairs meet the criteria.
 *
 * Example:
 * findPairs([1, 3, 2, 2, 4, 5, 7], 6); // [[1, 5], [2, 4], [2, 4]]
 *
 * Key Points in an Interview:
 * - Key Point 1: Avoid duplicate pairs, so you need to know how to identify and prevent repeats.
 * - Key Point 2: Manage time complexity to ensure the function remains efficient, especially with large inputs.
 * - Key Point 3: Explain how you are storing and comparing pairs in the solution.
 *
 * Additional Requirement:
 * Modify the function to return only unique pairs if the array has repeated elements, aiming to handle this without adding excessive complexity.
 */

function findPairs (numbers: number[], target: number): number[][] {
  const out: number[][] = []

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) out.push([numbers[i], numbers[j]])
    }
  }

  return out
}

console.log(findPairs([1, 3, 2, 2, 4, 5, 7], 6)) // [[1, 5], [2, 4], [2, 4]]

// No repeated pairs using array
function findPairs2 (numbers: number[], target: number): number[][] {
  const t0 = performance.now()
  const out: number[][] = []
  const visited: number[] = []
  for (let i = 0; i < numbers.length - 1; i++) {
    if (visited.includes(numbers[i])) continue
    visited.push(numbers[i])
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) out.push([numbers[i], numbers[j]])
    }
  }
  console.log('findPairs2', (performance.now() - t0).toPrecision(2))

  return out
}

console.log(findPairs2([1, 3, 2, 2, 4, 5, 7], 6)) // [[1, 5], [2, 4]]

// No repeated pairs using set
function findPairs3 (numbers: number[], target: number): number[][] {
  const t0 = performance.now()
  const out: number[][] = []
  const visited = new Set<number>()
  for (let i = 0; i < numbers.length - 1; i++) {
    if (visited.has(numbers[i])) continue
    visited.add(numbers[i])
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) out.push([numbers[i], numbers[j]])
    }
  }
  console.log('findPairs3', (performance.now() - t0).toPrecision(2))

  return out
}

console.log(findPairs3([1, 3, 2, 2, 4, 5, 7], 6)) // [[1, 5], [2, 4]]
