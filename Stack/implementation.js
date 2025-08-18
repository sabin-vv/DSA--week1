class Stack {
    constructor() {
        this.items = {}
        this.front = -1
    }
    push(element) {
        this.front++
        this.items[this.front] = element
        
    }
    pop() {
        if (this.front === -1) {
            return -1
        } else {
            let element = this.items[this.front]
            delete this.items[this.front]
            this.front--
            return element
        }
    }
    print() {
        let result = ""
        for (let element in this.items) {
            result += this.items[element] + " "
        }
        console.log(result)
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()
stack.pop()
stack.push(100)
stack.print()