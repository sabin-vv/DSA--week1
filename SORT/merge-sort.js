let arr = [2, -6, 8, 7, 4, 10,7, 6]

function mergeSort(arr) {
    if (arr.length <= 1)
        return arr

    let leftArray = []
    let rightArray = []
    let mid = Math.floor(arr.length / 2)

    leftArray = arr.slice(0, mid)
    rightArray = arr.slice(mid)
    return sort(mergeSort(leftArray), mergeSort(rightArray))
}

function sort(leftArray, rightArray) {
    let output = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            output.push(leftArray.shift())
        } else {
            output.push(rightArray.shift())
        }
    }
    return [...output,...leftArray,...rightArray]
}
console.log(mergeSort(arr))