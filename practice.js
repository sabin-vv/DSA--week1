
// let arr = [3, 4, 1, 6, 2, 1, 5]
// function bubbleSort(arr) {
//     let flag
//     do {
//         flag = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 flag = true
//             }
//         }
//     } while (flag)
//     return arr
// }

// console.log(bubbleSort(arr))

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = i
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         let temp = arr[min]
//         arr[min] = arr[i]
//         arr[i] = temp

//     }
//     return arr
// }

// console.log(selectionSort(arr))

// function insertionSort(arr) {

//     for (let i = 1; i < arr.length; i++) {
//         let j = i - 1
//         let elementToInsert = arr[i]
//         while (j >= 0 && arr[j] > elementToInsert) {
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = elementToInsert
//     }
//     return arr
// }
// console.log(insertionSort(arr))

// function quickSort(arr){
//     if(arr.length <2)
//         return arr

//     let pivot = arr[arr.length-1]
//     let leftArray = []
//     let rightArray = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             leftArray.push(arr[i])
//         }else{
//             rightArray.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
// }
// console.log(quickSort(arr))

// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)

//     return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
// }
// function merge(leftArray, rightArray) {
//     let tempArray = []
//     while (leftArray.length > 0 && rightArray.length >0) {
//         if (leftArray[0] <= rightArray[0]) {
//             tempArray.push(leftArray.shift())
//         } else {
//             tempArray.push(rightArray.shift())
//         }
//     }
//     return [...tempArray,...leftArray,...rightArray]
// }
// console.log(mergeSort(arr))


// //convert array into Hashtable
// class Node {
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }
// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//     }

//     hash(key) {
//         return key % this.table.length
//     }

//     set(key) {
//         const index = this.hash(key)
//         let node =  new Node(key)
//         let head = this.table[index]

//         if (!head) {
//             this.table[index] = node
//         } else {
//             let curr = head
//             while(curr.next){
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//     }
//     display() {
//         let res = ""
//         this.table.forEach((val,index) =>{
//             if (val) {
//                 res += `${index} : ${val}  `
//             }

//         })
//         console.log(res)
//     }
// }

// const t = new HashTable(6)
// arr.forEach(val => t.set(val))
// t.display()


class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
        this.height = 0
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    getHeight(node) {
        return node ? node.height : 0
    }
    getBalance(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0
    }
    rotateRight(y) {
        let x = y.left
        let t = x.right

        x.right = y
        y.left = t
    }

    insertValue(root, val) {

        if (root === null) {
            return new Node(val)
        }
        if (val < root.val) {
            root.left = this.insertValue(root.left, val)
        } else if (val > root.val) {
            root.right = this.insertValue(root.right, val)
        } else {
            return root
        }

        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right))

        let balance = this.getBalance(root)
        if (balance > 1 && val < root.left.val) {
            return this.rotateRight(root)
        }
        if (balance < -1 && val > root.right.val) {
            return this.rotateLeft(root)
        }
        if (balance > 1 && val > root.left.val) {
            root.left = this.rotateLeft(root.left)
            return this.rotateRight(root)
        }
        if (balance < -1 && val < root.right.val) {
            root.right = this.rotateRight(root.right)
            return this.rotateLeft(root)
        }
    }
    insert(val) {
        this.root = this.insertValue(this.root, val)
    }
    levelOrder() {
        let queue = []
        let result = []
        let node = this.root
        queue.push(node)
        while (queue.length) {
            let curr = queue.shift()
            result.push(curr.val)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right)
                queue.push(curr.right)
        }
        console.log(result)
    }

}
const bst = new BinarySearchTree()
bst.insert(20)
bst.insert(10)
bst.insert(30)
bst.insert(40)
bst.insert(15)
bst.insert(25)
bst.insert(8)
bst.levelOrder()
console.log(bst.height(bst.root))