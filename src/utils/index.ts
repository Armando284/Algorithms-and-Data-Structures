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

export function LogFunction (
  fn: (args: any) => any,
  ...args: any
): void {
  console.log(`Calling ${fn.name} with args: ${JSON.stringify(args)}.`)
  const t0 = performance.now()
  const result = fn(args)
  console.log(`Result: ${JSON.stringify(result)}.`)
  console.log(`Finished in: ${(performance.now() - t0).toPrecision(2)}ms.`)
}
