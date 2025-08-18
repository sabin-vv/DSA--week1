
class CircularQueue {
    constructor(size) {
        this.queue = []
        this.capacity = size
        this.front = -1
        this.rear = -1
        this.size = 0
    }
    enqueue(val) {
        if (this.size === this.capacity) {
            console.log("Queue is full")
        } else {
            this.rear = (this.rear + 1) % this.capacity
            this.queue[this.rear] = val
            this.size++
            if (this.front === -1) {
                this.front = this.rear
            }
        }
    }
    dequeue() {
        this.queue[this.front] = null
        if (this.front === this.rear) {
            this.front = this.rear = -1
        }else{
            this.front = (this.front + 1) % this.capacity
        }
        this.size--
    }
    display() {
        let out = ""
        let i = this.front
        while (true) {
            out += this.queue[i] + " "
            if (i === this.rear)
                break;
            i = (i + 1) % this.capacity
        }
        console.log(out)
    }
}
const q = new CircularQueue(5)
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.display()
q.dequeue()
q.display()
q.enqueue(50)
q.display()
