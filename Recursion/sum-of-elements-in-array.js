let arr = [2,4,3,5,6,7]

function arraySum(arr){
    if(arr.length  === 0){
        return 0
    }
    return arr[0] + arraySum(arr.slice(1))
}
console.log(arraySum(arr))