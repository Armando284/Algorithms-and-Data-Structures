/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */
const N = 10_000
const testArray: number[] = Array.from({ length: N }, () => {
  let num = 0
  do {
    num = Math.floor(Math.random() * N)
  } while (num <= 0)
  return num
})

testArray[N - 2] = -3
testArray[N - 1] = -5

const target = -8

console.log(testArray, target)

function twoSumBrute (nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j]
      if (sum === target) return [i, j]
    }
  }

  return [-1, -1]
};
console.log('test')

console.time('brute')
console.log(twoSumBrute(testArray, target))
console.timeEnd('brute')

// ✅
function twoSumSmart (nums: number[], target: number): number[] {
  const help: { [key: string]: number } = {}
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    const rest = (target - curr).toString()
    if (help[rest] != null) {
      return [help[rest], i]
    }
    const key = curr.toString()
    if (help[key] == null) help[key] = i
  }
  return [-1, -1]
};

console.time('smart')
console.log(twoSumSmart(testArray, target))
console.timeEnd('smart')
