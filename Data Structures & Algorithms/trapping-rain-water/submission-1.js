class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length
        let maxL = 0
        let maxLArr = new Array(height.length)

        for (let i = 0; i < n; i++) {
            maxLArr[i] = maxL
            maxL = Math.max(maxL, height[i])
        }

        let maxR = 0
        let maxRArr = new Array(height.length)

        for (let i = n-1; i >= 0; i--) {
            maxRArr[i] = maxR
            maxR = Math.max(maxR, height[i])
        }

        let res = 0
        console.log({
            maxLArr, maxRArr
        })

        for (let i = 0; i < n; i++) {
            let water = Math.min(maxLArr[i], maxRArr[i]) - height[i]

            if (water < 0) {
                water = 0
            }
            res += water
        }

        return res
    }
}
