
let arr = [3, 4, 1, 6, 2, 1, 5]
function bubbleSort(arr) {
    let flag
    do {
        flag = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                flag = true
            }
        }
    } while (flag)
    return arr
}

console.log(bubbleSort(arr))

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
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

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let elementToInsert = arr[i]
        while (j >= 0 && arr[j] > elementToInsert) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = elementToInsert
    }
    return arr
}
console.log(insertionSort(arr))

function quickSort(arr){
    if(arr.length <2)
        return arr

    let pivot = arr[arr.length-1]
    let leftArray = []
    let rightArray = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftArray.push(arr[i])
        }else{
            rightArray.push(arr[i])
        }
    }

    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
}
console.log(quickSort(arr))

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)

    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}
function merge(leftArray, rightArray) {
    let tempArray = []
    while (leftArray.length > 0 && rightArray.length >0) {
        if (leftArray[0] <= rightArray[0]) {
            tempArray.push(leftArray.shift())
        } else {
            tempArray.push(rightArray.shift())
        }
    }
    return [...tempArray,...leftArray,...rightArray]
}
console.log(mergeSort(arr))


//convert array into Hashtable
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}
class HashTable {
    constructor(size) {
        this.table = new Array(size)
    }

    hash(key) {
        return key % this.table.length
    }

    set(key) {
        const index = this.hash(key)
        let node =  new Node(key)
        let head = this.table[index]

        if (!head) {
            this.table[index] = node
        } else {
            let curr = head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
    }
    display() {
        let res = ""
        this.table.forEach((val,index) =>{
            if (val) {
                res += `${index} : ${val}  `
            }
                
        })
        console.log(res)
    }
}

const t = new HashTable(6)
arr.forEach(val => t.set(val))
t.display()