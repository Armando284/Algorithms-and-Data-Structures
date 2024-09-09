export const lz77Compress = (text: string): Array<Array<string | number>> => {
  const windowSize = 100 // Tamaño de la ventana de búsqueda
  const lookAheadBufferSize = 20 // Tamaño del búfer de exploración

  let i = 0
  const result = []

  while (i < text.length) {
    let matchLength = 0
    let matchDistance = 0

    // Ventana de búsqueda (parte del texto que ya se procesó)
    const windowStart = Math.max(0, i - windowSize)
    const searchWindow = text.slice(windowStart, i)

    // Búfer de exploración (parte del texto que estamos buscando en la ventana)
    const lookAheadBuffer = text.slice(i, i + lookAheadBufferSize)

    // Buscar la secuencia más larga que coincida
    for (let j = 0; j < searchWindow.length; j++) {
      let length = 0
      while (
        length < lookAheadBuffer.length &&
        searchWindow[j + length] === lookAheadBuffer[length]
      ) {
        length++
      }

      // Si encontramos una coincidencia más larga, actualizamos
      if (length > matchLength) {
        matchLength = length
        matchDistance = searchWindow.length - j
      }
    }

    // Si no hay coincidencia, simplemente copiamos el carácter
    if (matchLength === 0) {
      result.push([0, 0, text[i]])
      i++
    } else {
      result.push([matchDistance, matchLength, text[i + matchLength]])
      i += matchLength + 1
    }
  }

  return result
}
