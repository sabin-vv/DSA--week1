let arr = [2,5,4,7,6,5,3,2]

function evenSum(arr){
    if(arr.length === 0)
        return 0
    if(arr[0] % 2 ===0 )
        return arr[0] + evenSum(arr.slice(1))
    else
        return evenSum(arr.slice(1))
}

console.log(evenSum(arr))