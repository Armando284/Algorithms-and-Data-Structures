export default class LinkedNode<T> {
  private _key: number | string
  private _value: T
  prev: LinkedNode<T> | null
  next: LinkedNode<T> | null

  constructor(key: number | string, value: T) {
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
