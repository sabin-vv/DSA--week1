let arr = [7,4,8,2,5,9,6,1,3,0]

function insertionSort(arr){

    for (let i=1;i<arr.length;i++){
        let j= i-1
        let temp = arr[i]
        do {
            if(arr[j] > temp){
                arr[j+1] = arr[j]
            }else{
                arr[j+1] = temp
                break
            }
            j--
        } while (j>=0);
        if(j<0){
            arr[j+1] = temp
        }
    }
}

insertionSort(arr)
console.log(arr)
