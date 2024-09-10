import { LinkedNode } from '@/data_structures/linkedNode'
import DoubleLinkedList from '@/data_structures/doubleLinkedList'
import { hasValue } from '@/utils'

export default class LRU<T> {
  private readonly size: number
  private readonly hash: Map<number | string, LinkedNode<T>>
  list: DoubleLinkedList<T>

  constructor (size: number) {
    // Size of the cache
    this.size = size
    // Hash map for faster access to keys
    this.hash = new Map()
    // Doubly linked list for order management
    this.list = new DoubleLinkedList()
  }

  push (key: number, value: any): LRU<T> {
    if (this.hash.has(key)) {
      this.list.remove(key)
    }

    const node = new LinkedNode<T>({ key, value })
    this.list.prepend(node)
    this.hash.set(key, node)
    if (
      this.hash.size > this.size &&
      hasValue(this.list.tail) &&
      hasValue(this.list.tail?.key)
    ) {
      this.hash.delete(this.list.tail?.key as number | string)
      this.list.removeTail()
    }
    return this
  }

  get (key: number): any | undefined {
    if (!this.hash.has(key)) {
      return
    }

    const node = this.hash.get(key)

    if (!hasValue(node)) {
      return
    }

    if (node !== this.list.head) {
      this.list.remove(key)
      this.list.prepend(node as LinkedNode<T>)
    }

    return node?.value
  }

  toString (): string {
    return this.list.toString()
  }
}
