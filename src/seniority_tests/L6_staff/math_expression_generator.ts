/**
 * Staff Engineer: Mathematical Expression Generator
 *
 * Description:
 * Create a function `generateMathExpression` that takes a target result and an array of integers.
 * The function should find a combination of mathematical operations (+, -, *, /) between the numbers in the array to reach the target result.
 * If no combination is possible, the function should return `null`.
 *
 * Example:
 * generateMathExpression([2, 3, 5], 10); // "2 * 3 + 5"
 * generateMathExpression([1, 2, 3], 6); // "1 + 2 + 3"
 *
 * Key Points in an Interview:
 * - Key Point 1: Explain how you used recursion or backtracking to find combinations of operations.
 * - Key Point 2: Detail how you avoid generating unnecessary or redundant combinations (efficiency).
 * - Key Point 3: Discuss the time and space complexity of your solution, as optimization questions may arise.
 *
 * Additional Requirement:
 * Modify the function to return all possible combinations that achieve the target result, rather than just one.
 */

const OPERATION_TYPES = ['+', '-', '*', '/']
const OPERATIONS: { [key: string]: (a: number, b: number) => number } = {
  '+': (a: number, b: number): number => a + b,
  '-': (a: number, b: number): number => a - b,
  '*': (a: number, b: number): number => a * b,
  '/': (a: number, b: number): number => a / b
}

function generateMathExpression (operands: number[], result: number): string | null {
  let expression: string | null = null

  const dfs = (accumulator: string[], current: number): void => {
    console.log({ accumulator }, { current })
    // condicion de salida
    if (current > result) return
    if (current === result) {
      expression = accumulator.join(' ')
    }

    // paso recursivo
    for (let i = 1; i < operands.length; i++) {
      for (let j = 0; j < OPERATION_TYPES.length; j++) {
        const operation = OPERATION_TYPES[j]
        const operand = operands[i]
        accumulator.push(operation + operand.toString())
        dfs(accumulator, OPERATIONS[operation](current, operand))
        accumulator.pop()
      }
    }
  }

  dfs([operands[0].toString()], operands[0])

  return expression
}

console.log(generateMathExpression([2, 3, 5], 10)) // "2 * 3 + 5"
// console.log(generateMathExpression([1, 2, 3], 6)) // "1 + 2 + 3"
