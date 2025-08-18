class HashTable {
    constructor(size) {
        this.table = new Array(size)
    }

    hash1(key) {
        return key % this.table.length
    }
    hash2(key) {
        return 7 - (key % 7)
    }

    set(key) {
        let index = this.hash1(key)
        let i = 0
        while (this.table[index] !== undefined) {
            i++
            index = (this.hash1(key) + i * this.hash2(key)) % this.table.length
        }
        this.table[index] = key
    }
    get(key) {
        let index = this.hash1(key)
        let i = 0
        while (this.table[index] !== undefined && this.table[index] !== null) {
            if (this.table[index] === key) {
                return index
            }
            i++
            index = (this.hash1(key) + i * this.hash2(key))
        }
        return -1
    }
}

const table = new HashTable(10)

table.set(7)

table.set(14)

console.log(table.get(7))
console.log(table.get(14))