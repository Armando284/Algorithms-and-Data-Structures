import { LinkedNode } from '@/data_structures/linkedNode'
import { hasValue } from '@/utils'

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
    item,
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

    return
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
      this.length++
    }
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
      return item // ! No entiendo pq tengo que retornar <T> aquí
    }

    const prev = this.findNode({ index: i })?.[1]

    if (prev !== undefined) {
      if (node === this.tail) {
        this.tail = prev
        this.length--
        return item // ! No entiendo pq tengo que retornar <T> aquí
      }
      prev.next = node.next
      this.length--
      return item // ! No entiendo pq tengo que retornar <T> aquí
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
      return node.value // ! No entiendo pq tengo que retornar <T> aquí
    }

    const prev = this.findNode({ index: i })?.[1]

    if (prev !== undefined) {
      if (node === this.tail) {
        this.tail = prev
        this.length--
        return node.value // ! No entiendo pq tengo que retornar <T> aquí
      }
      prev.next = node.next
      this.length--
      return node.value // ! No entiendo pq tengo que retornar <T> aquí
    }
  }

  append(item: T): void {
    if (!hasValue(item)) {
      return
    }

    const newNode = new LinkedNode({ value: item })

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

    const newNode = new LinkedNode({ value: item })

    if (this.head === undefined || this.tail === undefined) {
      this.head = newNode
      this.tail = this.head
      this.length++
      return
    }

    newNode.next = this.head.next
    this.head = newNode
    this.length++
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
  insertAt: (item: T, index: number) => void
  remove: (item: T) => T | undefined
  removeAt: (index: number) => T | undefined
  append: (item: T) => void
  prepend: (item: T) => void
  get: (index: number) => T | undefined
}
