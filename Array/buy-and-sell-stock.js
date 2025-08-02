
class Solution {

    maxProfit(prices) {
        let start = 0
        let end = start + 1
        let maxProfit = 0
        while (end < prices.length) {
            if (prices[start] < prices[end]) {
                let profit = prices[end] - prices[start]
                maxProfit = profit > maxProfit ? profit : maxProfit
            } else {
                start = end
            }
            end++
        }
        return maxProfit
    }
}

let s = new Solution()
console.log(s.maxProfit([7, 1, 5, 3, 6, 4]))