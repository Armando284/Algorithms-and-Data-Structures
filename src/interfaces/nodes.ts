export interface ILinkedNode<T> {
  value: T,
  prev?: ILinkedNode<T>,
  next?: ILinkedNode<T>
}

/**
 * This is a basic interface for a Binary Tree Node
 */

export interface IBinaryNode<T> {
  value: T
  parent?: IBinaryNode<T> // Not every node has a parent and not every tree makes this reference also
  left: IBinaryNode<T> | null
  right: IBinaryNode<T> | null
}
