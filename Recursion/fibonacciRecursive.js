function fib(n) {
    if (n < 2)
        return n
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(6))
//-------------------------------------------------

function fibo(n) {
    if (n < 2)
        return n
    return fibo(n - 1) + fibo(n - 2)
}
for (let i = 0; i < 10; i++) {
    console.log(fibo(i))
}
//-----------------------------------------------------

function fibonacii(n, a = 0, b = 1, count=0) {
    if (count === n) {
        return
    }

    console.log(a)
    fibonacii(n, b, a + b, count+1)

}
fibonacii(6)