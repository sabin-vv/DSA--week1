function sum(n) {
    if (n < 10)
        return n

    return n % 10 + Math.floor(sum(n / 10))

}
console.log(sum(1245))