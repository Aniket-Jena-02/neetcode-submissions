class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0
        let j = 0
        let res = 0

        while(j < prices.length) {
            let profit = prices[j] - prices[i]
            if(profit > 0) {
                res = Math.max(res, profit)
            } else {
                i = j
            }
            j++
        }

        return res
    }
}
