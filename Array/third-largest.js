
let arr = [10, 20, 40, 15, 60, 50, 45, 63, 32]

let large = secLarge = thirdLarge = -Infinity

for (let i of arr) {
    if (i > large) {
        thirdLarge = secLarge
        secLarge = large
        large = i
    } else if (i > secLarge && i !== large) {
        thirdLarge = secLarge
        secLarge = i
    } else if (i > thirdLarge && i !== secLarge && i !== large) {
        thirdLarge = i
    }
}
console.log(thirdLarge);