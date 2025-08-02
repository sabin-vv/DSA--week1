// class Solution {

//     threeSum(nums) {
//         let start = 0
//         let middle = start + 1
//         let end = middle + 1
//         let arr = []
//         if (nums.length < 3)
//             return []
//         while (start < middle && end < nums.length) {
//             while (middle < end && end < nums.length) {
//                 console.log(end)
//                 if (nums[start] + nums[middle] + nums[end] === 0)
//                     arr.push([nums[start], nums[middle], nums[end]])
//                     end++
//             }
//             middle++
//             end = middle + 1

//         }
//         return arr
//     }
// }

// let solution = new Solution()
// console.log(solution.threeSum([-1, 0, 1, 2, -1, -4]))


class Solution {

    threeSum(nums) {
        nums.sort((a, b) => a - b)

        let arr = []
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1])
                continue
            let start = i + 1
            let end = nums.length - 1
            while (start < end) {

                let sum = nums[i] + nums[start] + nums[end]
                if (sum === 0) {
                    arr.push([nums[i], nums[start], nums[end]])
                    while (start < end && nums[start] === nums[start + 1])
                        start++
                    while (start < end && nums[end] === nums[end - 1])
                        end--
                    start++
                    end--
                } else if (sum > 0) {
                    end--
                } else {
                    start++
                }
            }
        }
        return arr
    }
}
let solution = new Solution()
console.log(solution.threeSum([0, 0, 0, 0]))