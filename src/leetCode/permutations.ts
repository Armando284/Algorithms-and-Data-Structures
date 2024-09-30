// Given an array nums of distinct integers, 
// return all the possible permutations. 
// You can return the answer in any order.


const permute = function(nums: number[]): number[][] {
	const res: number[][] = []
	const length = nums.length
	
	const dfs = (perm: number[], idx: number) => {
		const curr = nums[idx]
		
		if(perm.includes(curr)) return
		
		perm.push(curr)

		if(perm.length === length){
			res.push([...perm])
			perm.pop()
			return
		}

		for(let i = 0; i < length; i++){
			dfs(perm, i)
		}

		perm.pop()

		return
	}

	for(let i = 0; i < length; i++){
		dfs([], i)
	}
	return res
};
