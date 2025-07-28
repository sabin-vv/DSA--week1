

let arr = [1, 2, 3, [4, 5, [6, 7, 8]], 9, 10]
let flatArray = []

function flat(arr) {

    for (let i of arr) {

        if (Array.isArray(i)) {
            flat(i)
        }
        else
            flatArray.push(i)
    }
}
flat(arr)
console.log(flatArray)