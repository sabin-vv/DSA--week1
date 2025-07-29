
function bSearch(arr, start, end, x) {

    while (start < end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === x) {
            return mid
        }
        if (x > arr[mid]) {
            start = mid + 1
        }
        else
            end = mid - 1
    }
    return -1
}
console.log(bSearch([5, 10, 15, 20, 25, 30, 35], 0, 6, 30))


function bSearchRecurssive(arr, start, end, x) {
    if (start > end)
        return -1

    let mid = Math.floor((start + end) / 2)

    if (arr[mid] === x) {
        return mid
    }

    if (x > arr[mid]) {
        return bSearchRecurssive(arr, mid + 1, end, x)
    } else {
        return bSearchRecurssive(arr, start, mid - 1, x)
    }
}

console.log(bSearchRecurssive([10, 15, 20, 25, 28, 30], 0, 5, 28))