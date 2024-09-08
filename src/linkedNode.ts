export interface LinkedNodeEntry {
  key?: number | string
  value: any
}

export class LinkedNode {
  private _key?: number | string
  private _value: any
  prev: LinkedNode | null
  next: LinkedNode | null

  constructor({ key, value }: LinkedNodeEntry) {
    this._key = key
    this._value = value
    this.prev = null
    this.next = null
  }

  get key() {
    return this._key
  }

  get value() {
    return this._value
  }

  toString(callback: (value: any) => string) {
    return callback ? callback(this._value) : `{ ${this.key}: ${this.value} }`
  }
}
