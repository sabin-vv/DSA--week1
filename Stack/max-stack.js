class Stack{
    constructor(){
        this.stack = []
        this.max = null
    }
    push(value){
        if(this.stack.length === 0){
            this.stack.push(value)
            this.max = value
        }else if(value > this.max){
            this.stack.push(2*value - this.max)
            this.max = value
        }else{
            this.stack.push(value)
        }
    }
    pop(){
        let removedElement = this.stack.pop()
        if(removedElement > this.max){
            this.max = 2*this.max - removedElement
        }
    }
    maximum(){
        return this.max
    }
}

const stack = new Stack()
stack.push(2)
stack.push(6)
stack.push(4)
stack.push(7)
stack.push(3)
console.log(stack.maximum())
stack.pop()
console.log(stack.maximum())
stack.pop()
console.log(stack.maximum())
stack.pop()
console.log(stack.maximum())
stack.pop()
console.log(stack.maximum())