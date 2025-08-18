
class Queue{
    constructor(){
        this.q = []
        this.tempQ = []
    }

    push(val){
        this.tempQ.push(val)
        while(this.q.length > 0){
            this.tempQ.push(this.q.shift())
        }
        [this.q,this.tempQ] = [this.tempQ,this.q]
    }
    pop(){
        return this.q.shift()
    }
    display(){
        let res = ""
        for( let i of this.q){
            if(i)
                res+= i +" "
        }
        console.log(res)
    }
}
const q = new Queue()
q.push(10)
q.display()
q.push(20)
q.push(30)
q.display()
console.log(q.pop())
q.display()