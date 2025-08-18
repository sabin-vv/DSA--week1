class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
    }
}
class HashTable {
    constructor(size) {
        this.table = new Array(size)
    }

    hash(key) {
        let index = 0
        for (let i of key) {
            index += i.charCodeAt(0)
        }
        return index % this.table.length
    }
    set(key, value) {
        const index = this.hash(key)
        let node = new Node(key, value)
        let head = this.table[index]
        if (!head) {
            this.table[index] = node
        } else {
            let curr = head
            while (curr.next) {
                if (curr.key === key) {
                    curr.val = value
                    break
                }
                curr = curr.next
            }
            if (!curr.next) {
                curr.next = node
            }
        }
    }
    print() {

        for (let i = 0; i < this.table.length; i++) {
            let curr = this.table[i]
            while (curr) {
                console.log(`${i} ${curr.key} ${curr.val}`)
                curr = curr.next
            }
        }

    }
}

const table = new HashTable(50)
table.set("name", "Ram")
table.set("age", 20)
table.set("mane", "kiran")
table.print()