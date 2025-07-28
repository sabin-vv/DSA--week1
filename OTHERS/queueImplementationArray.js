class Queue {
    constructor() {
        this.items = []
    }
    enqueue(e) {
        this.items.push(e)
    }
    dequeue() {
        return this.items.shift()
    }
    peek() {
        console.log(this.items[0])
    }
    isEmpty() {
        if (!this.items.length !== 0)
            return this.items.length === 0
        else
            return null
    }
    size() {
        console.log(this.items.length)
    }
    print() {
        console.log(this.items.toString())
    }
}

const queue = new Queue()
console.log("isEmpty",queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.peek()
console.log(queue.dequeue())
queue.peek()
queue.size()
queue.print()