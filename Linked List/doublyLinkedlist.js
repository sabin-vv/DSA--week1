class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class List {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0

    }
    getSize() {
        return this.size
    }
    prepend(value) {
        let node = new Node(value)
        if (this.size === 0) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    append(value) {
        let node = new Node(value)
        if (this.size === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Index out of bound")
            return
        }
        let node = new Node(value)

        if (index === 0) {
            this.head.prev = node
            node.next = this.head
            this.head = node
        } else if (index === this.size) {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        } else {
            let prev = this.head
            let i = 0
            for (i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next.prev = node
            prev.next = node
            node.prev = prev
        }
        this.size++
    }
    deleteMiddle(){
        let middle = this.head
        let end = this.head
        let prev = null
        while(end && end.next){
            end = end.next.next
            middle = middle.next
        }
        prev = middle.prev
        prev.next = middle.next
    }
    print() {
        if (this.size === 0)
            return -1
        else {
            let curr = this.head
            let result = ''
            while (curr) {
                result += `${curr.value} `
                curr = curr.next
            }
            console.log(result)
        }
    }
}


const list = new List()
console.log(list.isEmpty())
list.prepend(10)
list.prepend(5)
list.append(15)
list.append(20)
list.append(30)
list.print()
list.deleteMiddle()
list.print()

