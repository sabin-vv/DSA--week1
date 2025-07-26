let arr = [-5, 2, 4, 6, 10, 13]
let target = 2

function binarySearch(arr, target) {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)

        if (arr[middle] === target) {
            return middle
        }
        if (target < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return -1
}

console.log(binarySearch(arr,target))