// Given a string containing digits from 2-9 inclusive,
// return all possible letter combinations that the number could represent.
// Return the answer in any order.

const letterCombinations = (digits: string): string[] => {
  if (digits === undefined || digits === '') return []
  const numsMap: { [key: number | string]: string } = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const res: string[] = []
  const recur = (i: number, acum: string): void => {
    if (i === digits.length) {
      res.push(acum)
      return
    }

    for (const letter of numsMap[digits[i]]) {
      recur(i + 1, acum + letter)
    }
  }

  recur(0, '')
  return res
}

console.log(letterCombinations('23')) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
