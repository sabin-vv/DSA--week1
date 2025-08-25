class Node {
    constructor() {
        this.node = new Array(26).fill(null)
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }
    charIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0)
    }
    insert(word) {
        let root = this.root
        for (let char of word) {
            const index = this.charIndex(char)
            if (!root.node[index]) {
                root.node[index] = new Node()
            }
            root = root.node[index]
        }
        root.isEnd = true
    }
    search(word){
        let curr = this.root
        for (let char of word){
            const index = this.charIndex(char)
            if(!curr.node[index]){
                return false
            }
            curr = curr.node[index]
        }
        return curr.isEnd
    }
    isPrefix(word){
        let curr = this.root
        for(let char of word){
            const index = this.charIndex(char)
            if(!curr.node[index]){
                return false
            }
            curr = curr.node[index]
        }
        return true
    }
}
const t = new Trie()
t.insert("welcome")
t.insert("java")
console.log(t.search("java"))
console.log(t.isPrefix(""))