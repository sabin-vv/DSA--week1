
let count = 0
function vowelsCount(str) {
    if (str.length === 0)
        return 0

    let vowels = 'aeiouAEIOU'
    if (vowels.includes(str[0])) {
        return 1 + vowelsCount(str.slice(1))
    } else {
        return vowelsCount(str.slice(1))
    }
}
console.log(vowelsCount("great"))

function unique(str) {
    if (str === "")
        return ""

    if (str[0] === str[1]) {
        return unique(str.slice(1))
    } else {
        return str.charAt(0) + unique(str.slice(1))
    }
}
console.log(unique("aaabbcdd"))