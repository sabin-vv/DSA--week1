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
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    prepend(value) {
        const node = new Node(value)
        if (this.size === 0) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
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
    insert(value, index) {
        let node = new Node(value)
        if (index < 0 || index > this.size) {
            console.log("index out of bound")
            return
        } else if (index === 0) {
            this.prepend(value)
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    removeIndex(index) {
        if (index < 0 || this.size < index) {
            console.log("Index out of bound")
            return
        } else if (index === 0) {
            const removeNode = this.head
            this.head = this.head.next
            this.size--
            return removeNode.value
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            let removeNode = prev.next
            prev.next = removeNode.next
            this.size--
            return removeNode.value
        }

    }
    removeValue(value) {
        if (this.isEmpty()) {
            return null
        } else if (this.head.value === value) {
            let removeNode = this.head
            this.head = this.head.next
            this.size--
            return removeNode.value
        }
        else {
            let prev = this.head
            while (prev.next) {
                if (prev.next.value === value) {
                    let removeNode = prev.next
                    prev.next = removeNode.next
                    this.size--
                    return removeNode.value
                }
                prev = prev.next
            }
            return undefined
        }
    }
    searchValue(value) {
        if (this.isEmpty()) {
            return -1
        } else {
            let ref = this.head
            let i = 0
            while (ref) {
                if (ref.value === value) {
                    return i
                }
                ref = ref.next
                i++
            }
            return -1
        }
    }
    printReverse(node = this.head) {
        if (!node)
            return ''
        let str = this.printReverse(node.next)

        return str + `${node.value} `

    }

    print() {
        if (this.isEmpty()) return console.log("List is empty")
        let node = this.head
        let listValue = ''
        while (node) {
            listValue += `${node.value} `
            node = node.next
        }
        console.log(listValue)
    }
    removemiddle(){
        let start = this.head
        let end = this.head
        while(end.next && end.next.next){
            start = start.next
            end = end.next.next
        }
        let temp = start.next
        start.next  = temp.next
    }
}

let list = new List()

list.prepend(30)
list.prepend(20)
list.prepend(10)
// console.log("List size : ", list.getSize())
// list.print()
// list.append(40)
// list.print()
// list.insert(50, 0)
// list.print()
// console.log(list.searchValue(30))
// list.print()
// console.log(list.printReverse())
list.prepend(40)
list.prepend(50)
list.print()
list.removemiddle()
list.print()