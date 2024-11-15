/**
 * Trainee: Palindrome Validator
*
* Description:
* Write a function that checks if a string is a palindrome, ignoring case, spaces, and punctuation.
* A palindrome is a word or phrase that reads the same forward and backward.
*
* Example:
* isPalindrome("A man, a plan, a canal: Panama"); // true
* isPalindrome("Hello, World!"); // false
*
* Key Points in an Interview:
* - Key Point 1: The function should ignore uppercase letters, spaces, and punctuation.
* - Key Point 2: Optimize for performance with long input strings.
* - Key Point 3: Comment on your code to explain why you chose each step, as questions about basic logic and string handling may arise.
*
* Additional Requirement:
* Add validation to ensure the input is a string and throw an informative error if the input type is incorrect.
*/

function isPalindrome (text: string): boolean {
  if (typeof text !== 'string' || text.trim() === '') {
    throw new TypeError('Input must be a non-empty string')
  }

  const chars = text.replace(/[^0-9a-z]/gi, '').toLowerCase()
  const length = chars.length

  for (let i = 0, j = length - 1; i < j; i++, j--) {
    if (chars[i] !== chars[j]) return false
  }

  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('Hello, World!')) // false
