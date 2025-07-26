
function toBinary(num) {
    let binary = ""
    let digit = num

    while (digit != 0) {
        let res = digit & 1
        binary = res + binary
        digit = digit >> 1
    }
    return binary
}

const binary = toBinary(10)
console.log(binary)