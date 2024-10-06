import { LinkedNode } from '@/data_structures/linked_node'
import { hasValue } from '@/utils'
import { ILinkedList } from '@/interfaces/linked_list'

export class LinkedList<T> implements ILinkedList<T> {
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
    item
  }: {
    index?: number
    item?: T
  }): [number, LinkedNode<T>] | undefined {
    if ((!hasValue(index) && !hasValue(item)) || this.head === undefined) {
      return
    }

    let i = 0
    let curr: LinkedNode<T> | undefined = this.head

    while (curr !== undefined) {
      if (hasValue(index) && index === i) {
        return [i, curr]
      }

      if (hasValue(item) && item === curr.value) {
        // item must be equal or a reference to curr.value
        return [i, curr]
      }

      i++
      curr = curr.next
    }
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

    const node = this.findNode({ index })?.[1]

    if (node === undefined) {
      return // position doesn't exist on the list
    }

    const newNode = new LinkedNode<T>(item)
    newNode.next = node.next
    node.next = newNode

    this.length++
  }

  remove(item: T): T | undefined {
    if (!hasValue(item)) {
      return
    }
    const find = this.findNode({ item })
    if (find === undefined) {
      return
    }

    const [i, node] = find
    if (node === this.head) {
      this.head = node.next
      this.length--
      return item
    }

    const prev = this.findNode({ index: i })?.[1]

    if (prev !== undefined) {
      if (node === this.tail) {
        this.tail = prev
        this.length--
        return item
      }
      prev.next = node.next
      this.length--
      return item
    }
  }

  removeAt(index: number): T | undefined {
    if (!hasValue(index)) {
      return
    }
    const find = this.findNode({ index })
    if (find === undefined) {
      return
    }

    const [i, node] = find
    if (node === this.head) {
      this.head = node.next
      this.length--
      return node.value
    }

    const prev = this.findNode({ index: i })?.[1]

    if (prev !== undefined) {
      if (node === this.tail) {
        this.tail = prev
        this.length--
        return node.value
      }
      prev.next = node.next
      this.length--
      return node.value
    }
  }

  append(item: T): void {
    if (!hasValue(item)) {
      return
    }

    const newNode = new LinkedNode(item)

    if (this.head === undefined || this.tail === undefined) {
      this.head = newNode
      this.tail = this.head
      this.length++
      return
    }

    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  prepend(item: T): void {
    if (!hasValue(item)) {
      return
    }

    const newNode = new LinkedNode(item)

    if (this.head === undefined || this.tail === undefined) {
      this.head = newNode
      this.tail = this.head
      this.length++
      return
    }

    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  get(index: number): T | undefined {
    if (!hasValue(index)) {
      return
    }
    return this.findNode({ index })?.[1].value
  }

  reverse(): void {
    this.tail = this.head
    const walk = (node: LinkedNode<T> | undefined): void => {
      const curr = node?.next
      if (this.length <= 1 || !node || !curr) {
        return // list has one or 0 items reverse has no action
      }

      if (!curr.next) {
        curr.next = node
        this.head = curr
        return
      }

      walk(curr)
      curr.next = node
      node.next = undefined
    }

    walk(this.head)
  }
}
