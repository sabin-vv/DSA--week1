var searchInsert = function (nums, target) {
    let middle
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        middle = Math.floor((start + end) / 2)
        if (nums[middle] === target) {
            return middle
        }
        if (target < nums[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return middle
};

console.log(searchInsert([1, 3, 5, 6], 0))