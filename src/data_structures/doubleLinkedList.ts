import { LinkedNode } from '@/data_structures/linkedNode'

class EmptyListError extends Error {
  constructor(message: string = '') {
    super()
    this.name = 'List is empty.'
    this.message = message
  }
}

class NotFoundError extends Error {
  constructor(message: string = '') {
    super()
    this.name = 'Node not found.'
    this.message = message
  }
}

export default class DoubleLinkedList<T> {
  head?: LinkedNode<T>
  tail?: LinkedNode<T>

  constructor() {
    this.head = undefined
    this.tail = undefined
  }

  private isListEmpty(): boolean {
    return this.head === undefined || this.tail === undefined
  }

  private findNode(key: number | string): LinkedNode<T> | undefined {
    if (this.isListEmpty()) {
      throw new EmptyListError()
    }

    if (this.head !== undefined && this.head.key === key) {
      return this.head
    }

    if (this.tail !== undefined && this.tail.key === key) {
      return this.tail
    }

    let node = this.head?.next

    do {
      if (node !== undefined && node.key === key) {
        return node
      }
      node = node?.next
    } while (node !== undefined)

    throw new NotFoundError()
  }

  append(node: LinkedNode<T>): DoubleLinkedList<T> {
    if (this.isListEmpty()) {
      this.head = node
      this.tail = this.head
      return this
    }

    if (this.tail !== undefined) {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    return this
  }

  prepend(node: LinkedNode<T>): DoubleLinkedList<T> {
    if (this.isListEmpty()) {
      this.head = node
      this.tail = this.head
      return this
    }

    if (this.head !== undefined) {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    return this
  }

  remove(key: number | string): DoubleLinkedList<T> | undefined {
    if (this.isListEmpty()) {
      throw new EmptyListError()
    }

    const node = this.findNode(key)

    if (node === undefined) {
      throw new NotFoundError()
    }

    if (this.head?.next !== undefined && node === this.head) {
      this.head.next.prev = undefined
      this.head = this.head.next
      return this
    }

    if (this.tail?.prev !== undefined && node === this.tail) {
      this.tail.prev.next = undefined
      this.tail = this.tail.prev
      return this
    }

    if (node?.prev !== undefined) {
      node.prev.next = node.next
    }

    if (node?.next !== undefined) {
      node.next.prev = node.prev
    }

    return this
  }

  removeTail(): DoubleLinkedList<T> | undefined {
    if (this.isListEmpty()) {
      throw new EmptyListError()
    }
    if (this.tail?.prev !== undefined) {
      this.tail.prev.next = undefined
      this.tail = this.tail.prev
    }
    return this
  }

  removeAll(): DoubleLinkedList<T> {
    this.head = undefined
    this.tail = undefined
    return this
  }

  getValue(key: number | string): any | undefined {
    if (this.isListEmpty()) {
      throw new EmptyListError()
    }

    const node = this.findNode(key)

    return node?.value
  }

  *[Symbol.iterator](): Generator<LinkedNode<T>> {
    let node = this.head

    do {
      if (node !== undefined) {
        yield node
      }
      node = node?.next
    } while (node !== undefined)
  }

  toString(fn?: (list: DoubleLinkedList<T>) => string): string {
    if (fn !== null && fn !== undefined && typeof fn === 'function') {
      fn(this)
    }
    let response = ''
    for (const node of this) {
      response += `${node.toString()}, `
    }
    return response
  }
}
