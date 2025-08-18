//convert Stack to Queue
class Queue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }
    enqueue(element) {
        this.s1.push(element)
    }
    dequeue() {
        if (this.s1.length === 0 && this.s2.length === 0) {
            return 'queue is empty'
        }
        if (this.s2.length === 0) {
            while (this.s1.length)
                this.s2.push(this.s1.pop())
        }
        return this.s2.pop()
    }
}

let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

//---------------Recursive--------------

// class QueueStructure {
//     constructor() {
//         this.stack = []
//     }
//     enqueue(value) {
//         this.stack.push(value)
//     }
//     dequeue() {

//         function pop(arr) {
//             if (arr.length === 1)
//                 return arr[0]
//             pop(arr.slice(arr.length - 1))
//         }
//         let del = pop(this.stack)
//         return del
//     }
//     display() {
//         let res = ""
//         for (let i of this.stack) {
//             if (i)
//                 res += i + " "
//         }
//         console.log(res)
//     }
// }

// const q = new QueueStructure()
// q.enqueue(500)
// q.enqueue(600)
// q.enqueue(700)
// q.enqueue(800)
// console.log(q.dequeue())
// q.display()