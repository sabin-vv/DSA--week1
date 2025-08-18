class Stack {
    constructor() {
        this.stack = []
        this.min = null
    }
    push(value) {
        if (this.stack.length === 0) {
            this.stack.push(value)
            this.min = value
        } else if (value >= this.min) {
            this.stack.push(value)
        } else {
            let encoded = 2 * value - this.min
            this.stack.push(encoded)
            this.min = value
        }
    }
    pop() {
        let removedElement = this.stack.pop()
        if (removedElement < this.min) {
            this.min = 2 * this.min - removedElement
        }
    }
    getMin() {
        return this.min
    }

}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(4)
stack.push(50)
console.log(stack.getMin())
stack.pop()