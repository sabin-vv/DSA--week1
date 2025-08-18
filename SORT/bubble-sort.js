let arr = [2, -6, 8, 7, 4, 10, 6]

let flag
do {
    flag = false
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            flag = true
        }
    }
} while (flag)

console.log(arr)