class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    convertToList(arr) {
        let curr
        for (let i = 0; i < arr.length; i++) {
            let node = new Node(arr[i])
            if (this.size === 0) {
                this.head = node
                curr = this.head
            } else {
                curr.next = node
                curr = curr.next
            }
            this.size++
        }
    }
    print() {
        let current = this.head
        let values = ''
        while (current) {
            values = `${values} ${current.value}`
            current = current.next
        }
        console.log(values)
    }
}


let array = [10, 20, 30, 40, 50]
const list = new LinkedList()
list.convertToList(array)
list.print()