export interface BinaryNode<T> {
  value: T
  parent?: BinaryNode<T>
  left: BinaryNode<T> | null
  right: BinaryNode<T> | null
}
