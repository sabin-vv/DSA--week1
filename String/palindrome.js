
let str = "malayalam"

let start = 0
let end = str.length - 1

while (start < end) {
    if (str[start] === str[end]) {
        start++
        end--
    } else {
        break;
    }
}
console.log((start >= end) ? true : false)