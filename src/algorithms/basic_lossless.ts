/**
 * Compresses text by replacing repeated words with pointers to their previous positions.
 * Uses a hash map to store word positions, allowing for a compressed output.
 * @param {string} text - The text to compress.
 * @returns {string} - The compressed version of the input text.
 */
export const losslessCompress = (text: string): string => {
  const wordMap: { [key: string]: number } = {} // Stores the first index of each word
  const words = text.split(/\s+/) // Split text by whitespace
  const response = words
    .reduce(
      (acc, curr, idx) => {
        const pointer = wordMap[curr] !== undefined ? wordMap[curr] : null

        // Check if the word has been seen before and if the pointer is shorter than the word
        if (pointer !== undefined && pointer !== null && curr.length > `${pointer}`.length + 2) {
          acc.push(`#${pointer}`) // Replace word with pointer if compression saves space
        } else {
          // Store the word's index in wordMap if it's a new word and has more than 2 characters
          if (curr.length > 2) {
            wordMap[curr] = idx
          }
          acc.push(curr) // Add word to output without compression
        }
        return acc
      },
      [''] // Initialize with an empty string to handle initial spacing
    )
    .join(' ')
    .trim() // Convert array back to string and trim any extra whitespace
  return response
}

/**
 * Decompresses text by replacing pointers with their corresponding words.
 * The text is parsed and each pointer is converted back to the original word.
 * @param {string} text - The compressed text to decompress.
 * @returns {string} - The decompressed version of the input text.
 */
export const losslessDeCompress = (text: string): string => {
  const words = text.split(/\s+/) // Split compressed text by whitespace
  const response = words
    .reduce(
      (acc, curr) => {
        // Check if current word is a pointer (starts with #)
        if (/^#/.test(curr)) {
          const pointer = parseInt(curr.slice(1)) // Extract pointer index by slicing off '#'
          acc.push(words[pointer]) // Replace pointer with the original word at the pointer's index
        } else {
          acc.push(curr) // Add word as is if not a pointer
        }
        return acc
      },
      [''] // Initialize with an empty string for consistent spacing
    )
    .join(' ')
    .trim() // Convert array back to string and trim any extra whitespace
  return response
}
