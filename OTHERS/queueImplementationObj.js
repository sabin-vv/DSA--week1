class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(e) {
        this.items[this.rear] = e
        this.rear++
    }
    dequeue() {
        delete this.items[this.front]
        this.front++
    }
    peek() {
        console.log(this.items[this.front])
    }
    isEmpty() {
        return Object.keys().length === 0
    }
    size() {
        console.log(this.rear - this.front)
    }
    print(){
        
            console.log(this.items)
    }
}
let queue = new Queue()
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)
queue.print()
queue.peek()
queue.dequeue()
queue.print()