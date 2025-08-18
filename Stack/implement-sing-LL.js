class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class Stack {
    constructor() {
        this.head = null
    }
    isempty() {
        return this.head === null
    }
    push(value) {
        let node = new Node(value)
        if (this.isempty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
    }
    pop() {
        if (this.head === null)
            return "Stack is empty"
        else {
            let node = this.head
            this.head = node.next
            return node.val
        }
    }
    display() {
        if(this.isempty())
            return ""
        let output = ""
        let curr = this.head
        while (curr) {
            output += curr.val + " "
            curr = curr.next
        }
        console.log(output)
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.display()
console.log(stack.pop())
stack.display()