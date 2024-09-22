export interface LinkedNodeEntry<T> {
  key?: number
  value: T
}

export class LinkedNode<T> {
  private readonly _value: T
  prev?: LinkedNode<T>
  next?: LinkedNode<T>

  constructor (value: T) {
    this._value = value
    this.prev = undefined
    this.next = undefined
  }

  get value (): T {
    return this._value
  }

  toString (fn?: (value: LinkedNode<T>) => string): string {
    return fn !== null && fn !== undefined && typeof fn === 'function'
      ? fn(this)
      : `{ ${JSON.stringify(this.value)} }`
  }
}
