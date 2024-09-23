import { BinaryNode } from '@/interfaces/nodes'

export class BinaryTree<T> {
  private root: BinaryNode<T> | null
  height: number

  constructor() {
    this.root = null
    this.height = 0
  }

  private findNode(value: T): BinaryNode<T> | null {
    function walk(curr: BinaryNode<T> | null, value: T): BinaryNode<T> | null {
      if (curr === null) {
        return null
      }

      if (curr.value === value) {
        return curr
      }
      walk(curr.left, value)
      walk(curr.right, value)

      return null
    }

    return walk(this.root, value)
  }

  private addNode(node: BinaryNode<T>): void {}

  // add
  // public add() {}

  // get
  // update
  // delete
  public delete(value: T): BinaryTree<T> {
    const node = this.findNode(value)

    // value not found
    if (node === null) {
      console.log('Not found!', value)
      return this
    }

    // if node has two childs
    // if (node.left !== null && node.right !== null) {
    //   // What to do?
    //   // Add left node to parent
    //   if (node.parent.left === node) {
    //     node.parent.left = node.left
    //   } else {
    //     node.parent.right = node.left
    //   }
    //   // Add right node (or tree) to the first node with less than two childs
    //   this.addNode(node.right)
    //   node = null
    // }

    // // if node has 0 ó 1 child
    // node = node.left !== null ? node.left : node.right

    return this
  }

  // delete all
  public deleteAll(): BinaryTree<T> {
    this.root = null
    return this
  }
}
