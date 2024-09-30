// Given n pairs of parentheses, 
// write a function to generate 
// all combinations of well-formed parentheses.

const generateParenthesis = (n: number): string[] => {
	const res: string[] = []
	const max = n * 2

	const dfs = (left = 0, right = 0, curr = ''): void => {
		if(curr.length === max){
			res.push(curr)
			return
		}

		if(left < n){
			dfs(left + 1, right, curr + '(')
		}
		if(right < left){
			dfs(left, right + 1, curr + ')')
		}
	}

	dfs()
	
	return res
};
