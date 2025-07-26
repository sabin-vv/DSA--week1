function fibonacii(n) {
    let arr = []

    arr[0] = 0
    arr[1] = 1
    for (i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr
}

console.log(fibonacii(9))