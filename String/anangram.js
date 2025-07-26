

let str1 = "car"
let str2 = "arcn"

let obj = {}

if (str1.length !== str2.length)
    console.log("false")

for (let i of str1) {
    if (obj[i] === undefined) {
        obj[i] = 1
    } else {
        obj[i]++
    }
}

for (let i of str2) {
    if (obj[i] <= 0) {
        console.log("false");
    } else
        obj[i]--
}
console.log("true")

