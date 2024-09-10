import DoubleLinkedList from '@/data_structures/doubleLinkedList'

type LRUCacheData<T> = { key: number; value: T }

export default class LRU<T> {
  private readonly size: number
  private readonly hash: Map<number, LRUCacheData<T>>
  list: DoubleLinkedList<LRUCacheData<T>>

  constructor(size: number) {
    // Size of the cache
    this.size = size
    // Hash map for faster access to keys
    this.hash = new Map()
    // Doubly linked list for order management
    this.list = new DoubleLinkedList()
  }

  push(key: number, value: T): LRU<T> {
    const item = { key, value } as LRUCacheData<T>
    if (this.hash.has(key)) {
      this.list.remove(item)
    }

    this.list.prepend(item)
    this.hash.set(key, item)
    if (this.hash.size > this.size) {
      const tailKey = this.list.get(this.size)?.key
      if (tailKey !== undefined) {
        this.hash.delete(tailKey)
      }
      this.list.removeAt(this.size)
    }
    return this
  }

  get(key: number): T | undefined {
    if (!this.hash.has(key)) {
      return
    }

    const item = this.hash.get(key)

    if (item === undefined) {
      return
    }

    // Para mejorar el rendimiento de esto hay que cambiar la implementacion de la lista
    this.list.remove(item)
    this.list.prepend(item)

    return item.value
  }

  toString(): string {
    return this.list.toString()
  }
}
