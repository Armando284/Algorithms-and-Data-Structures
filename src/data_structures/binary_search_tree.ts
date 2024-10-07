import { IBinaryNode } from '@/interfaces/nodes'

export class BinarySearchTree<T> {
  private root: IBinaryNode<T> | null
  height: number

  constructor () {
    this.root = null
    this.height = 0
  }

  // O(h) donde h significa altura `height`
  // va entre O(log n) y O(n) dependiendo de que tan balanceado este el arbol
  public find (node: IBinaryNode<T> | null = this.root, value: T): boolean {
    if (node === null) {
      return false
    }

    if (node.value === value) {
      return true
    }

    if (node.value < value) {
      return this.find(node.right, value)
    }

    return this.find(node.left, value)
  }

  public insert (value: T): void {
    const newNode: IBinaryNode<T> = { value, left: null, right: null }
    if (this.root === null) {
      this.root = newNode
      return
    }

    const dfs = (node: IBinaryNode<T>): void => {
      if (value <= node.value) {
        if (node.left === null) {
          node.left = newNode
          return
        }
        dfs(node.left)
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode
          return
        }
        dfs(node.right)
      }
    }

    dfs(this.root)
  }

  // public delete(value: T): void {
  //   if (this.root === null) {
  //     return
  //   }

  //   const dfs = (node: BinaryNode<T>): boolean => {
  //     const deleteChild = (child: BinaryNode<T> | null): void => {
  //       if (child == null) {
  //         return
  //       }
  //       // caso 1 nodo no tiene hijos
  //       // se borra
  //       if (child.left === null && child.right === null) {
  //         child = null
  //         return
  //       }
  //       // caso 2 nodo tiene 1 hijo
  //       // se apunta la referencia del padre hacia el hijo del nodo
  //       if (child.left === null || child.right === null) {
  //         child = child.left != null || child.right
  //         return
  //       }
  //       // caso 3 tiene 2 hijos 😵
  //       // Busco ó el mas grande del lado izq (1 mov a la izq y recto por la derecha hasta topar null)
  //       // ó el mas pequeño del lado der (1 mov a la der y recto por la izquierda hasta topar null)
  //       // así me aseguro de mantener el balance
  //       let largerAtLeft = child.left.right

  //       // caso 3.1 al buscar el mayor a la izq el primer nodo a la izq tiene null a su derecha!
  //       if (largerAtLeft === null) {
  //         child.left.right = child.right
  //         child = child.left
  //         return
  //       }

  //       while (largerAtLeft.right !== null) {
  //         largerAtLeft = largerAtLeft.right
  //       }
  //       child.value = largerAtLeft.value
  //       largerAtLeft = null
  //     }

  //     if (node === null) {
  //       return false
  //     }

  //     if (value <= node.value) {
  //       dfs(node.left)
  //     } else if (value > node.value) {
  //       dfs(node.right)
  //     }

  //     return false
  //   }
  //   // * También se puede guardar el h en cada nodo y tratar de rebalancear el árbol en cada delete para mejorarlo

  //   dfs(this.root)
  // }
}
