//Write a program to remove duplicates in a sorted singly linked list
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class List {
    constructor() {
        this.head = null
        this.size = 0
    }
    append(value) {
        let node = new Node(value)
        if (this.size === 0) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    print() {
        if (this.size === 0) {
            return -1
        } else {
            let curr = this.head
            let str = ''
            while (curr) {
                str += `${curr.value} `
                curr = curr.next
            }
            console.log(str)
        }
    }
    removeDuplicate() {
        if (this.size === 0) {
            return -1
        } else {
            let prev = this.head
            while (prev.next) {
                if (prev.value === prev.next.value) {
                    prev.next = prev.next.next
                    this.size--
                }
                prev = prev.next
            }
        }
        let str = ''
        let node = this.head
        while (node) {
            str += `${node.value} `
            node = node.next
        }
        console.log(str)
    }
}

const list = new List()
list.append(10)
list.append(20)
list.append(20)
list.append(30)
list.append(40)
list.append(40)
list.append(50)
list.print()
list.removeDuplicate()