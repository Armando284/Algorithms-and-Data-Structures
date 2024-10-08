/**
 * This is the standar interface for a LinkedList
 */
export interface ILinkedList<T> {
  length: number
  insertAt: (item: T, index: number) => void
  remove: (item: T) => T | undefined
  removeAt: (index: number) => T | undefined
  append: (item: T) => void
  prepend: (item: T) => void
  get: (index: number) => T | undefined
}
