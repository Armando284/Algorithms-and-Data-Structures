/**
  * Given a string s, partition s such that every substring
  * of the partition is a palindrome.
  * Return all possible palindrome partitioning of s.
  *
  *
  * Example 1:
  *
  * Input: s = "aab"
  * Output: [["a","a","b"],["aa","b"]]
  * Example 2:
  *
  * Input: s = "a"
  * Output: [["a"]]
  */

function partition (s: string): string[][] {
  const out: string[][] = []
  const length = s.length
  const isPalindrome = (word: string): boolean => {
    if (word.length === 0) return false
    let out = true

    for (let i = 0, j = word.length - 1; i < j; i++, j--) {
      if (word[i] !== word[j]) {
        out = false
        break
      }
    }

    return out
  }

  const walk = (start: number, word: string, comb: string[]): void => {
    if (start >= length) {
      out.push([...comb])
      return
    }

    for (let i = start; i <= length; i++) {
      const word = s.substring(start, i)
      if (isPalindrome(word)) {
        comb.push(word)
        walk(i, word, comb)
        comb.pop()
      }
    }
  }

  walk(0, '', [])

  return out
};

console.log('result', partition('aab'))
