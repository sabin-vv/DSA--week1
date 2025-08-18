
let arr = [2, -6, 8, 7, 4, 10, 6]

function selectionSort(arr) {
    for(let i= 0;i<arr.length;i++){
        let min = i

    for(let j=i+1;j<arr.length;j++){
        if(arr[j] < arr[min]){
            min = j
        }
    }
    let temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp
}
return arr
}
console.log(selectionSort(arr))