export function linearSearch (haystack: number[], needle: number): boolean {
  let response = false
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      response = true
      break
    }
  }
  return response
}
