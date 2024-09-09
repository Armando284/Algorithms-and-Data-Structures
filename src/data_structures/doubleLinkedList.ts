import { LinkedNode } from '@/data_structures/linkedNode'

class EmptyListError extends Error {
  constructor (message: string = '') {
    super()
    this.name = 'List is empty.'
    this.message = message
  }
}

class NotFoundError extends Error {
  constructor (message: string = '') {
    super()
    this.name = 'Node not found.'
    this.message = message
  }
}

export default class DoubleLinkedList {
  head: LinkedNode | null
  tail: LinkedNode | null

  constructor () {
    this.head = null
    this.tail = null
  }

  private isListEmpty (): boolean {
    return this.head === null || this.tail === null
  }

  private findNode (key: number | string): LinkedNode | null {
    if (this.isListEmpty()) {
      throw new EmptyListError()
    }

    if (this.head !== null && this.head.key === key) {
      return this.head
    }

    if (this.tail !== null && this.tail.key === key) {
      return this.tail
    }

    let node =
      this.head?.next !== null && this.head?.next !== undefined
        ? this.head.next
        : null

    do {
      if (node !== null && node.key === key) {
        return node
      }
      node = node?.next !== null && node?.next !== undefined ? node.next : null
    } while (node !== null)

    throw new NotFoundError()
  }

  add (node: LinkedNode): DoubleLinkedList {
    if (this.isListEmpty()) {
      this.head = node
      this.tail = this.head
      return this
    }

    if (this.tail != null) {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    return this
  }

  addToHead (node: LinkedNode): DoubleLinkedList {
    if (this.isListEmpty()) {
      this.head = node
      this.tail = this.head
      return this
    }

    if (this.head != null) {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    return this
  }

  remove (key: number | string): DoubleLinkedList | null {
    if (this.isListEmpty()) {
      throw new EmptyListError()
    }

    const node = this.findNode(key)

    if (node === null) {
      throw new NotFoundError()
    }

    if (this.head?.next != null && node === this.head) {
      this.head.next.prev = null
      this.head = this.head.next
      return this
    }

    if (this.tail?.prev != null && node === this.tail) {
      this.tail.prev.next = null
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

  removeTail (): DoubleLinkedList | null {
    if (this.isListEmpty()) {
      throw new EmptyListError()
    }
    if (this.tail?.prev != null) {
      this.tail.prev.next = null
      this.tail = this.tail.prev
    }
    return this
  }

  removeAll (): DoubleLinkedList {
    this.head = null
    this.tail = null
    return this
  }

  getValue (key: number | string): any | null {
    if (this.isListEmpty()) {
      throw new EmptyListError()
    }

    const node = this.findNode(key)

    return node === null ? null : node.value
  }

  * [Symbol.iterator] (): Generator<LinkedNode> {
    let node = this.head

    do {
      if (node !== null && node !== undefined) {
        yield node
      }
      node = node?.next === null || node?.next === undefined ? null : node.next
    } while (node !== null)
  }

  toString (fn?: (list: DoubleLinkedList) => string): string {
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
