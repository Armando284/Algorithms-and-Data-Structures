export const byteSize = (data: any): number => {
  const str = typeof data === 'string' ? data : JSON.stringify(data)
  return new Blob([str]).size
}

export const hasValue = (value: any): boolean =>
  value !== undefined && value !== null

export class EmptyListError extends Error {
  constructor (message: string = '') {
    super()
    this.name = 'List is empty.'
    this.message = message
  }
}

export class NotFoundError extends Error {
  constructor (message: string = '') {
    super()
    this.name = 'Node not found.'
    this.message = message
  }
}
