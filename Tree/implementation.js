class Node {
    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}
class Tree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(val) {
        let node = new Node(val)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (node.val < root.val) {
            if (root.left)
                this.insertNode(root.left, node)
            else
                root.left = node
        } else {
            if (root.right)
                this.insertNode(root.right, node)
            else
                root.right = node
        }
    }
    search(val) {
        if (this.isEmpty())
            console.log("Tree is empty")
        return this.searchNode(this.root, val)
    }
    searchNode(node, val) {
        if (node) {
            if (node.val === val) {
                return true
            } else if (val < node.val) {
                return this.searchNode(node.left, val)
            } else {
                return this.searchNode(node.right, val)
            }
        }
        return false
    }
    preOrder(root) {
        if (this.isEmpty()) {
            console.log("Tree is empty")
        } else {
            if (root) {
                console.log(root.val)
                this.preOrder(root.left)
                this.preOrder(root.right)
            }
        }
    }
    inOrder(root) {
        if (this.isEmpty()) {
            console.log("Tree is Empty")
        } else {
            if (root) {
                this.inOrder(root.left)
                console.log(root.val)
                this.inOrder(root.right)
            }
        }
    }
    postOder(root) {
        if (this.isEmpty()) {
            console.log("Tree id Empty")
        } else {
            if (root) {
                this.postOder(root.left)
                this.postOder(root.right)
                console.log(root.val)
            }
        }
    }
    levelOrder() {
        let queue = []
        let result = []
        let curr = this.root
        queue.push(curr)
        while (queue.length > 0) {
            let node = queue.shift()
            result.push(node)
            if (node.left)
                queue.push(node.left)
            if (node.right)
                queue.push(node.right)
        }
        for (let node of result) {
            console.log(node.val)
        }
    }
    min(){
        if(this.root === null){
            console.log("Tree is empty")
        }else{
            let  node  = this.root
            while(node.left){
                node = node.left
            }
            return node.val
        }
    }
    max(){
        if(this.root === null){
            console.log("Tree is Empty")
        }else{
            let node = this.root
            while(node.right){
                node = node.right
            }
            return node.val
        }
    }
}

const bst = new Tree()
console.log(bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(15)
console.log(bst.search(7))
bst.preOrder(bst.root)
bst.inOrder(bst.root)
bst.postOder(bst.root)
bst.levelOrder()
console.log(bst.min())
console.log(bst.max())