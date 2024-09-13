/**
 * Limited size queue
 */
export class RingBuffer<T> {
  private head: number
  private tail: number
  private list: Array<T | undefined>
  private readonly resizeGrowth: number
  private length: number

  constructor ({
    length = 10,
    resizeGrowth = 10
  }: {
    length?: number
    resizeGrowth?: number
  }) {
    this.list = new Array(length)
    this.head = 0
    this.tail = 0
    this.resizeGrowth = resizeGrowth
    this.length = 0
  }

  // capacity
  private get cap (): number {
    return this.list.length
  }

  private rest (a: number, b: number = this.cap): number {
    return a % b
  }

  enqueue (item: T): void {
    if (item === undefined) {
      return
    }

    this.length++
    if (this.length - 1 === 0) {
      // list is empty adds only one item
      // head and tail point to same item
      this.list[this.head] = item
      return
    }
    this.tail++

    // case where tail catches head, resize needed
    if (this.rest(this.tail) === this.rest(this.head)) {
      // generates larger array for list
      const newList: Array<T | undefined> = new Array(
        this.cap + this.resizeGrowth
      )
      // traverse original list and copy each item to new array
      for (
        let i = this.head;
        i < this.tail; // No va hasta el tail actual ya que no sea ha insertado
        i++
      ) {
        newList[this.rest(i, newList.length)] = this.list[this.rest(i)]
      }
      // sets list to new array
      this.list = newList
      // continue
    }

    this.list[this.rest(this.tail)] = item
  }

  dequeue (): T | undefined {
    const item = this.list[this.rest(this.head)]

    this.list[this.rest(this.head)] = undefined
    this.head++
    this.length--
    return item
  }

  peek (): T | undefined {
    return this.list[this.rest(this.head)]
  }
}
