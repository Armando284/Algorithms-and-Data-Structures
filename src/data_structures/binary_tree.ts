export interface BTNode<T> {
	value: T,
	parent: BTNode<T> | null,
	left: BTNode<T> | null,
	right: BTNode<T> | null,
}

class BinaryTree<T>{
	private root: BTNode<T> | null 
	height: number

	constructor(){
		this.root = null
		this.height = 0
	}

	private findNode(value: T): BTNode<T>{
		function walk(curr: BTNode, value: T): BTNode<T> | undefined{
			if(curr === null){
				return undefined
			}
			
			if(curr.value === value){
				return curr
			}
			walk(curr.left, value)
			walk(curr.right, value)
			
			return undefined
		}

		return walk(this.root, value)
	}

	private addNode(node: BTNode<T>): void {
		
	}
	
	// add
	public add(){}

	// get
	// update
	// delete
	public delete(value: T): BinaryTree<T>{
		const node = this.findNode(value)

		// value not found
		if(node === undefined){
			console.log("Not found!", value)
			return this
		}
		
		// if node has two childs
		if(node.left !== undefined && node.right !== undefined){
			// What to do?
			// Add left node to parent 
			if(node.parent.left === node){
				node.parent.left = node.left
			} else {
				node.parent.right = node.left
			}
			// Add right node (or tree) to the first node with less than two childs
			this.addNode(node.right)
			node = undefined
		}

		// if node has 0 ó 1 child
		node = node.left || node.right		

		return this
	}
	
	// delete all
	public deleteAll(): BinaryTree<T>{
		this.root = undefined
		return this
	}
}
