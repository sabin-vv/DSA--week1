
let str = "geeksforgeeks"
let start = 0
let next = 0

function nonRepeat(s) {

    while (start < s.length) {
        while (next < s.length) {
            if (s[start] === s[next] && start !== next) {
                break;
            } else
                next++
        }

        if (next === s.length) {
            return s[start]
        } else {
            start++
            next = 0
        }
    }
    return "$"
}
console.log(nonRepeat(str))



//------------------------------------------------------------------

function non_repeat(s) {
    let obj = {}

    for (let i of s) {
        obj[i] = (obj[i] || 0) + 1
    }

    for (let i in obj) {
        if (obj[i] === 1)
            return i
    }
    return "$"
}
console.log(non_repeat(str))

