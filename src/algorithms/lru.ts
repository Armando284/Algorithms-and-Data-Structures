import { LinkedNode } from '@/data_structures/linkedNode'
import DoubleLinkedList from '@/data_structures/doubleLinkedList'

export default class LRU {
  private readonly size: number
  private readonly hash: Map<number | string, LinkedNode>
  list: DoubleLinkedList

  constructor (size: number) {
    // Size of the cache
    this.size = size
    // Hash map for faster access to keys
    this.hash = new Map()
    // Doubly linked list for order management
    this.list = new DoubleLinkedList()
  }

  private isValidValue (value: any): boolean {
    return value !== undefined && value !== null
  }

  push (key: number | string, value: any): LRU {
    if (this.hash.has(key)) {
      this.list.remove(key)
    }

    const node = new LinkedNode({ key, value })
    this.list.addToHead(node)
    this.hash.set(key, node)
    if (
      this.hash.size > this.size &&
      this.isValidValue(this.list.tail) &&
      this.isValidValue(this.list.tail?.key)
    ) {
      this.hash.delete(this.list.tail?.key as number | string)
      this.list.removeTail()
    }
    return this
  }

  get (key: number | string): any | null {
    if (!this.hash.has(key)) {
      return null
    }

    const node = this.hash.get(key)

    if (!this.isValidValue(node)) {
      return null
    }

    if (node !== this.list.head) {
      this.list.remove(key)
      this.list.addToHead(node as LinkedNode)
    }

    return node?.value !== undefined && node?.value !== null ? node.value : null
  }

  toString (): string {
    return this.list.toString()
  }
}
