import { LinkedNode } from './linkedNode.js'

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

export default class DoubleLinkedList {
  head: LinkedNode | null
  tail: LinkedNode | null

  constructor() {
    this.head = null
    this.tail = null
  }

  private get isListEmpty(): boolean {
    return this.head === null && this.tail === null
  }

  private findNode(key: number | string): LinkedNode | null {
    if (this.isListEmpty) {
      throw new EmptyListError()
    }

    if (this.head && this.head.key === key) {
      return this.head
    }

    if (this.tail && this.tail.key === key) {
      return this.tail
    }

    let node = this.head?.next
    do {
      if (node && node.key === key) {
        return node
      }
      node = node?.next
    } while (node !== null)

    throw new NotFoundError()
  }

  add(node: LinkedNode): DoubleLinkedList {
    if (this.isListEmpty) {
      this.head = node
      this.tail = this.head
      return this
    }

    node.prev = this.tail
    this.tail!.next = node
    this.tail = node
    return this
  }

  addToHead(node: LinkedNode): DoubleLinkedList {
    if (this.isListEmpty) {
      this.head = node
      this.tail = this.head
      return this
    }

    node.next = this.head
    this.head!.prev = node
    this.head = node

    return this
  }

  remove(key: number | string): DoubleLinkedList | null {
    if (this.isListEmpty) {
      throw new EmptyListError()
    }

    const node = this.findNode(key)

    if (node === null) {
      throw new NotFoundError()
    }

    if (node === this.head) {
      this.head!.next!.prev = null
      this.head = this.head.next
      return this
    }

    if (node === this.tail) {
      this.tail!.prev!.next = null
      this.tail = this.tail.prev
      return this
    }

    if (node.prev !== null) {
      node.prev.next = node.next
    }

    if (node.next !== null) {
      node.next.prev = node.prev
    }

    return this
  }

  removeTail(): DoubleLinkedList | null {
    if (this.isListEmpty) {
      throw new EmptyListError()
    }
    this.tail!.prev!.next = null
    this.tail = this.tail!.prev
    return this
  }

  removeAll(): DoubleLinkedList {
    this.head = null
    this.tail = null
    return this
  }

  getValue(key: number | string): any | null {
    if (this.isListEmpty) {
      throw new EmptyListError()
    }

    const node = this.findNode(key)

    return node === null ? null : node.value
  }

  *[Symbol.iterator]() {
    let node = this.head

    do {
      yield node
      node = node!.next
    } while (node !== null)
  }

  toString(callback: (node: DoubleLinkedList) => string): string {
    if (
      callback !== null &&
      callback !== undefined &&
      typeof callback === 'function'
    ) {
      callback(this)
    }
    let response = ''
    for (const node of this) {
      response += node + ', '
    }
    return response
  }
}
