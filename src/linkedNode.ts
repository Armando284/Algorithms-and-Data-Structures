export interface LinkedNodeEntry {
  key?: number | string
  value: any
}

export class LinkedNode {
  private readonly _key?: number | string
  private readonly _value: any
  prev: LinkedNode | null
  next: LinkedNode | null

  constructor ({ key, value }: LinkedNodeEntry) {
    this._key = key
    this._value = value
    this.prev = null
    this.next = null
  }

  get key (): number | string | undefined {
    return this._key
  }

  get value (): any {
    return this._value
  }

  toString (fn?: (value: any) => string): string {
    return fn !== null && fn !== undefined && typeof fn === 'function'
      ? fn(this)
      : `{ ${
          this.key !== undefined && this.key !== null
            ? this.key.toString() + ': '
            : ''
        }${JSON.stringify(this.value)} }`
  }
}
