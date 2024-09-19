// combinations
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  function backtrack(start: number, target: number, combination: number[]) {
    if (target === 0) {
      result.push([...combination])
      return
    }
    if (target < 0) return

    for (let i = start; i < candidates.length; i++) {
      const candidate = candidates[i]
      combination.push(candidate)
      backtrack(i, target - candidate, combination)
      combination.pop()
    }
  }

  backtrack(0, target, [])
  return result
}

const candidates = [2, 3, 6, 7]
const target = 7
console.log(combinationSum(candidates, target))

const candidates2 = [2, 3, 5]
const target2 = 8
console.log(combinationSum(candidates2, target2))

const candidates3 = [2]
const target3 = 1
console.log(combinationSum(candidates3, target3))
