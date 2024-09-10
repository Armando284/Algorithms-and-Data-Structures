import { hasValue } from '@/utils'
import { LinkedNode } from './linkedNode'

export class Stack<T> {
  public length: number
  private head?: LinkedNode<T>

  constructor () {
    this.head = undefined
    this.length = 0
  }

  push (item: T): void {
    if (!hasValue(item)) {
      return
    }

    const node = new LinkedNode<T>(item)
    this.length++

    if (this.head === undefined) {
      this.head = node
      return
    }

    node.prev = this.head
    this.head = node
  }

  pop (): T | undefined {
    if (this.head === undefined) {
      return
    }

    const node = this.head
    this.head = this.head.prev
    node.prev = undefined

    this.length = Math.max(0, this.length - 1) // clap value to min 0
    return node?.value
  }

  peek (): T | undefined {
    return this.head?.value
  }
}
