export interface LinkedNodeEntry<T> {
  key?: number
  value: T
}

export class LinkedNode<T> {
  private readonly _key?: number
  private readonly _value: T
  prev: LinkedNode<T> | null
  next: LinkedNode<T> | null

  constructor({ key, value }: LinkedNodeEntry<T>) {
    this._key = key
    this._value = value
    this.prev = null
    this.next = null
  }

  get key(): number | undefined {
    return this._key
  }

  get value(): T {
    return this._value
  }

  toString(fn?: (value: any) => string): string {
    return fn !== null && fn !== undefined && typeof fn === 'function'
      ? fn(this)
      : `{ ${this.key !== undefined ? this.key + ': ' : ''}${JSON.stringify(
          this.value
        )} }`
  }
}
