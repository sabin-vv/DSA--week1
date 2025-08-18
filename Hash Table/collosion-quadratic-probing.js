class HashTable {
    constructor(size) {
        this.table = new Array(size)
    }
    hash(key) {
        return key % this.table.length
    }
    set(key) {
        let index = this.hash(key)
        let i = 1
        while (this.table[index] !== undefined) {
            index = (index + i * i) % this.table.length
            i++
        }
        this.table[index] = key
    }
    remove(key) {
        let index = this.hash(key)
        let i = 1
        while (this.table[index] !== undefined && this.table[index] !== null) {
            if (this.table[index] === key) {
                this.table[index] = null
                return true
            }
            i++
            index = (index + i * i) % this.table.length
        }
        return false
    }
}