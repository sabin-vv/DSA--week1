let arr = [-5, 2, 10, 4, 6]
let target = 20

function linearSearch(ar, target) {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === target)
            return i
    }
    return -1
}
console.log(linearSearch(arr, target))