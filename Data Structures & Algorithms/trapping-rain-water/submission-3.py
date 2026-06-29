class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        pref = [-1] * n
        pre = 0
        for i in range(n):
            pref[i] = pre
            pre = max(pre, height[i])

        suff = [-1] * n
        suf = 0
        for i in range(n-1, -1, -1):
            suff[i] = suf
            suf = max(suf, height[i])

        res = 0
        for i in range(n):
            water =  min(suff[i], pref[i]) - height[i]
            res += max(0, water)
        return res