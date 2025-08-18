

class HashTable {
    constructor(size) {
        this.table = new Array(size)
    }
    hash(key) {
        return key % this.table.length
    }
    set(key) {
        let index = this.hash(key)
        while (this.table[index] !== undefined)
            index = (index + 1) % this.table.length

        this.table[index] = key
    }
    remove(key) {
        let index = this.hash(key)
        while (this.table[index] !== undefined && this.table[index] !== null) {
            if (this.table[index] === key){
                this.table[index] = null
                return true
            }
            index = (index + 1) % this.table.length
        }
        return false
    }
}