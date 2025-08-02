

let str1 = "car"
let str2 = "arb"

let obj = {}

if (str1.length !== str2.length)
    console.log(false)
else {
    for (let i of str1) {
        if (obj[i] === undefined) {
            obj[i] = 1
        } else {
            obj[i]++
        }
    }

    for (let i of str2) {
        if (obj[i] <= 0||obj[i] === undefined) {
            console.log(false);
            return
        } else
            obj[i]--
    }
    console.log(true)
}

