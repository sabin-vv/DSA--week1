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
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
            
        } else {
            let sameKey = bucket.find(item => item[0] === key)
            if (sameKey)
                sameKey[1] = value
            else
                bucket.push([key, value])
        }
    }
    get(key) {
        
        const index = this.hash(key)
        let bucket = this.table[index]

        if (!bucket) {
            return undefined
        } else {
            let result = bucket.find(item => item[0] === key)
            return result[1]
        }
    }
    print() {
        for (let i in this.table) {
            console.log(this.table[i])
        }
    }
}

const table = new HashTable(100)

table.set('name', "john")
table.set("place", "kannur")
table.set("age", 20)
console.log(table.get("place"))
table.print()
