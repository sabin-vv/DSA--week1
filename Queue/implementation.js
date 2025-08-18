class Queue{
    constructor(){
       this.items = {}
       this.front = 0
       this.rear = 0 
    }
    isEmpty(){
        return (this.rear - this.front === 0)
    }
    size(){
        return this.rear - this.front
    }
    enqueue(element){
        this.items[this.rear] = element 
        this.rear++
    }
    dequeue(){
        if(!this.isEmpty()){
            let item = this.items[this.front]
            delete this.items[this.front]
            this.front++
            return item
        }
    }
    print(){
        console.log(this.items)
    }
}

let queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.size())
