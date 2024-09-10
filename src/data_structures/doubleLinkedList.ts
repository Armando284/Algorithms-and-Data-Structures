import { LinkedNode } from '@/data_structures/linkedNode'
import { hasValue } from '@/utils'
import { ILinkedList } from '@/interfaces/linkedList'

export default class DoubleLinkedList<T> implements ILinkedList<T> {
  public length: number
  private head?: LinkedNode<T>
  private tail?: LinkedNode<T>

  constructor() {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  private findNode({
    index,
    item,
  }: {
    index?: number
    item?: T
  }): LinkedNode<T> | undefined {
    if (
      (!hasValue(index) && !hasValue(item)) ||
      this.length === 0 ||
      this.head === undefined
    ) {
      return
    }
    let i = 0
    let curr: LinkedNode<T> | undefined = this.head

    while (curr !== undefined) {
      if (hasValue(index) && index === i) {
        return curr
      }

      if (hasValue(item) && item === curr.value) {
        return curr
      }

      i++
      curr = curr.next
    }

    return
  }

  insertAt(item: T, index: number): void {
    if (!hasValue(item)) {
      return
    }

    // include insertAt 0 case
    if (index === 0) {
      this.prepend(item)
      return
    }

    // include insertAt tail case
    if (index === this.length) {
      this.append(item)
      return
    }

    const node = this.findNode({ index })

    if (node === undefined) {
      return // position doesn't exist on the list
    }

    const newNode = new LinkedNode<T>({ value: item })
    newNode.next = node.next
    if (node.next) {
      node.next.prev = newNode
    }
    newNode.prev = node
    node.next = newNode

    this.length++
  }

  private removeAll(): void {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  remove(item: T): T | undefined {
    if (!hasValue(item)) {
      return
    }

    const node = this.findNode({ item })
    if (node === undefined) {
      return
    }

    if (node === this.head) {
      if (this.head.next === undefined) {
        this.removeAll()
        return item
      }
      this.head.next.prev = undefined
      this.head = this.head.next
      this.length--
      return item
    }

    if (node === this.tail) {
      if (this.tail.prev !== undefined) {
        // El caso de que fuera una lista de un solo nodo ya se valido en el head
        this.tail.prev.next = undefined
      }
      this.tail = this.tail.prev
      this.length--
      return item
    }

    if (node.prev !== undefined) {
      node.prev.next = node.next
    }
    if (node.next !== undefined) {
      node.next.prev = node.prev
    }
    return item
  }

  removeAt(index: number): T | undefined {
    if (!hasValue(index)) {
      return
    }

    const node = this.findNode({ index })
    if (node === undefined) {
      return
    }

    if (node === this.head) {
      if (this.head.next === undefined) {
        this.removeAll()
        return node.value
      }
      this.head.next.prev = undefined
      this.head = this.head.next
      this.length--
      return node.value
    }

    if (node === this.tail) {
      if (this.tail.prev !== undefined) {
        // El caso de que fuera una lista de un solo nodo ya se valido en el head
        this.tail.prev.next = undefined
      }
      this.tail = this.tail.prev
      this.length--
      return node.value
    }

    if (node.prev !== undefined) {
      node.prev.next = node.next
    }
    if (node.next !== undefined) {
      node.next.prev = node.prev
    }
    return node.value
  }

  append(item: T): void {
    if (!hasValue(item)) {
      return
    }

    const newNode = new LinkedNode({ value: item })

    if (this.head === undefined || this.tail === undefined) {
      this.head = this.tail = newNode
      this.length++
      return
    }

    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    this.length++
  }

  prepend(item: T): void {
    if (!hasValue(item)) {
      return
    }

    const newNode = new LinkedNode({ value: item })

    if (this.head === undefined || this.tail === undefined) {
      this.head = this.tail = newNode
      this.length++
      return
    }

    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
  }

  get(index: number): T | undefined {
    if (!hasValue(index)) {
      return
    }
    return this.findNode({ index })?.value
  }
}
