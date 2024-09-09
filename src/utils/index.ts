export const byteSize = (data: any): number => {
  const str = typeof data === 'string' ? data : JSON.stringify(data)
  return new Blob([str]).size
}
