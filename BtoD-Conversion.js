//via built-In method
function toDecimal(num) {
    let digit = num
    let res = parseInt(digit, 2)
    return res;
}
console.log(toDecimal(1010))

function BtoDecimal(num) {
    let res = 0
    let digit = num
    let index = 0;
    while (digit > 0) {
        let lastDigit = digit % 10
        if (lastDigit == 1) {
            res = res + Math.pow(2, index)
            digit = Math.floor(digit / 10)
            index++
        } else {
            index++
            digit = Math.floor(digit / 10)
        }
    }
    return res
}

const decimal = BtoDecimal(1111)
console.log(decimal)