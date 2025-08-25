class MinHeap {
    constructor() {
        this.heap = []
    }
    leftIndex(i) {
        return 2 * i + 1
    }
    rightIndex(i) {
        return 2 * i + 2
    }
    parentIndex(i) {
        return Math.floor((i - 1) / 2)
    }
    insert(val) {
        let arr = this.heap
        if (arr.length === 0) {
            this.heap.push(val)
        } else {
            this.heap.push(val)
            let i = arr.length - 1

            while (i > 0 && arr[this.parentIndex(i)] > arr[i]) {
                let p = this.parentIndex(i)
                [arr[p], arr[i]] = [arr[i], arr[p]]
                i = p
            }
        }
    }
    extractMin() {
        let min = this.heap[0]
        arr[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        heapify(0)
        return min
    }
    heapify(i) {
        let min = i
        let left = this.leftIndex(min)
        let right = this.rightIndex(min)
        if (left < this.heap.length && this.heap[left] < this.heap[min]) {
            min = left
        }
        if (right < this.heap.length && this.heap[right] < this.heap[min])
            min = right
        if (i !== min) {
            [this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]]
            this.heapify(min)
        }
    }

}