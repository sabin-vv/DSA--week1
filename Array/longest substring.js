// class Solution {
//     /**
//      * @param {string} s
//      * @return {number}
//      */
//     lengthOfLongestSubstring(s) {
//         let charSet = new Set()
//         let str = ""
//         let i = 0
//         let end = 0
//         while (i < s.length) {
//             if (i > 0 || s[i] === s[i - 1]){    
//                 i++
//                 continue
//             }

//             while (end <= s.length) {
//                 if (charSet.has(s[end]) || end === s.length-1) {
//                     let word = s.slice(i, end)
//                     charSet.clear()
//                     console.log(word)
//                     str = word.length > str.length ? word : str

//                     i = end
//                 } else {
//                     charSet.add(s[end])
//                 }
//                 end++
//             }
//         }
//         return str.length
//     }
// }
// let res = new Solution()
// console.log(res.lengthOfLongestSubstring("bbbbb"))



class Solution {

    lengthOfLongestSubstring(s) {
        let charSet = new Set()
        for (let i = 0; i < s.length; i++) {
            for (j = i; j < s.length; j++) {
                if (charSet.has(s[j])) {
                    let word = s.slice(i,j)
                } else {

                }
            }
        }
    }
}
let res = new Solution()
console.log(res.lengthOfLongestSubstring("bbbbb"))