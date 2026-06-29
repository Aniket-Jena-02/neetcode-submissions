class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1

        let res = -Infinity

        while (l < r) {
            let area = Math.min(heights[l], heights[r]) * (r - l)
            res = Math.max(res, area)
            
            if (heights[l] > heights[r]) {
                r--    
            } else {
                l++
            }
        }

        return res
    }
}
