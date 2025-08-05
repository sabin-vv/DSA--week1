// let start = 0
// let next = 1
// let res = 0
// function fibunacii(n){
//     if(n === 0){
//         return 0
//     }
//     console.log("check")
//      res = start + next;
//     [start,next] = [next,(start+next)]
//         return fibunacii(n-1)
//     }

// console.log(fibunacii(5))


let arr = [1,2,3,4,5]

function sum(arr){
    if(arr.length === 0)
        return 0
    return arr[0] + sum(arr.slice(1))

}
console.log(sum(arr))