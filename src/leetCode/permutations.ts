// Given an array nums of distinct integers,
// return all the possible permutations.
// You can return the answer in any order.

const permute = function (nums: number[]): number[][] {
  const res: number[][] = []
  const length = nums.length

  const dfs = (perm: number[], idx: number): void => {
    const curr = nums[idx]

    if (perm.includes(curr)) return

    perm.push(curr)

    if (perm.length === length) {
      res.push([...perm])
      perm.pop()
      return
    }

    for (let i = 0; i < length; i++) {
      dfs(perm, i)
    }

    perm.pop()
  }

  for (let i = 0; i < length; i++) {
    dfs([], i)
  }
  return res
}

console.log(permute([1, 2, 3])) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
