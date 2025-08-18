
let str = "racecar"

function palindrome(str) {

    let stack = []
    for (let i of str) {
        stack.push(i)
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== stack.pop())
            return false
    }
    return true
}

console.log(palindrome(str))

function pali(str) {
    let stack = {}
    let count = -1
    for (let i of str) {
        count++
        stack[count] = i
    }
    for (let i of str) {
        if (stack[count] !== i)
            return false
        delete stack[count]
        count--
    }
    return true
}

console.log(pali(str));
