export const rleCompress = (text: string): string => {
  const starter: Array<[string, number]> = []
  return text
    .split('')
    .reduce((acc, curr) => {
      const [lastChar, count] = (acc.length > 0) ? acc[acc.length - 1] : ['', 0]
      if (curr === lastChar) {
        acc[acc.length - 1] = [lastChar, count + 1]
      } else {
        acc.push([curr, 1])
      }
      return acc
    }, starter)
    .map(([char, count]) => `${count}${char}`)
    .join('')
}
