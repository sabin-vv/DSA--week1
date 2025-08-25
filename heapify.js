
function parentIndex(i) {
    return Math.floor((i - 1) / 2)
}
function leftIndex(i) {
    return 2 * i + 1
}
function rightIndex(i) {
    return 2 * i + 2
}

function heapify(i) {
    let max = i
    let arr = heap
    let left = leftIndex(i)
    let right = rightIndex(i)
    if (left < arr.length && arr[left] > arr[max]) {
        max = left
    }
    if (right < arr.length && arr[right] > arr[max]) {
        max = right
    }
    if (i !== max) {
        [arr[i], arr[max]] = [arr[max], arr[i]]
        heapify(max)
    }
}