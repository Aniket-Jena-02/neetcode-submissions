class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length
        let st = []
        let res = 0

        heights.push(0)

        for(let i = 0; i < n + 1; i++) {
            while(st.length > 0 && heights[i] < heights[st[st.length - 1]]) {
                const h = heights[st.pop()]
                const w = st.length > 0 ? i - st[st.length - 1] - 1 : i

                res = Math.max(res, h*w)
            } 
            st.push(i)
        }

        return res
    }
}
