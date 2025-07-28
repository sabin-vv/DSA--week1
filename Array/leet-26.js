
var removeDuplicates = function (nums) {
    let start = 0
    let next = start + 1
    let end = nums.length - 1

    while (next < end) {
        if(nums[start] !== nums[next]){
            next++
        }
    }
    console.log(nums)
};

let k= removeDuplicates([1,1,2])