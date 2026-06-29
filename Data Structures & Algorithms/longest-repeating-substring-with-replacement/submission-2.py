class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        i, j = 0, 0
        hm = {}
        res = 0

        while j < len(s):
            if s[j] in hm:
                hm[s[j]] += 1
            else:
                hm[s[j]] = 1
            
            maxF = 0
            for v in hm.values():
                maxF = max(maxF, v)
            
            winL = j - i + 1
            while winL - maxF > k:
                hm[s[i]] -= 1
                i += 1
                for v in hm.values():
                    maxF = max(maxF, v)
                winL = j - i + 1
            
            res = max(res, winL)
            j += 1
        
        return res
