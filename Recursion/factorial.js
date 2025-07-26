function factorial(n) {
    let result = 1
    if (n <= 1) return 1
    for (i = n; i > 1; i--) {
        result = result * i
    }
    return result
}

console.log("Factorial",factorial(4))