import { LinkedNode } from './linkedNode'

export class Queue<T> {
  public length: number
  private head?: LinkedNode<T>
  private tail?: LinkedNode<T>

  constructor () {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  enqueue (item: T): void {
    this.length++
    const node = new LinkedNode<T>({ value: item })
    if (this.head === undefined || this.tail === undefined) {
      this.head = node
      this.tail = node
      return
    }

    this.tail.next = node
    this.tail = node
  }

  dequeue (): T | undefined {
    if (this.head === undefined) {
      return
    }

    this.length--
    const node = this.head
    this.head = this.head.next
    node.next = undefined // Here the previous head is entirely detached so it's on the hands of garbage collector
    return node.value
  }

  peek (): T | undefined {
    return this.head?.value
  }
}
