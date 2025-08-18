
let arr = [2, -6, 8, 7, 4, 10, 6]

function quickSort(arr) {
    if(arr.length <=1){
        return arr
    }

    let leftArray = []
    let rightArray = []

    let pivot = arr[arr.length - 1]
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] > pivot)
            rightArray.push(arr[i])
        else
            leftArray.push(arr[i])
    }

    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
}

console.log(quickSort(arr))