export const losslessCompress = (text: string): string => {
  const wordMap: { [key: string]: number } = {}
  const words = text.split(/\s+/)
  const response = words
    .reduce(
      (acc, curr, idx) => {
        const pointer = wordMap[curr] !== undefined ? wordMap[curr] : null
        if (
          pointer !== undefined &&
          pointer !== null &&
          curr.length > `${pointer}`.length + 2
        ) {
          acc.push(`#${pointer}`)
        } else {
          if (curr.length > 2) {
            wordMap[curr] = idx
          }
          acc.push(curr)
        }
        return acc
      },
      ['']
    )
    .join(' ')
    .trim()
  return response
}

export const losslessDeCompress = (text: string): string => {
  const words = text.split(/\s+/)
  const response = words
    .reduce(
      (acc, curr) => {
        if (/^#/.test(curr)) {
          const pointer = parseInt(curr.slice(1))
          acc.push(words[pointer])
        } else {
          acc.push(curr)
        }
        return acc
      },
      ['']
    )
    .join(' ')
    .trim()
  return response
}
