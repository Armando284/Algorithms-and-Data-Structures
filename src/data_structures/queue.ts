import { ILinkedNode } from '@/interfaces/nodes'

export class Queue<T> {
  public length: number
  private head?: ILinkedNode<T>
  private tail?: ILinkedNode<T>

  constructor () {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  enqueue (item: T): void {
    this.length++
    const node = item as ILinkedNode<T>
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
    // Take care of tail in case there are no more nodes
    if (this.length === 0) {
      this.tail = undefined
    }
    node.next = undefined // Here the previous head is entirely detached so it's on the hands of garbage collector
    return node.value
  }

  peek (): T | undefined {
    return this.head?.value
  }
}
