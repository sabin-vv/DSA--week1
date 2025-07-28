
let newStr = ""
function rev(str) {
    if (str === "")
        return ""

    return newStr += rev(str.slice(1)) + str[0]
}

let res = rev("javascript")
console.log(newStr)




let str = "good morning sabin"
let result = ""

let s = str.split(" ")
for (let i of s) {
    result = `${result}  ${reverse(i)}`
}
console.log(result)

function reverse(str) {
    let output = ""
    if (str === "")
        return ""
    return output += reverse(str.slice(1)) + str[0]
}