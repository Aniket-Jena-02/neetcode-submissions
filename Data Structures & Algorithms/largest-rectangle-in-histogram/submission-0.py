class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        n = len(heights)
        st = []
        res = 0
        for i in range(n + 1):
            current = heights[i] if i < n else 0
            while st and current < heights[st[-1]]:
                h = heights[st.pop()]
                w = i - st[-1] - 1 if st else i
                res = max(res, h * w)
            st.append(i)
        return res