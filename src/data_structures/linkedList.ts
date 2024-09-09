import { LinkedNode } from '@/data_structures/linkedNode'
import { hasValue } from '@/utils'

export class LinkedList<T> implements ILinkedList<T> {
  private head: LinkedNode<T> | null
  private tail: LinkedNode<T> | null
  private count: number

  constructor() {
    this.head = null
    this.tail = null
    this.count = 0
  }

  private findNode({
    index,
    item,
  }: {
    index?: number
    item?: T
  }): [number, LinkedNode<T>] | undefined {
    if ((!hasValue(index) && !hasValue(item)) || !hasValue(this.head)) {
      return
    }

    let i = 0
    let curr = this.head

    while (curr !== null) {
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

    return
  }

  get length() {
    return this.count
  }

  insertAt(item: T, index: number): void {
    const node = this.findNode({ index })?.[1]
    if (!hasValue(node)) {
      return
    }
    const newNode = new LinkedNode<T>({ value: item })

    // TODO include insertAt 0 case

    // TODO include insertAt tail case

    if (node !== undefined) {
      newNode.next = node.next
      node.next = newNode
    }
  }

  remove(item: T): T | undefined {
    if (!hasValue(item)) {
      return
    }
    const find = this.findNode({ item })
    if (!find) {
      return
    }

    const [i, node] = find
    if (node === this.head) {
      this.head = node.next
      return item // ! No entiendo pq tengo que retornar <T> aquí
    }

    const prev = this.findNode({ index: i })?.[1]

    if (prev !== undefined && prev !== null) {
      if (node === this.tail) {
        this.tail = prev
        return item // ! No entiendo pq tengo que retornar <T> aquí
      }
      prev.next = node.next
      return item // ! No entiendo pq tengo que retornar <T> aquí
    }
    return
  }

  removeAt(index: number): T | undefined {
    if (!hasValue(index)) {
      return
    }
    const find = this.findNode({ index })
    if (!find) {
      return
    }

    const [i, node] = find
    if (node === this.head) {
      this.head = node.next
      return node.value // ! No entiendo pq tengo que retornar <T> aquí
    }

    const prev = this.findNode({ index: i })?.[1]

    if (prev !== undefined && prev !== null) {
      if (node === this.tail) {
        this.tail = prev
        return node.value // ! No entiendo pq tengo que retornar <T> aquí
      }
      prev.next = node.next
      return node.value // ! No entiendo pq tengo que retornar <T> aquí
    }
    return
  }

  append(item: T): void {
    if (!hasValue(item)) {
      return
    }

    const newNode = new LinkedNode({ value: item })

    if (this.head === null || this.tail === null) {
      this.head = newNode
      this.tail = this.head
      return
    }

    this.tail.next = newNode
    this.tail = newNode
  }

  prepend(item: T): void {
    if (!hasValue(item)) {
      return
    }

    const newNode = new LinkedNode({ value: item })

    if (this.head === null || this.tail === null) {
      this.head = newNode
      this.tail = this.head
      return
    }

    newNode.next = this.head.next
    this.head = newNode
  }

  get(index: number): T | undefined {
    if (!hasValue(index)) {
      return
    }
    return this.findNode({ index })?.[1].value
  }
}

interface ILinkedList<T> {
  get length(): number
  insertAt(item: T, index: number): void
  remove(item: T): T | undefined
  removeAt(index: number): T | undefined
  append(item: T): void
  prepend(item: T): void
  get(index: number): T | undefined
}
