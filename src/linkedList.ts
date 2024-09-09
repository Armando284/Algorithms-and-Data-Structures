import { LinkedNode } from './linkedNode'

export class LinkedList {
  private head: LinkedNode | null
  private tail: LinkedNode | null

  constructor () {
    this.head = null
    this.tail = null
  }

  private isListEmpty (): boolean {
    return this.head === null || this.tail === null
  }

  add (node: LinkedNode): LinkedList {
    if (node === undefined || node === null) {
      throw new Error('Node to add must not be null or undefined')
    }

    if (this.isListEmpty()) {
      this.head = node
      this.tail = this.head
      return this
    }

    if (this.tail != null) {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    return this
  }
}
