class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class dLL {
    constructor() {
        this.head = null
        this.size = 0
        this.tail = null
    }
    prepend(val) {
        let node = new Node(val)
        if(this.size === 0){
            this.head = node
            this.tail = node
            this.size++
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
            this.size++
        }
    }
}

function reverse(head) {
    let curr = head;
    let prev = null

    while (curr) {
        let t = curr.prev
        curr.prev = curr.next
        curr.next = t
        prev = curr
        curr = curr.prev

    }
    if (prev !== null) {
        head = prev
    }
    return head
}